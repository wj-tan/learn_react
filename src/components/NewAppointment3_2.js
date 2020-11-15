import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class NewAppointment3_2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : '',
            branch : 'Civil Defence Academy',
            purpose : 'Consultation',
            date : '',
            time : '10:00'
        }
    }
    handleclick() {
        const appointment = {
            //Fields
            branch : this.state.branch,
            purpose : this.state.purpose,
            date : this.state.date,
            time : this.state.time
        }
        console.log(appointment)
        this.props.handleAppointment(appointment)
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
                            <Form.Control value = {this.state.branch} disabled></Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formPurpose">
                            <Form.Label>Purpose of Visit</Form.Label>
                            <Form.Control as="select" value = {this.state.purpose}  onChange={(e)=>this.setState({purpose : e.target.value})}>
                                <option value='Consultation'>Consultation</option>
                                <option value='FFI'>FFI</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
        
                    <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label><br></br>
                            <input type="date" value= {this.state.date} onChange={(e)=>this.setState({date : e.target.value})}></input>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time Slot</Form.Label>
                            <Form.Control as="select" value = {this.state.time}  onChange={(e)=>this.setState({time : e.target.value})}>
                                <option value='10:00'>10AM</option>
                                <option value='11:00'>11AM</option>
                                <option value='14:00'>2PM</option>
                                <option value='15:00'>3PM</option>
                                <option value='16:00'>4PM</option>
                                <option value='17:00'>5PM</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                    <NavLink to="/NewAppointment4" onClick={() => this.handleclick()}><Button variant="primary" type="submit" block>Next</Button></NavLink>
                </Col>

                </Form>
            </span>
        );
    }
}
 
export default NewAppointment3_2;