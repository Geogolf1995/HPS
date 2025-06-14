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


//Update HTML
function updateUpgradesCol0Button(row) {
  di("upgradesButtonTitle0-"+row).innerHTML = upgradesCol0[row][user.upgradesCol0[row]].title;
  di("upgradesButtonLevel0-"+row).textContent = user.upgradesCol0[row];
  di("upgradesButtonCost0-"+row).textContent = e(upgradesCol0[row][user.upgradesCol0[row]].cost);
  //update gain
  let gainStr = "",
      userLevel = user.upgradesCol0[row],
      nextGain = (userLevel+1<upgradesCol0[row].length)?"<span class=\""+resources.tokens.color+"Text\">+"+upgradesCol0[row][userLevel].gain+"</span>":"";
  let gains = getUpgradesCol0Gain(row);
  for (let name in gains) {
    gainStr += (gains[name]) ? " "+makeColoredPetSpan(name)+"<span class=\""+resources.tokens.color+"Text\">+"+gains[name]+"</span>" : "";
  }
  di("upgradesButtonGain0-"+row).innerHTML = gainStr;
  di("upgradesButtonDescription0-"+row).innerHTML = upgradesCol0[row][user.upgradesCol0[row]].description+nextGain;
  //border color
  di("upgradesButton0-"+row).style.borderColor = tierColors[row];
}
function updateUpgrades() {
  if (logUpdates) {console.log("updateUpgrades")}
  for (let row in upgradesCol0) {
    updateUpgradesCol0Button(row);
  }
}
