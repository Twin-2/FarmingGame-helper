import harvestTable from "../../lib/harvestTable";
// import { useState } from "react";

const operatingExpenseTable = [500, 500, 1000, 1000, 1500, 3000, 2000];

function Harvest(props) {
  //   const [testOp, setTestOp] = useState(0);
  //   console.log(testOp);

  function calculateHarvest(crop, acres, roll) {
    let harvestValue = harvestTable[crop][roll] * acres;
    console.log("harvest", harvestValue);
    return harvestValue * props.modifier;
  }

  function income(crops, acres, roll) {
    let op = operatingExpense();
    const harvestCalcaulation = calculateHarvest(crops, acres, roll);
    let income = harvestCalcaulation - op;
    console.log("income", income);
    return income;
  }

  function operatingExpense() {
    let operatingExpense =
      operatingExpenseTable[
        Math.floor(Math.random() * (operatingExpenseTable.length - 0))
      ];
    console.log("OP", operatingExpense);
    // setTestOp(operatingExpense);
    return operatingExpense;
  }

  const harvest = props.formData.crop
    ? income(props.formData.crop, props.formData.acres, props.formData.roll)
    : 0;

  return <div className="harvest">Harvest: {harvest}</div>;
}

export default Harvest;
