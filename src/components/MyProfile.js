import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<span>
            <br></br>
            <h2>My Profile</h2>
            <br></br>
            <Form>
                <Col md-6>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="Eye Drop King Tan Wei Jian" disabled/>
                    </Form.Group>
                </Col>

                <Form.Row>
                    <Col md-3>
                        <Form.Group as={Col} controlId="formNRIC">
                            <Form.Label>NRIC</Form.Label>
                            <Form.Control value="SXXXX928C" disabled/>
                        </Form.Group>
                    </Col>
                    <Col md-3>
                        <Form.Group as={Col} controlId="formUnit">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control value="EMT" disabled/>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Col md-6>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control defaultValue="1234 Main St" />
                    </Form.Group>
                </Col>
                
                <Col md-6>
                    <Form.Group controlId="formContact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control defaultValue="91248543"/>
                    </Form.Group>
                </Col>
          
                <Col md-6>
                    <Button variant="primary" size="lg" type="submit" block>
                        Save
                    </Button>
                </Col>
            </Form>
        </span>);
    }
}

export default MyProfile;