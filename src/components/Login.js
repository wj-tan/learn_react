import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : this.props.user.username,
            password : this.props.user.password,
            input_username: "",
            input_password : "",
            message : ""
         }
    }

    

    render() { 
        return (<span>
            <br></br>
            <h2>Login</h2>
            <h2>{this.state.username}</h2>
            <Form>
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value ={this.state.input_username} onChange={(e)=>this.setState({input_username : e.target.value})}/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formNRIC">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value ={this.state.input_password} onChange={(e)=>this.setState({input_password : e.target.value})}/>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Label>{this.state.message}</Form.Label>
                </Col>
                <Col>
                    <Button variant="primary" type="button" block onClick={() => this.checkLogin()}>
                        Login
                    </Button>
                    <NavLink to = "#" >hi</NavLink>
                </Col>
            </Form>
        </span>);

    }

    checkLogin(){
        if (this.state.input_username == this.state.username){
            if ((this.state.input_password == this.state.password)){
                var history = useHistory();
                history.push('/Home')
            }
        }
        else if ((this.state.input_username == "") && (this.state.input_password == "")){
            this.setState({
                message: "Username and password cannot be left blank"
            })
        }
        else{
            this.setState({
                message: "Username or password is incorrect"
            })
        }
    }
}

export default Login;
