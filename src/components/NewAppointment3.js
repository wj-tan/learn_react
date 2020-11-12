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
                            <Form.Label>Branch</Form.Label>
                            <Form.Control value="Home Team Academy" disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formPurpose">
                            <Form.Label>Purpose of Visit</Form.Label>
                            <Form.Control as="select">
                                <option>Consultation</option>
                                <option>FFI</option>
                            </Form.Control>
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
                                    <input type="radio" name="group1" id="item1" value="radiotime"></input>
                                    <label id="radiotime" for="item1">10AM</label>
                        
                                    <input type="radio" name="group1" id="item2" value="11AM"></input>
                                    <label id="radiotime" for="item2">11AM</label>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <input type="radio" name="group1" id="item3" value="2PM"></input>
                                    <label id="radiotime" for="item3">2PM</label>
                        
                                    <input type="radio" name="group1" id="item4" value="3PM"></input>
                                    <label id="radiotime" for="item4">3PM</label>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <input type="radio" name="group1" id="item5" value="2PM"></input>
                                    <label id="radiotime" for="item5">4PM</label>
                                    
                                    <input type="radio" name="group1" id="item6" value="3PM"></input>
                                    <label id="radiotime" for="item6">5PM</label>
                                </Col>
                            </Form.Row>

                        </Form.Group>
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit" block>
                        Next
                    </Button>
                </Col>

                </Form>
            </span>
        );
    }
}
 
export default NewAppointment3;