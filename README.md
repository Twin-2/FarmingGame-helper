# Farming Game Helper

This React app was built to help play the Farming Game. It is deployed on [Netlify here](https://farming-game-helper.netlify.app/).

## Version 1.1.0

1.0.0 - 9/26/2021 - Calculate your harvest income with a randomly generated Operating Expense. Current Operating Expenses are only number values 500-3000.

1.0.1 - 10/3/2021 - Added ability to double or cut in half your harvest.

1.0.2 - 10/28/2021 - Expanded the operating expense calculations to include calculations for not having a tractor, harvestor, and your debt. Also added ability for OP to be based on your crop acres. This OP is based on the crop being HARVESTED not total acres of the farm! This update came with some reworking of the code that sets it up for further growth with the OP function being in a seperate file.

1.1.0 - 11/4/2021 - Added player cards so you can add seperate cards for everyone that is playing. Each player card individually tracks acres for each type of harvest as well as modifiers like doubles and equipment. You can also remove players.

## Development Goals

- Expand cards to hold total wealth. Appropriately subtracting and adding when you harvest and buy property.
- Change crop acres input to be individual up and down buttons rather than an input type number.
- Create a database connection for saving progress.
- - Fix player card deletion to be by ID rather than name.

---

### Please feel free to leave comments about suggestions for other changes!
