//Buttons
function buyUpgradeCol0(row) {
  if (logActions) {console.log("user > buyUpgradeCol0("+row+")")}
  let userLevel = user.upgradesCol0[row];
  //check if user is a high enough rank
  //really only needed if a bug shows up
  if (true/*user.rank>0*/) {
    //check if user has enough tokens
    if (user.tokens>=upgradesCol0[row][userLevel].cost) {
      //take tokens
      user.tokens-=upgradesCol0[row][userLevel].cost;
      //give upgrade
      user.upgradesCol0[row]++;
      let upgradingPetName = petsInTier[row][userLevel%petsInTier[row].length];
      game.pets[upgradingPetName].tokensPerSec+=upgradesCol0[row][userLevel].gain;
      //updates
      updateUpgradesCol0Button(row);
      updatePets();
      if (logActions) {console.log("buyUpgradeCol0("+row+") > success")}
    }
    else if (logActions) {console.log("buyUpgradeCol0("+row+") > fail, user does not have enough tokens")}
  }
  else if (logActions) {console.log("buyUpgradeCol0("+row+") > fail, user is not a high enough rank")}
}
function buyUpgradeCol1(row) {
  if (logActions) {console.log("user > buyUpgradeCol1("+row+")")}
  let userLevel = user.upgradesCol1[row];
  //check if user is a high enough rank
  if (user.rank>1) {
    //check if user has enough energy
    if (user.energy>=upgradesCol1[row][userLevel].cost) {
      //take energy
      user.energy-=upgradesCol1[row][userLevel].cost;
      //give upgrade
      user.upgradesCol1[row]++;
      let upgradingPetName = upgradesCol1[row][userLevel].affectedPet;
      game.pets[upgradingPetName].energyCost-=upgradesCol1[row][userLevel].gain;
      //updates
      setTotalPetCost();
      updateUpgradesCol1Button(row);
      if (logActions) {console.log("buyUpgradeCol1("+row+") > success")}
    }
    else if (logActions) {console.log("buyUpgradeCol1("+row+") > fail, user does not have enough energy")}
  }
  else if (logActions) {console.log("buyUpgradeCol1("+row+") > fail, user is not a high enough rank")}
}
//this next ^

//Calculate Costs and Gains
function getUpgradesCol0Gain(row) {
  let userLevel = user.upgradesCol0[row],
      interval = petsInTier[row].length,
      gains = {};
  //for each pet
  for (let i=0; i<petsInTier[row].length; i++) {
    //get the pet's name
    let name = petsInTier[row][i];
    //set initial gain to 0
    gains[name] = 0;
    //add the gain every nth level up to the user's current level, where n is the number of pets in this tier
    for (let j=i; j<userLevel && j<upgradesCol0[row].length; j+=interval) {
      gains[name]+=upgradesCol0[row][j].gain;
    }
  }
  //return object of upgrade gains
  return gains;
}
function getUpgradesCol1Gain(row) {
  let userLevel = user.upgradesCol1[row],
      gains = {};
  //add pets as keys
  for (let i=0; i<petsInTier[row].length; i++) {
    //set initial gain to 0
    gains[petsInTier[row][i]] = 0;
  }
  //for each level, add the gain from the corresponding pet
  for (let i=0; i<userLevel; i++) {
    let affectedPet = upgradesCol1[row][i].affectedPet,
        gain = upgradesCol1[row][i].gain;
    gains[affectedPet]+=gain;
  }
  return gains;
}


//Update HTML
function updateUpgrades() {
  if (logUpdates) {console.log("updateUpgrades")}
  for (let row in upgradesCol0) {
    updateUpgradesCol0Button(row);
  }
  for (let row in upgradesCol1) {
    updateUpgradesCol1Button(row);
  }
}
function updateUpgradesCol0Button(row) {
  di("upgradesButtonTitle0-"+row).innerHTML = upgradesCol0[row][user.upgradesCol0[row]].title;
  di("upgradesButtonLevel0-"+row).textContent = user.upgradesCol0[row];
  di("upgradesButtonCost0-"+row).textContent = e(upgradesCol0[row][user.upgradesCol0[row]].cost);
  //update gain
  let gainStr = "",
      userLevel = user.upgradesCol0[row],
      nextGain = (userLevel+1<upgradesCol0[row].length)?"<span class=\""+resources.tokens.color+"Text\">+"+upgradesCol0[row][userLevel].gain+"</span> <span class=\""+resources.tokens.color+"Text\">"+resources.tokens.icon+"</span>":"";
  let gains = getUpgradesCol0Gain(row);
  for (let name in gains) {
    gainStr += (gains[name]) ? " "+makeColoredPetSpan(name)+"<span class=\""+resources.tokens.color+"Text\">+"+gains[name]+"</span>" : "";
  }
  di("upgradesButtonGain0-"+row).innerHTML = gainStr;
  di("upgradesButtonDescription0-"+row).innerHTML = upgradesCol0[row][user.upgradesCol0[row]].description+nextGain;
  //border color
  di("upgradesButton0-"+row).style.borderColor = tierColors[row];
  //rankupLock
  if (user.rank>=upgradesCol0[row][user.upgradesCol0[row]].reqRank) {
    di("upgradesButton0-"+row).style.display = "";
    di("upgradesButtonRankupLock0-"+row).style.display = "none";
  }
  else if (ranks[user.rank+1]) {
    di("upgradesButton0-"+row).style.display = "none";
    di("upgradesButtonRankupLock0-"+row).style.display = "";
    //set reqRank value
    di("upgradesButtonRankupLockReqRank0-"+row).textContent = ranks[user.rank].nextName;
  }
  //set cursor to default if level is maxed
  if (user.upgradesCol0[row]+1>=upgradesCol0[row].length) {
    di("upgradesButton0-"+row).style.cursor = "default";
  }
  else {
    di("upgradesButton0-"+row).style.cursor = "pointer";
  }
}
function updateUpgradesCol1Button(row) {
  di("upgradesButtonTitle1-"+row).innerHTML = upgradesCol1[row][user.upgradesCol1[row]].title;
  di("upgradesButtonLevel1-"+row).textContent = user.upgradesCol1[row];
  di("upgradesButtonCost1-"+row).textContent = e(upgradesCol1[row][user.upgradesCol1[row]].cost);
  //update gain
  let gainStr = "",
      userLevel = user.upgradesCol1[row],
      nextGain = (userLevel+1<upgradesCol1[row].length)?"<span class=\""+resources.energy.color+"Text\">-"+upgradesCol1[row][userLevel].gain+"</span> <span class=\""+resources.energy.color+"Text\">"+resources.energy.icon+"</span>":"";
  let gains = getUpgradesCol1Gain(row);
  for (let name in gains) {
    gainStr += (gains[name]) ? " "+makeColoredPetSpan(name)+"<span class=\""+resources.energy.color+"Text\">-"+gains[name]+"</span>" : "";
  }
  di("upgradesButtonGain1-"+row).innerHTML = gainStr;
  di("upgradesButtonDescription1-"+row).innerHTML = upgradesCol1[row][user.upgradesCol1[row]].description+nextGain;
  //border color
  di("upgradesButton1-"+row).style.borderColor = tierColors[row];
}
