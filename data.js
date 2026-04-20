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
    
    //other
    tab: "run",
    lastUpdate: null,
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
    lastUpdate: null,
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
    lastUpdate: null,
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
    lastUpdate: null,
    version: "v2.3",
  },
  "v2.5": {
    //resources
    tokens: 1e6,
    energy: 100e3,
    
    //pets & shop
    hasPets: "TSRQPONMLKJIHGFEDCBAAAAABBBBCCCCDDDDEEEE",
    
    //achievements
    hasAchievements: ["1","2","3","4","5","6","7","8","9","10","11"],
    
    //run
    runCount: 56,
    highestEnergyTier: 12,
    rank: 3,
    
    //upgrades
    upgradesCol0: [15, 10, 5, 0, 0],
    upgradesCol1: [9, 0, 0, 0, 0],
    upgradesCol2: [5, 0, 0, 0, 0],
    
    //altar upgrades
    altarUpgrades: {
      A:0,B:1,C:2,D:3,E:4,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:5,Q:5,R:5,S:5,T:5,U:0,V:0,W:0,X:0,Y:0,Z:0
    },
    
    //other
    tab: "run",
    lastUpdate: null,
    version: "v2.5",
  },
}

function getNewGame() {
  return {
    //resources
    tokensPerSec: 1,
    
    //achievements
    achievementsTokensPerSec: 0,
    
    //run
    runTokenCost: 1,
    energyTier: 0,
    
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
      U: {tier: 4, energyCost: 50000, petReq: "PQRST", tokensPerSec: 15000, maxCount: 1},
      V: {tier: 4, energyCost: 75000, petReq: "PQRSTU", tokensPerSec: 25000, maxCount: 1},
      W: {tier: 4, energyCost: 100000, petReq: "PQRSTV", tokensPerSec: 35000, maxCount: 1},
      X: {tier: 4, energyCost: 150000, petReq: "PQRSTW", tokensPerSec: 45000, maxCount: 1},
    },
  }
}
var game = getNewGame();
const latestVersion = "v2.5";


//Do not change
const tps = 30;
const checkRate = 10;


//debugging
const logActions = false;
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
  {title: "Final Respect", description: "Buy the first red letter"},
  {title: "Finally the end", description: "Buy all red letters"},
  {title: "They're all free!", description: "Reduce the cost of all green letters until they are free and sacrifice no letters"},
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
  
  130e3, 165e3, 200e3, 235e3, 270e3,
  300e3, 350e3, 400e3, 450e3, 500e3,
  550e3, 625e3, 700e3, 775e3, 850e3,
  /*1e6, 1.125e6, 1.25e6, 1.375e6, 1.5e6,*/
  
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
  
  {runReq: 61, currentGain: 3150},
  {runReq: 66, currentGain: 5000},
  {runReq: 71, currentGain: 7500},
  /*{runReq: 75, currentGain: 12500},*/
  
  {runReq: Infinity, currentGain: 12500/*20000*/},
];
const ranks = [
  {name: "0", nextName: "I", runReq: 14, tokenCost: 1e3, energyCost: 100},
  {name: "I", nextName: "II", runReq: 28, tokenCost: 10e3, energyCost: 1e3},
  {name: "II", nextName: "III", runReq: 42, tokenCost: 100e3, energyCost: 10e3},
  {name: "III", nextName: "IV", runReq: 56, tokenCost: 1e6, energyCost: 100e3},
  {name: "IV", nextName: "V", runReq: 61, tokenCost: 5e6, energyCost: 100e3},
  {name: "V", nextName: "VI", runReq: 66, tokenCost: 10e6, energyCost: 100e3},
  {name: "VI", nextName: "End", runReq: Infinity, tokenCost: Infinity, energyCost: Infinity},
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
      //rank 1
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
      //rank 2
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
      //rank 3
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
      //rank 4
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 1e6, gain: 10, reqRank: 4,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 1.25e6, gain: 20, reqRank: 4,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 1.5e6, gain: 30, reqRank: 4,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 1.75e6, gain: 40, reqRank: 4,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 2e6, gain: 50, reqRank: 4,
      },
      //rank 5
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 2.25e6, gain: 21, reqRank: 5,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 2.5e6, gain: 37, reqRank: 5,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 2.75e6, gain: 42, reqRank: 5,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 3e6, gain: 47, reqRank: 5,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 3.5e6, gain: 51, reqRank: 5,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 5,
      },
    ],//maxed
    [
      //rank 2
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
      //rank 3
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
      //rank 4
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 1.5e6, gain: 35, reqRank: 4,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 2.25e6, gain: 45, reqRank: 4,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 3e6, gain: 55, reqRank: 4,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 3.75e6, gain: 65, reqRank: 4,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 4.5e6, gain: 75, reqRank: 4,
      },
      //rank 5
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 5e6, gain: 50, reqRank: 5,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 5.625e6, gain: 63, reqRank: 5,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 6.25e6, gain: 75, reqRank: 5,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 6.875e6, gain: 88, reqRank: 5,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 7.5e6, gain: 100, reqRank: 5,
      },
      //rank 6
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 8e6, gain: 80, reqRank: 6,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 9e6, gain: 98, reqRank: 6,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 10e6, gain: 116, reqRank: 6,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 11e6, gain: 133, reqRank: 6,
      },
      {
        title: "The Best "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 12e6, gain: 149, reqRank: 6,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
      },
    ],//maxed
    [
      //rank 3
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
      //rank 4
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 2e6, gain: 120, reqRank: 4,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 3e6, gain: 140, reqRank: 4,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 4e6, gain: 160, reqRank: 4,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 5e6, gain: 180, reqRank: 4,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 6e6, gain: 200, reqRank: 4,
      },
      //rank 5
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 7.5e6, gain: 200, reqRank: 5,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 8.75e6, gain: 230, reqRank: 5,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 10e6, gain: 260, reqRank: 5,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 11.25e6, gain: 290, reqRank: 5,
      },
      {
        title: "Much Better "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 12.5e6, gain: 320, reqRank: 5,
      },
      //rank 6
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 15e6, gain: 400, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 17.5e6, gain: 500, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 20e6, gain: 600, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 22.5e6, gain: 700, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 25e6, gain: 800, reqRank: 6,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 7,
      },
    ],
    [
      //rank 4
      {
        title: "Better "+makeColoredPetSpan(petsInTier[3][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][0])+" by ",
        cost: 3e6, gain: 150, reqRank: 4,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[3][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][1])+" by ",
        cost: 4.5e6, gain: 300, reqRank: 4,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[3][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][2])+" by ",
        cost: 6e6, gain: 450, reqRank: 4,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[3][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][3])+" by ",
        cost: 7.5e6, gain: 600, reqRank: 4,
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[3][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][4])+" by ",
        cost: 9e6, gain: 750, reqRank: 4,
      },
      //rank 5
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[3][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][0])+" by ",
        cost: 10e6, gain: 300, reqRank: 5,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[3][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][1])+" by ",
        cost: 12.5e6, gain: 600, reqRank: 5,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[3][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][2])+" by ",
        cost: 15e6, gain: 900, reqRank: 5,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[3][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][3])+" by ",
        cost: 17.5e6, gain: 1200, reqRank: 5,
      },
      {
        title: "Even Better "+makeColoredPetSpan(petsInTier[3][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][4])+" by ",
        cost: 20e6, gain: 1500, reqRank: 5,
      },
      //rank 6
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[3][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][0])+" by ",
        cost: 20e6, gain: 500, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[3][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][1])+" by ",
        cost: 25e6, gain: 1000, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[3][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][2])+" by ",
        cost: 30e6, gain: 1500, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[3][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][3])+" by ",
        cost: 35e6, gain: 2000, reqRank: 6,
      },
      {
        title: "Way Better "+makeColoredPetSpan(petsInTier[3][4]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[3][4])+" by ",
        cost: 40e6, gain: 2500, reqRank: 6,
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
      },
    ],
    [
      //rank 5
      {
        title: "Better "+makeColoredPetSpan(petsInTier[4][0]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[4][0])+" by ",
        cost: 15e6, gain: 3000, reqRank: 5,
        affectedPet: petsInTier[4][0],
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[4][1]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[4][1])+" by ",
        cost: 20e6, gain: 6000, reqRank: 5,
        affectedPet: petsInTier[4][1],
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[4][2]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[4][2])+" by ",
        cost: 25e6, gain: 9000, reqRank: 5,
        affectedPet: petsInTier[4][2],
      },
      {
        title: "Better "+makeColoredPetSpan(petsInTier[4][3]),
        description: "Increase the production<br>of "+makeColoredPetSpan(petsInTier[4][3])+" by ",
        cost: 30e6, gain: 12000, reqRank: 5,
        affectedPet: petsInTier[4][3],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 5,
      },
    ],
  ],
  [
    [
      //rank 2
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 130, gain: 4, reqRank: 2,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 170, gain: 3, reqRank: 2,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 210, gain: 2, reqRank: 2,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 250, gain: 1, reqRank: 2,
        affectedPet: petsInTier[0][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Lower the <br>ost of "+makeColoredPetSpan(petsInTier[0][0])+" by ",
        cost: 300, gain: 1, reqRank: 2,
        affectedPet: petsInTier[0][0],
      },
      //rank 3
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 500, gain: 4, reqRank: 3,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 650, gain: 3, reqRank: 3,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][2])+" by ",
        cost: 800, gain: 3, reqRank: 3,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][1])+" by ",
        cost: 950, gain: 1, reqRank: 3,
        affectedPet: petsInTier[0][1],
      },
      //rank 4
      {
        title: "Much Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 1000, gain: 5, reqRank: 4,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[0][3])+" by ",
        cost: 2000, gain: 4, reqRank: 4,
        affectedPet: petsInTier[0][3],
      },
      //rank 5
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 2333, gain: 5, reqRank: 5,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 3667, gain: 6, reqRank: 5,
        affectedPet: petsInTier[0][4],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Lower the cost of "+makeColoredPetSpan(petsInTier[0][4])+" by ",
        cost: 5000, gain: 8, reqRank: 5,
        affectedPet: petsInTier[0][4],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 5,
        affectedPet: petsInTier[0][0],
      },
    ],//maxed
    [
      //rank 3
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 1e3, gain: 60, reqRank: 3,
        affectedPet: petsInTier[1][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 2e3, gain: 45, reqRank: 3,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 3e3, gain: 45, reqRank: 3,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 4e3, gain: 20, reqRank: 3,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 5e3, gain: 10, reqRank: 3,
        affectedPet: petsInTier[1][0],
      },
      //rank 4
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 3e3, gain: 115, reqRank: 4,
        affectedPet: petsInTier[1][4],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 6e3, gain: 90, reqRank: 4,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 9e3, gain: 65, reqRank: 4,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 12e3, gain: 40, reqRank: 4,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 15e3, gain: 20, reqRank: 4,
        affectedPet: petsInTier[1][0],
      },
      //rank 5
      {
        title: "Much Cheaper "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 5e3, gain: 175, reqRank: 5,
        affectedPet: petsInTier[1][4],
      },
      {
        title: "Much Cheaper "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 10e3, gain: 140, reqRank: 5,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Much Cheaper "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 15e3, gain: 90, reqRank: 5,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Much Cheaper "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 20e3, gain: 60, reqRank: 5,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Much Cheaper "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 25e3, gain: 30, reqRank: 5,
        affectedPet: petsInTier[1][0],
      },
      //rank 6
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][4])+" by ",
        cost: 10e3, gain: 100, reqRank: 6,
        affectedPet: petsInTier[1][4],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][3])+" by ",
        cost: 15e3, gain: 75, reqRank: 6,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][2])+" by ",
        cost: 20e3, gain: 50, reqRank: 6,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][1])+" by ",
        cost: 25e3, gain: 30, reqRank: 6,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "The Cheapest "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[1][0])+" by ",
        cost: 30e3, gain: 10, reqRank: 6,
        affectedPet: petsInTier[1][0],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
        affectedPet: petsInTier[0][0],
      },
    ],//maxed
    [
      //rank 4
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 5e3, gain: 600, reqRank: 4,
        affectedPet: petsInTier[2][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 10e3, gain: 450, reqRank: 4,
        affectedPet: petsInTier[2][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 15e3, gain: 350, reqRank: 4,
        affectedPet: petsInTier[2][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 20e3, gain: 225, reqRank: 4,
        affectedPet: petsInTier[2][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 25e3, gain: 150, reqRank: 4,
        affectedPet: petsInTier[2][0],
      },
      //rank 5
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 15e3, gain: 650, reqRank: 5,
        affectedPet: petsInTier[2][4],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 22.5e3, gain: 550, reqRank: 5,
        affectedPet: petsInTier[2][3],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 30e3, gain: 450, reqRank: 5,
        affectedPet: petsInTier[2][2],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 37.5e3, gain: 350, reqRank: 5,
        affectedPet: petsInTier[2][1],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 45e3, gain: 250, reqRank: 5,
        affectedPet: petsInTier[2][0],
      },
      //rank 6
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][4])+" by ",
        cost: 30e3, gain: 700, reqRank: 6,
        affectedPet: petsInTier[2][4],
      },
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][3])+" by ",
        cost: 37.5e3, gain: 600, reqRank: 6,
        affectedPet: petsInTier[2][3],
      },
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][2])+" by ",
        cost: 45e3, gain: 500, reqRank: 6,
        affectedPet: petsInTier[2][2],
      },
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][1])+" by ",
        cost: 52.5e3, gain: 400, reqRank: 6,
        affectedPet: petsInTier[2][1],
      },
      {
        title: "Way Cheaper "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[2][0])+" by ",
        cost: 60e3, gain: 300, reqRank: 6,
        affectedPet: petsInTier[2][0],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 5,
        affectedPet: petsInTier[0][0],
      },
    ],
    [
      //rank 5
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[3][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][4])+" by ",
        cost: 10e3, gain: 1400, reqRank: 5,
        affectedPet: petsInTier[3][4],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[3][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][3])+" by ",
        cost: 17.5e3, gain: 1250, reqRank: 5,
        affectedPet: petsInTier[3][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[3][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][2])+" by ",
        cost: 25e3, gain: 1100, reqRank: 5,
        affectedPet: petsInTier[3][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[3][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][1])+" by ",
        cost: 32.5e3, gain: 950, reqRank: 5,
        affectedPet: petsInTier[3][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[3][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][0])+" by ",
        cost: 40e3, gain: 800, reqRank: 5,
        affectedPet: petsInTier[3][0],
      },
      //rank 6
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[3][4]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][4])+" by ",
        cost: 20e3, gain: 1400, reqRank: 6,
        affectedPet: petsInTier[3][4],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[3][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][3])+" by ",
        cost: 27.5e3, gain: 1250, reqRank: 6,
        affectedPet: petsInTier[3][3],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[3][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][2])+" by ",
        cost: 35e3, gain: 1100, reqRank: 6,
        affectedPet: petsInTier[3][2],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[3][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][1])+" by ",
        cost: 42.5e3, gain: 950, reqRank: 6,
        affectedPet: petsInTier[3][1],
      },
      {
        title: "Even Cheaper "+makeColoredPetSpan(petsInTier[3][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[3][0])+" by ",
        cost: 50e3, gain: 800, reqRank: 6,
        affectedPet: petsInTier[3][0],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
        affectedPet: petsInTier[0][0],
      },
    ],
    [
      //rank 6
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[4][3]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[4][3])+" by ",
        cost: 25e3, gain: 15000, reqRank: 6,
        affectedPet: petsInTier[4][3],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[4][2]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[4][2])+" by ",
        cost: 30e3, gain: 15000, reqRank: 6,
        affectedPet: petsInTier[4][2],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[4][1]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[4][1])+" by ",
        cost: 35e3, gain: 15000, reqRank: 6,
        affectedPet: petsInTier[4][1],
      },
      {
        title: "Cheaper "+makeColoredPetSpan(petsInTier[4][0]),
        description: "Lower the cost<br>of "+makeColoredPetSpan(petsInTier[4][0])+" by ",
        cost: 40e3, gain: 15000, reqRank: 6,
        affectedPet: petsInTier[4][0],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
        affectedPet: petsInTier[0][0],
      },
    ],
  ],
  [
    [
      //rank 3
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
      //rank 4
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][0])+" you can buy by ",
        cost: 1e6, gain: 5, reqRank: 4,
        affectedPet: petsInTier[0][0],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][1])+" you can buy by ",
        cost: 2e6, gain: 5, reqRank: 4,
        affectedPet: petsInTier[0][1],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][2])+" you can buy by ",
        cost: 3e6, gain: 5, reqRank: 4,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][3])+" you can buy by ",
        cost: 4e6, gain: 5, reqRank: 4,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][4])+" you can buy by ",
        cost: 5e6, gain: 5, reqRank: 4,
        affectedPet: petsInTier[0][4],
      },
      //rank 5
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][0])+" you can buy by ",
        cost: 6e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[0][0],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][1])+" you can buy by ",
        cost: 7e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[0][1],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][2])+" you can buy by ",
        cost: 8e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][3])+" you can buy by ",
        cost: 9e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][4])+" you can buy by ",
        cost: 10e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[0][4],
      },
      //rank 6
      {
        title: "Way More "+makeColoredPetSpan(petsInTier[0][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][0])+" you can buy by ",
        cost: 11e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[0][0],
      },
      {
        title: "Way More "+makeColoredPetSpan(petsInTier[0][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][1])+" you can buy by ",
        cost: 12e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[0][1],
      },
      {
        title: "Way More "+makeColoredPetSpan(petsInTier[0][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][2])+" you can buy by ",
        cost: 13e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[0][2],
      },
      {
        title: "Way More "+makeColoredPetSpan(petsInTier[0][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][3])+" you can buy by ",
        cost: 14e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[0][3],
      },
      {
        title: "Way More "+makeColoredPetSpan(petsInTier[0][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[0][4])+" you can buy by ",
        cost: 15e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[0][4],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
      },
    ],
    [
      //rank 4
      {
        title: "More "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][0])+" you can buy by ",
        cost: 1.5e6, gain: 4, reqRank: 4,
        affectedPet: petsInTier[1][0],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][1])+" you can buy by ",
        cost: 2.5e6, gain: 4, reqRank: 4,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][2])+" you can buy by ",
        cost: 3.5e6, gain: 4, reqRank: 4,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][3])+" you can buy by ",
        cost: 4.5e6, gain: 4, reqRank: 4,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][4])+" you can buy by ",
        cost: 5.5e6, gain: 4, reqRank: 4,
        affectedPet: petsInTier[1][4],
      },
      //rank 5
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][0])+" you can buy by ",
        cost: 7e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[1][0],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][1])+" you can buy by ",
        cost: 8e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][2])+" you can buy by ",
        cost: 9e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][3])+" you can buy by ",
        cost: 10e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][4])+" you can buy by ",
        cost: 11e6, gain: 5, reqRank: 5,
        affectedPet: petsInTier[1][4],
      },
      //rank 6
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[1][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][0])+" you can buy by ",
        cost: 12e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[1][0],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[1][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][1])+" you can buy by ",
        cost: 13e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[1][1],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[1][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][2])+" you can buy by ",
        cost: 14e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[1][2],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[1][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][3])+" you can buy by ",
        cost: 15e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[1][3],
      },
      {
        title: "Much More "+makeColoredPetSpan(petsInTier[1][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[1][4])+" you can buy by ",
        cost: 16e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[1][4],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
      },
    ],
    [
      //rank 5
      {
        title: "More "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][0])+" you can buy by ",
        cost: 8e6, gain: 4, reqRank: 5,
        affectedPet: petsInTier[2][0],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][1])+" you can buy by ",
        cost: 9e6, gain: 4, reqRank: 5,
        affectedPet: petsInTier[2][1],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][2])+" you can buy by ",
        cost: 10e6, gain: 4, reqRank: 5,
        affectedPet: petsInTier[2][2],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][3])+" you can buy by ",
        cost: 11e6, gain: 4, reqRank: 5,
        affectedPet: petsInTier[2][3],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][4])+" you can buy by ",
        cost: 12e6, gain: 4, reqRank: 5,
        affectedPet: petsInTier[2][4],
      },
      //rank 6
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[2][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][0])+" you can buy by ",
        cost: 13e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[2][0],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[2][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][1])+" you can buy by ",
        cost: 14e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[2][1],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[2][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][2])+" you can buy by ",
        cost: 15e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[2][2],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[2][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][3])+" you can buy by ",
        cost: 16e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[2][3],
      },
      {
        title: "Even More "+makeColoredPetSpan(petsInTier[2][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[2][4])+" you can buy by ",
        cost: 17e6, gain: 5, reqRank: 6,
        affectedPet: petsInTier[2][4],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
      },
    ],
    [
      //rank 6
      {
        title: "More "+makeColoredPetSpan(petsInTier[3][0]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[3][0])+" you can buy by ",
        cost: 14e6, gain: 4, reqRank: 6,
        affectedPet: petsInTier[3][0],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[3][1]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[3][1])+" you can buy by ",
        cost: 15e6, gain: 4, reqRank: 6,
        affectedPet: petsInTier[3][1],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[3][2]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[3][2])+" you can buy by ",
        cost: 16e6, gain: 4, reqRank: 6,
        affectedPet: petsInTier[3][2],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[3][3]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[3][3])+" you can buy by ",
        cost: 17e6, gain: 4, reqRank: 6,
        affectedPet: petsInTier[3][3],
      },
      {
        title: "More "+makeColoredPetSpan(petsInTier[3][4]),
        description: "Increase the # of "+makeColoredPetSpan(petsInTier[3][4])+" you can buy by ",
        cost: 18e6, gain: 4, reqRank: 6,
        affectedPet: petsInTier[3][4],
      },
      
      {
        title: "Maxed",
        description: "",
        cost: Infinity,
        gain: 0,
        reqRank: 6,
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
  U: [
    {tokenCost: 2.5e6, energyCost: 10000, nextReq: "QRST"},
    {tokenCost: 2.75e6, energyCost: 12500, nextReq: "PRST"},
    {tokenCost: 3e6, energyCost: 15000, nextReq: "RST"},
    {tokenCost: 3.125e6, energyCost: 16250, nextReq: "QST"},
    {tokenCost: 3.25e6, energyCost: 17500, nextReq: "PST"},
    {tokenCost: 3.5e6, energyCost: 20000, nextReq: "ST"},
    {tokenCost: 3.6e6, energyCost: 21000, nextReq: "RT"},
    {tokenCost: 3.7e6, energyCost: 22000, nextReq: "QT"},
    {tokenCost: 3.8e6, energyCost: 23000, nextReq: "PT"},
    {tokenCost: 4e6, energyCost: 25000, nextReq: "T"},
    {tokenCost: 4.1e6, energyCost: 26000, nextReq: "S"},
    {tokenCost: 4.2e6, energyCost: 27000, nextReq: "R"},
    {tokenCost: 4.3e6, energyCost: 28000, nextReq: "Q"},
    {tokenCost: 4.4e6, energyCost: 29000, nextReq: "P"},
    {tokenCost: 4.5e6, energyCost: 30000, nextReq: "KLMNO"},
    {tokenCost: 7.5e6, energyCost: 50000, nextReq: "FGHIJ"},
    {tokenCost: 8.75e6, energyCost: 62500, nextReq: "ABCDE"},
    {tokenCost: 10e6, energyCost: 75000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  V: [
    {tokenCost: 2.5e6, energyCost: 10000, nextReq: "QRSTU"},
    {tokenCost: 2.75e6, energyCost: 12500, nextReq: "PRSTU"},
    {tokenCost: 3e6, energyCost: 15000, nextReq: "RSTU"},
    {tokenCost: 3.125e6, energyCost: 16250, nextReq: "QSTU"},
    {tokenCost: 3.25e6, energyCost: 17500, nextReq: "PSTU"},
    {tokenCost: 3.5e6, energyCost: 20000, nextReq: "STU"},
    {tokenCost: 3.6e6, energyCost: 21000, nextReq: "RTU"},
    {tokenCost: 3.7e6, energyCost: 22000, nextReq: "QTU"},
    {tokenCost: 3.8e6, energyCost: 23000, nextReq: "PTU"},
    {tokenCost: 4e6, energyCost: 25000, nextReq: "TU"},
    {tokenCost: 4.1e6, energyCost: 26000, nextReq: "SU"},
    {tokenCost: 4.2e6, energyCost: 27000, nextReq: "RU"},
    {tokenCost: 4.3e6, energyCost: 28000, nextReq: "QU"},
    {tokenCost: 4.4e6, energyCost: 29000, nextReq: "PU"},
    {tokenCost: 4.5e6, energyCost: 30000, nextReq: "KLMNOU"},
    {tokenCost: 4.75e6, energyCost: 32500, nextReq: "FGHIJU"},
    {tokenCost: 5e6, energyCost: 35000, nextReq: "ABCDEU"},
    {tokenCost: 5.25e6, energyCost: 37500, nextReq: "U"},
    {tokenCost: 5.5e6, energyCost: 40000, nextReq: "PQRST"},
    {tokenCost: 5.6e6, energyCost: 41000, nextReq: "QRST"},
    {tokenCost: 5.7e6, energyCost: 42000, nextReq: "PRST"},
    {tokenCost: 5.9e6, energyCost: 44000, nextReq: "RST"},
    {tokenCost: 6e6, energyCost: 45000, nextReq: "QST"},
    {tokenCost: 6.1e6, energyCost: 46000, nextReq: "PST"},
    {tokenCost: 6.3e6, energyCost: 48000, nextReq: "ST"},
    {tokenCost: 6.4e6, energyCost: 49000, nextReq: "RT"},
    {tokenCost: 6.5e6, energyCost: 50000, nextReq: "QT"},
    {tokenCost: 6.6e6, energyCost: 51000, nextReq: "PT"},
    {tokenCost: 6.8e6, energyCost: 53000, nextReq: "T"},
    {tokenCost: 6.9e6, energyCost: 54000, nextReq: "S"},
    {tokenCost: 7e6, energyCost: 55000, nextReq: "R"},
    {tokenCost: 7.1e6, energyCost: 56000, nextReq: "Q"},
    {tokenCost: 7.2e6, energyCost: 57000, nextReq: "P"},
    {tokenCost: 7.3e6, energyCost: 58000, nextReq: "KLMNO"},
    {tokenCost: 7.5e6, energyCost: 60000, nextReq: "FGHIJ"},
    {tokenCost: 7.75e6, energyCost: 62500, nextReq: "ABCDE"},
    {tokenCost: 8e6, energyCost: 65000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  W: [
    {tokenCost: 2.5e6, energyCost: 10000, nextReq: ""},
    {tokenCost: Infinity, energyCost: Infinity, nextReq: ""},
  ],
  X: [
    {tokenCost: 2.5e6, energyCost: 10000, nextReq: ""},
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
  /*rebirth: "red",*/
}


//Functions
function makeColoredPetSpan(pet, content) {
  content = content||pet
  return "<span class=\""+tierColors[game.pets[pet].tier]+"Text\">"+content+"</span>";
}
