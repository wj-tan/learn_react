import React, { Component } from 'react';
import { Form, Button, Col, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<span>
            <h2>My Profile</h2>
            <br></br>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value="Tan Wei Jian" disabled/>
                </Form.Group>

                <Form.Group controlId="formNRIC">
                    <Form.Label>NRIC</Form.Label>
                    <Form.Control value="SXXXX928C" disabled/>
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control value="91248543"/>
                </Form.Group>

                <Form.Group controlId="formUnit">
                    <Form.Label>Unit</Form.Label>
                    <Form.Control value="EMT" disabled/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </span>);
    }
}

export default MyProfile;