import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Table, ToastBody } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//created by typing cc enter
class MyQueue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        return (
            
            <span>
                {/* Conditional Rendering
                if 15 minutes */}
                <NavLink to='/MyProfile'><button variant="primary"><img src="home_icon.png" alt="" width='50px' height='50px'></img>Home&nbsp;</button></NavLink>
                {/* if > 15 minutes */}
                <NavLink to='/Home'><button variant="primary"><img src="home_icon.png" alt="" width='50px' height='50px'></img>Home&nbsp;</button></NavLink>
            </span>
        );
    }
}

export default MyQueue;