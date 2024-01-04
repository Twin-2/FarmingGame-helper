import harvestTable from "../../lib/harvestTable";
import operatingExpense from "../../lib/operatingExpense";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Harvest(props) {
  const [harvest, setHarvest] = useState(0);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function calculateHarvest(crop, acres, roll) {
    let harvestValue = harvestTable[crop][roll] * acres;
    return harvestValue * props.modifier;
  }

  function income(crops, acres) {
    const roll = getRandomIntInclusive(1, 6);
    let op = operatingExpense(props.player);
    const harvestCalcaulation = calculateHarvest(crops, acres, roll);
    let income = harvestCalcaulation - op;
    setHarvest(income);
  }

  return (
    <div className="harvest">
      <Button
        onClick={() =>
          income(props.player.crop, props.player.crops[props.player.crop])
        }
        variant="warning"
      >
        Harvest for {props.player.crop}!
      </Button>
      ${harvest}
    </div>
  );
}

export default Harvest;
