//User & Game
function setUser() {
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
    
    //stats
    totalRuns: 0,
    totalEnergyResets: 0,
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v1.1",
  }
}
const devUsers = {
  default: {
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
    
    //stats
    totalRuns: 0,
    totalEnergyResets: 0,
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v1.0",
  },
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
    lastUpdate: Date.now(),
    version: "v1.0",
  },
  testing: {
    //resources
    tokens: 1700,
    energy: 100,
    
    //pets & shop
    hasPets: "EDCBA",
    
    //achievements
    hasAchievements: ["1", "2"],
    
    //run
    runCount: 13,
    highestEnergyTier: 3,
    rank: 0,
    
    //stats
    totalRuns: 302,
    totalEnergyResets: 48,
    
    //other
    tab: "run",
    lastUpdate: Date.now(),
    version: "v1.1",
  },
}
var game = {
  //resourcces
  tokensPerSec: 1,
  
  //pets & shop
  pets: {
    A: {tier: 0, energyCost: 1, petReq: "", tokensPerSec: 1},
    B: {tier: 0, energyCost: 2, petReq: "A", tokensPerSec: 2},
    C: {tier: 0, energyCost: 5, petReq: "B", tokensPerSec: 4},
    D: {tier: 0, energyCost: 10, petReq: "C", tokensPerSec: 6},
    E: {tier: 0, energyCost: 32, petReq: "D", tokensPerSec: 9},
    F: {tier: 1, energyCost: Infinity, petReq: "ABCDE", tokensPerSec: 0},
    G: {tier: 1, energyCost: Infinity, petReq: "ABCDEF", tokensPerSec: 0},
    H: {tier: 1, energyCost: Infinity, petReq: "ABCDEG", tokensPerSec: 0},
    I: {tier: 1, energyCost: Infinity, petReq: "ABCDEH", tokensPerSec: 0},
    J: {tier: 1, energyCost: Infinity, petReq: "ABCDEI", tokensPerSec: 0},
    K: {tier: 2, energyCost: 11, petReq: "FGHIJ", tokensPerSec: 11},
    L: {tier: 2, energyCost: 12, petReq: "FGHIJK", tokensPerSec: 12},
    M: {tier: 2, energyCost: 13, petReq: "FGHIJL", tokensPerSec: 13},
    N: {tier: 2, energyCost: 14, petReq: "FGHIJM", tokensPerSec: 14},
    O: {tier: 2, energyCost: 15, petReq: "FGHIJN", tokensPerSec: 15},
    P: {tier: 3, energyCost: 16, petReq: "KLMNO", tokensPerSec: 16},
    Q: {tier: 3, energyCost: 17, petReq: "KLMNOP", tokensPerSec: 17},
    R: {tier: 3, energyCost: 18, petReq: "KLMNOQ", tokensPerSec: 18},
    S: {tier: 3, energyCost: 19, petReq: "KLMNOR", tokensPerSec: 19},
    T: {tier: 3, energyCost: 20, petReq: "KLMNOS", tokensPerSec: 20},
    U: {tier: 4, energyCost: 21, petReq: "PQRST", tokensPerSec: 21},
    V: {tier: 4, energyCost: 22, petReq: "PQRSTU", tokensPerSec: 22},
    W: {tier: 4, energyCost: 23, petReq: "PQRSTV", tokensPerSec: 23},
    X: {tier: 4, energyCost: 24, petReq: "PQRSTW", tokensPerSec: 24},
  },
  
  //achievements
  achievementsTokensPerSec: 0,
  
  //run
  runTokenCost: 1,
  energyTier: 0,
}


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
//customize icons later


//Pets
var petsAsStr = Object.keys(game.pets).join("");
/*var rebirthPets = "";
for (let pet in user.rebirth.pets) {
  if (pet==0) {continue}
  rebirthPets+=pet;
}*/


//Achievements
const achievements = [
  null,
  {title: "ABCs", description: "Own the first three letters"},
  {title: "Now What?", description: "Own all green letters"},
  {title: "Rankup", description: "Rankup for the first time"},
];
const hasAchColor = "rgb(25,85,25)";
const hasAchIdColor = "rgb(75,125,25,0.75)"
const noAchColor = "rgb(25,25,25)";
const noAchIdColor = "rgb(75,125,25,0.25)";


//Run
//Costs and Gains
const runCosts = [
  5, 10, 15, 20, 25,
  50, 100, 150, 200, 250,
  325, 450, 575, 700,
  Infinity,
];
const energyTiers = [
  {runReq: 5, currentGain: 0},
  {runReq: 10, currentGain: 1},
  {runReq: 14, currentGain: 10},
  {runReq: Infinity, currentGain: 33},
];
const ranks = [
  {name: "0", nextName: "I", runReq: 14, tokenCost: 1e3, energyCost: 100},
  {name: "I", nextName: "End", runReq: Infinity, tokenCost: Infinity, energyCost: Infinity},
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
