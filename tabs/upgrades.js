//Buttons
function buyUpgradeCol0(row) {
  if (logActions) {console.log("user > buyUpgradeCol0("+row+")")}
  let userLevel = user.upgradesCol0[row];
  //check if user is a high enough rank
  //really only needed if a bug shows up
  if (true/*user.rank>0*/) {
    //check if user has enough tokens
    if (user.tokens>=upgrades[0][row][userLevel].cost) {
      //take tokens
      user.tokens-=upgrades[0][row][userLevel].cost;
      //give upgrade
      user.upgradesCol0[row]++;
      let upgradingPetName = petsInTier[row][userLevel%petsInTier[row].length];
      game.pets[upgradingPetName].tokensPerSec+=upgrades[0][row][userLevel].gain;
      //updates
      updateUpgradesButton(0, row);
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
    if (user.energy>=upgrades[1][row][userLevel].cost) {
      //take energy
      user.energy-=upgrades[1][row][userLevel].cost;
      //give upgrade
      user.upgradesCol1[row]++;
      let upgradingPetName = upgrades[1][row][userLevel].affectedPet;
      game.pets[upgradingPetName].energyCost-=upgrades[1][row][userLevel].gain;
      //updates
      setTotalPetCost();
      updateUpgradesButton(1, row);
      if (logActions) {console.log("buyUpgradeCol1("+row+") > success")}
    }
    else if (logActions) {console.log("buyUpgradeCol1("+row+") > fail, user does not have enough energy")}
  }
  else if (logActions) {console.log("buyUpgradeCol1("+row+") > fail, user is not a high enough rank")}
}
function buyUpgradeCol2(row) {
  if (logActions) {console.log("user > buyUpgradeCol2("+row+")")}
  let userLevel = user.upgradesCol2[row];
  //check if user is a high enough rank
  if (user.rank>2) {
    //check if user has enough tokens
    if (user.tokens>=upgrades[2][row][userLevel].cost) {
      //take tokens
      user.tokens-=upgrades[2][row][userLevel].cost;
      //give upgrade
      user.upgradesCol2[row]++;
      game.pets[upgrades[2][row][userLevel].affectedPet].maxCount += upgrades[2][row][userLevel].gain;
      //updates
      updatePets();
      updateUpgradesButton(2, row);
      if (logActions) {console.log("buyUpgradeCol2("+row+") > success")}
    }
    else if (logActions) {console.log("buyUpgradeCol2("+row+") > fail, user does not have enough tokens")}
  }
  else if (logActions) {console.log("buyUpgradeCol2("+row+") > fail, user is not a high enough rank")}
}

//Calculate Costs and Gains
function getUpgradesGain(col, row) {
  if (col==0) {
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
      for (let j=i; j<userLevel && j<upgrades[0][row].length; j+=interval) {
        gains[name]+=upgrades[0][row][j].gain;
      }
    }
    //return object of upgrade gains
    return gains;
  }
  else if (col==1) {
    let userLevel = user.upgradesCol1[row],
        gains = {};
    //add pets as keys
    for (let i=0; i<petsInTier[row].length; i++) {
      //set initial gain to 0
      gains[petsInTier[row][i]] = 0;
    }
    //for each level, add the gain from the corresponding pet
    for (let i=0; i<userLevel; i++) {
      let affectedPet = upgrades[1][row][i].affectedPet,
          gain = upgrades[1][row][i].gain;
      gains[affectedPet]+=gain;
    }
    return gains;
  }
  else if (col==2) {
    let userLevel = user.upgradesCol2[row],
        interval = petsInTier[row].length,
        gains = {};
    //for each pet
    for (let i=0; i<petsInTier[row].length; i++) {
      //get the pet's name
      let name = petsInTier[row][i];
      //set initial gain to 0
      gains[name] = 0;
      //add the gain every nth level up to the user's current level, where n is the number of pets in this tier
      for (let j=i; j<userLevel && j<upgrades[2][row].length; j+=interval) {
        gains[name]+=upgrades[2][row][j].gain;
      }
    }
    return gains;
  }
}

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
  for (let col in upgrades) {
    for (let row in upgrades[col]) {
      updateUpgradesButton(col, row);
    }
  }
}
function updateUpgradesButton(col, row) {
  di("upgradesButtonTitle"+col+"-"+row).innerHTML = upgrades[col][row][user["upgradesCol"+col][row]].title;
  di("upgradesButtonLevel"+col+"-"+row).textContent = user["upgradesCol"+col][row];
  di("upgradesButtonCost"+col+"-"+row).textContent = e(upgrades[col][row][user["upgradesCol"+col][row]].cost);
  //update gain
  let gainStr = "",
      userLevel = user["upgradesCol"+col][row],
      nextGain = (col==0)? (userLevel+1<upgrades[col][row].length)?"<span class=\""+resources.tokens.color+"Text\">+"+upgrades[col][row][userLevel].gain+"</span> <span class=\""+resources.tokens.color+"Text\">"+resources.tokens.icon+"</span>":""
                :(col==1)? (userLevel+1<upgrades[col][row].length)?"<span class=\""+resources.energy.color+"Text\">-"+upgrades[col][row][userLevel].gain+"</span> <span class=\""+resources.energy.color+"Text\">"+resources.energy.icon+"</span>":""
                :(col==2)? (userLevel+1<upgrades[col][row].length)?makeColoredPetSpan(upgrades[col][row][user["upgradesCol"+col][row]].affectedPet, "+"+upgrades[col][row][user["upgradesCol"+col][row]].gain):"":"";
      /*nextGains = (userLevel+1<upgrades[col][row].length)?"<span class=\""+resources.tokens.color+"Text\">+"+upgrades[col][row][userLevel].gain+"</span> <span class=\""+resources.tokens.color+"Text\">"+resources.tokens.icon+"</span>":"";  */
  let gains = getUpgradesGain(col, row);
  for (let name in gains) {
    gainStr += (gains[name]) ? " "+makeColoredPetSpan(name)+"<span class=\""+resources[(col==0)?"tokens":(col==1)?"energy":"tokens"].color+"Text\">"+((col==0)?"+":(col==1)?"-":"")+gains[name]+"</span>" : "";
  }
  if (col==2) {
    gainStr = "<span class=\""+tierColors[row]+"Text\">";
    for (let name in gains) {
      gainStr += (gains[name]) ? " "+name+"+"+gains[name] : "";
    }
    gainStr+="</span>";
  }
  di("upgradesButtonGain"+col+"-"+row).innerHTML = gainStr;
  di("upgradesButtonDescription"+col+"-"+row).innerHTML = upgrades[col][row][user["upgradesCol"+col][row]].description+nextGain;
  //border color
  di("upgradesButton"+col+"-"+row).style.borderColor = tierColors[row];
  //rankupLock
  if (user.rank>=upgrades[col][row][user["upgradesCol"+col][row]].reqRank) {
    di("upgradesButton"+col+"-"+row).style.display = "";
    di("upgradesButtonRankupLock"+col+"-"+row).style.display = "none";
  }
  else if (ranks[user.rank+1]) {
    di("upgradesButton"+col+"-"+row).style.display = "none";
    di("upgradesButtonRankupLock"+col+"-"+row).style.display = "";
    //set reqRank value
    di("upgradesButtonRankupLockReqRank"+col+"-"+row).textContent = ranks[user.rank].nextName;
  }
  //set cursor to default if level is maxed
  if (user["upgradesCol"+col][row]+1>=upgrades[col][row].length) {
    di("upgradesButton"+col+"-"+row).style.cursor = "default";
  }
  else {
    di("upgradesButton0-"+row).style.cursor = "pointer";
  }
}
