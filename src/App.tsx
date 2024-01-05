import {Header} from "./components/header/header";
import Footer from "./components/footer/footer";
import AddPlayer from "./components/addPlayerForm/addPlayerForm";
import { useState, useEffect, ReactEventHandler, SyntheticEvent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {PlayerCard} from "./components/players/playerCard";
import IntroductionModal from "./components/modals/introductionModal";
import "./App.scss";
import {v4 as uuidv4} from 'uuid';
import { initalizePlayer } from "./components/players/initializePlayer";
import React from "react";

export type Player = {
  name: string;
  id: any;
  crops: Crops;
  debt: number;
  equipment: Equipment;
  totalWealth: number
};

export type Crops = {
  hay: number;
  grain: number;
  fruit: number;
  cows: number;
}

export  type Equipment = {
  tractor: boolean;
  harvester: boolean;
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [showInstructionsModal, setShowInstructionModal] = useState<boolean>(false);

  function addPlayer(e: React.BaseSyntheticEvent) {
    console.log(e)
    e.preventDefault();
    var name = e.target.name.value;
    setPlayers([...players, initalizePlayer(name, uuidv4())]);
    e.target.reset();
  }

  function removePlayer(id: string) {
    setPlayers(players.filter((player) => player.id !== id));
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
              <PlayerCard name={player.name} id={player.id} removePlayer={removePlayer} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
