import React, { Component, useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';

function Login (props) {
    var history = useHistory();
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [message, setMessage] = useState('');
    console.log(props.user.username)
    const CheckLogin = () =>{
        if ((props.user.username == username) && (props.user.password == password)){
            history.push('/Home')
        }

        else if ((username == "") || (password == "")){
            setMessage("Username or password is not filled")
        }

        else if ((props.user.username != username) || (props.user.password != password)){
            setMessage("Username or password is incorrect")
        }
    }

    return (<span>
        <br></br>
        <h2>Login</h2>
        <Form>
            <Col>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value ={username} onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Group>
            </Col>

            <Col>
                <Form.Group controlId="formNRIC">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
            </Col>
            <Col>
                <Form.Label>{message}</Form.Label>
            </Col>
            <Col>
                <Button variant="primary" type="button" block onClick={() => CheckLogin()}>
                    Login
                </Button>
            </Col>
        </Form>
    </span>);
}
export default Login;