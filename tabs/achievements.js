//Buttons
function giveAchievement(id) {
  if (logActions) {console.log("giveAchievements("+id+")")}
  //check if user does not have this achievement
  if (!user.hasAchievements.includes(id)) {
    user.hasAchievements.push(id);
    //update costs and gains
    getAchievementsTokensPerSec();
    //alert user
    alertify.message("Achievement Earned:<br>"+achievements[id].title);
    updateAchievements();
    if (logActions) {console.log("giveAchievement("+id+") > success")}
  }
  else if (logActions) {console.log("giveAchievement("+id+") > fail, user already has this achievement")}
}
function takeAchievement(id) {
  if (logActions) {console.log("takeAchievement("+id+")")}
  //check if user has this achievement
  if (user.hasAchievements.includes(id)) {
    user.hasAchievements.splce(user.hasAchievements.indexOf(id), 1);
    //update costs and gains
    getAchievementsTokensPerSec();
    //alert user
    alertify.error("Achievement Lost:<br>"+achievements[id].title);
    updateAchievements();
    if (logActions) {console.log("takeAchievement("+id+") > success")}
  }
  else if (logActions) {console.log("takeAchievement("+id+") > fail user does not have this achievement")}
}


//Calculate Costs and Gains
function getAchievementsTokensPerSec() {
  return game.achievementsTokensPerSec = user.hasAchievements.length;
}


//Updates
function updateAchievements() {
  if (logUpdates) {console.log("updateAchievements")}
  //update numbers near the top
  di("totalAchievements").textContent = e(user.hasAchievements.length);
  di("achievementMulti").textContent = e(game.achievementsTokensPerSec);
  //update background color
  for (let id in achievements) {
    if (id==0) {continue}
    let achCell = di("ach"+id);
    if (user.hasAchievements.includes(id)) {
      achCell.style.backgroundColor = hasAchColor;
      achCell.firstElementChild.style.color = hasAchIdColor;
    }
    else {
      achCell.style.backgroundColor = noAchColor;
      achCell.firstElementChild.style.color = noAchIdColor;
    }
  }
}
