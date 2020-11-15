import React, { Component } from 'react';
import { Button, Row, Col } from "react-bootstrap";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedArea: ""
        }
        
    }
    render() {
        return (<span>
            <br></br>
            <h1>Search Branches</h1>
            <pre class="tab"></pre>
            <div id="branch">
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" onClick={()=> this.setState({ selectedArea: 'HTA'})}>HTA</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={()=> this.setState({ selectedArea: 'CDA'})}>CDA</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={()=> this.setState({ selectedArea: 'SCDF HQ'})}>SCDF</Button>
                    </Col>
                </Row>
            </div>
            <br></br>
            {
                (this.state.selectedArea === "") ?
                (
                    <h3></h3>
                ) : (
                    <h3>{this.state.selectedArea} Location</h3>
                )
            }
            <div id="map">
                {(() => {
                    switch(this.state.selectedArea){
                        case 'HTA':
                            return <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.692431694679!2d103.7227679!3d1.3728228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54e3f6b2360319e7!2sHome%20Team%20Academy!5e0!3m2!1sen!2ssg!4v1605013244980!5m2!1sen!2ssg" width="400" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>;
                        case 'CDA':
                            return <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.734017007959!2d103.692123!3d1.366577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bce0543e6ef24ca!2sCivil%20Defence%20Academy!5e0!3m2!1sen!2ssg!4v1605013322806!5m2!1sen!2ssg" width="400" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>;
                        case 'SCDF HQ':
                            return <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.946075529848!2d103.893113!3d1.3342729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53122296532862ec!2sSCDF%20HQ!5e0!3m2!1sen!2ssg!4v1605013349417!5m2!1sen!2ssg" width="400" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>;
                        default:
                            return '';
                    }
                })()}
            </div>
        </span>);
    }
}

export default Search;