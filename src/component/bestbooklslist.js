import React from 'react';
import Card from 'react-bootstrap/Card'
import './bestbooklsist.css'
import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class best_books extends React.Component {
    render() {
        console.log('list props =>', this.props)
        return (
            <>
                {this.props.showbooks &&
                    <div className="booklist">
                        {this.props.data.map((item, idx) => {
                            return (
                                <Card key={idx} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.Book_src} />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Book Name:  {item.bookname} </ListGroup.Item>
                                        <ListGroup.Item>Book Discrimination:  {item.bookdiscr} </ListGroup.Item>
                                        <ListGroup.Item>Reading Statuse:  {item.bookstatus} </ListGroup.Item>
                                        <ListGroup.Item>Author_name:  {item.author_name} </ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Button onClick={() =>{this.props.updateBook(item._id)} }variant="primary">Update</Button>
                                        <Button onClick={() => this.props.deleteBook(item._id)} variant="danger">Delete</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>}
            </>
        )
    }
}

export default best_books;