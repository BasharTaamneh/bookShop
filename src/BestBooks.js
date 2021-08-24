import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Bestbooklsist from './component/bestbooklsist'
class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        books: [],
    }
}
componentDidMount = async () => {

    let URL = `http://localhost:3001/books?`;
    let data = await axios.get(URL);
   await this.setState({
        books: data.data,
    })
}


  render() {
    console.log('booksData is: ',this.state.books)
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <div><Bestbooklsist data={this.state.books}/></div>
      </Jumbotron>
      
    )
  }
}

export default MyFavoriteBooks;
