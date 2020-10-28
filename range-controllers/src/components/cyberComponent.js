import React, { Component } from 'react';
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Dependencies from './dependencies.component'

class CyberComponent extends Component {
    // class constructor
    constructor(props) {
        super(props);
        this.state = {
          infoSecurity: 0,
          vulnerabilityManage: 0,
          infoSharing: 0,
          training: 0,
          businessCont: 0
        }
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.handleVulnerabilityChange = this.handleVulnerabilityChange.bind(this);
        this.handleInfoSharingChange = this.handleInfoSharingChange.bind(this);
        this.handleTrainingChange = this.handleTrainingChange.bind(this);
        this.handleBusinessChange = this.handleBusinessChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // // Load script tag
    // componentDidMount() {
    //     // load model.js
    //     const model1 = document.createElement("script");    
    //     model1.async = true;    
    //     model1.src = "./model.js";    
    //     this.div.appendChild(model1);  

    //     // load API.JS
    //     const api = document.createElement("script");    
    //     api.async = true;    
    //     api.src = "insightmaker/js/API/API.js";    
    //     this.div.appendChild(api); 
    // }
    

    // event handlers
    handleInfoChange(e) {
        this.setState({ infoSecurity: e.target.value });
      }

    handleVulnerabilityChange(e) {
        this.setState({ vulnerabilityManage: e.target.value });
    }

    handleInfoSharingChange(e) {
        this.setState({ infoSharing: e.target.value });
    }

    handleTrainingChange(e) {
        this.setState({ training: e.target.value });
    }

    handleBusinessChange(e) {
        this.setState({ businessCont: e.target.value }); 
    }

    handleSubmit(e) {
        e.preventDefault();
    }
    

    render() {
        return (
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
                >
                <Dependencies />
                <div className="w-100" ref={el => (this.div = el)} style={{ maxWidth: '400px' }}>
                    <h2>General Cyber Resillience</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="generalCyberResillience">
                            <Form.Control plaintext readOnly value={"Information Security Investment: " + this.state.infoSecurity + " %"}></Form.Control>
                            <Form.Control type="range" value={this.state.infoSecurity} onChange={this.handleInfoChange}/> 
                        </Form.Group>
                    <Form.Group controlId="cyberRanges">
                    <Form.Control plaintext readOnly value={"Threat and Vulnerability Management Investment: " + this.state.vulnerabilityManage + " %"}></Form.Control>
                        <Form.Control type="range" value={this.state.vulnerabilityManage} onChange={this.handleVulnerabilityChange}/> 
                    </Form.Group>
                    <Form.Group controlId="cyberRanges">
                    <Form.Control plaintext readOnly value={"Information Sharing Investment: " + this.state.infoSharing + " %"}></Form.Control>
                        <Form.Control type="range" value={this.state.infoSharing} onChange={this.handleInfoSharingChange}/> 
                    </Form.Group>
                    <Form.Group controlId="cyberRanges">
                    <Form.Control plaintext readOnly value={"Training Investment: " + this.state.training + " %"}></Form.Control>
                        <Form.Control type="range"  value={this.state.training} onChange={this.handleTrainingChange}/> 
                    </Form.Group>
                    <Form.Group controlId="cyberRanges">
                    <Form.Control plaintext readOnly value={"Business Continuity Management Investment: " + this.state.businessCont + " %"}></Form.Control>
                        <Form.Control type="range"  value={this.state.businessCont} onChange={this.handleBusinessChange}/> 
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </div>
            </Container>
        );
    };
}


export default CyberComponent;