const operatingExpenseTable = [
  500,
  500,
  500,
  500,
  500, 
  500,
  1000,
  1000,
  1000,
  1000,
  1000,
  1500,
  1500,
  3000,
  2000,
  2000,
  "noHarvester",
  "noHarvester",
  "noTractor",
  "noTractor",
  "debt",
  "acres",
];

export default function operatingExpense(player) {
  let operatingExpense =
    operatingExpenseTable[
      Math.floor(Math.random() * (operatingExpenseTable.length - 0))
    ];
  console.log("raw OP", operatingExpense);
  console.log(typeof parseInt(player.crops[player.crop]));
  switch (operatingExpense) {
    case "noHarvester":
      if (!player.equipment.harvester) {
        return 2000;
      } else {
        return 0;
      }
    case "noTractor":
      if (!player.equipment.tractor) {
        return 2000;
      } else {
        return 0;
      }
    case "debt":
      return player.debt * 0.1;
    case "acres":
      return parseInt(player.crops[player.crop] * 100);
    default:
      return operatingExpense;
  }
}
