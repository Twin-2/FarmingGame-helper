import harvestTable from "../../lib/harvestTable";
import operatingExpense from "../../lib/operatingExpense";

function Harvest(props) {
  function calculateHarvest(crop, acres, roll) {
    let harvestValue = harvestTable[crop][roll] * acres;
    return harvestValue * props.modifier;
  }

  function income(crops, acres, roll) {
    let op = operatingExpense(props.player);
    console.log("OP", op);
    const harvestCalcaulation = calculateHarvest(crops, acres, roll);
    let income = harvestCalcaulation - op;
    console.log("income", income);
    return income;
  }

  const harvest = props.player.crop
    ? income(props.player.crop, props.player.acres, props.player.roll)
    : 0;

  return <div className="harvest">Harvest: {harvest}</div>;
}

export default Harvest;
