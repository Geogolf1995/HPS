//Buttons
function buyAltarPetUpgrade(name) {
  if (logActions) {console.log("user > buyAltarPetUpgrade("+name+")")}
  //check if an upgrade is available
    //check if user has enough tokens and energy
  if (user.tokens>=altarUpgrades[name][user.altarUpgrades[name]].tokenCost && user.energy>=altarUpgrades[name][user.altarUpgrades[name]].energyCost) {
    //take resources
    user.tokens-=altarUpgrades[name][user.altarUpgrades[name]].tokenCost;
    user.energy-=altarUpgrades[name][user.altarUpgrades[name]].energyCost;
    //give upgrade
    game.pets[name].petReq = altarUpgrades[name][user.altarUpgrades[name]].nextReq;
    user.altarUpgrades[name]++;
    //updates
    updateAltar();
    setTotalPetCost();
  }
  else if (logActions) {console.log("buyAltarPetUpgrade("+name+") > fail, user does not have enough resources")}
}

//Updates
function updateAltar() {
  if (logUpdates) {console.log("updateAltar")}
  for (let name in altarUpgrades) {
    //token cost
    di("altarUpgradeTokenCost"+name).textContent = e(altarUpgrades[name][user.altarUpgrades[name]].tokenCost);
    //energy cost
    di("altarUpgradeEnergyCost"+name).textContent = e(altarUpgrades[name][user.altarUpgrades[name]].energyCost);
    
    //current pet requirement
    let reqStrC = "",
        reqTiersC = {};
    //iterate through required pets
    for (let reqName of game.pets[name].petReq) {
      //save the color for styling
      let color = tierColors[game.pets[reqName].tier];
      //separate pets by tier with their color as the key
      reqTiersC[color] = (reqTiersC[color])?reqTiersC[color]+reqName:reqName;
    }
    //iterate through each tier of required pets
    for (let color in reqTiersC) {
      //add colored span for each tier
      reqStrC += "<span class=\""+color+"Text\">"+reqTiersC[color]+"</span>";
    }
    di("altarUpgradeCurrentPetReq"+name).innerHTML = "- "+reqStrC;
    
    //next pet requirement
    let reqStrN = "",
        reqTiersN = {};
    //iterate through required pets
    for (let reqName of altarUpgrades[name][user.altarUpgrades[name]].nextReq) {
      //save the color for styling
      let color = tierColors[game.pets[reqName].tier];
      //separate pets by tier with their color as the key
      reqTiersN[color] = (reqTiersN[color])?reqTiersN[color]+reqName:reqName;
    }
    //iterate through each tier of required pets
    for (let color in reqTiersN) {
      //add colored span for each tier
      reqStrN += "<span class=\""+color+"Text\">"+reqTiersN[color]+"</span>";
    }
    di("altarUpgradeNextPetReq"+name).innerHTML = reqStrN;
  }
}
