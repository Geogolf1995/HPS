//Hotkeys
document.addEventListener("keydown", (event) => {
  if (game.pets[event.key.toUpperCase()]) {
    buyPet(event.key.toUpperCase());
  }
});


//HTML/CSS construction
//pets
for (let name in game.pets) {
  let petSlot = di("petSlot").cloneNode(true);
  //id the new petSlot
  petSlot.setAttribute("id", "petSlotL"+name);
  let petSlotChildren = petSlot.children;
  petSlotChildren[0].setAttribute("id", "petSlotIcon"+name);
  petSlotChildren[0].classList.add(tierColors[game.pets[name].tier]+"Text");
  petSlotChildren[1].setAttribute("id", "petSlotDesc"+name);
  petSlotChildren[1].firstElementChild.firstElementChild.setAttribute("id", "petSlotTokensPerSec"+name);
  //add new petSlot to document
  petSlot.style.display = "";
  di("petConLeft").appendChild(petSlot);
}
for (let name of /*rebirthPets*/"") {
  let petSlot = di("petSlot").cloneNode(true);
  petSlot.setAttribute("id", "petSlotR"+name);
  petSlot.style.display = "";
  di("petConRight").appendChild(petSlot);
}
//achievements
for (let num in achievements) {
  if (num==0) {continue}
  let ach = di("ach0").cloneNode(true);
  //id the new achievement
  ach.setAttribute("id", "ach"+num);
  let achChildren = ach.children;
  achChildren[1].setAttribute("id", "achTitle"+num);
  achChildren[2].setAttribute("id", "achDesc"+num);
  //update title and description
  achChildren[0].textContent = num;
  achChildren[1].textContent = achievements[num].title;
  achChildren[2].textContent = achievements[num].description;
  //add new achievement to document
  ach.style.display = "";
  di("ach0").parentElement.appendChild(ach);
}
//shop
let constructingShopTier = 1;
for (let name in game.pets) {
  let isNewTier = game.pets[petsAsStr[((name==petsAsStr[0])?1:petsAsStr.indexOf(name))-1]].tier<game.pets[name].tier;
  //if the pet belongs to a higher tier than the previous, create a new tableRow
  if (isNewTier) {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "tableRow");
    //hide all but the first row
    //add newRow to document
    di("shopPetsCon").appendChild(newRow);
  }
  //create new pet
  let pet = di("shopPet").cloneNode(true);
  //id the new pet
  pet.setAttribute("id", "shopPet"+name);
  let petChildren = pet.children,
      petTTChildren = petChildren[0].children;
  petTTChildren[0].firstElementChild.setAttribute("id", "shopPetEnergyCost"+name);
  petTTChildren[2].setAttribute("id", "shopPetPetCost"+name);
  petChildren[3].firstElementChild.firstElementChild.setAttribute("id", "shopPetGain"+name);
  //color main button (not the tooltip)
  petChildren[1].classList.add(tierColors[game.pets[name].tier]+"Text");
  //update pet name
  petChildren[1].textContent = name;
  //add functionality
  pet.addEventListener("click", ()=>{buyPet(name)});
  //add new pet to document
  pet.style.display = "";
  di("shopPetsCon").lastElementChild.appendChild(pet);
}
//tab buttons
for (let name in tabData) {
  let button = di("tabButton").cloneNode(true),
      color = tabData[name];
  //id the button
  button.setAttribute("id", name+"TabButton");
  //color it
  button.style.border = "3px solid "+colors[color];
  //add name with color
  button.firstElementChild.classList.add(color+"Text");
  button.firstElementChild.textContent = (name=="run")?"Button":name[0].toUpperCase()+name.substring(1);
  //add hover effect
  button.addEventListener("mouseover", ()=>{
    button.style.backgroundColor = colors[color].replace(")", ",.5)");
    button.style.fontWeight = "bold";
  });
  button.addEventListener("mouseleave", ()=>{
    button.style.backgroundColor = colors.blackBg;
    button.style.fontWeight = "normal";
  });
  //add functionality
  button.addEventListener("click", ()=>{
    showTab(name)
  });
  //add to document
  button.style.display = "";
  di("tabButtonsCon").appendChild(button);
}


//Run Game
var gameInterval, checksInterval;
function runGameTime(ms) {
  //calculate time since last active tick
  let thisUpdate = Date.now();
  //maximum offline time defaults at 1 day
  if (typeof  ms=="undefined") {
    ms = Math.min(thisUpdate-user.lastUpdate, 864e5)
  }
  let ticks = ms/1e3*tps;
  
  //update game state
  getTokensPerSec();
  
  //give resources
  user.tokens+=game.tokensPerSec*ticks/tps;
  
  //update html
  updateResources();
  updateResourcesPerSec();
  
  //reset last update
  user.lastUpdate = Date.now();
}


//Calculate Costs and Gains
function getTokensPerSec() {
  //gain from pets
  let fromPets = 0;
  for (let name of user.hasPets) {
    fromPets+=game.pets[name].tokensPerSec;
  }
  //from achievements
  let fromAchievements = game.achievementMulti;
  return game.tokensPerSec = 1+fromPets+game.achievementsTokensPerSec;
}


//Updates
function updateAll() {
  if (logUpdates) {console.log("updateAll")}
  //top
  updateResources();
  updateResourcesPerSec();
  
  //middle
  //pets
  updatePets();
  //achievements
  updateAchievements();
  //run
  updateEnergyButton();
  updateRankupButton();
  updateRunButton();
  //shop
  updateShop();
  
  //bottom
}
function updateResources() {
  /*if (logUpdates) {console.log("updateResources")}*/
  di("tokens").textContent = e(user.tokens);
  di("energy").textContent = e(user.energy);
}
function updateResourcesPerSec() {
  /*if (logUpdates) {console.log("updateResourcesPerSec")}*/
  di("tokensPerSec").textContent = e(game.tokensPerSec);
}
function updatePets() {
  if (logUpdates) {console.log("updatePets")}
  for (let name in game.pets) {
    di("petSlotTokensPerSec"+name).textContent = e(game.pets[name].tokensPerSec);
  }
}


//Other
const suffixes = ["","K","M","B","T","Q","q","S","s","O","N","D"];
function e(num, dec, sig) {
  //if no number is inputed, return
  if (typeof num=="undefined") {return "N/A"}
  //if decimal positions are not specified, default to 0
  dec = (typeof dec=="undefined")?0:dec;
  //if significant digits are not specified, default to 2
  sig = (typeof sig=="undefined")?2:sig;
  //if inputed value is Infinity, return string format
  if (num==Infinity) {return "Infinity"}
  //convert to standard short-hand
  let i=0;
  for (i; num>=1e3 && i<suffixes.length; i++) {
    num/=1e3;
  }
  if (i>0) {
    num = num.toFixed(sig);
    return (num<1e3)?num+suffixes[i]:Math.floor(num).toLocaleString()+suffixes[suffixes.length-1];
  }
  else {return num.toFixed(dec)}
}
function showTab(name) {
  if (logActions) {console.log("showing tab: "+name)}
  //default to run if no tab is chosen
  name = name||"run";
  //hide all tabs
  for (let name in tabData) {
    hideId(name+"Tab");
  }
  //update html
  window["update"+name.charAt(0).toUpperCase()+name.substring(1)]();
  //show chosen tab
  showId(name+"Tab", (name=="run")?"flex":"");
  //save tab
  user.tab = name;
}


//Occasional Checks
function checkUnlocks() {
  //resources
  if (user.highestEnergyTier>0) {
    showId("energyCon");
  }
  else {
    hideId("energyCon");
  }
  //run
  if (user.highestEnergyTier>1) {
    showId("runProgToRankupCon");
  }
  else {
    hideId("runProgToRankupCon");
  }
  if (user.highestEnergyTier>2) {
    
  }
  //tabs
  if (user.highestEnergyTier>0) {
    showId("optionsTabButton");
    showId("achievementsTabButton");
    showId("runTabButton");
    showId("shopTabButton");
    visOn("petConLeft");
    visOn("petConRight");
  }
  else {
    hideId("optionsTabButton");
    hideId("achievementsTabButton");
    hideId("runTabButton");
    hideId("shopTabButton");
    visOff("petConLeft");
    visOff("petConRight");
  }
  hideId("upgradesTabButton");
  hideId("rebirthTabButton");
}
function checkAchievements() {
  //ABCs
  if (!user.hasAchievements.includes("1") && user.hasPets.includes("CBA")) {
    giveAchievement("1");
  }
  //Now What?
  if (!user.hasAchievements.includes("2") && user.hasPets.includes("EDCBA")) {
    giveAchievement("2");
  }
}


//Initialization
/*checkUnlocks();
updateAll();
showTab("run");*/
window.addEventListener("load", ()=>{
  //load saved data
  loadGame(/*devUser*/);
  //start game ticking
  gameInterval = setInterval(runGameTime, 1e3/tps);
  checksInterval = setInterval(()=>{
    checkUnlocks();
    checkAchievements();
  }, 1000/checkRate);
});
