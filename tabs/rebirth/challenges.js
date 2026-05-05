//Buttons
function enterChallenge(num) {
  //exit challenge if already in challenge
  if (user.inChallenge==num) {
    exitChallenge();
    return;
  }
  //enter challenge
  user.inChallenge = num;
  //rebirth
  rebirthReset();
  //updates
  updateInChallenge();
  updateRebirthChallenges();
}
function exitChallenge(completed) {
  //alert
  if (completed) {alertify.alert("Challenge "+user.inChallenge+" completed")}
  //exit challenge
  user.inChallenge = 0;
  //updates
  updateRebirthChallenges();
}


//Calculate Costs and Gains
function getChallenge2Gain() {
  return (user.challenges[2]) ? Math.pow(Math.log2(user.totalCoins), 1+(.35*user.challenges[2])-.35) : 0;
}
function getChallenge3Gain() {
  return Math.sqrt(Math.sqrt(Object.values(user.altarUpgrades).reduce((a,b)=>a+b,0)*Math.pow(user.challenges[3],2)));
}


//Updates
function updateRebirthChallenges() {
  for (let i=1; i<challenges.length; i++) {
    //requirement
    di("challenge"+i+"Requirement").textContent = e(challenges[i].energyReq[user.challenges[i]]);
    //styling
    if (user.inChallenge==i) {di("challenge"+i+"Button").style.backgroundColor = "var(--redHover)"}
    else {di("challenge"+i+"Button").style.backgroundColor = "var(--blackBg)"}
  }
  di("challenge1Gain").textContent =(25*user.challenges[1])+"%";
  di("challenge2Gain").textContent = "x"+e(getChallenge2Gain(), 2);
  di("challenge3Gain").textContent = "x"+e(getChallenge3Gain(), 2);
}
