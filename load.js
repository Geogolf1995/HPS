//Update Messages
const updateMessages = {
  "v2.2": "- Now showing the total energy cost for all letters<br>- Added Rank II and related content<br>- Enhanced user feedback",
  "v2.1": "- Added more upgrades for green letters<br>- Added more blue letters<br>- Fixed some bugs",
  "v2.0": "- Added upgrades for green letters and related content<br>- Several visual improvements",
  "v1.1": "- Added a changelog<br>- Added 1 achievement<br>- Several visual improvements<br>- Fixed some bugs",
}


//load from local storage if available
var savedUser;
var fromVersion = latestVersion;
function loadGame(importedUser) {
  savedUser = importedUser || /*JSON.parse(localStorage.getItem("user"))*/getNewUser();
  if (savedUser != null) {
    console.log("Loading from version "+savedUser.version);
    fromVersion = savedUser.version;
    //do not modify saved user in case version update breaks the game
    let loadUser = JSON.parse(JSON.stringify(savedUser));
    updateVersion(loadUser);
  }
  else {
    console.log("Loading version: "+getNewUser().version);
    user = getNewUser();
    initialization();
  }
}
function updateVersion(loadUser) {
  let updated = false;
  //for when localStorage is added
  //load from latest public release into beta releases (later)
  if (loadUser.version=="v1.0") {
    loadUser.version = "v1.1";
  }
  if (loadUser.version=="v1.1") {
    loadUser.version = "v2.0";
    loadUser.upgradesCol0 = [0,0,0,0,0];
    updated = true;
  }
  if (loadUser.version=="v2.0") {
    loadUser.version = "v2.1";
    updated = true;
  }
  if (loadUser.version=="v2.1") {
    loadUser.version = "v2.2";
    loadUser.upgradesCol1 = [0, 0, 0, 0, 0];
    updated = true;
  }
  if (loadUser.version=="beta-1.0") {
    //update beta releases
    updated = true;
  }//unused until I separate beta from public
  
  //load updated data into user
  user = JSON.parse(JSON.stringify(loadUser));
  console.log("Version "+loadUser.version+" loaded successfully");
  //set game initilization
  initialization(updated);
}
function initialization(updated) {
  //set game state based on user's progress
  game = getNewGame();
  setGame();
  //simulate offline gains
  
  //save user's progress
  save();
  //show or hide relevant content
  checkUnlocks();
  
  //update all visible numbers
  updateAll();
  //update version text
  di("version").textContent = user.version;
  //show user's last visited tab
  showTab(user.tab);
  //show gameScreen
  hideId("loadingScreen");
  showId("gameScreen");
  //send update message
  setTimeout(()=>{
    if (updated) {
      showChangelog(fromVersion, true);
    }
  }, 1000);
}

function setGame() {
  //the order matters!
  
  //pets & shop
  for (let name in game.pets) {
    //add visual pets
    if (user.hasPets.includes(name)) {
      addPet(name);
    }
    else {
      removePet(name);
    }
  }
  setTotalPetCost();
  
  //run
  getRunCost();
  for (let i=energyTiers.length-1; i>=0; i--) {
    if (user.runCount>=energyTiers[i].runReq) {
      game.energyTier = i+1;
      break;
    }
    else {
      game.energyTier = 0;
    }
  }
  
  //upgrades
  //column 0
  for (let i=0; i<petsInTier.length; i++) {
    let gains = getUpgradesCol0Gain(i);
    for (let j=0; j<petsInTier[i].length; j++) {
      let name = petsInTier[i][j];
      game.pets[name].tokensPerSec+=gains[name];
    }
  }
  //column 1
  for (let i=0; i<petsInTier.length; i++) {
    let gains = getUpgradesCol1Gain(i);
    for (let name in gains) {
      game.pets[name].energyCost-=gains[name];
    }
  }
  
  //achievements
  getAchievementsTokensPerSec();
  
  //resources
  getTokensPerSec();
}
function showChangelog(firstVersion, exclusive) {
  let updateMessage = "";
  if (firstVersion==latestVersion) {return}
  for (let version in updateMessages) {
    if (version==firstVersion && exclusive) {break}
    updateMessage+="<br>Version "+version+"<br>"+updateMessages[version]+"<br>";
    if (version==firstVersion) {break}
  }
  if (version!=latestVersion) {
    alertify.alert("What's New:<br>"+updateMessage);
  }
}
document.getElementById("version").parentElement.addEventListener("click", ()=>{
  showChangelog("v"+latestVersion[1]+".0");
});
