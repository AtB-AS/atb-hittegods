import React from "react";
import "./App.css";
import BjornesnuteButton from "./components/bjornesnuteButton";
import categoryBags from "./components/img/categoryBags.png";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Col className="App">
      <header className="App-header">
          <Container>
              <form action="">
                  <Row>
                      <Col> 
                          <label>Bag, veske og sekk </label>
                          <button type="submit" value="categoryBags">
                              <img src={categoryBags} />
                          </button>
                      </Col>
                      <Col className="col">
                          <label>Klær</label>
                          <button type="submit" value="categoryClothing">
                              <img src={categoryClothing} />
                          </button>
                      </Col>

                  </Row>
                  <Row>
                      <Col>
                          <label>Elektronikk </label>
                          <button type="submit" value="categoryElectronics">
                              <img src={categoryElectronics} />
                          </button>
                      </Col>
                      <Col>
                          <label>Personlige effekter </label>
                          <button type="submit" value="categoryPersonalEffects">
                              <img src={categoryPersonalEffects} />
                          </button>
                      </Col>
                  </Row>

              </form>
          </Container>
          <BjornesnuteButton/>

      </header>
    </Col>
  );
}

export default App;
