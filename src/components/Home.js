import React, { Component } from 'react';
//created by typing cc enter
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <span>
            <p class="textwrap">
            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>

            
            <h1 id="header">WELCOME</h1>

            <h1 id="name">{this.props.profile.name}</h1>
            <h1 id="nric">{this.props.profile.nric}</h1>

            <pre class="tab"></pre>
            </p>

            <pre class="tab"></pre>

            <div id="container_buttons">
            <a href="NewAppointment1" class="a_demo_four">Register New Appointment</a>
            </div>

            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>
            
            <p class="btnwrap">
            <a class="button-one" title="Relevant Title" href="#">Upcoming</a><a class="button-two" title="Relevant Title" href="#"> Missed</a><a class="button-three" title="Relevant Title" href="#">  Open </a>
            </p>

            <pre class="tab"></pre>
            <pre class="tab"></pre>

            <h2 id="textbelow" >There are no appointment(s)</h2>

        </span>  );
    }
}
 
export default Home;