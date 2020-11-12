import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }
    render() { 
        return (<span>
            <br></br>
            <h2>Login</h2>
            <Form>
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formNRIC">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" href="Home" type="submit" block>
                        Login
                    </Button>
                </Col>
            </Form>
        </span>);
    }
}
 
export default Login;