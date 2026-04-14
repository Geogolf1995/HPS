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
    upgradesCol1: [0, 0, 0, 0, 0],
    upgradesCol2: [0, 0, 0, 0, 0],
    
    //altar upgrades
    altarUpgrades: {
      A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0,T:0,U:0,V:0,W:0,X:0,Y:0,Z:0
    },
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
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
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
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
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
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
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v2.0",
  },
  "v2.2": {
    //resources
    tokens: 10000,
    energy: 1000,
    
    //pets & shop
    hasPets: "JIHGFEDCBA",
    
    //achievements
    hasAchievements: ["1","2","3","4","5"],
    
    //run
    runCount: 28,
    highestEnergyTier: 6,
    rank: 1,
    
    //upgrades
    upgradesCol0: [10, 0, 0, 0, 0],
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v2.1",
  },
  "v2.3": {
    //resources
    tokens: 0,
    energy: 0,
    
    //pets & shop
    hasPets: "ONMLKJIHGFEDCBA",
    
    //achievements
    hasAchievements: ["1","2","3","4","5","6","7"],
    
    //run
    runCount: 0,
    highestEnergyTier: 6,
    rank: 2,
    
    //upgrades
    upgradesCol0: [10, 5, 0, 0, 0],
    upgradesCol1: [5, 0, 0, 0, 0],
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v2.2",
  },
  "v2.4": {
    //resources
    tokens: 1e5,
    energy: 1e4,
    
    //pets & shop
    hasPets: "ONMLKJIHGFEDCBA",
    
    //achievements
    hasAchievements: ["1","2","3","4","5","6","7","8"],
    
    //run
    runCount: 42,
    highestEnergyTier: 9,
    rank: 2,
    
    //upgrades
    upgradesCol0: [10, 5, 0, 0, 0],
    upgradesCol1: [5, 0, 0, 0, 0],
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v2.3",
  },
}
function getNewGame() {
  return {
    //resources
    tokensPerSec: 1,
    
    //pets & shop
    pets: {
      A: {tier: 0, energyCost: 1, petReq: "", tokensPerSec: 1, maxCount: 1},
      B: {tier: 0, energyCost: 2, petReq: "A", tokensPerSec: 2, maxCount: 1},
      C: {tier: 0, energyCost: 5, petReq: "B", tokensPerSec: 4, maxCount: 1},
      D: {tier: 0, energyCost: 10, petReq: "C", tokensPerSec: 6, maxCount: 1},
      E: {tier: 0, energyCost: 32, petReq: "D", tokensPerSec: 9, maxCount: 1},
      F: {tier: 1, energyCost: 70, petReq: "ABCDE", tokensPerSec: 15, maxCount: 1},
      G: {tier: 1, energyCost: 150, petReq: "ABCDEF", tokensPerSec: 20, maxCount: 1},
      H: {tier: 1, energyCost: 250, petReq: "ABCDEG", tokensPerSec: 26, maxCount: 1},
      I: {tier: 1, energyCost: 350, petReq: "ABCDEH", tokensPerSec: 32, maxCount: 1},
      J: {tier: 1, energyCost: 450, petReq: "ABCDEI", tokensPerSec: 40, maxCount: 1},
      K: {tier: 2, energyCost: 950, petReq: "FGHIJ", tokensPerSec: 120, maxCount: 1},
      L: {tier: 2, energyCost: 1750, petReq: "FGHIJK", tokensPerSec: 210, maxCount: 1},
      M: {tier: 2, energyCost: 2550, petReq: "FGHIJL", tokensPerSec: 300, maxCount: 1},
      N: {tier: 2, energyCost: 3350, petReq: "FGHIJM", tokensPerSec: 400, maxCount: 1},
      O: {tier: 2, energyCost: 4200, petReq: "FGHIJN", tokensPerSec: 500, maxCount: 1},
      P: {tier: 3, energyCost: 5000, petReq: "KLMNO", tokensPerSec: 1500, maxCount: 1},
      Q: {tier: 3, energyCost: 6250, petReq: "KLMNOP", tokensPerSec: 3000, maxCount: 1},
      R: {tier: 3, energyCost: 7500, petReq: "KLMNOQ", tokensPerSec: 4500, maxCount: 1},
      S: {tier: 3, energyCost: 8750, petReq: "KLMNOR", tokensPerSec: 6000, maxCount: 1},
      T: {tier: 3, energyCost: 10000, petReq: "KLMNOS", tokensPerSec: 7500, maxCount: 1},
      /*U: {tier: 4, energyCost: 21, petReq: "PQRST", tokensPerSec: 21, maxCount: 1},
      /*V: {tier: 4, energyCost: 22, petReq: "PQRSTU", tokensPerSec: 22, maxCount: 1},
      /*W: {tier: 4, energyCost: 23, petReq: "PQRSTV", tokensPerSec: 23, maxCount: 1},
      /*X: {tier: 4, energyCost: 24, petReq: "PQRSTW", tokensPerSec: 24, maxCount: 1},*/
    },
    
    //achievements
    achievementsTokensPerSec: 0,
    
    //run
    runTokenCost: 1,
    energyTier: 0,
  }
}
var game = getNewGame();
const latestVersion = "v2.4";


//Do not change
const tps = 30;
const checkRate = 10;


//debugging
const logActions = true;
const logUpdates = false;


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
  //organize pets by tier
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
  {title: "Respect<sup>2</sup>", description: "Buy the first yellow letter"},
  {title: "It's Free!", description: "Reduce the cost of a letter until it's free"},
  {title: "Finally done... right?", description: "Buy all yellow letters"},
  {title: "Respect<sup>3</sup>", description: "Buy the first purple letter"},
  {title: "Will this ever end?", description: "Buy all purple letters"},
  {title: "It's getting easier", description: "Buy an upgrade from the altar"},
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
  
  4000, 5000, 6000, 7000, 8000,
  9120, 10240, 11360, 12480, 13600,
  15200, 16800, 18400, 20000,
  
  23175, 25e3, 27e3, 29e3, 31e3,
  40e3, 47.5e3, 55e3, 62.5e3, 70e3,
  85e3, 95e3, 105e3, 115e3,
  
  Infinity,
];
const energyTiers = [
  {runReq: 5, currentGain: 0},
  {runReq: 10, currentGain: 1},
  {runReq: 14, currentGain: 10},
  
  {runReq: 19, currentGain: 33},
  {runReq: 24, currentGain: 100},
  {runReq: 28, currentGain: 150},
  
  {runReq: 33, currentGain: 200},
  {runReq: 38, currentGain: 350},
  {runReq: 42, currentGain: 600},
  
  {runReq: 47, currentGain: 850},
  {runReq: 52, currentGain: 1350},
  {runReq: 56, currentGain: 2250},
  
  {runReq: Infinity, currentGain: 3150},
];
const ranks = [
  {name: "0", nextName: "I", runReq: 14, tokenCost: 1e3, energyCost: 100},
  {name: "I", nextName: "II", runReq: 28, tokenCost: 10e3, energyCost: 1e3},
  {name: "II", nextName: "III", runReq: 42, tokenCost: 100e3, energyCost: 10e3},
  {name: "III", nextName: "End", runReq: Infinity, tokenCost: Infinity, energyCost: Infinity},
];


//Upgrades
const upgradesIcons = [
  {column: "tokens", cost: "tokens"},
  {column: "energy", cost: "energy"},
  {column: "tokens", cost: "tokens"},
];
const upgrades = [
  [
    [
      {
        title: "Better "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 1e3, gain: 1, reqRank: 1,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 2e3, gain: 2, reqRank: 1,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 3e3, gain: 3, reqRank: 1,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 4e3, gain: 4, reqRank: 1,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 5e3, gain: 5, reqRank: 1,
      },
      
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 7.5e3, gain: 2, reqRank: 2,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 10e3, gain: 4, reqRank: 2,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 12.5e3, gain: 6, reqRank: 2,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 15e3, gain: 8, reqRank: 2,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 17.5e3, gain: 10, reqRank: 2,
      },
      
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 100e3, gain: 5, reqRank: 3,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 200e3, gain: 10, reqRank: 3,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 300e3, gain: 15, reqRank: 3,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 400e3, gain: 20, reqRank: 3,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 500e3, gain: 25, reqRank: 3,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 3,
      },
    ],
    [
      {
        title: "Better "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 20e3, gain: 5, reqRank: 2,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 25e3, gain: 6, reqRank: 2,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 30e3, gain: 7, reqRank: 2,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 35e3, gain: 8, reqRank: 2,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 40e3, gain: 9, reqRank: 2,
      },
      
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 200e3, gain: 15, reqRank: 3,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 400e3, gain: 18, reqRank: 3,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 600e3, gain: 21, reqRank: 3,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 800e3, gain: 24, reqRank: 3,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 1e6, gain: 27, reqRank: 3,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 3,
      },
    ],
    [
      {
        title: "Better "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 300e3, gain: 60, reqRank: 3,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 600e3, gain: 70, reqRank: 3,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 900e3, gain: 80, reqRank: 3,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 1.2e6, gain: 90, reqRank: 3,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 1.5e6, gain: 100, reqRank: 3,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 3,
      },
    ],
  ],
  [
    [
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 130, gain: 4, reqRank: 2,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 170, gain: 3, reqRank: 2,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 210, gain: 2, reqRank: 2,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 250, gain: 1, reqRank: 2,
        affectedPet: petsInTier[0][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 300, gain: 1, reqRank: 2,
        affectedPet: petsInTier[0][0],
      },
      
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 500, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 650, gain: 3, reqRank: 3,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 800, gain: 3, reqRank: 3,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 950, gain: 1, reqRank: 3,
        affectedPet: petsInTier[0][1],
      },
      
      /*{
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 450,
        gain: 4,
        reqRank: 4,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 600,
        gain: 5,
        reqRank: 4,
        affectedPet: petsInTier[0][4],
      },
      
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 650,
        gain: 5,
        reqRank: 5,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 700,
        gain: 6,
        reqRank: 5,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 900,
        gain: 8,
        reqRank: 5,
        affectedPet: petsInTier[0][4],
      },*/
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 3,
        affectedPet: petsInTier[0][0],
      },
    ],
    [
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 1e3, gain: 60, reqRank: 3,
        affectedPet: petsInTier[1][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 2e3, gain: 45, reqRank: 3,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 3e3, gain: 45, reqRank: 3,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 4e3, gain: 20, reqRank: 3,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 5e3, gain: 10, reqRank: 3,
        affectedPet: petsInTier[1][0],
      },
      
      /*{
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 1e3, gain: 175-115,60 (100), reqRank: 4,
        affectedPet: petsInTier[1][4],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 2e3, gain: 140-90-45 (75), reqRank: 4,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 3e3, gain: 90-65-45 (50), reqRank: 4,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 4e3, gain: 60-40-20 (30), reqRank: 4,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 4e3, gain: 30-20-10 (10), reqRank: 4,
        affectedPet: petsInTier[1][0],
      },*/
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 3,
        affectedPet: petsInTier[0][0],
      },
    ],
  ],
  [
    [
      {
        title: "More "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][0])+" you can buy by ",
        cost: 100e3, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][0],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][1])+" you can buy by ",
        cost: 200e3, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][1],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][2])+" you can buy by ",
        cost: 300e3, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][3])+" you can buy by ",
        cost: 400e3, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][4])+" you can buy by ",
        cost: 500e3, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][4],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity, gain: 0, reqRank: 3,
      },
    ],
  ],
];


//Altar
const altarUpgrades = {
  A: [
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  B: [
    {tokenCost: 10e3, energyCost: 100, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  C: [
    {tokenCost: 10e3, energyCost: 100, nextReq: "A"},
    {tokenCost: 20e3, energyCost: 125, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  D: [
    {tokenCost: 10e3, energyCost: 100, nextReq: "B"},
    {tokenCost: 20e3, energyCost: 125, nextReq: "A"},
    {tokenCost: 30e3, energyCost: 150, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  E: [
    {tokenCost: 10e3, energyCost: 100, nextReq: "C"},
    {tokenCost: 20e3, energyCost: 125, nextReq: "B"},
    {tokenCost: 30e3, energyCost: 150, nextReq: "A"},
    {tokenCost: 40e3, energyCost: 175, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  F: [
    {tokenCost: 50e3, energyCost: 200, nextReq: "BCDE"},
    {tokenCost: 75e3, energyCost: 225, nextReq: "CDE"},
    {tokenCost: 100e3, energyCost: 250, nextReq: "DE"},
    {tokenCost: 125e3, energyCost: 275, nextReq: "E"},
    {tokenCost: 150e3, energyCost: 300, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  G: [
    {tokenCost: 50e3, energyCost: 200, nextReq: "BCDEF"},
    {tokenCost: 60e3, energyCost: 225, nextReq: "CDEF"},
    {tokenCost: 70e3, energyCost: 250, nextReq: "DEF"},
    {tokenCost: 80e3, energyCost: 275, nextReq: "EF"},
    {tokenCost: 90e3, energyCost: 300, nextReq: "F"},
    {tokenCost: 100e3, energyCost: 350, nextReq: "ABCDE"},
    {tokenCost: 110e3, energyCost: 375, nextReq: "BCDE"},
    {tokenCost: 120e3, energyCost: 400, nextReq: "CDE"},
    {tokenCost: 130e3, energyCost: 425, nextReq: "DE"},
    {tokenCost: 140e3, energyCost: 450, nextReq: "E"},
    {tokenCost: 150e3, energyCost: 500, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  H: [
    {tokenCost: 50e3, energyCost: 200, nextReq: "BCDEG"},
    {tokenCost: 60e3, energyCost: 225, nextReq: "CDEG"},
    {tokenCost: 70e3, energyCost: 250, nextReq: "DEG"},
    {tokenCost: 80e3, energyCost: 275, nextReq: "EG"},
    {tokenCost: 90e3, energyCost: 300, nextReq: "G"},
    {tokenCost: 100e3, energyCost: 350, nextReq: "ABCDEF"},
    {tokenCost: 110e3, energyCost: 375, nextReq: "BCDEF"},
    {tokenCost: 120e3, energyCost: 400, nextReq: "CDEF"},
    {tokenCost: 130e3, energyCost: 425, nextReq: "DEF"},
    {tokenCost: 140e3, energyCost: 450, nextReq: "EF"},
    {tokenCost: 150e3, energyCost: 475, nextReq: "F"},
    {tokenCost: 200e3, energyCost: 500, nextReq: "ABCDE"},
    {tokenCost: 210e3, energyCost: 525, nextReq: "BCDE"},
    {tokenCost: 220e3, energyCost: 550, nextReq: "CDE"},
    {tokenCost: 230e3, energyCost: 575, nextReq: "DE"},
    {tokenCost: 240e3, energyCost: 600, nextReq: "E"},
    {tokenCost: 250e3, energyCost: 650, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  I: [
    {tokenCost: 50e3, energyCost: 200, nextReq: "BCDEH"},
    {tokenCost: 60e3, energyCost: 225, nextReq: "CDEH"},
    {tokenCost: 70e3, energyCost: 250, nextReq: "DEH"},
    {tokenCost: 80e3, energyCost: 275, nextReq: "EH"},
    {tokenCost: 90e3, energyCost: 300, nextReq: "H"},
    {tokenCost: 100e3, energyCost: 350, nextReq: "ABCDEG"},
    {tokenCost: 110e3, energyCost: 375, nextReq: "BCDEG"},
    {tokenCost: 120e3, energyCost: 400, nextReq: "CDEG"},
    {tokenCost: 130e3, energyCost: 425, nextReq: "DEG"},
    {tokenCost: 140e3, energyCost: 450, nextReq: "EG"},
    {tokenCost: 150e3, energyCost: 475, nextReq: "G"},
    {tokenCost: 200e3, energyCost: 500, nextReq: "ABCDEF"},
    {tokenCost: 210e3, energyCost: 525, nextReq: "BCDEF"},
    {tokenCost: 220e3, energyCost: 550, nextReq: "CDEF"},
    {tokenCost: 230e3, energyCost: 575, nextReq: "DEF"},
    {tokenCost: 240e3, energyCost: 600, nextReq: "EF"},
    {tokenCost: 250e3, energyCost: 625, nextReq: "F"},
    {tokenCost: 300e3, energyCost: 650, nextReq: "ABCDE"},
    {tokenCost: 310e3, energyCost: 675, nextReq: "BCDE"},
    {tokenCost: 320e3, energyCost: 700, nextReq: "CDE"},
    {tokenCost: 330e3, energyCost: 725, nextReq: "DE"},
    {tokenCost: 340e3, energyCost: 750, nextReq: "E"},
    {tokenCost: 350e3, energyCost: 800, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  J: [
    {tokenCost: 50e3, energyCost: 200, nextReq: "BCDEI"},
    {tokenCost: 60e3, energyCost: 225, nextReq: "CDEI"},
    {tokenCost: 70e3, energyCost: 250, nextReq: "DEI"},
    {tokenCost: 80e3, energyCost: 275, nextReq: "EI"},
    {tokenCost: 90e3, energyCost: 300, nextReq: "I"},
    {tokenCost: 100e3, energyCost: 350, nextReq: "ABCDEH"},
    {tokenCost: 110e3, energyCost: 375, nextReq: "BCDEH"},
    {tokenCost: 120e3, energyCost: 400, nextReq: "CDEH"},
    {tokenCost: 130e3, energyCost: 425, nextReq: "DEH"},
    {tokenCost: 140e3, energyCost: 450, nextReq: "EH"},
    {tokenCost: 150e3, energyCost: 475, nextReq: "H"},
    {tokenCost: 200e3, energyCost: 500, nextReq: "ABCDEG"},
    {tokenCost: 210e3, energyCost: 525, nextReq: "BCDEG"},
    {tokenCost: 220e3, energyCost: 550, nextReq: "CDEG"},
    {tokenCost: 230e3, energyCost: 575, nextReq: "DEG"},
    {tokenCost: 240e3, energyCost: 600, nextReq: "EG"},
    {tokenCost: 250e3, energyCost: 625, nextReq: "G"},
    {tokenCost: 300e3, energyCost: 650, nextReq: "ABCDEF"},
    {tokenCost: 310e3, energyCost: 675, nextReq: "BCDEF"},
    {tokenCost: 320e3, energyCost: 700, nextReq: "CDEF"},
    {tokenCost: 330e3, energyCost: 725, nextReq: "DEF"},
    {tokenCost: 340e3, energyCost: 750, nextReq: "EF"},
    {tokenCost: 350e3, energyCost: 775, nextReq: "F"},
    {tokenCost: 400e3, energyCost: 800, nextReq: "ABCDE"},
    {tokenCost: 410e3, energyCost: 825, nextReq: "BCDE"},
    {tokenCost: 420e3, energyCost: 850, nextReq: "CDE"},
    {tokenCost: 430e3, energyCost: 875, nextReq: "DE"},
    {tokenCost: 440e3, energyCost: 900, nextReq: "E"},
    {tokenCost: 450e3, energyCost: 950, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  K: [
    {tokenCost: 200e3, energyCost: 250, nextReq: "GHIJ"},
    {tokenCost: 225e3, energyCost: 300, nextReq: "HIJ"},
    {tokenCost: 250e3, energyCost: 350, nextReq: "IJ"},
    {tokenCost: 275e3, energyCost: 400, nextReq: "J"},
    {tokenCost: 300e3, energyCost: 500, nextReq: "ABCDE"},
    {tokenCost: 350e3, energyCost: 650, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  L: [
    {tokenCost: 200e3, energyCost: 250, nextReq: "GHIJK"},
    {tokenCost: 225e3, energyCost: 300, nextReq: "HIJK"},
    {tokenCost: 250e3, energyCost: 350, nextReq: "IJK"},
    {tokenCost: 275e3, energyCost: 400, nextReq: "JK"},
    {tokenCost: 300e3, energyCost: 500, nextReq: "ABCDEK"},
    {tokenCost: 350e3, energyCost: 625, nextReq: "K"},
    {tokenCost: 400e3, energyCost: 650, nextReq: "FGHIJ"},
    {tokenCost: 425e3, energyCost: 700, nextReq: "GHIJ"},
    {tokenCost: 450e3, energyCost: 750, nextReq: "HIJ"},
    {tokenCost: 475e3, energyCost: 800, nextReq: "IJ"},
    {tokenCost: 500e3, energyCost: 850, nextReq: "J"},
    {tokenCost: 550e3, energyCost: 900, nextReq: "ABCDE"},
    {tokenCost: 600e3, energyCost: 1100, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  M: [
    {tokenCost: 200e3, energyCost: 250, nextReq: "GHIJL"},
    {tokenCost: 225e3, energyCost: 300, nextReq: "HIJL"},
    {tokenCost: 250e3, energyCost: 350, nextReq: "IJL"},
    {tokenCost: 275e3, energyCost: 400, nextReq: "JL"},
    {tokenCost: 300e3, energyCost: 500, nextReq: "ABCDEL"},
    {tokenCost: 350e3, energyCost: 625, nextReq: "L"},
    {tokenCost: 400e3, energyCost: 650, nextReq: "FGHIJK"},
    {tokenCost: 425e3, energyCost: 700, nextReq: "GHIJK"},
    {tokenCost: 450e3, energyCost: 750, nextReq: "HIJK"},
    {tokenCost: 475e3, energyCost: 800, nextReq: "IJK"},
    {tokenCost: 500e3, energyCost: 850, nextReq: "JK"},
    {tokenCost: 550e3, energyCost: 900, nextReq: "ABCDEK"},
    {tokenCost: 600e3, energyCost: 1025, nextReq: "K"},
    {tokenCost: 650e3, energyCost: 1100, nextReq: "FGHIJ"},
    {tokenCost: 675e3, energyCost: 1150, nextReq: "GHIJ"},
    {tokenCost: 700e3, energyCost: 1200, nextReq: "HIJ"},
    {tokenCost: 725e3, energyCost: 1250, nextReq: "IJ"},
    {tokenCost: 750e3, energyCost: 1300, nextReq: "J"},
    {tokenCost: 800e3, energyCost: 1375, nextReq: "ABCDE"},
    {tokenCost: 850e3, energyCost: 1500, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  N: [
    {tokenCost: 200e3, energyCost: 250, nextReq: "GHIJM"},
    {tokenCost: 225e3, energyCost: 300, nextReq: "HIJM"},
    {tokenCost: 250e3, energyCost: 350, nextReq: "IJM"},
    {tokenCost: 275e3, energyCost: 400, nextReq: "JM"},
    {tokenCost: 300e3, energyCost: 500, nextReq: "ABCDEM"},
    {tokenCost: 350e3, energyCost: 625, nextReq: "M"},
    {tokenCost: 400e3, energyCost: 650, nextReq: "FGHIJL"},
    {tokenCost: 425e3, energyCost: 700, nextReq: "GHIJL"},
    {tokenCost: 450e3, energyCost: 750, nextReq: "HIJL"},
    {tokenCost: 475e3, energyCost: 800, nextReq: "IJL"},
    {tokenCost: 500e3, energyCost: 850, nextReq: "JL"},
    {tokenCost: 550e3, energyCost: 900, nextReq: "ABCDEL"},
    {tokenCost: 600e3, energyCost: 1025, nextReq: "L"},
    {tokenCost: 650e3, energyCost: 1100, nextReq: "FGHIJK"},
    {tokenCost: 675e3, energyCost: 1150, nextReq: "GHIJK"},
    {tokenCost: 700e3, energyCost: 1200, nextReq: "HIJK"},
    {tokenCost: 725e3, energyCost: 1250, nextReq: "IJK"},
    {tokenCost: 750e3, energyCost: 1300, nextReq: "JK"},
    {tokenCost: 800e3, energyCost: 1375, nextReq: "ABCDEK"},
    {tokenCost: 850e3, energyCost: 1500, nextReq: "K"},
    {tokenCost: 900e3, energyCost: 1600, nextReq: "FGHIJ"},
    {tokenCost: 925e3, energyCost: 1650, nextReq: "GHIJ"},
    {tokenCost: 950e3, energyCost: 1700, nextReq: "HIJ"},
    {tokenCost: 975e3, energyCost: 1750, nextReq: "IJ"},
    {tokenCost: 1e6, energyCost: 1800, nextReq: "J"},
    {tokenCost: 1.1e6, energyCost: 1875, nextReq: "ABCDE"},
    {tokenCost: 1.15e6, energyCost: 2000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  O: [
    {tokenCost: 200e3, energyCost: 250, nextReq: "GHIJN"},
    {tokenCost: 225e3, energyCost: 300, nextReq: "HIJN"},
    {tokenCost: 250e3, energyCost: 350, nextReq: "IJN"},
    {tokenCost: 275e3, energyCost: 400, nextReq: "JN"},
    {tokenCost: 300e3, energyCost: 500, nextReq: "ABCDEN"},
    {tokenCost: 350e3, energyCost: 625, nextReq: "N"},
    {tokenCost: 400e3, energyCost: 650, nextReq: "FGHIJM"},
    {tokenCost: 425e3, energyCost: 700, nextReq: "GHIJM"},
    {tokenCost: 450e3, energyCost: 750, nextReq: "HIJM"},
    {tokenCost: 475e3, energyCost: 800, nextReq: "IJM"},
    {tokenCost: 500e3, energyCost: 850, nextReq: "JM"},
    {tokenCost: 550e3, energyCost: 900, nextReq: "ABCDEM"},
    {tokenCost: 600e3, energyCost: 1025, nextReq: "M"},
    {tokenCost: 650e3, energyCost: 1100, nextReq: "FGHIJL"},
    {tokenCost: 675e3, energyCost: 1150, nextReq: "GHIJL"},
    {tokenCost: 700e3, energyCost: 1200, nextReq: "HIJL"},
    {tokenCost: 725e3, energyCost: 1250, nextReq: "IJL"},
    {tokenCost: 750e3, energyCost: 1300, nextReq: "JL"},
    {tokenCost: 800e3, energyCost: 1375, nextReq: "ABCDEL"},
    {tokenCost: 850e3, energyCost: 1500, nextReq: "L"},
    {tokenCost: 900e3, energyCost: 1600, nextReq: "FGHIJK"},
    {tokenCost: 925e3, energyCost: 1650, nextReq: "GHIJK"},
    {tokenCost: 950e3, energyCost: 1700, nextReq: "HIJK"},
    {tokenCost: 975e3, energyCost: 1750, nextReq: "IJK"},
    {tokenCost: 1e6, energyCost: 1800, nextReq: "JK"},
    {tokenCost: 1.1e6, energyCost: 1875, nextReq: "ABCDEK"},
    {tokenCost: 1.15e6, energyCost: 2000, nextReq: "K"},
    {tokenCost: 1.2e6, energyCost: 2050, nextReq: "FGHIJ"},
    {tokenCost: 1.225e6, energyCost: 2100, nextReq: "GHIJ"},
    {tokenCost: 1.25e6, energyCost: 2150, nextReq: "HIJ"},
    {tokenCost: 1.275e6, energyCost: 2200, nextReq: "IJ"},
    {tokenCost: 1.3e6, energyCost: 2250, nextReq: "J"},
    {tokenCost: 1.35e6, energyCost: 2300, nextReq: "ABCDE"},
    {tokenCost: 1.4e6, energyCost: 2500, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  P: [
    {tokenCost: 600e3, energyCost: 1000, nextReq: "LMNO"},
    {tokenCost: 700e3, energyCost: 2000, nextReq: "MNO"},
    {tokenCost: 800e3, energyCost: 3000, nextReq: "NO"},
    {tokenCost: 900e3, energyCost: 4000, nextReq: "O"},
    {tokenCost: 1e6, energyCost: 5000, nextReq: "FGHIJ"},
    {tokenCost: 1.25e6, energyCost: 7000, nextReq: "ABCDE"},
    {tokenCost: 1.5e6, energyCost: 9000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  Q: [
    {tokenCost: 600e3, energyCost: 1000, nextReq: "LMNOP"},
    {tokenCost: 700e3, energyCost: 2000, nextReq: "MNOP"},
    {tokenCost: 800e3, energyCost: 3000, nextReq: "NOP"},
    {tokenCost: 900e3, energyCost: 4000, nextReq: "OP"},
    {tokenCost: 1e6, energyCost: 5000, nextReq: "FGHIJP"},
    {tokenCost: 1.15e6, energyCost: 6000, nextReq: "ABCDEP"},
    {tokenCost: 1.25e6, energyCost: 7000, nextReq: "P"},
    {tokenCost: 1.45e6, energyCost: 8000, nextReq: "KLMNO"},
    {tokenCost: 1.55e6, energyCost: 9000, nextReq: "LMNO"},
    {tokenCost: 1.65e6, energyCost: 10000, nextReq: "MNO"},
    {tokenCost: 1.75e6, energyCost: 11000, nextReq: "NO"},
    {tokenCost: 1.85e6, energyCost: 12000, nextReq: "O"},
    {tokenCost: 2e6, energyCost: 13000, nextReq: "FGHIJ"},
    {tokenCost: 2.25e6, energyCost: 15000, nextReq: "ABCDE"},
    {tokenCost: 2.5e6, energyCost: 17000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  R: [
    {tokenCost: 600e3, energyCost: 1000, nextReq: "LMNOQ"},
    {tokenCost: 700e3, energyCost: 2000, nextReq: "MNOQ"},
    {tokenCost: 800e3, energyCost: 3000, nextReq: "NOQ"},
    {tokenCost: 900e3, energyCost: 4000, nextReq: "OQ"},
    {tokenCost: 1e6, energyCost: 5000, nextReq: "FGHIJQ"},
    {tokenCost: 1.15e6, energyCost: 6000, nextReq: "ABCDEQ"},
    {tokenCost: 1.25e6, energyCost: 7000, nextReq: "Q"},
    {tokenCost: 1.45e6, energyCost: 8500, nextReq: "KLMNOP"},
    {tokenCost: 1.55e6, energyCost: 9500, nextReq: "LMNOP"},
    {tokenCost: 1.65e6, energyCost: 10500, nextReq: "MNOP"},
    {tokenCost: 1.75e6, energyCost: 11500, nextReq: "NOP"},
    {tokenCost: 1.85e6, energyCost: 12500, nextReq: "OP"},
    {tokenCost: 1.95e6, energyCost: 13500, nextReq: "FGHIJP"},
    {tokenCost: 2.05e6, energyCost: 14500, nextReq: "ABCDEP"},
    {tokenCost: 2.2e6, energyCost: 15500, nextReq: "P"},
    {tokenCost: 2.4e6, energyCost: 17500, nextReq: "KLMNO"},
    {tokenCost: 2.5e6, energyCost: 13500, nextReq: "LMNO"},
    {tokenCost: 2.6e6, energyCost: 14500, nextReq: "MNO"},
    {tokenCost: 2.7e6, energyCost: 15500, nextReq: "NO"},
    {tokenCost: 2.8e6, energyCost: 16500, nextReq: "O"},
    {tokenCost: 3e6, energyCost: 17500, nextReq: "FGHIJ"},
    {tokenCost: 3.25e6, energyCost: 20000, nextReq: "ABCDE"},
    {tokenCost: 3.5e6, energyCost: 22500, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  S: [
    {tokenCost: 600e3, energyCost: 1000, nextReq: "LMNOR"},
    {tokenCost: 700e3, energyCost: 2000, nextReq: "MNOR"},
    {tokenCost: 800e3, energyCost: 3000, nextReq: "NOR"},
    {tokenCost: 900e3, energyCost: 4000, nextReq: "OR"},
    {tokenCost: 1e6, energyCost: 5000, nextReq: "FGHIJR"},
    {tokenCost: 1.15e6, energyCost: 6000, nextReq: "ABCDER"},
    {tokenCost: 1.25e6, energyCost: 7000, nextReq: "R"},
    {tokenCost: 1.45e6, energyCost: 8500, nextReq: "KLMNOQ"},
    {tokenCost: 1.55e6, energyCost: 9500, nextReq: "LMNOQ"},
    {tokenCost: 1.65e6, energyCost: 10500, nextReq: "MNOQ"},
    {tokenCost: 1.75e6, energyCost: 11500, nextReq: "NOQ"},
    {tokenCost: 1.85e6, energyCost: 12500, nextReq: "OQ"},
    {tokenCost: 1.95e6, energyCost: 13500, nextReq: "FGHIJQ"},
    {tokenCost: 2.05e6, energyCost: 14500, nextReq: "ABCDEQ"},
    {tokenCost: 2.2e6, energyCost: 15500, nextReq: "Q"},
    {tokenCost: 2.4e6, energyCost: 17500, nextReq: "KLMNOP"},
    {tokenCost: 2.5e6, energyCost: 13500, nextReq: "LMNOP"},
    {tokenCost: 2.6e6, energyCost: 14500, nextReq: "MNOP"},
    {tokenCost: 2.7e6, energyCost: 15500, nextReq: "NOP"},
    {tokenCost: 2.8e6, energyCost: 16500, nextReq: "OP"},
    {tokenCost: 2.9e6, energyCost: 17500, nextReq: "FGHIJP"},
    {tokenCost: 3e6, energyCost: 18500, nextReq: "ABCDEP"},
    {tokenCost: 3.1e6, energyCost: 19500, nextReq: "P"},
    {tokenCost: 3.3e6, energyCost: 21000, nextReq: "KLMNO"},
    {tokenCost: 3.4e6, energyCost: 22000, nextReq: "LMNO"},
    {tokenCost: 3.5e6, energyCost: 23000, nextReq: "MNO"},
    {tokenCost: 3.6e6, energyCost: 24000, nextReq: "NO"},
    {tokenCost: 3.7e6, energyCost: 25000, nextReq: "O"},
    {tokenCost: 3.8e6, energyCost: 26000, nextReq: "FGHIJ"},
    {tokenCost: 4e6, energyCost: 28000, nextReq: "ABCDE"},
    {tokenCost: 4.25e6, energyCost: 30000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  T: [
    {tokenCost: 600e3, energyCost: 1000, nextReq: "LMNOS"},
    {tokenCost: 700e3, energyCost: 2000, nextReq: "MNOS"},
    {tokenCost: 800e3, energyCost: 3000, nextReq: "NOS"},
    {tokenCost: 900e3, energyCost: 4000, nextReq: "OS"},
    {tokenCost: 1e6, energyCost: 5000, nextReq: "FGHIJS"},
    {tokenCost: 1.15e6, energyCost: 6000, nextReq: "ABCDES"},
    {tokenCost: 1.25e6, energyCost: 7000, nextReq: "S"},
    {tokenCost: 1.45e6, energyCost: 8500, nextReq: "KLMNOR"},
    {tokenCost: 1.55e6, energyCost: 9500, nextReq: "LMNOR"},
    {tokenCost: 1.65e6, energyCost: 10500, nextReq: "MNOR"},
    {tokenCost: 1.75e6, energyCost: 11500, nextReq: "NOR"},
    {tokenCost: 1.85e6, energyCost: 12500, nextReq: "OR"},
    {tokenCost: 1.95e6, energyCost: 13500, nextReq: "FGHIJR"},
    {tokenCost: 2.05e6, energyCost: 14500, nextReq: "ABCDER"},
    {tokenCost: 2.2e6, energyCost: 15500, nextReq: "R"},
    {tokenCost: 2.4e6, energyCost: 17500, nextReq: "KLMNOQ"},
    {tokenCost: 2.5e6, energyCost: 13500, nextReq: "LMNOQ"},
    {tokenCost: 2.6e6, energyCost: 14500, nextReq: "MNOQ"},
    {tokenCost: 2.7e6, energyCost: 15500, nextReq: "NOQ"},
    {tokenCost: 2.8e6, energyCost: 16500, nextReq: "OQ"},
    {tokenCost: 2.9e6, energyCost: 17500, nextReq: "FGHIJQ"},
    {tokenCost: 3e6, energyCost: 18500, nextReq: "ABCDEQ"},
    {tokenCost: 3.1e6, energyCost: 19500, nextReq: "Q"},
    {tokenCost: 3.3e6, energyCost: 21000, nextReq: "KLMNOP"},
    {tokenCost: 3.4e6, energyCost: 22000, nextReq: "LMNOP"},
    {tokenCost: 3.5e6, energyCost: 23000, nextReq: "MNOP"},
    {tokenCost: 3.6e6, energyCost: 24000, nextReq: "NOP"},
    {tokenCost: 3.7e6, energyCost: 25000, nextReq: "OP"},
    {tokenCost: 3.8e6, energyCost: 26000, nextReq: "FGHIJP"},
    {tokenCost: 3.9e6, energyCost: 27000, nextReq: "ABCDEP"},
    {tokenCost: 4e6, energyCost: 28000, nextReq: "P"},
    {tokenCost: 4.2e6, energyCost: 30000, nextReq: "KLMNO"},
    {tokenCost: 4.3e6, energyCost: 31000, nextReq: "LMNO"},
    {tokenCost: 4.4e6, energyCost: 32000, nextReq: "MNO"},
    {tokenCost: 4.5e6, energyCost: 33000, nextReq: "NO"},
    {tokenCost: 4.6e6, energyCost: 34000, nextReq: "O"},
    {tokenCost: 4.7e6, energyCost: 35000, nextReq: "FGHIJ"},
    {tokenCost: 4.95e6, energyCost: 37500, nextReq: "ABCDE"},
    {tokenCost: 5.25e6, energyCost: 40000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
}


//Tabs
const tabData = {
  options: "green",
  achievements: "green",
  run: "blue",
  shop: "yellow",
  upgrades: "purple",
  altar: "purple",
  rebirth: "red",
}


//Functions
function makeColoredPetSpan(pet, content) {
  content = content||pet
  return "<span class=\""+tierColors[game.pets[pet].tier]+"Text\">"+content+"</span>";
}
