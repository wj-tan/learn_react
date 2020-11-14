import React, { Component } from 'react';
import { Button, Row, Col } from "react-bootstrap";

//created by typing cc enter
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedMode: "" }
    }
    render() {
        return (<span>
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

            <div id="mode">
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Upcoming' })}>Upcoming</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Missed' })}>Missed</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Open' })}>Open</Button>
                    </Col>
                </Row>
            </div>
            <div id="map">
                {(() => {
                    switch (this.state.selectedMode) {
                        case 'Upcoming':
                            return (<table>
                                <tr>
                                    <th>Branch</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Timeslot</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>);
                        case 'Missed':
                            return <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.734017007959!2d103.692123!3d1.366577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bce0543e6ef24ca!2sCivil%20Defence%20Academy!5e0!3m2!1sen!2ssg!4v1605013322806!5m2!1sen!2ssg" width="400" height="400" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>;
                        case 'Open':
                            return <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.946075529848!2d103.893113!3d1.3342729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53122296532862ec!2sSCDF%20HQ!5e0!3m2!1sen!2ssg!4v1605013349417!5m2!1sen!2ssg" width="400" height="400" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>;
                        default:
                            return '';
                    }
                })()}
            </div>

            <pre class="tab"></pre>
            <pre class="tab"></pre>

            <h2 id="textbelow" >There are no appointment(s)</h2>

        </span>);
    }
}

export default Home;