import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Navbar, NavDropdown, FormControl, Form, Nav, Card, InputGroup, Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      resultado: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGameClick = this.handleGameClick.bind(this);

    this.buscaCep = this.buscaCep.bind(this);
  }
  componentWillMount() {

  }

  buscaCep(cep) {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
      this.setState({ resultado: xhr.responseText });
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://viacep.com.br/ws/' + cep + '/json/')
    // send the request
    xhr.send()
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  handleGameClick() {
    if (this.state.value.length == 8) {
      this.buscaCep(this.state.value);
    }
  }

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
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>Busca Postos</Card.Title>

                  <InputGroup size="sm" className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Update input here" value={this.state.value} onChange={this.handleChange} />

                    <InputGroup.Append>
                      <Button type="submit" variant="outline-secondary" onClick={this.handleGameClick}>Buscar</Button>
                    </InputGroup.Append>
                  </InputGroup>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control as="select" size="sm">
                        <option value="no">Selecione o Estado</option>
                        <option value="ac">Acre</option>
                        <option value="al">Alagoas</option>
                        <option value="am">Amazonas</option>
                        <option value="ap">Amapá</option>
                        <option value="ba">Bahia</option>
                        <option value="ce">Ceará</option>
                        <option value="df">Distrito Federal</option>
                        <option value="es">Espírito Santo</option>
                        <option value="go">Goiás</option>
                        <option value="ma">Maranhão</option>
                        <option value="mt">Mato Grosso</option>
                        <option value="ms">Mato Grosso do Sul</option>
                        <option value="mg">Minas Gerais</option>
                        <option value="pa">Pará</option>
                        <option value="pb">Paraíba</option>
                        <option value="pr">Paraná</option>
                        <option value="pe">Pernambuco</option>
                        <option value="pi">Piauí</option>
                        <option value="rj">Rio de Janeiro</option>
                        <option value="rn">Rio Grande do Norte</option>
                        <option value="ro">Rondônia</option>
                        <option value="rs">Rio Grande do Sul</option>
                        <option value="rr">Roraima</option>
                        <option value="sc">Santa Catarina</option>
                        <option value="se">Sergipe</option>
                        <option value="sp">São Paulo</option>
                        <option value="to">Tocantins</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="exampleForm.ControlSelect1" className="mb-2">
                    <Form.Control as="select" size="sm">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>

                  {this.state.resultado}

                </Card.Body>
              </Card>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
