import React from 'react';
import Card from 'react-bootstrap/Card'
import './bestbooklsist.css'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
class best_books extends React.Component {

    render() {
        console.log(this.props)
        return (
            <>
                <div className="booklist">
                    {this.props.data.map((item) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.Booksrc} />
                            <Card.Body>
                              <Card.Title>{item.Title}</Card.Title>
                              <Card.Text>
                              {item.status}
                              </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem>{item.email}</ListGroupItem>
                            </ListGroup>
                            <Button variant="primary">Go somewhere</Button>
                          </Card>
                        )

                    })}
                </div>
            </>
        )
    }
}

export default best_books;
