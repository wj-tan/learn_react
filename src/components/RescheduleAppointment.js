import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

class RescheduleAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tempDate : this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.date),
            tempTime: this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.time),
            selected : this.props.selectedAppointment
         }
    }

    handleclick() {
        const appointment = {
            //Fields
            branch : this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.branch),
            purpose : this.props.appointments.filter(appointment => (appointment.id == this.props.selectedAppointment)).map(appointment => appointment.purpose),
            date : this.state.tempDate,
            time : this.state.tempTime
        }
        this.props.handleEditCancel(this.state.selected)
        this.props.handleEditAdd(appointment)
    }

    render() { 
        return ( 
            <span>
            <br></br>
                <h1>Reschedule Appointment</h1>
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
                            <Form.Label>Date</Form.Label><br></br>
                            <input type="date" value={this.state.tempDate} onChange={(e)=>this.setState({tempDate : e.target.value})}></input>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time Slot</Form.Label>
                            <Form.Control as="select" value={this.state.tempTime} onChange={(e)=>this.setState({tempTime : e.target.value})}>
                                <option value='10AM'>10AM</option>
                                <option value='11AM'>11AM</option>
                                <option value='2PM'>2PM</option>
                                <option value='3PM'>3PM</option>
                                <option value='4PM'>4PM</option>
                                <option value='5PM'>5PM</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form>
                
                <div id="branch">
                    <Row>
                        <Col>
                        <NavLink to="/MyAppointment"><Button size="lg" onClick={() => this.handleclick()}>Reschedule</Button></NavLink>
                        </Col>
                    </Row>
                </div>

            </span>
        );
    }
}
 
export default RescheduleAppointment;