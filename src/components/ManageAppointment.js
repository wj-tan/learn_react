import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

class ManageAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span>
            <br></br>
                <h2>Manage Appointment</h2>
                <br></br>
    
                <Form>
                    <Col>
                        <Form.Group controlId="formBranch">
                            <Form.Label>Branch : </Form.Label>
                            <Form.Control value={this.props.appointments[this.props.selectedAppointment].branch}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formPurpose">
                            <Form.Label>Purpose : </Form.Label>
                            <Form.Control value={this.props.appointments[this.props.selectedAppointment].purpose}disabled></Form.Control>
                        </Form.Group>
                    </Col>
        
                    <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date : </Form.Label>
                            <Form.Control value={this.props.appointments[this.props.selectedAppointment].date}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time : </Form.Label>
                            <Form.Control value={this.props.appointments[this.props.selectedAppointment].time}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                </Form>
                
                <div id="branch">
                    <Row>
                        <Col>
                            <Button size="lg" >Cancel</Button>
                        </Col>
                        <Col>
                            <Button size="lg" >Reschedule</Button>
                        </Col>
                    </Row>
                </div>

            </span>
        );
    }
}
 
export default ManageAppointment;