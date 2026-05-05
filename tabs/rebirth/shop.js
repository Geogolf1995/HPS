//Buttons
function buyRebirthPet(name) {
  if (logActions) {console.log("user > buyRebirthPet("+name+")")}
  //check if user already has this pet
  if (!user.hasRebirthPets.includes(name)) {
    //check if user can afford this pet
    if (user.coins>=game.rebirthPets[name].coinCost) {
      //check if user has the required pets
      let hasPetReq = true;
      for (let needPetName of game.rebirthPets[name].petReq) {
        if (!user.hasRebirthPets.includes(needPetName)) {
          hasPetReq = false;
          break;
        }
      }
      if (hasPetReq) {
        //take resources
        user.coins-=game.rebirthPets[name].coinCost;
        for (let needPetName of game.rebirthPets[name].petReq) {
          takeRebirthPet(needPetName);
        }
        //give pet
        giveRebirthPet(name);
        //update
        updatePets();
        if (logActions) {console.log("buyRebirthPet("+name+") > success")}
      }
    }
    else if (logActions) {console.log("buyRebirthPet("+name+") > fail, user does not have enough coins")}
  }
  else if (logActions) {console.log("buyRebirthPet("+name+") > fail, user already has pet")}
}
di("respecPetsButton").addEventListener("click", respecRebirthPets);
function respecRebirthPets() {
  //for each pet
  for (let name of user.hasRebirthPets) {
    //give back the coins
    user.coins+=game.rebirthPets[name].totalCoinCost;
    //remove pet
    takeRebirthPet(name);
  }
  //reset
  rebirthReset();
  //updates
  /*updateRebirthPets()*/
  
  /*
  //for each upgrade
  for (let num in user.rebirthUpgrades) {
    //iterate through rebirthUpgrades
    let userLevel = user.rebirthUpgrades[num];
    for (let i=0; i<userLevel; i++) {
      let cost = rebirthUpgrades[num][i].cost;
      //give back the coins
      user.coins+=cost;
    }
    //remove upgrade
    user.rebirthUpgrades[num] = 0;
  }
  setRebirthUpgrades01Gain();
  setRebirthUpgrade2TotalGain();
  //reset
  rebirthReset();
  //updates
  updateRebirthUpgrades();
  */
}

//changes user data
function giveRebirthPet(name) {
  if (logActions) {console.log("giveRebirthPet("+name+")")}
  //check if user has not reached the pet count limit
  /*let count = user.hasRebirthPets.split(name).length-1;*/
  if (true/*count<game.pets[name].maxCount*/) {
    user.hasRebirthPets+=name;
    //add pet to UI
    addRebirthPet(name);
    if (logActions) {console.log("giveRebirthPet("+name+") > success")}
  }
  else if (logActions) {console.log("giveRebirthPet("+name+") > fail, user already has this pet")}
}
function takeRebirthPet(name) {
  if (logActions) {console.log("takeRebirthPet("+name+")")}
  //check if user has this pet
  if (user.hasRebirthPets.includes(name)) {
    user.hasRebirthPets = user.hasRebirthPets.replace(name, "");
    //check if user has only one of this pet
    /*let count = user.hasRebirthPets.split(name).length-1;*/
    if (true/*count==0*/) {
      //remove pet from UI
      removeRebirthPet(name);
    }
    if (logActions) {console.log("takeRebirthPet("+name+") > success")}
  }
  else if (logActions) {console.log("takeRebirthPet("+name+") > fail, user does not have this pet")}
}

//purely visual
function addRebirthPet(name) {
  di("petSlotRIcon"+name).textContent = name;
  showId("petSlotRDesc"+name);
}
function removeRebirthPet(name) {
  di("petSlotRIcon"+name).textContent = "";
  hideId("petSlotRDesc"+name);
}


//Updates
function updateRebirthShop() {
  if (logUpdates) {console.log("updateRebirthShop")}
  for (let name in game.rebirthPets) {
    //coin cost
    di("rebirthShopPetCoinCost"+name).textContent = e(game.rebirthPets[name].coinCost);
    //total coin cost
    di("rebirthShopPetTotalCoinCost"+name).textContent = e(game.rebirthPets[name].totalCoinCost);
    //pet requirements
    //only put '-' in front if you need other pets to buy this one
    let reqStr = (game.rebirthPets[name].petReq)?"-":"",
        reqTiers = {};
    //iterate through required pets
    for (let reqName of game.rebirthPets[name].petReq) {
      //save the color for styling
      let color = tierColors[game.rebirthPets[reqName].tier]
      //separate pets by tier with their color as the key
      reqTiers[color] = (reqTiers[color])?reqTiers[color]+=reqName:reqName;
    }
    //iterate through each tier of required pets
    for (let color in reqTiers) {
      let names = reqTiers[color];
      //add colored span for each tier
      reqStr += "<span class=\""+color+"Text\">"+reqTiers[color]+"</span>";
    }
    di("rebirthShopPetPetCost"+name).innerHTML = reqStr;
    //energy gain
    di("rebirthShopPetGain"+name).textContent = e(game.rebirthPets[name].energyPerSec);
  }
}
