/* eslint-disable no-lone-blocks */
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Formodalinfo from './component/Formodalinfo'
import Bestbooklsist from './component/bestbooklslist'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Updateboot from './component/updatbook'
// import swal from 'sweetalert';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      coverbook: [],
      show: false,
      showbooks: false,
      showupdatemodal: false,
      theaddedata: [],
      updateBook: {},
    }

  }



  getaddboks = async (e) => {
    e.preventDefault();
    let coverBurl = `https://coverbookserver.herokuapp.com/coverBook?q=${e.target.bookname.value}`
    let coverdata = await axios.get(coverBurl);
    await this.setState({
      coverbook: coverdata.data,
    });

    let requestdata = {
      email: this.props.auth0.user.email,
      bookname: e.target.bookname.value,
      bookdiscr: e.target.bookdiscr.value,
      bookstatus: e.target.bookstatus.value,
      author_name: this.state.coverbook.author_name,
      Book_src: this.state.coverbook.Book_src,
    }
    await this.setState({
      theaddedata: requestdata
    })

    let nwdata = await axios.post(`http://localhost:3001/Addbook?`, this.state.theaddedata);

    await this.setState({
      books: nwdata.data,
    })
  }

  ///////////////////////
  componentDidMount = async () => {
    let useremail = this.props.auth0.user.email
    let data = await axios.get(`http://localhost:3001/books?uemail=${useremail}`);

    await this.setState({
      books: data.data,
      showbooks: true,
    });
    console.log('email is: ', useremail)

    console.log('booksData is: ', this.state.books)
  }
  //////////////////////////
  /////////////////////////
  deleteBook = async (BookID) => {
    let nwdata_afterdelete = await axios.delete(`http://localhost:3001/deletbook/${BookID}?uemail=${this.props.auth0.user.email}`);

    await this.setState({
      books: nwdata_afterdelete.data,
    })

  }
  ////////////////////////
  updateBook = (BookID) => {
    console.log('its work', BookID)
    let lastbookinfo = this.state.books.find(book => {
      return (book._id === BookID);
    })
    console.log({ lastbookinfo })
    this.setState({
      updateBook: lastbookinfo,
      showupdatemodal: true,
    })
    // console.log('its work data', this.setState.updateBook)
  }
  ////////////////////////
  getupdatebook = async (e) => {
    e.preventDefault();
    let updatedata = {
      bookname: e.target.updatebookname.value,
      bookdiscr: e.target.updatebookdiscr.value,
      bookstatus: e.target.updatebookstatus.value,
      author_name: this.state.updateBook.author_name,
      Book_src: this.state.updateBook.Book_src,
      uemail: this.props.auth0.user.email
    }
     let  Book_id = this.state.updateBook._id;
     let  newbookdata = await axios.put(`http://localhost:3001/Updatebook/${Book_id}`, { params: updatedata });
    this.setState({
      book: newbookdata.data,
    })
  }
  ////////////////////////
  handleshow = () => {
    this.setState({
      show: !this.state.show,
      coverbook: [],
    })
  }
  ////////////////////////
  handleshowupdat = () => {
    this.setState({
      showupdatemodal: !this.state.showupdatemodal
    })
  }

  render() {

    console.log('booksData is: ', this.state.books)
    console.log('coverbook is: ', this.state.coverbook)
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button onClick={this.handleshow} variant="outline-dark">Add book to your favourite</Button>
        </Jumbotron>
        <div><Bestbooklsist updateBook={this.updateBook} handleshowupdat={this.handleshowupdat} deleteBook={this.deleteBook} showbooks={this.state.showbooks} data={this.state.books} /></div>
        <Formodalinfo getaddboks={this.getaddboks} show={this.state.show} handleshow={this.handleshow} />
        <Updateboot getupdatebook={this.getupdatebook} handleshowupdat={this.handleshowupdat} updateBook={this.state.updateBook} showupdatemodal={this.state.showupdatemodal} />
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);


{/* //////////////////// */ }
{/* <Form onSubmit={this.getbooks}>
        <Col sm="12">
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required name="uemail" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="info" type="submit">
            GET YOUR BOOKS
          </Button>
         </Col>
        </Form> */}
{/* //////////////////// */ }