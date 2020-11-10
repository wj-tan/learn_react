import React, { Component } from 'react';
import { Form, Button, Col, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
class NewAppointment3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id ='newappointment3'>
                <h1>New Appointment</h1>
                <br></br>
                <Form>
                    <Form.Group controlId="formBranch">
                        <Form.Label>Branch</Form.Label>
                        <Form.Control value="Home Team Academy" disabled></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="formPurpose">
                        <Form.Label>Purpose of Visit</Form.Label>
                        <Form.Control as="select">
                            <option>Consultation</option>
                            <option>FFI</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="formDate">
                        <Form.Label>Date</Form.Label><br></br>
                        <input type="date"></input>
                    </Form.Group>
                    <Form.Group controlId="formTime">
                        <Form.Label>Time</Form.Label><br></br>
                        <Form.Row>
                            <Col>
                            <Form.Check
                                type="checkbox"
                                label="10AM"
                            />
                            <Form.Check
                                type="checkbox"
                                label="11AM"
                            />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Check
                                inline
                                type="radio"
                                label="1PM"
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="1PM"
                            />
                            </Col>
                        </Form.Row>

                    </Form.Group>
                </Form>
            </div>
        );
    }
}
 
export default NewAppointment3;