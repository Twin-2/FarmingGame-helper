import { useState, useEffect } from 'react';

function Harvest(props) {
    const [harvest, setHarvest] = useState(0);

    let harvestTable = {
        'grain': { 1: 75, 2: 150, 3: 250, 4: 375, 5: 525, 6: 700 },
        'hay': { 1: 40, 2: 60, 3: 100, 4: 150, 5: 220, 6: 300 },
        'cows': { 1: 140, 2: 200, 3: 280, 4: 380, 5: 500, 6: 750 },
        'fruit': { 1: 400, 2: 700, 3: 1200, 4: 1800, 5: 2600, 6: 3500 }
    }

    let operatingExpenseTable = [500, 500, 1000, 1000, 1500, 3000, 2000]

    useEffect(() => {
        props.formData.crop ? harvestCalculation(props.formData.crop, props.formData.acres, props.formData.roll) : harvestCalculation('hay', 0, 0)
        console.log(props.formData.crop)
    })

    function harvestCalculation(crop, acres, roll) {
        let harvestValue = harvestTable[crop][roll] * acres
        console.log(harvestValue)
        let operatingExpense = operatingExpenseTable[Math.floor(Math.random() * ((operatingExpenseTable.length) - 0))]
        let income = harvestValue - operatingExpense
        setHarvest(income)
    }

    return (
        <>
            Harvest: {harvest}
        </>
    )

}


export default Harvest