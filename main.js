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
  let petSlot = di("petSlotL").cloneNode(true);
  //id the new petSlot
  petSlot.setAttribute("id", "petSlotL"+name);
  let petSlotChildren = petSlot.children;
  petSlotChildren[0].setAttribute("id", "petSlotLIcon"+name);
  petSlotChildren[0].classList.add(tierColors[game.pets[name].tier]+"Text");
  petSlotChildren[1].setAttribute("id", "petSlotLDesc"+name);
  petSlotChildren[1].firstElementChild.firstElementChild.setAttribute("id", "petSlotLTokensPerSec"+name);
  petSlotChildren[2].setAttribute("id", "petSlotLCount"+name);
  petSlotChildren[2].classList.add(tierColors[game.pets[name].tier]+"Text");
  //add new petSlot to document
  petSlot.style.display = "";
  di("petConLeft").appendChild(petSlot);
}
for (let name in game.rebirthPets) {
  let petSlot = di("petSlotR").cloneNode(true);
  petSlot.setAttribute("id", "petSlotR"+name);
  let petSlotChildren = petSlot.children;
  petSlotChildren[0].setAttribute("id", "petSlotRIcon"+name);
  petSlotChildren[0].classList.add(tierColors[game.pets[name].tier]+"Text");
  petSlotChildren[1].setAttribute("id", "petSlotRDesc"+name);
  petSlotChildren[1].firstElementChild.firstElementChild.setAttribute("id", "petSlotREnergyPerSec"+name);
  petSlotChildren[2].setAttribute("id", "petSlotRCount"+name);
  petSlotChildren[2].classList.add(tierColors[game.rebirthPets[name].tier]+"Text");
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
//rebirth
for (let num in milestones) {
  let milestone = milestones[num],
      cell = di("milestoneCell").cloneNode(true);
  //id the cell
  cell.setAttribute("id", "milestone"+num);
  //set req and description
  cell.firstElementChild.textContent = milestone.req+" Rebirth"+((milestone.req==1)?"":"s");
  cell.lastElementChild.innerHTML = milestone.description;
  //add to document
  cell.style.display = "";
  di("milestoneCell").parentElement.appendChild(cell);
}
for (let name in game.rebirthPets) {
  let isNewTier = game.rebirthPets[rebirthPetsAsStr[((name==rebirthPetsAsStr[0])?1:rebirthPetsAsStr.indexOf(name))-1]].tier<game.rebirthPets[name].tier;
  //if the pet belongs to a high tier than the previous, create a new tableRow
  if (isNewTier) {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "tableRow");
    //add newRow to document
    di("rebirthShopPetsCon").appendChild(newRow);
  }
  //create new pet
  let pet = di("rebirthShopPet").cloneNode(true);
  //id the new pet
  pet.setAttribute("id", "rebirthShopPet"+name);
  let petChildren = pet.children,
      petTTChildren = petChildren[0].children;
  petTTChildren[0].firstElementChild.setAttribute("id", "rebirthShopPetCoinCost"+name);
  petTTChildren[2].setAttribute("id", "rebirthShopPetPetCost"+name);
  petTTChildren[4].firstElementChild.setAttribute("id", "rebirthShopPetTotalCoinCost"+name);
  petChildren[3].firstElementChild.firstElementChild.setAttribute("id", "rebirthShopPetGain"+name);
  //color main button
  petChildren[1].classList.add(tierColors[game.rebirthPets[name].tier]+"Text");
  pet.style.borderColor = colors[tierColors[game.rebirthPets[name].tier]];
  //update pet name
  petChildren[1].textContent = name;
  //add functionality
  pet.addEventListener("click", ()=>{buyRebirthPet(name)});
  //add new pet to document
  pet.style.display = "";
  di("rebirthShopPetsCon").lastElementChild.appendChild(pet);
}
for (let num in challenges) {
  if (num==0) {continue}
  let chal = di("challengeButton").cloneNode(true),
      chalChildren = chal.children;
  //id the new challenge
  chal.setAttribute("id", "challenge"+num+"Button");
  chalChildren[0].textContent = num;
  chalChildren[1].setAttribute("id", "challenge"+num+"Title");
  chalChildren[2].setAttribute("id", "challenge"+num+"Description");
  chalChildren[3].setAttribute("id", "challenge"+num+"Reward");
  //update text
  chalChildren[1].textContent = challenges[num].title;
  chalChildren[2].innerHTML = challenges[num].description;
  chalChildren[3].innerHTML = challenges[num].reward;
  //add functionality
  chal.addEventListener("click", ()=>{enterChallenge(num)});
  //add new challenge to document
  chal.style.display = "";
  di("challengeButton").parentElement.appendChild(chal);
}
//tab buttons
for (let name in tabData) {
  let button = di("tabButton").cloneNode(true),
      color = tabData[name];
  //id the button
  button.setAttribute("id", name+"TabButton");
  //color it
  button.style.borderColor = colors[color];
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
  button.addEventListener("click", ()=>{showTab(name)});
  //add to document
  button.style.display = "";
  di("tabButtonsCon").appendChild(button);
}
for (let name in rebirthTabData) {
  let button = di("tabButton").cloneNode(true),
      color = rebirthTabData[name];
  //id the button
  button.setAttribute("id", "rebirth"+name+"TabButton");
  //color it
  button.style.borderColor = colors[color];
  //add name with color
  button.firstElementChild.classList.add(color+"Text");
  button.firstElementChild.textContent = name;
  //add hover effect
  button.addEventListener("mouseover", ()=>{
    button.style.backgroundColor = colors[color].replace(")", ",.5)");
    button.style.fontWeight = "bold";
  });
  button.addEventListener("mouseleave", ()=>{
    button.style.backgroundColor = colors.blackBg;
    button.style.fontWeight = "normal";
  });
  //adadd functionality
  button.addEventListener("click", ()=>{showSubTab(name)});
  //add to document
  button.style.display = "";
  di("rebirthTabButtonsCon").appendChild(button);
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
  setMultis();
  getTokensPerSec();
  getEnergyPerSec();
  
  //give resources
  user.tokens+=game.tokensPerSec*ticks/tps;
  user.energy+=game.energyPerSec*ticks/tps;
  
  //update html
  updateResources();
  updateResourcesPerSec();
  //updates relating to multi upgrades
  updateMultis();
  updateRunButton();
  updateEnergyButton();
  updateRebirthUpgrade34();
  
  //reset last update
  user.lastUpdate = Date.now();
}


//Calculate Costs and Gains
function setMultis() {
  game.tokensMulti = (getRebirthUpgrades01Gain(0)+getRebirthUpgrade34Gain(3)+getChallenge2Gain())/((user.inChallenge==2)?Math.max(1+Math.log10(1+user.energy)*1.5, 1):1);
  game.energyMulti = getRebirthUpgrades01Gain(1)+getRebirthUpgrade34Gain(4)+getChallenge3Gain();
}
function getTokensPerSec() {
  //gain from pets
  let fromPets = 0;
  for (let name of user.hasPets) {
    fromPets+=game.pets[name].tokensPerSec;
  }
  //from achievements
  let fromAchievements = game.achievementsTokensPerSec;
  //from upgrades
  let fromUpgrades = game.tokensMulti;
  return game.tokensPerSec = (1+fromPets+fromAchievements)*fromUpgrades;
}
function getEnergyPerSec() {
  //gain from pets
  let fromPets = 0;
  for (let name of user.hasRebirthPets) {
    fromPets+=game.rebirthPets[name].energyPerSec;
  }
  //from upgrades
  let fromUpgrades = game.energyMulti;
  return game.energyPerSec = fromPets*fromUpgrades;
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
function setTotalRebirthPetCost() {
  for (let name in game.rebirthPets) {
    let totalCost = game.rebirthPets[name].coinCost;
    function reccPetCosts(reccName) {
      for (let i=game.rebirthPets[reccName].petReq.length-1; i>=0; i--) {
        let checkPet = game.rebirthPets[reccName].petReq[i];
        totalCost+=game.rebirthPets[checkPet].coinCost;
        reccPetCosts(checkPet);
      }
    }
    reccPetCosts(name);
    
    game.rebirthPets[name].totalCoinCost = totalCost;
  }
}


//Updates
function updateAll() {
  if (logUpdates) {console.log("updateAll")}
  //top
  updateResources();
  updateResourcesPerSec();
  updateRank();
  updateInChallenge();
  
  //middle
  updateRebirthButton();
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
  di("tokens").textContent = e(Math.floor(user.tokens));
  di("coins").textContent = e(user.coins);
  di("energy").textContent = e(user.energy, 2);
}
function updateResourcesPerSec() {
  /*if (logUpdates) {console.log("updateResourcesPerSec")}*/
  di("tokensPerSec").textContent = e(game.tokensPerSec);
  di("energyPerSec").textContent = e(game.energyPerSec, 2);
}
function updatePets() {
  if (logUpdates) {console.log("updatePets")}
  //tokens/energy per second
  for (let pet in game.pets) {
    di("petSlotLTokensPerSec"+pet).textContent = e(game.pets[pet].tokensPerSec);
  }
  for (let pet in game.rebirthPets) {
    di("petSlotREnergyPerSec"+pet).textContent = e(game.rebirthPets[pet].energyPerSec);
  }
  //count
  for (let pet in game.pets) {
    let count = user.hasPets.split(pet).length-1;
    di("petSlotLCount"+pet).textContent = (count<2)?"":count;
  }
  for (let pet in game.rebirthPets) {
    let count = user.hasRebirthPets.split(pet).length-1;
    di("petSlotRCount"+pet).textContent = (count<2)?"":count;
  }
  //display
  for (let name in game.pets) {
    if (user.hasPets.includes(name)) {addPet(name)}
    else {removePet(name)}
  }
}
function updateRank() {
  if (logUpdates) {console.log("updateRank")}
  di("rank").textContent = "Rank "+ranks[user.rank].name;
}
function updateInChallenge() {
  di("inChallenge").textContent = user.inChallenge;
}
function updateRebirthPets() {
  //display
  for (let name in game.rebirthPets) {
    if (user.hasRebirthPets.includes(name)) {addRebirthPet(name)}
    else {removeRebirthPet(name)}
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
  //show subtab if applicable
  if (name=="rebirth") {
    showSubTab(user.rebirthTab);
  }
}
function showSubTab(name) {
  if (logActions) {console.log("showing tab: rebirth"+name)}
  //default to tree if no subtab is chosen
  name = name||"Tree";
  //hide all subtabs
  for (let name in rebirthTabData) {
    hideId("rebirth"+name+"Tab");
  }
  //update tab
  window["updateRebirth"+name]();
  //show chosen tab
  showId("rebirth"+name+"Tab");
  //save tab
  user.rebirthTab = name;
}


//Occasional Checks
function checkUnlocks() {
  //resources
  if (user.highestEnergyTier>0 || user.rebirthCount>0) {showId("energyCon")}
  else {hideId("energyCon")}
  if (user.rank>0 || user.rebirthCount>0) {showId("rankCon")}
  else {hideId("rankCon")}
  if (user.hasRebirthPets!=="") {showId("energyPerSecCon")}
  else {hideId("energyPerSecCon")}
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
  if (user.rebirthCount>1) {showId("upgradesColumn1")}
  if (user.rebirthCount>6) {showId("upgradesButtonCon0-1")}
  if (user.rank>2) {
    showId("upgradesButtonCon0-2");
    showId("upgradesButtonCon1-1");
    showId("upgradesColumn2");
  }
  else {
    hideId("upgradesButtonCon0-2");
    hideId("upgradesButtonCon1-1");
    hideId("upgradesColumn2");
  }
  if (user.rebirthCount>2) {showId("upgradesColumn2")}
  if (user.rebirthCount>17) {showId("upgradesButtonCon0-2")}
  if (user.rebirthCount>8) {showId("upgradesButtonCon1-1")}
  if (user.rank>3) {
    showId("upgradesButtonCon0-3");
    showId("upgradesButtonCon1-2");
    showId("upgradesButtonCon2-1");
  }
  else {
    hideId("upgradesButtonCon0-3");
    hideId("upgradesButtonCon1-2");
    hideId("upgradesButtonCon2-1");
  }
  if (user.rebirthCount>34) {showId("upgradesButtonCon0-3")}
  if (user.rebirthCount>20) {showId("upgradesButtonCon1-2")}
  if (user.rebirthCount>10) {showId("upgradesButtonCon2-1")}
  if (user.rank>4) {
    showId("upgradesButtonCon0-4");
    showId("upgradesButtonCon1-3");
    showId("upgradesButtonCon2-2");
  }
  else {
    hideId("upgradesButtonCon0-4");
    hideId("upgradesButtonCon1-3");
    hideId("upgradesButtonCon2-2");
  }
  if (user.rebirthCount>39) {showId("upgradesButtonCon1-3")}
  if (user.rebirthCount>23) {showId("upgradesButtonCon2-2")}
  if (user.rank>5) {
    showId("upgradesButtonCon1-4");
    showId("upgradesButtonCon2-3");
  }
  else {
    hideId("upgradesButtonCon1-4");
    hideId("upgradesButtonCon2-3");
  }
  if (user.rebirthCount>44) {showId("upgradesButtonCon2-3")}
  if (user.rank>6) {showId("upgradesButtonCon2-4")}
  else {hideId("upgradesButtonCon2-4")}
  //altar
  if (user.rank>3 || user.rebirthCount>0) {
    di("altarUpgradesCon").lastElementChild.style.display = "";
  }
  else {
    di("altarUpgradesCon").lastElementChild.style.display = "none";
  }
  //rebirth
  if (user.rank>5) {
    let hasPets = true;
    for (let name in game.pets) {
      if (!user.hasPets.includes(name)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {showId("rebirthButton")}
    else {hideId("rebirthButton")}
  }
  else {hideId("rebirthButton")}
  if (user.rebirthCount>0) {showId("coinsCon")}
  else {hideId("coinsCon")}
  if (user.inChallenge) {showId("inChallengeCon")}
  else {hideId("inChallengeCon")}
  //tabs
  if (user.highestEnergyTier>0 || user.rebirthCount>0) {
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
  if (user.rank>0 || user.rebirthCount>0) {showId("upgradesTabButton")}
  else {hideId("upgradesTabButton")}
  if (user.rank>2 || user.rebirthCount>0) {showId("altarTabButton")}
  else {hideId("altarTabButton")}
  if (user.rebirthCount>0) {showId("rebirthTabButton")}
  else {hideId("rebirthTabButton")}
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
  //2: That's it?
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
  //5: Now what?
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
  //7: It's free
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
  //12: Final respect
  if (!user.hasAchievements.includes("12") && user.hasPets.includes("U")) {giveAchievement("12")}
  //13: Finally the end
  if (!user.hasAchievements.includes("13")) {
    let hasPets = true;
    for (let pet of petsInTier[4]) {
      if (!user.hasPets.includes(pet)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {giveAchievement("13")}
  }
  //14: They're all free!
  if (!user.hasAchievements.includes("14") && user.upgradesCol1[0]>=14) {
    let altarUpgradesReq = {A:0,B:1,C:2,D:3,E:4},
        meetsAltarReq = true;
    for (let pet in altarUpgradesReq) {
      if (!user.altarUpgrades[pet]<altarUpgradesReq) {
        meetsAltarReq = false;
        break;
      }
    }
    if (meetsAltarReq) {giveAchievement("14")}
  }
  //15: Rebirthed
  if (!user.hasAchievements.includes("15") && user.rebirthCount>0) {giveAchievement("15")}
  //16: Forever green
  if (!user.hasAchievements.includes("16") && user.rebirthCount>4) {giveAchievement("16")}
  //17: Forever blue
  if (!user.hasAchievements.includes("17") && user.rebirthCount>14) {giveAchievement("17")}
  //18: Challenged
  if (!user.hasAchievements.includes("18") && user.challenges.reduce((a,b)=>a+b,0)>0) {giveAchievement("18")}
  //19: Forever yellow
  if (!user.hasAchievements.includes("19") && user.rebirthCount>29) {giveAchievement("19")}
  //20: Forever purple
  if (!user.hasAchievements.includes("20") && user.rebirthCount>49) {giveAchievement("20")}
}
function checkChallenges() {
  if (user.inChallenge) {
    if (user.energy>=challenges[user.inChallenge].energyReq[user.challenges[user.inChallenge]]) {
      user.challenges[user.inChallenge]++;
      exitChallenge(true);
    }
  }
}


//Initialization
window.addEventListener("load", ()=>{
  //load saved data
  loadGame(devUsers["testing"]);
  //start game ticking
  gameInterval = setInterval(runGameTime, 1e3/tps);
  checksInterval = setInterval(()=>{
    checkUnlocks();
    checkAchievements();
    checkChallenges();
  }, 1e3/checkRate);
  //other
});
console.log("skip to the new content with:", "loadGame(devUsers[latestVersion])");
