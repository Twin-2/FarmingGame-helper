import harvestTable, { Roll } from "../../lib/harvestTable";
import operatingExpense from "../../lib/operatingExpense";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Crops, Player } from "../../App";
import { PlayerContext, PlayerContextType } from "../../context/playerContext";

type HarvestProps = {
  // setPlayer: React.Dispatch<React.SetStateAction<Player>>;
  cropToHarvest: keyof Crops;
  modifier: .5 | 1 | 2;
};

function Harvest(props: HarvestProps) {
  const [harvest, setHarvest] = useState(0);
  const {player, setPlayer} = useContext(PlayerContext) as PlayerContextType;

  function getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function calculateHarvest(crop:keyof Crops, acres: number, roll:keyof Roll) {
    let harvestValue = harvestTable[crop][roll] * acres;
    return harvestValue * props.modifier;
  }

  const updateTotalWealth = (income: number) => {
    setPlayer({...player, totalWealth: player.totalWealth + income})
  }

  function income(crops: keyof Crops, acres: number) {
    const roll = getRandomIntInclusive(1, 6) as keyof Roll;
    let op = operatingExpense(player, props.cropToHarvest);
    const harvestCalcaulation = calculateHarvest(crops, acres, roll);
    let income = harvestCalcaulation - op;
    updateTotalWealth(income);
    setHarvest(income);
  }
  return (
    <div className="harvest">
      <Button
        onClick={() =>
          income(props.cropToHarvest, player.crops[props.cropToHarvest])
        }
        variant="warning"
      >
        Harvest for {props.cropToHarvest}!
      </Button>
      ${harvest}
    </div>
  );
}

export default Harvest;
