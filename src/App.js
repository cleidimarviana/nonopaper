import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Navbar, NavDropdown, FormControl, Form, Nav, Card, InputGroup, Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const estados = [
  { code: "12", value: "ac", label: "Acre" },
  { code: "27", value: "al", label: "Alagoas" },
  { code: "13", value: "am", label: "Amazonas" },
  { code: "16", value: "ap", label: "Amapá" },
  { code: "29", value: "ba", label: "Bahia" },
  { code: "23", value: "ce", label: "Ceará" },
  { code: "53", value: "df", label: "Distrito Federal" },
  { code: "32", value: "es", label: "Espírito Santo" },
  { code: "52", value: "go", label: "Goiás" },
  { code: "21", value: "ma", label: "Maranhão" },
  { code: "51", value: "mt", label: "Mato Grosso" },
  { code: "50", value: "ms", label: "Mato Grosso do Sul" },
  { code: "31", value: "mg", label: "Minas Gerais" },
  { code: "15", value: "pa", label: "Pará" },
  { code: "25", value: "pb", label: "Paraíba" },
  { code: "41", value: "pr", label: "Paraná " },
  { code: "26", value: "pe", label: "Pernambuco " },
  { code: "22", value: "pi", label: "Piauí  " },
  { code: "33", value: "rj", label: "Rio de Janeiro " },
  { code: "24", value: "rn", label: "Rio Grande do Norte" },
  { code: "11", value: "ro", label: "Rondônia   " },
  { code: "43", value: "rs", label: "Rio Grande do Sul" },
  { code: "14", value: "rr", label: "Roraima  " },
  { code: "42", value: "sc", label: "Santa Catarina" },
  { code: "28", value: "se", label: "Sergipe   " },
  { code: "35", value: "sp", label: "São Paulo  " },
  { code: "17", value: "to", label: "Tocantins  " }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      resultado: '', 
      optionCidade: "no"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGameClick = this.handleGameClick.bind(this);
    this.buscaCep = this.buscaCep.bind(this);


    this.handleChangeSelect = this.handleChangeSelect.bind(this);
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

  buscaCidades(uf) {

    var strUf = uf ? uf.toUpperCase() : uf;
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
      this.setState({ resultado: xhr.responseText });
    })
    // open the request with the verb and the url
    //xhr.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+UF+'/municipios')
    xhr.open('GET', ' https://br-cidade-estado-nodejs.glitch.me/cidades?estadoId=' + strUf);

    // send the request
    xhr.send()
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    console.log(this.state);

    this.buscaCidades(this.state.estado)
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

  handleChangeSel = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {

    const { selectedOption } = this.state;

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
              <Card style={{ width: '35rem' }}>
                <Card.Body>
                  <Card.Title>Busca Postos</Card.Title>

                  <InputGroup size="sm" className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Entre com o CEP aqui" value={this.state.value} onChange={this.handleChange} />

                    <InputGroup.Append>
                      <Button type="submit" variant="outline-secondary" onClick={this.handleGameClick}>Buscar</Button>
                    </InputGroup.Append>
                  </InputGroup>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Select as="select" name="estado" size="sm"
                        value={selectedOption}
                        onChange={this.handleChangeSel}
                        options={estados}
                        placeholder="Selecione um estado..." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity" >

                      <Select as="select" name="cidade" size="sm"
                        value={selectedOption}
                        onChange={this.handleChangeSel}
                        options={options}
                        placeholder="Selecione uma cidade..."
                      />
                      {/* <Form.Control as="select" name="estado" size="sm" value={this.state.estado} onChange={this.handleChangeSelect}>
                        <option code="no" value="no">Cidade</option>
                        <option code="12" value="ac">Acre</option>
                        <option code="27" value="al">Alagoas</option>
                        <option code="13" value="am">Amazonas</option>
                        <option code="16" value="ap">Amapá</option>
                        <option code="29" value="ba">Bahia</option>
                        <option code="23" value="ce">Ceará</option>
                        <option code="53" value="df">Distrito Federal</option>
                        <option code="32" value="es">Espírito Santo</option>
                        <option code="52" value="go">Goiás</option>
                        <option code="21" value="ma">Maranhão</option>
                        <option code="51" value="mt">Mato Grosso</option>
                        <option code="50" value="ms">Mato Grosso do Sul</option>
                        <option code="31" value="mg">Minas Gerais</option>
                        <option code="15" value="pa">Pará</option>
                        <option code="25" value="pb">Paraíba</option>
                        <option code="41" value="pr">Paraná</option>
                        <option code="26" value="pe">Pernambuco</option>
                        <option code="22" value="pi">Piauí</option>
                        <option code="33" value="rj">Rio de Janeiro</option>
                        <option code="24" value="rn">Rio Grande do Norte</option>
                        <option code="11" value="ro">Rondônia</option>
                        <option code="43" value="rs">Rio Grande do Sul</option>
                        <option code="14" value="rr">Roraima</option>
                        <option code="42" value="sc">Santa Catarina</option>
                        <option code="28" value="se">Sergipe</option>
                        <option code="35" value="sp">São Paulo</option>
                        <option code="17" value="to">Tocantins</option>
                      </Form.Control> */}
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


/* <option code="no" value="no">Selecione o estado (UF)</option>
<option code="12" value="ac">Acre</option>
<option code="27" value="al">Alagoas</option>
<option code="13" value="am">Amazonas</option>
<option code="16" value="ap">Amapá</option>
<option code="29" value="ba">Bahia</option>
<option code="23" value="ce">Ceará</option>
<option code="53" value="df">Distrito Federal</option>
<option code="32" value="es">Espírito Santo</option>
<option code="52" value="go">Goiás</option>
<option code="21" value="ma">Maranhão</option>
<option code="51" value="mt">Mato Grosso</option>
<option code="50" value="ms">Mato Grosso do Sul</option>
<option code="31" value="mg">Minas Gerais</option>
<option code="15" value="pa">Pará</option>
<option code="25" value="pb">Paraíba</option>
<option code="41" value="pr">Paraná</option>
<option code="26" value="pe">Pernambuco</option>
<option code="22" value="pi">Piauí</option>
<option code="33" value="rj">Rio de Janeiro</option>
<option code="24" value="rn">Rio Grande do Norte</option>
<option code="11" value="ro">Rondônia</option>
<option code="43" value="rs">Rio Grande do Sul</option>
<option code="14" value="rr">Roraima</option>
<option code="42" value="sc">Santa Catarina</option>
<option code="28" value="se">Sergipe</option>
<option code="35" value="sp">São Paulo</option>
<option code="17" value="to">Tocantins</option> */