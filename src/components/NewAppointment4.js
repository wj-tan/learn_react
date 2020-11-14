import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

class NewAppointment4 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleclick(){
        this.props.handleAddAppointment(this.props.tempAppointment)
    }
    render() { 
        return ( 
            <span>
            <br></br>
                <h2>Appointment Confirmation</h2>
                <br></br>
                <Form>
                    <Col>
                        <Form.Group controlId="formBranch">
                            <Form.Label>Branch : </Form.Label>
                            <Form.Control value={this.props.tempAppointment.branch}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formPurpose">
                            <Form.Label>Purpose : </Form.Label>
                            <Form.Control value={this.props.tempAppointment.purpose}disabled></Form.Control>
                        </Form.Group>
                    </Col>
        
                    <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date : </Form.Label>
                            <Form.Control value={this.props.tempAppointment.date}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time : </Form.Label>
                            <Form.Control value={this.props.tempAppointment.time}disabled></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <NavLink to="/Home" onClick={() => this.handleclick()}><Button variant="primary" type="submit" block>Confirm Booking</Button></NavLink>
                    </Col>

                </Form>
            </span>
        );
    }
}
 
export default NewAppointment4;