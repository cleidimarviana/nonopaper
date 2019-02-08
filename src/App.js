import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Container,Row,Navbar,NavDropdown, FormControl, Form, Nav } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">MUSSUM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

        <Container>
        <Row>
            <Alert dismissible variant="danger">
              <Alert.Heading>Birits</Alert.Heading>
              <p>
              Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, cursus quis, vehicula ac nisi.

Sapien in monti palavris qui num significa nadis i pareci latim.  Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. In elementis mé pra quem é amistosis quis leo.
              </p>
            </Alert>        
        </Row>
      </Container>;         
        </header>
      </div>
    );
  }
}

export default App;
