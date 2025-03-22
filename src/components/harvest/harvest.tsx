import harvestTable, { Roll } from "../../lib/harvestTable";
import calculateOperatingExpense from "../../lib/operatingExpense";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Crops, Player } from "../../App";

type HarvestProps = {
  player: Player;
  cropToHarvest: keyof Crops;
  modifier: .5 | 1 | 2;
};

function Harvest(props: HarvestProps) {
  const [harvest, setHarvest] = useState(0);
  const [operatingExpense, setOperatingExpense] = useState<number>();
  const [roll, setRoll] = useState<number>();
  const [income, setIncome] = useState<number>();

  function getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function calculateHarvest(crop:keyof Crops, acres: number, roll:keyof Roll) {
    let harvestValue = harvestTable[crop][roll] * acres;
    return harvestValue * props.modifier;
  }

  function calculateIncome(crop: keyof Crops, acres: number) {
    const roll = getRandomIntInclusive(1, 6) as keyof Roll;
    setRoll(roll);
    let op = calculateOperatingExpense(props.player, props.cropToHarvest);
    setOperatingExpense(op);
    const harvestCalcaulation = calculateHarvest(crop, acres, roll);
    setIncome(harvestCalcaulation);
    let income = harvestCalcaulation - op;
    console.log(`roll = ${roll}, O.E. = ${op}, harvest = ${harvestCalcaulation}`)
    setHarvest(income);
  }

  return (
    <div className="harvest">
      <Button
        onClick={() =>
          calculateIncome(props.cropToHarvest, props.player.crops[props.cropToHarvest])
        }
        variant="warning"
      >
        Harvest for {props.cropToHarvest}!
      </Button>
      <div className="harvestDetails">
        Roll = {roll}, <br/>
        Income = ${income},<br/>
        Operating Expense = ${operatingExpense},<br/>
        Harvest = ${harvest}
      </div>
    </div>
  );
}

export default Harvest;
