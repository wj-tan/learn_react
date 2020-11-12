import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class NewAppointment3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span>
            <br></br>
                <h2>New Appointment</h2>
                <br></br>
                <Form>
                    <Col>
                        <Form.Group controlId="formBranch">
                            <Form.Label>Branch : </Form.Label>
                            <Form.Control value="Home Team Academy" disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formPurpose">
                            <Form.Label>Purpose of Visit</Form.Label>
                            <Form.Control as="select"></Form.Control>
                            
                        </Form.Group>
                    </Col>
        
                    <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label><br></br>
                            <input type="date"></input>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time</Form.Label><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="10AM"
                                    />
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="11AM"
                                    />
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="2PM"
                                    />
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="3PM"
                                    />
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="4PM"
                                    />
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        label="5PM"
                                    />
                                </Col>
                            </Form.Row>

                        </Form.Group>
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit" block>
                        Conform Booking
                    </Button>
                </Col>

                </Form>
            </span>
        );
    }
}
 
export default NewAppointment3;