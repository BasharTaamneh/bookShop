import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Formodalinfo from './component/Formodalinfo'
import Bestbooklsist from './component/bestbooklsist'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      coverbook: [],
      show: false,
      
    }

  }
  //


  ///////////////////////
  getbookinformation = async (e) => {
    e.preventDefault();
    // let bookname = e.target.bookname.value;
    // let bookdiscr = e.target.bookdiscr.value;
    // let bookstatus = e.target.bookstatus.value;


    let coverBurl = `https://coverbookserver.herokuapp.com/coverBook?q=${e.target.bookname.value}`
    let coverdata = await axios.get(coverBurl);
    await this.setState({
      coverbook: coverdata.data,
    });
    let requestdata={
      email:this.props.auth0.user.email,
      bookname:e.target.bookname.value,
      bookdiscr:e.target.bookdiscr.value,
      bookstatus:e.target.bookstatus.value,
      author_name:this.state.coverbook.author_name,
      Book_src:this.state.coverbook.Book_src,
    }

    await axios.get(`http://localhost:3001/Addbook?`,{params:requestdata});


  ///////////////////////
  // componentDidMount = async () => {
    let booksURL = `http://localhost:3001/books?`;
    let data = await axios.get(booksURL);
    await this.setState({
      books: data.data,
    });
  }
  handleshow = () => {
    this.setState({
      show: !this.state.show,
      coverbook:[],
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
        <div><Bestbooklsist data={this.state.books} /></div>
        <Formodalinfo getbookinformation={this.getbookinformation} handleshow={this.handleshow} show={this.state.show} />
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
