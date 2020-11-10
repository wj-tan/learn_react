import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { currentarea: "" }
    }
    render() {
        return (<span>
            <h2>Search Appointment</h2>
            <span>{this.state.currentarea}</span>
            <button onClick={() => this.setState({ currentarea: "AMK" })}>AMK</button>
            <button onClick={() => this.setState({ currentarea: "YCK" })}>YCK</button>
            <button onClick={() => this.setState({ currentarea: "Bugis" })}>Bugis</button>

            {
                (this.state.currentarea === "YCK") ?
                    ( //true
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6652433936056!2d103.84664861525575!3d1.377528761868376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16e96db0a1ab%3A0x3d0be54fbbd6e1cd!2sSingapore%20Institute%20of%20Technology%20(SIT%40NYP)!5e0!3m2!1sen!2ssg!4v1605011825485!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    ) : ( //false
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.721614993158!2d103.9303207152559!3d1.3434329619690197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d418d86ecc1%3A0x5a62ff66c1745f16!2sSingapore%20Institute%20of%20Technology%20(SIT%40TP)!5e0!3m2!1sen!2ssg!4v1605012239871!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    )

            }

            
{(() => {

  

switch (this.state.currentarea) {

   case 'AMK':

       return (

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6652433936056!2d103.84664861525575!3d1.377528761868376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16e96db0a1ab%3A0x3d0be54fbbd6e1cd!2sSingapore%20Institute%20of%20Technology%20(SIT%40NYP)!5e0!3m2!1sen!2ssg!4v1605011825485!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

       )

   case 'YCK':

       return (

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.721614993158!2d103.9303207152559!3d1.3434329619690197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d418d86ecc1%3A0x5a62ff66c1745f16!2sSingapore%20Institute%20of%20Technology%20(SIT%40TP)!5e0!3m2!1sen!2ssg!4v1605012239871!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

       )

   default:

       return (

         <div>You are a User.</div>

       )

}



})()}
            

        </span >);
    }
}

export default Search;