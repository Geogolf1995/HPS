//User & Game
function getNewUser() {
  return {
    //resources
    tokens: 0,
    energy: 0,
    
    //pets & shop
    hasPets: "",
    
    //achievements
    hasAchievements: [],
    
    //run
    runCount: 0,
    highestEnergyTier: 0,
    rank: 0,
    
    //upgrades
    upgradesCol0: [0, 0, 0, 0, 0],
    
    //stats
    totalRuns: 0,
    totalEnergyResets: 0,
    
    //other
    tab: "run",
    lastUpdate: null,
    version: "v2.0",
  }
}
const devUsers = {
  "v1.1": {
    //resources
    tokens: 1000,
    energy: 100,
    
    //pets & shop
    hasPets: "EDCBA",
    
    //achievements
    hasAchievements: ["1", "2"],
    
    //run
    runCount: 14,
    highestEnergyTier: 3,
    rank: 0,
    
    //stats
    totalRuns: 303,
    totalEnergyResets: 48,
    
    //other
    tab: "run",
    lastUpdate: null,
    version: "v1.0",
  },
  "v2.0": {
    //resources
    tokens: 1000,
    energy: 100,
    
    //pets & shop
    hasPets: "EDCBA",
    
    //achievements
    hasAchievements: ["1", "2"],
    
    //run
    runCount: 14,
    highestEnergyTier: 3,
    rank: 0,
    
    //stats
    totalRuns: 303,
    totalEnergyResets: 48,
    
    //other
    tab: "run",
    lastUpdate: null,
    version: "v1.1",
  },
  "v2.1": {
    //resources
    tokens: 2000,
    energy: 0,
    
    //pets & shop
    hasPets: "GFEDCBA",
    
    //achievements
    hasAchievements: ["1","2","3","4"],
    
    //run
    runCount: 0,
    highestEnergyTier: 3,
    rank: 1,
    
    //upgrades
    upgradesCol0: [5, 0, 0, 0, 0],
    
    //stats
    totalRuns: 704,
    totalEnergyResets: 95,
    
    //other
    tab: "run",
    lastUpdate: null,
    version: "v2.0",
  },
}
function getNewGame() {
  return {
    //resources
    tokensPerSec: 1,
    
    //pets & shop
    pets: {
      A: {tier: 0, energyCost: 1, petReq: "", tokensPerSec: 1},
      B: {tier: 0, energyCost: 2, petReq: "A", tokensPerSec: 2},
      C: {tier: 0, energyCost: 5, petReq: "B", tokensPerSec: 4},
      D: {tier: 0, energyCost: 10, petReq: "C", tokensPerSec: 6},
      E: {tier: 0, energyCost: 32, petReq: "D", tokensPerSec: 9},
      F: {tier: 1, energyCost: 70, petReq: "ABCDE", tokensPerSec: 15},
      G: {tier: 1, energyCost: 150, petReq: "ABCDEF", tokensPerSec: 20},
      H: {tier: 1, energyCost: 250, petReq: "ABCDEG", tokensPerSec: 26},
      I: {tier: 1, energyCost: 350, petReq: "ABCDEH", tokensPerSec: 32},
      J: {tier: 1, energyCost: 450, petReq: "ABCDEI", tokensPerSec: 40},
    },
    
    //achievements
    achievementsTokensPerSec: 0,
    
    //run
    runTokenCost: 1,
    energyTier: 0,
  }
}
var game = getNewGame();
const latestVersion = "v2.1";


//Do not change
const tps = 30;
const checkRate = 10;


//debugging
const logActions = true;
const logUpdates = true;


//Colors & Icons
var colors = {
  blackBg: "rgb(10,15,15)",
  green: "rgb(150,200,50)",
  blue: "rgb(50,50,250)",
  purple: "rgb(150,0,210)",
  yellow: "rgb(212,175,55)",
  red: "rgb(220,20,60)",
  white: "rgb(255,255,255)",
}
var tierColors = {
  0: "green",
  1: "blue",
  2: "yellow",
  3: "purple",
  4: "red",
}
const resources = {
  tokens: {icon: "&#10026;", color: "blue"},
  energy: {icon: "&#9728;", color: "yellow"},
  coins: {icon: "&#128;", color: "purple"},
}


//Pets
var petsAsStr = Object.keys(game.pets).join("");
var petsInTier = [];
for (let name in game.pets) {
  let tier = game.pets[name].tier;
  if (petsInTier[tier]) {
    petsInTier[tier].push(name);
  }
  else {
    petsInTier[tier] = [name];
  }
}


//Achievements
const achievements = [
  null,
  {title: "ABCs", description: "Buy the first three letters"},
  {title: "That's It?", description: "Own all green letters"},
  {title: "Rankup", description: "Rankup for the first time"},
  {title: "Respect", description: "Buy the first blue letter"},
  {title: "Now What?", description: "Own all blue letters"},
];
const hasAchColor = "rgb(25,85,25)";
const hasAchIdColor = "rgb(75,125,25,0.75)"
const noAchColor = "rgb(25,25,25)";
const noAchIdColor = "rgb(75,125,25,0.25)";


//Run
const runCosts = [
  5, 10, 15, 20, 25,
  50, 100, 150, 200, 250,
  325, 450, 575, 700,
  
  950, 1100, 1250, 1400, 1550,
  1800, 2000, 2200, 2400, 2600,
  2750, 3000, 3250, 3500,
  Infinity,
];
const energyTiers = [
  {runReq: 5, currentGain: 0},
  {runReq: 10, currentGain: 1},
  {runReq: 14, currentGain: 10},
  
  {runReq: 19, currentGain: 33},
  {runReq: 24, currentGain: 100},
  {runReq: 28, currentGain: 130},
  {runReq: Infinity, currentGain: 160},
];
const ranks = [
  {name: "0", nextName: "I", runReq: 14, tokenCost: 1e3, energyCost: 100},
  {name: "I", nextName: "II", runReq: 28, tokenCost: Infinity, energyCost: Infinity},
  {name: "II", nextName: "End", runReq: Infinity, tokenCost: Infinity, energyCost: Infinity},
];


//Upgrades
const upgradesCol0 = [
  [
    {
      title: "Better "+makeColoredPetSpan(petsInTier[0][0]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
      cost: 1e3,
      gain: 1,
    },
    {
      title: "Better "+makeColoredPetSpan(petsInTier[0][1]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
      cost: 2e3,
      gain: 2,
    },
    {
      title: "Better "+makeColoredPetSpan(petsInTier[0][2]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
      cost: 3e3,
      gain: 3,
    },
    {
      title: "Better "+makeColoredPetSpan(petsInTier[0][3]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
      cost: 4e3,
      gain: 4,
    },
    {
      title: "Better "+makeColoredPetSpan(petsInTier[0][4]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
      cost: 5e3,
      gain: 5,
    },
    
    {
      title: "Even Better "+makeColoredPetSpan(petsInTier[0][0]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
      cost: 7.5e3,
      gain: 2,
    },
    {
      title: "Even Better "+makeColoredPetSpan(petsInTier[0][1]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
      cost: 10e3,
      gain: 4,
    },
    {
      title: "Even Better "+makeColoredPetSpan(petsInTier[0][2]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
      cost: 12.5e3,
      gain: 6,
    },
    {
      title: "Even Better "+makeColoredPetSpan(petsInTier[0][3]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
      cost: 15e3,
      gain: 8,
    },
    {
      title: "Even Better "+makeColoredPetSpan(petsInTier[0][4]),
      description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
      cost: 17.5e3,
      gain: 10,
    },
    
    {
      title: "Maxed",
      description: "",
      cost: Infinity,
      gain: 0,
    },
  ],
];


//Tabs
const tabData = {
  options: "green",
  achievements: "green",
  run: "blue",
  upgrades: "purple",
  shop: "yellow",
  rebirth: "red",
}


//Functions
function makeColoredPetSpan(pet) {
  return "<span class=\""+tierColors[game.pets[pet].tier]+"Text\">"+pet+"</span>";
}
