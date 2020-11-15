import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

class RescheduleAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
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
                            <Form.Control value={this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.branch)}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formPurpose">
                            <Form.Label>Purpose : </Form.Label>
                            <Form.Control value={this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.purpose)}disabled></Form.Control>
                        </Form.Group>
                    </Col>
        
                    <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date : </Form.Label>
                            <Form.Control value={this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.date)}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time : </Form.Label>
                            <Form.Control value={this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.time)}disabled></Form.Control>
                        </Form.Group>
                    </Col>
                </Form>
                
                <div id="branch">
                    <Row>
                        <Col>
                            <NavLink to="/MyAppointment"><Button size="lg" onClick={() => this.props.handleCancelAppointment(this.props.selectedAppointment)}>Cancel</Button></NavLink>
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
 
export default RescheduleAppointment;