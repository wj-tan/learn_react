import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            address : this.props.profile.address,
            postal : this.props.profile.postal,
            unit : this.props.profile.unit,
            contact :  this.props.profile.contact
        }
    }
    render() {
        return (<span>
            <br></br>
            <h1>My Profile</h1>
            <Form>
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={this.props.profile.name} disabled/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formNRIC">
                        <Form.Label>NRIC</Form.Label>
                        <Form.Control value={this.props.profile.nric} disabled/>
                    </Form.Group>
                </Col>

                <Form.Row>
                    <Col>
                        <Form.Group as={Col} controlId="formCamp">
                            <Form.Label>Camp</Form.Label>
                            <Form.Control value={this.props.profile.camp} disabled/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formVocation">
                            <Form.Label>Vocation</Form.Label>
                            <Form.Control value={this.props.profile.vocation} disabled/>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Col>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value ={this.state.address} onChange={(e)=>this.setState({address : e.target.value})} />
                    </Form.Group>
                </Col>

                <Form.Row>
                    <Col>
                        <Form.Group as={Col} controlId="formPcode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control maxlength="6" value ={this.state.postal} onChange={(e)=>this.setState({postal : e.target.value})} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formUnitNo">
                            <Form.Label>Unit-No</Form.Label>
                            <Form.Control maxlength="7" value ={this.state.unit} onChange={(e)=>this.setState({unit : e.target.value})} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                
                <Col>
                    <Form.Group controlId="formContact">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control maxlength="8" value ={this.state.contact} onChange={(e)=>this.setState({contact : e.target.value})}/>
                    </Form.Group>
                </Col>

                <Col>
                    <NavLink to="/Home" onClick={() => this.props.handleclick(this.state.address,this.state.postal,this.state.unit,this.state.contact)}><Button variant="primary" type="submit" block>Save</Button></NavLink>
                </Col>
            </Form>
        </span>);
    }
}

export default MyProfile;