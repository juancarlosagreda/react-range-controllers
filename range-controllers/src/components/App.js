import React from 'react';
import { Container, Form } from "react-bootstrap"


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2>General Cyber Resillience</h2>
        <Form>
          <Form.Group controlId="cyberRanges">
            <Form.Label>Information Security Investment</Form.Label>
            <Form.Control type="range" /> 
          </Form.Group>
          <Form.Group controlId="cyberRanges">
            <Form.Label>Threat and Vulnerability Management Investment</Form.Label>
            <Form.Control type="range" /> 
          </Form.Group>
          <Form.Group controlId="cyberRanges">
            <Form.Label>Information Sharing Investment</Form.Label>
            <Form.Control type="range" /> 
          </Form.Group>
          <Form.Group controlId="cyberRanges">
            <Form.Label>Training Investment</Form.Label>
            <Form.Control type="range" /> 
          </Form.Group>
          <Form.Group controlId="cyberRanges">
            <Form.Label>Business Continuity Management Investment</Form.Label>
            <Form.Control type="range" /> 
          </Form.Group>
        </Form>
      </div>
      </Container>
  );
}

export default App;
