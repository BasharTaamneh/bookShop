import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';


class Updateboot extends React.Component {

    render() {
        console.log('form prps', this.props)
        return (
            <>
                <div className="bookupdate">
                    <Modal show={this.props.showupdatemodal}>
                        <Modal.Header closeButton onHide={this.props.handleshowupdat}>
                            <Modal.Title>Update Your Book</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {/* /////////////////////////////////////////// */}
                            <br />
                            <Form  onSubmit={this.props.getupdatebook} >
                                <Form.Group as={Row} className="FormGroup" >

                                    <Col sm="12">
                                        <Form.Control required name="updatebookname" type="text" defaultValue= {this.props.updateBook.bookname} />
                                    </Col>
                                    <hr /><br />

                                    <Col sm="12">
                                        <Form.Control required name="updatebookdiscr" type="text" defaultValue= {this.props.updateBook.bookdiscr}/>
                                    </Col>
                                    <hr /><br />

                                    <Col sm="12">
                                        <Form.Control required name="updatebookstatus" type="text" defaultValue={this.props.updateBook.bookstatus} />
                                    </Col>
                                    <hr /><br />

                                </Form.Group>
                                <Button onClick={this.props.handleshowupdat} type="submit" variant="success">Save changes</Button> {'   let`s update your Book ^_^'}
                            </Form>
                            {/* ////////////////////////////////////////////////// */}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.props.handleshowupdat} variant="secondary">Close</Button>

                        </Modal.Footer>
                    </Modal>
                </div >
            </>
        )
    }
}

export default Updateboot;