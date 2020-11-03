import React, { Component } from 'react';
class NewAppointment3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id ='newappointment3'>
                <h1>New Appointment</h1>
                
                <label id='branch'>Branch : </label>
                <br></br>
                <label>Purpose of Visit: </label>
                <select>
                    <option>Consultation</option>
                    <option>FFI</option>
                </select>
                <br></br>
                <label>Date: </label>
                <input type="date"></input>
                <br></br>
                <label>Slot: </label>
                <button>10AM</button>
                <button>11AM</button>
                <button>2PM</button>
                <button>3PM</button>
            </div>
        );
    }
}
 
export default NewAppointment3;