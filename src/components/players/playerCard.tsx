import HarvestInput from "../form/harvestInput";
import Harvest from "../harvest/harvest";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Player} from "../../App";

type PlayerProps = {
  name: string;
  id: string;
  removePlayer: (id: string)=> void;
}

export const PlayerCard = (props: PlayerProps) => {
  const [player, setPlayer] = useState<Player | undefined>(undefined);
  const [modifier, setModifier] = useState<1 | .5 | 2>(1);

  return (
    <Card>
      <Card.Header>
        <div>Farmer {props.name}</div>
        <div className="removePlayer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={() => props.removePlayer(props.id)}
          >
            <path
              fill-rule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fill-rule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <HarvestInput setPlayer={setPlayer} setModifier={setModifier} />
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* Still need to track down the correct input for here */}
       {player && <Harvest player={player} modifier={modifier} cropToHarvest="hay"/>}
      </Card.Footer>
    </Card>
  );
}
