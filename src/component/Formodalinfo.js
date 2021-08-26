import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';



class Fprmodal extends React.Component {

    render() {
        console.log('form prps',this.props)
        return (
            <>
                <div className="formodal">
                    <Modal show={this.props.show}>
                        <Modal.Header closeButton onHide={this.props.handleshow}>
                            <Modal.Title>Add Book To Your favourite</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        {/* /////////////////////////////////////////// */}
                            <br />
                            <Form onSubmit={this.props.getaddboks}>
                                <Form.Group as={Row} className="FormGroup" >

                                    <Col sm="12">
                                        <Form.Control required name="bookname" type="text" placeholder="Book Name in english here..."  />
                                    </Col>
                                    <hr /><br />

                                    <Col sm="12">
                                        <Form.Control required name="bookdiscr" type="text" placeholder="Book Discription here..."  />
                                    </Col>
                                    <hr /><br />

                                    <Col sm="12">
                                        <Form.Control required name="bookstatus" type="text" placeholder="Reading Status here..."  />
                                    </Col>
                                    <hr /><br />

                                </Form.Group>
                                <Button onClick={this.props.handleshow} type="submit" variant="success">Save changes</Button> {'   it takes moments ^_^'}
                            </Form>
                        {/* ////////////////////////////////////////////////// */}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.props.handleshow} variant="secondary">Close</Button>

                        </Modal.Footer>
                    </Modal>
                    { }

                </div >
            </>
        )
    }
}

export default Fprmodal;