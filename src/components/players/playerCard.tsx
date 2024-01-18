import HarvestInput from "../form/harvestInput";
import Harvest from "../harvest/harvest";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Crops, Player} from "../../App";
import { PlayerContext } from "../../context/playerContext";

type PlayerProps = {
  player: Player;
  removePlayer: (id: string)=> void;
}

export const PlayerCard = (props: PlayerProps) => {
  const [player, setPlayer] = useState<Player>(props.player);
  const [modifier, setModifier] = useState<1 | .5 | 2>(1);
  const [cropToHarvest, setCropToHarvest] = useState<keyof Crops>('hay');
  
  return (
    <PlayerContext.Provider value={{player, setPlayer}}>
      <Card>
        <Card.Header>
          <div className="cardHeader">
            <div>Farmer {player.name}</div>
            <div>${player.totalWealth}</div>
          </div>
          <div className="removePlayer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={() => props.removePlayer(props.player.id)}
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <HarvestInput setPlayer={setPlayer} setModifier={setModifier} player={player} cropToHarvest={cropToHarvest} setCropToHarvest={setCropToHarvest}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        {player && <Harvest modifier={modifier} cropToHarvest={cropToHarvest}/>}
        </Card.Footer>
      </Card>
    </PlayerContext.Provider>
  );
}
