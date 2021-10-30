import HarvestInput from "../form/harvestInput";
import Harvest from "../harvest/harvest";
import { useState } from "react";
import { Card } from "react-bootstrap";

function Player(props) {
  const [player, setPlayer] = useState({});
  const [modifier, setModifier] = useState(1);
  // console.log(modifier);
  const handleFormSubmit = (formData) => {
    setPlayer(formData);
  };

  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <HarvestInput
            formSubmit={handleFormSubmit}
            setModifier={setModifier}
          />
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Harvest player={player} modifier={modifier} />
      </Card.Footer>
    </Card>
  );
}

export default Player;
