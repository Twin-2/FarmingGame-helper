import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./components/players/playerCard";
import "./App.scss";

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayer(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    setPlayers([...players, e.target.name.value]);
  }

  return (
    <>
      <Header />
      <Form onSubmit={(e) => addPlayer(e)}>
        <Form.Label>Name:</Form.Label>
        <Form.Control id="name" type="text" placeholder="Player1" />
        <Button type="submit" variant="warning">
          Add Player
        </Button>
      </Form>
      <Container>
        <Row>
          {players.map((player) => (
            <Col xs={12} lg={6}>
              <Player name={player} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
