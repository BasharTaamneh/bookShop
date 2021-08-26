import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Formodalinfo from './component/Formodalinfo'
import Bestbooklsist from './component/bestbooklslist'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from '@auth0/auth0-react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      coverbook: [],
      show: false,
      showbooks: false,
    }

  }
  //


  ///////////////////////
  getbookinformation = async (e) => {
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

    await axios.post(`http://localhost:3001/Addbook?`, { params: requestdata });

  }


  ///////////////////////


  getbooks = async (e) => {
    e.preventDefault();
    let useremail=e.target.uemail.value
    let data = await axios.get(`http://localhost:3001/books?uemail=${useremail}`);

    this.setState({
      books: data.data,
      showbooks: true,
    });
    console.log('email is: ', useremail)

    console.log('booksData is: ', this.state.books)
  }



  //////////////////////////////////
  handleshow = () => {
    this.setState({
      show: !this.state.show,
      coverbook: [],
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
        {/* //////////////////// */}
        <Form onSubmit={this.getbooks}>
        <Col sm="6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="uemail" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="info" type="submit">
            GET YOUR BOOKS
          </Button>
         </Col>
        </Form>
        {/* //////////////////// */}

        <div><Bestbooklsist showbooks={this.state.showbooks} data={this.state.books} /></div>
        <Formodalinfo getbookinformation={this.getbookinformation} handleshow={this.handleshow} show={this.state.show} />
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);