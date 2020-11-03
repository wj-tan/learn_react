import React, { Component } from 'react';
import { Form, Button, Col, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<span>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Tan Wei Jian" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formNRIC">
                        <Form.Label>NRIC</Form.Label>
                        <Form.Control placeholder="SXXXX928C" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formContact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control placeholder="91248543"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formUnit">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control placeholder="EMT" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </span>);
    }
}

export default MyProfile;