import React, { Component } from 'react';
//created by typing cc enter
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <span>
            <h1 id="header">Welcome</h1>
            <h1 id="name">Ng Jia Cheng</h1>
            <h1 id="nric">S9601418Z</h1>


            <div id="container_buttons">
            <a href="NewAppointment" class="a_demo_four">Register New Appointment</a>
            </div>

        </span>  );
    }
}
 
export default Home;