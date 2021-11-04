import HarvestInput from "../form/harvestInput";
import Harvest from "../harvest/harvest";
import { useState } from "react";
import { Card } from "react-bootstrap";

function Player(props) {
  const [player, setPlayer] = useState({});
  const [modifier, setModifier] = useState(1);

  return (
    <Card>
      <Card.Header>Farmer {props.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <HarvestInput setPlayer={setPlayer} setModifier={setModifier} />
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Harvest player={player} modifier={modifier} />
      </Card.Footer>
    </Card>
  );
}

export default Player;
