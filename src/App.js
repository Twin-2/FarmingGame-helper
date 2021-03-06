import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AddPlayer from "./components/addPlayerForm/addPlayerForm";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./components/players/playerCard";
import IntroductionModal from "./components/modals/introductionModal";
import "./App.scss";

function App() {
  const [players, setPlayers] = useState([]);
  const [showInstructionsModal, setShowInstructionModal] = useState(false);

  function addPlayer(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    setPlayers([...players, e.target.name.value]);
    e.target.reset();
  }

  function removePlayer(name) {
    setPlayers(players.filter((player) => player !== name));
  }

  useEffect(() => {
    setShowInstructionModal(true);
  }, []);
  return (
    <>
      <Header setShowInstruction={setShowInstructionModal} />
      <IntroductionModal
        showInstructions={showInstructionsModal}
        setShowInstructions={setShowInstructionModal}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="auto" md="auto" lg="auto">
            <AddPlayer addPlayer={addPlayer} />
          </Col>
        </Row>
        <Row className="playerCards">
          {players.map((player) => (
            <Col xs={12} lg={4} md={6}>
              <Player name={player} removePlayer={removePlayer} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
