const harvestTable: Record<'grain' | 'hay' | 'cows' | 'fruit', Roll> = {
  grain: { 1: 75, 2: 150, 3: 250, 4: 375, 5: 525, 6: 700 },
  hay: { 1: 40, 2: 60, 3: 100, 4: 150, 5: 220, 6: 300 },
  cows: { 1: 140, 2: 200, 3: 280, 4: 380, 5: 500, 6: 750 },
  fruit: { 1: 400, 2: 700, 3: 1200, 4: 1800, 5: 2600, 6: 3500 },
};

export type Roll = Record<1|2|3|4|5|6, number>;

export default harvestTable;
