di("rebirthButton").addEventListener("click", rebirth);
//Buttons
function rebirth() {
  //check if user is a high enough rank
  if (user.rank>5) {
    //check if user has all the pets
    let hasPets = true
    for (let name in game.pets) {
      if (!user.hasPets.includes(name)) {
        hasPets = false;
        break;
      }
    }
    if (hasPets) {
      //give coins
      user.rebirthCount++;
      user.coins+=getRebirthGain();
      user.totalCoins+=getRebirthGain();
      //reset everything else
      rebirthReset();
      //updates
      updateRun();
      updateRunButton();
      updatePets();
      updateRank();
    }
  }
}


//Resets
function rebirthReset(trueReset) {
  let newUser = getNewUser();
  //set values to 0
  user.tokens = 0;
  user.energy = 0;
  user.hasPets = "";
  user.runCount = 0;
  /*user.highestEnergyTier = 0;*/
  user.rank = 0;
  
  //reset upgrades based on rebirth milestones
  let hasUpgrades = [user.upgradesCol0, user.upgradesCol1, user.upgradesCol2];
  user.upgradesCol0 = [0,0,0,0,0];
  user.upgradesCol1 = [0,0,0,0,0];
  user.upgradesCol2 = [0,0,0,0,0];
  if (user.inChallenge!=1 && !trueReset) {
    for (let col in hasUpgrades) {
      for (let row in hasUpgrades[col]) {
        if (user.rebirthCount>=milestoneUpgradeUnlocks[col][row]) {
          user["upgradesCol"+col][row] = hasUpgrades[col][row];
        }
      }
    }
  }
  let milestoneNumByTier = [3,7,11,15];
  for (let tier in petsInTier) {
    if (tier<4) {
      if (user.rebirthCount<milestones[milestoneNumByTier[tier]].req || user.inChallenge==3) {
        for (let name of petsInTier[tier]) {
          user.altarUpgrades[name] = 0;
        }
      }
    }
    else {
      for (let name of petsInTier[tier]) {
        user.altarUpgrades[name] = 0;
      }
    }
  }
  
  //reset game var
  let currentGame = game;
  game = getNewGame();
  game.tokensMulti = currentGame.tokensMulti;
  game.energyMulti = currentGame.energyMulti;
  game.runTimes = currentGame.runTimes;
  game.achievementsTokensPerSec = currentGame.achievementsTokensPerSec;
  setShopPets();
  game.rebirthPets = currentGame.rebirthPets;
  //clear pets
  for (let name in game.pets) {removePet(name)}
  setTotalPetCost();
  //updates
  updatePets();
}


//Calculate costs and gains
function getRebirthGain() {
  return (user.rank<coinsOnRebirth.length) ? coinsOnRebirth[user.rank] : coinsOnRebirth[coinsOnRebirth.length-1];
}


//Updates
function updateRebirth() {}
