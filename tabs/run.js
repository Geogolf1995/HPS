//Event Listeners
di("runButton").addEventListener("click", runButton);
di("energyButton").addEventListener("click", energyButton);
di("rankupButton").addEventListener("click", rankupButton);


//Buttons
function runButton() {
  if (logActions) {console.log("user > runButton")}
  //check if user has not finished their rank
  if (user.runCount<ranks[user.rank].runReq) {
    //check if user has enough tokens
    if (user.tokens>=game.runTokenCost) {
      //subtract the tokens
      user.tokens-=game.runTokenCost;
      //increase run count
      user.runCount++;
      user.totalRuns++;
      //check for new energy tier
      if (user.runCount>=energyTiers[game.energyTier].runReq) {
        game.energyTier++;
        user.highestEnergyTier = Math.max(user.highestEnergyTier, game.energyTier);
      }
      //update costs and gains
      getRunCost();
      //updates
      updateEnergyButton();
      updateRankupButton();
      updateRunButton();
      
      if (logActions) {console.log("runButton > success")}
    }
    else if (logActions) {console.log("runButton > fail, user does not have enough tokens")}
  }
  else if (logActions) {console.log("runButton > fail, user is not a high enough rank")}
}
function energyButton() {
  if (logActions) {console.log("user > energyButton")}
  //for safety, you could double check the user has run enough times
  //this could fix a bug or exploit later on
  if (true) {
    user.totalEnergyResets++;
    //give energy
    user.energy+=energyTiers[game.energyTier].currentGain;
    //reset runs and tokens
    user.tokens = 0;
    user.runCount = 0;
    game.energyTier = 0;
    //update costs and gains
    getRunCost();
    //updates
    updateRunButton();
    updateEnergyButton();
    updateRankupButton();
    
    if (logActions) {console.log("energyButton > success")}
  }
  else if (logActions) {console.log("energyButton > fail, user has not run enough times")}
}
function rankupButton() {
  if (logActions) {console.log("user > RankupButton")}
  //for safety, you could double check the user has run enough times
  //this could fix a bug or exploit later on
  if (true) {
    //check if user has enough tokens
    if (user.tokens>=ranks[user.rank].tokenCost) {
      //check if user has enough energy
      if (user.energy>=ranks[user.rank].energyCost) {
        //take tokens and energy
        user.tokens-=ranks[user.rank].tokenCost;
        user.energy-=ranks[user.rank].energyCost;
        //give rank
        user.rank++;
        //updates
        updateRun();
        updateRank();
      }
      else if (logActions) {console.log("rankupButton > fail, user does not have enough energy")}
    }
    else if (logActions) {console.log("rankupButton > fail, user does not have enough tokens")}
  }
  else if (logActions) {console.log("rankupButton > fail, user has not run enough times")}
}
function rebirthButton() {}


//Calculate Costs and Gains
function getRunCost() {
  return game.runTokenCost = runCosts[user.runCount];
}


//Update HTML
function updateEnergyButton() {
  if (logUpdates) {console.log("updateEnergyButton")}
  //show button if the user has run far enough
  if (game.energyTier>0) {
    showId("resetEnergyCon");
  }
  //otherwise hide it
  else {
    hideId("resetEnergyCon");
  }
  //update gain
  di("energyOnReset").textContent = e(energyTiers[game.energyTier].currentGain);
}
function updateRankupButton() {
  if (logUpdates) {console.log("updateRankupButton")}
  //show button if the user has run far enough
  if (user.runCount>=ranks[user.rank].runReq) {
    showId("rankupCon");
  }
  //otherwise hide it
  else {
    hideId("rankupCon");
  }
  //updates
  di("rankupToRank").textContent = "Rank "+ranks[user.rank].nextName;
  di("rankupTokenCost").textContent = e(ranks[user.rank].tokenCost);
  di("rankupEnergyCost").textContent = e(ranks[user.rank].energyCost);
}
function updateRunButton() {
  if (logUpdates) {console.log("updateRunButton")}
  let prevRunReqToEnergy = (game.energyTier>0)?energyTiers[game.energyTier-1].runReq:0;
  //show rankup message
  if (user.runCount>=ranks[user.rank].runReq) {
    hideId("runButtonMain");
    showId("runButtonRankupMessage");
    hideId("runButtonEndMessage");
    di("requiresRank").textContent = "Rank "+ranks[user.rank].nextName;
  }
  //show end message
  else if (user.runCount+1>=runCosts.length) {
    hideId("runButtonMain");
    hideId("runButtonRankupMessage");
    showId("runButtonEndMessage");
  }
  //show main
  else {
    showId("runButtonMain");
    hideId("runButtonEndMessage");
    hideId("runButtonRankupMessage");
  }
  /*//check if user has finished running this rank
  if (user.runCount>=ranks[user.rank].runReq) {
    hideId("runButtonEndMessage");
    //if so, hide the main and show the rankup message
    hideId("runButtonMain");
    showId("runButtonRankupMessage");
    di("requiresRank").textContent = "Rank "+ranks[user.rank].nextName;
  }
  else {
    hideId("runButtonEndMessage");
    //otherwise hide the rankup message and show the main
    hideId("runButtonRankupMessage");
    showId("runButtonMain");
  }*/
  //update html
  di("runCost").textContent = "-"+game.runTokenCost;
  di("runProgToEnergy").textContent = (user.runCount-prevRunReqToEnergy)+"/"+(energyTiers[game.energyTier].runReq-prevRunReqToEnergy);
  //show the energy gained on the next tier only if the user has reached that tier before
  di("energyOnNextReset").textContent = (game.energyTier+1<=user.highestEnergyTier) ? e(energyTiers[game.energyTier+1].currentGain) : "";
  di("runProgToRankup").textContent = user.runCount+"/"+ranks[user.rank].runReq;
  di("runToRank").textContent = ranks[user.rank].nextName;
}
//updates everything in the tab. mainly used when switching tabs
function updateRun() {
  updateEnergyButton();
  updateRankupButton();
  updateRunButton();
}
