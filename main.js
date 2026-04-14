//Hotkeys
document.addEventListener("keydown", (event) => {
  if (game.pets[event.key.toUpperCase()]) {
    buyPet(event.key.toUpperCase());
  }
});


//HTML/CSS construction
//resource icons
let iconsInDoc = {
  tokens: document.getElementsByClassName("tokensIcon"),
  energy: document.getElementsByClassName("energyIcon"),
  coins: document.getElementsByClassName("coinsIcon"),
}
for (let rss in iconsInDoc) {
  for (let el of iconsInDoc[rss]) {
    el.innerHTML = resources[rss].icon;
    el.classList.add(resources[rss].color+"Text");
  }
}
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
  petSlotChildren[2].setAttribute("id", "petSlotCount"+name);
  petSlotChildren[2].classList.add(tierColors[game.pets[name].tier]+"Text");
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
  achChildren[1].innerHTML = achievements[num].title;
  achChildren[2].textContent = achievements[num].description;
  //add new achievement to document
  ach.style.display = "";
  di("ach0").parentElement.appendChild(ach);
}
//shop
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
  petTTChildren[4].firstElementChild.setAttribute("id", "shopPetTotalEnergyCost"+name);
  petChildren[3].firstElementChild.firstElementChild.setAttribute("id", "shopPetGain"+name);
  //color main button (not the tooltip)
  petChildren[1].classList.add(tierColors[game.pets[name].tier]+"Text");
  pet.style.borderColor = colors[tierColors[game.pets[name].tier]];
  //update pet name
  petChildren[1].textContent = name;
  //add functionality
  pet.addEventListener("click", ()=>{buyPet(name)});
  //add new pet to document
  pet.style.display = "";
  di("shopPetsCon").lastElementChild.appendChild(pet);
}
//upgrades
for (let col in upgrades) {
  for (let row in upgrades[col]) {
    let buttonConEl = di("upgradesButtonCon").cloneNode(true),
        buttonEl = buttonConEl.firstElementChild,
        buttonElChildren = buttonEl.children;
    //id the buttonCOn
    buttonConEl.setAttribute("id", "upgradesButtonCon"+col+"-"+row);
    //id the button
    buttonEl.setAttribute("id", "upgradesButton"+col+"-"+row);
    buttonElChildren[0].setAttribute("id", "upgradesButtonTitle"+col+"-"+row);
    buttonElChildren[2].firstElementChild.setAttribute("id", "upgradesButtonDescription"+col+"-"+row);
    buttonElChildren[2].lastElementChild.setAttribute("id", "upgradesButtonGain"+col+"-"+row);
    buttonElChildren[3].firstElementChild.setAttribute("id", "upgradesButtonLevel"+col+"-"+row);
    buttonElChildren[5].firstElementChild.setAttribute("id", "upgradesButtonCost"+col+"-"+row);
    //add total levels, everything else changes depending on the upgrade's current level
    buttonElChildren[3].lastElementChild.textContent = upgrades[col][row].length-1;
    //set cost icon and color
    buttonEl.lastElementChild.classList.add(resources[upgradesIcons[col].column].color+"Text");
    buttonEl.lastElementChild.lastElementChild.innerHTML = resources[upgradesIcons[col].cost].icon;
    //add functionality
    buttonEl.addEventListener("click", ()=>{
      window["buyUpgradeCol"+col](row);
    });
    
    //id rankupLock
    let rankupLock = buttonConEl.lastElementChild;
    rankupLock.setAttribute("id", "upgradesButtonRankupLock"+col+"-"+row);
    rankupLock.firstElementChild.lastElementChild.setAttribute("id", "upgradesButtonRankupLockReqRank"+col+"-"+row);
    rankupLock.lastElementChild.setAttribute("id", "upgradesButtonRankupLockMaxed"+col+"-"+row);
    
    //add button to column
    buttonConEl.style.display = "";
    di("upgradesColumn"+col).appendChild(buttonConEl);
  }
}
//altar
for (let name in altarUpgrades) {
  let isNewTier = game.pets[petsAsStr[((name==petsAsStr[0])?1:petsAsStr.indexOf(name))-1]].tier<game.pets[name].tier;
  if (isNewTier) {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "tableRow");
    //add newRow to document
    di("altarUpgradesCon").appendChild(newRow);
  }
  //create new altar pet upgrade
  let petUpgrade = di("altarUpgrade").cloneNode(true);
  //id the new pet upgrade
  petUpgrade.setAttribute("id", "altarUpgrade"+name);
  let petUpgradeChildren = petUpgrade.children,
      petUpgradeTTChildren = petUpgradeChildren[0].children;
  petUpgradeTTChildren[0].firstElementChild.setAttribute("id", "altarUpgradeTokenCost"+name);
  petUpgradeTTChildren[2].firstElementChild.setAttribute("id", "altarUpgradeEnergyCost"+name);
  petUpgradeTTChildren[4].firstElementChild.setAttribute("id", "altarUpgradeNextPetReq"+name);
  petUpgradeChildren[2].setAttribute("id", "altarUpgradeCurrentPetReq"+name);
  //color main button (not the tooltip)
  petUpgradeChildren[1].classList.add(tierColors[game.pets[name].tier]+"Text");
  petUpgrade.style.borderColor = colors[tierColors[game.pets[name].tier]];
  //update pet name
  petUpgradeChildren[1].textContent = name;
  //add functionality
  petUpgrade.addEventListener("click", ()=>{buyAltarPetUpgrade(name)});
  //add new pet upgrade to document
  petUpgrade.style.display = "";
  di("altarUpgradesCon").lastElementChild.appendChild(petUpgrade);
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
  let thisUpdate = Date.now(),
      lastUpdate = user.lastUpdate || Date.now();
  //maximum offline time defaults at 1 day
  if (typeof  ms=="undefined") {
    ms = Math.min(thisUpdate-lastUpdate, 864e5)
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
function setTotalPetCost() {
  for (let name in game.pets) {
    let totalCost = game.pets[name].energyCost;
    function reccPetCosts(reccName) {
      for (let i=game.pets[reccName].petReq.length-1; i>=0; i--) {
        let checkPet = game.pets[reccName].petReq[i];
        totalCost+=game.pets[checkPet].energyCost;
        reccPetCosts(checkPet);
      }
    }
    reccPetCosts(name);
    
    game.pets[name].totalEnergyCost = totalCost;
  }
}


//Updates
function updateAll() {
  if (logUpdates) {console.log("updateAll")}
  //top
  updateResources();
  updateResourcesPerSec();
  updateRank();
  updateCoins();
  
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
  //upgrades
  updateUpgrades();
  
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
function updateRank() {
  if (logUpdates) {console.log("updateRank")}
  di("rank").textContent = "Rank "+ranks[user.rank].name;
}
function updateCoins() {
  if (logUpdates) {console.log("updateCoins")}
  di("coins").textContent = 0;
}
function updatePets() {
  if (logUpdates) {console.log("updatePets")}
  //tokens per second
  for (let pet in game.pets) {
    di("petSlotTokensPerSec"+pet).textContent = e(game.pets[pet].tokensPerSec);
  }
  //count
  for (let pet in game.pets) {
    let count = user.hasPets.split(pet).length-1;
    di("petSlotCount"+pet).textContent = (count<2)?"":count;
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
  //update tab
  window["update"+name.charAt(0).toUpperCase()+name.substring(1)]();
  //show chosen tab
  showId(name+"Tab", (name=="run")?"flex":"");
  //save tab
  user.tab = name;
}


//Occasional Checks
function checkUnlocks() {
  //resources
  if (user.highestEnergyTier>0) {showId("energyCon")}
  else {hideId("energyCon")}
  if (user.rank>0) {showId("rankCon")}
  else {hideId("rankCon")}
  //run
  if (user.highestEnergyTier>1 && user.rank+1<ranks.length) {
    showId("runProgToRankupCon");
  }
  else {hideId("runProgToRankupCon")}
  //upgrades
  if (user.rank>1) {
    showId("upgradesButtonCon0-1");
    showId("upgradesColumn1");
  }
  else {
    hideId("upgradesButtonCon0-1");
    hideId("upgradesColumn1");
  }
  if (user.rank>2) {
    showId("upgradesButtonCon0-2");
    showId("upgradesButtonCon1-1");
  }
  else {
    hideId("upgradesButtonCon0-2");
    hideId("upgradesButtonCon1-1");
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
  if (user.rank>0) {showId("upgradesTabButton")}
  else {hideId("upgradesTabButton")}
  if (user.rank>2) {
    showId("upgradesColumn2");
    showId("altarTabButton");
  }
  else {
    hideId("upgradesColumn2");
    hideId("altarTabButton");
  }
  
  hideId("rebirthTabButton");
}
function checkAchievements() {
  //1: ABCs
  if (!user.hasAchievements.includes("1")) {
    let hasPets = true;
    for (let pet of "ABC") {
      if (!user.hasPets.includes(pet)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {giveAchievement("1")}
  }
  //2: That's It?
  if (!user.hasAchievements.includes("2")) {
    let hasPets = true;
    for (let pet of petsInTier[0]) {
      if (!user.hasPets.includes(pet)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {giveAchievement("2")}
  }
  //3: Rankup
  if (!user.hasAchievements.includes("3") && user.rank>0) {giveAchievement("3")}
  //4: Respect
  if (!user.hasAchievements.includes("4") && user.hasPets.includes("F")) {giveAchievement("4")}
  //5: Now What?
  if (!user.hasAchievements.includes("5")) {
    let hasPets = true;
    for (let pet of petsInTier[1]) {
      if (!user.hasPets.includes(pet)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {giveAchievement("5")}
  }
  //6: Respect2
  if (!user.hasAchievements.includes("6") && user.hasPets.includes("K")) {giveAchievement("6")}
  //7: It's Free
  if (!user.hasAchievements.includes("7") && user.upgradesCol1[0]>=5) {giveAchievement("7")}
  //8: Finally done... right?
  if (!user.hasAchievements.includes("8")) {
    let hasPets = true;
    for (let pet of petsInTier[2]) {
      if (!user.hasPets.includes(pet)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {giveAchievement("8")}
  }
  //9: Respect3
  if (!user.hasAchievements.includes("9") && user.hasPets.includes("P")) {giveAchievement("9")}
  //10: Will this ever end?
  if (!user.hasAchievements.includes("10")) {
    let hasPets = true;
    for (let pet of petsInTier[3]) {
      if (!user.hasPets.includes(pet)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {giveAchievement("10")}
  }
  //11: It's getting easier
  if (!user.hasAchievements.includes("11") && Object.values(user.altarUpgrades).includes(1)) {giveAchievement("11")}
}


//Initialization
window.addEventListener("load", ()=>{
  //load saved data
  loadGame();
  //start game ticking
  gameInterval = setInterval(runGameTime, 1e3/tps);
  checksInterval = setInterval(()=>{
    checkUnlocks();
    checkAchievements();
  }, 1e3/checkRate);
  //other
});
console.log("skip to the new content with:", "loadGame(devUsers[latestVersion])");
