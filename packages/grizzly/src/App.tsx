import React from "react";
import "./App.css";
import BjornesnuteButton from "./components/bjornesnuteButton";
import categoryBags from "./components/img/categoryBags.png";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import logo from "./components/img/AtB_gra-kopi.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from "./components/inventory";


function App() {
  return (
    <Col className="App">
      <header className="App-header">


          <Container>
              <Row>
                  <Col sm={1}>
                      <img src={logo} width="200px"/>
                  </Col>
                  <Col sm={11}></Col>
              </Row>
              <Col >
                  <h1>Kategorier</h1>
              </Col>
                  <Row>

                      <Col>
                          <h2 id="kategori">Bag, veske og sekk </h2>
                          <button type="submit" value="categoryBags">
                              <img src={categoryBags} />
                          </button>
                      </Col>
                      <Col className="col">
                          <h2 id="kategori">Klær</h2>
                          <button type="submit" value="categoryClothing">
                              <img src={categoryClothing} />
                          </button>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <h2 id="kategori">Elektronikk </h2>
                          <button type="submit" value="categoryElectronics">
                              <img src={categoryElectronics} />
                          </button>
                      </Col>
                      <Col>
                          <h2 id="kategori">Personlige effekter </h2>
                          <button type="submit" value="categoryPersonalEffects">
                              <img src={categoryPersonalEffects} />
                          </button>
                      </Col>
                  </Row>
          </Container>
          <BjornesnuteButton/>
          <Inventory />

      </header>
    </Col>
  );
}

export default App;
