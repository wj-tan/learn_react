import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MyAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
        
        <span>
            <h2>My Appointment(s)</h2>
            <br></br>
            <div id = 'center'>
                    
                        <br></br>
                        <br></br>
                        <br></br>
                        
                            <Table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {(this.props.appointments) && this.props.appointments.map((appointment,index)=>{
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{appointment.branch}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td><Button>Manage</Button></td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                                
                            </Table> 
            </div>
        </span> );
    }
}
 
export default MyAppointment;