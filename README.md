# Farming Game Helper

## Contributers

David Whitmore

## About

This React app was built to help play The Farming Game. It will handle your harvest calulations, including operating expenses and your harvest roll, so you can just keep enjoying the game. Have as many player cards as you would like, each keeping tracks of their farm acres, so you aren't limited by the game board size. It is deployed on [Netlify here](https://farming-game-helper.netlify.app/).

## Version 1.4.1

1.0.0 - 9/26/2021 - Calculate your harvest income with a randomly generated Operating Expense. Current Operating Expenses are only number values 500-3000.

1.1.0 - 10/3/2021 - Added ability to double or cut in half your harvest.

1.2.0 - 10/28/2021 - Expanded the operating expense calculations to include calculations for not having a tractor, harvestor, and your debt. Also added ability for OP to be based on your crop acres. This OP is based on the crop being HARVESTED not total acres of the farm! This update came with some reworking of the code that sets it up for further growth with the OP function being in a seperate file.

1.3.0 - 11/4/2021 - Added player cards so you can add seperate cards for everyone that is playing. Each player card individually tracks acres for each type of harvest as well as modifiers like doubles and equipment. You can also remove players.

1.3.1 - 1/9/2022 - Added a modal with a brief explination of how to use the app.

1.3.2 - 11/13/2022 - Fixed security issues within dependacies.

1.3.2 - 1/11/2023 - Add uuid's to player cards for specific deletion.

1.4.1 - 1/5/2024 - Adding in types for readability.

1.4.2 - 3/21/2025 - Adding details for harvest income.

## Development Goals

- Expand cards to hold total wealth. Appropriately subtracting and adding when you harvest and buy property.
- Change crop acres input to be individual up and down buttons rather than an input type number.
- Create a database connection for saving progress.
- Migrate to MUI.

---

### Please feel free to leave comments about suggestions for other changes!
