//Buttons
for (let i=0; i<5; i++) {
  di("rebirthUpgradeButton"+i).addEventListener("click", ()=>{buyRebirthUpgrade(i)});
}
function buyRebirthUpgrade(num) {
  if (logActions) {console.log("user > buyRebirthUpgrade("+num+")")}
  let userLevel = user.rebirthUpgrades[num];
  /*if (num<2) {
    //check if user has enough coins
    if (user.coins>=rebirthUpgrades[num][userLevel].cost) {
      //take coins
      user.coins-=rebirthUpgrades[num][userLevel].cost;
      //give upgrade
      user.rebirthUpgrades[num]++;
      setRebirthUpgrades01Gain(num);
      //updates
      updateRebirthUpgrades();
    }
  }*/
  //check if user has enough coins
  if (user.coins>=rebirthUpgrades[num][userLevel].cost) {
    //take coins
    user.coins-=rebirthUpgrades[num][userLevel].cost;
    //give upgrade
    user.rebirthUpgrades[num]++;
    //specifics
    /*if (num<2) {
      setRebirthUpgrades01Gain();
    }*/
    if (num==2) {
      setRebirthUpgrade2TotalGain();
    }
    //updates
    updateRebirthUpgrades();
  }
  else if (logActions) {console.log("buyRebirthUpgrade("+num+") > fail, user does not have enough coins")}
}
di("respecUpgradesButton").addEventListener("click", respecUpgrades);
function respecUpgrades() {
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
  /*setRebirthUpgrades01Gain();*/
  setRebirthUpgrade2TotalGain();
  //reset
  rebirthReset();
  //updates
  updateRebirthUpgrades();
}


//Calculate costs and gains
function getRebirthUpgrades01Gain(num) {
  /*if (typeof num=="undefined") {
    setRebirthUpgrades01Gain(0);
    setRebirthUpgrades01Gain(1);
    return;
  }*/
  let totalGain = 1;
  for (let i=0; i<user.rebirthUpgrades[num]; i++) {
    totalGain+=rebirthUpgrades[num][i].gain;
  }
  /*if (num) {game.energyMulti = totalGain}
  else {game.tokensMulti = totalGain}*/
  return totalGain;
}
function setRebirthUpgrade2TotalGain() {
  let totalGain = 0;
  for (let i=0; i<user.rebirthUpgrades[2]; i++) {
    totalGain+=rebirthUpgrades[2][i].gain;
  }
  return game.runTimes = 1+totalGain;
}
function getRebirthUpgrade34Gain(num, bypass) {
  if (num==3) {
    return (user.rebirthUpgrades[3] || bypass) ? Math.log10(Math.max(1, user.energy))/3 : 0;
  }
  else {
    return (user.rebirthUpgrades[4] || bypass) ? Math.log10(Math.max(1, user.tokens))/4 : 0;
  }
}


//Updates
function updateRebirthUpgrades() {
  //upgrades 0-2
  for (let i=0; i<3; i++) {
    let userLevel = user.rebirthUpgrades[i];
    //values
    di("rebirthUpgrade"+i+"Cost").textContent = "-"+e(rebirthUpgrades[i][userLevel].cost);
    di("rebirthUpgrade"+i+"Gain").textContent = "+"+e(rebirthUpgrades[i][userLevel].gain, (i<2)?2:0);
    /*di("rebirthUpgrade"+i+"TotalGain").textContent = "x"+e((i)?game.energyMulti:game.tokensMulti, 2);*/
    switch(i) {
      case 0:
        di("rebirthUpgrade0TotalGain").textContent = "x"+e(getRebirthUpgrades01Gain(0), 2);
        break;
      case 1:
        di("rebirthUpgrade1TotalGain").textContent = "x"+e(getRebirthUpgrades01Gain(1), 2);
        break;
      case 2:
        di("rebirthUpgrade2TotalGain").textContent = "+"+(game.runTimes-1);
        break;
    }
    buttonLock(i);
  }
  //upgrades 3-4
  updateRebirthUpgrade34();
  //upgrades 5-7
  for (let i=5; i<8; i++) {
    di("rebirthUpgrade"+i+"Cost").textContent = "";
    di("rebirthUpgrade"+i+"Gain").textContent = "";
    di("rebirthUpgrade"+i+"TotalGain").textContent = "Coming Soon";
  }
}
function updateRebirthUpgrade34() {
  for (let i=3; i<5; i++) {
    let userLevel = user.rebirthUpgrades[i];
    di("rebirthUpgrade"+i+"Cost").textContent = "-"+e(rebirthUpgrades[i][userLevel].cost);
    di("rebirthUpgrade"+i+"Gain").textContent = "x"+e(getRebirthUpgrade34Gain(i, true), 2);
    di("rebirthUpgrade"+i+"TotalGain").textContent = "x"+e(getRebirthUpgrade34Gain(i), 2);
    buttonLock(i);
  }
}

function buttonLock(num) {
  //visually lock once complete
  if (user.rebirthUpgrades[num]>=rebirthUpgrades[num].length-1) {
    di("rebirthUpgradeButton"+num).style.backgroundColor = "rgb(35, 35, 35)";
    di("rebirthUpgradeButton"+num).style.cursor = "default";
  }
  else {
    di("rebirthUpgradeButton"+num).style.backgroundColor = "var(--blackBg)";
    di("rebirthUpgradeButton"+num).style.cursor = "cursor";
  }
}
