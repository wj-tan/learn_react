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
            <Form>
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value="Handsome Boy" disabled/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formNRIC">
                        <Form.Label>NRIC</Form.Label>
                        <Form.Control value="SXXXX928C" disabled/>
                    </Form.Group>
                </Col>

                <Form.Row>
                    <Col>
                        <Form.Group as={Col} controlId="formCamp">
                            <Form.Label>Camp</Form.Label>
                            <Form.Control value="SCDF HQ" disabled/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formVocation">
                            <Form.Label>Vocation</Form.Label>
                            <Form.Control value="EMT" disabled/>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Col>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control defaultValue="1234 Main St" />
                    </Form.Group>
                </Col>

                <Form.Row>
                    <Col>
                        <Form.Group as={Col} controlId="formPcode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control maxlength="6" defaultValue="123456" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formUnitNo">
                            <Form.Label>Unit-No</Form.Label>
                            <Form.Control maxlength="7" defaultValue="05-716" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                
                <Col>
                    <Form.Group controlId="formContact">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control maxlength="8" defaultValue="91248543"/>
                    </Form.Group>
                </Col>
          
                <Col>
                    <Button variant="primary" type="submit" block>
                        Save
                    </Button>
                </Col>
            </Form>
        </span>);
    }
}

export default MyProfile;