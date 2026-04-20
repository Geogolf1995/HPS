//Update Messages
const updateMessages = {
  "v2.5": "- Added ranks IV-VI and related content<br>- Fixed some bugs",
  "v2.4": "- Added rank III and related content<br>- Added altar upgrades<br>- Some energy rewards have been increased",
  "v2.3": "- Added three more letters<br>- Yellow letters recieved a huge buff",
  "v2.2": "- Added Rank II and related content<br>- Now showing the total energy cost for all letters<br>- Enhanced user feedback",
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
  if (loadUser.version=="v2.2") {
    loadUser.version = "v2.3";
    updated = true;
  }
  if (loadUser.version=="v2.3") {
    loadUser.version = "v2.4";
    loadUser.upgradesCol2 = [0, 0, 0, 0, 0],
    loadUser.altarUpgrades = {
      A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0,T:0,U:0,V:0,W:0,X:0,Y:0,Z:0
    }
    updated = true;
  }
  if (loadUser.version=="v2.4") {
    loadUser.version = "v2.5";
    updated = true;
  }
  
  //if user does not have a last update time, set the time to now
  if (loadUser.lastUpdate===null) {loadUser.lastUpdate = Date.now()}
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
    let gains = getUpgradesGain(0, i);
    for (let j=0; j<petsInTier[i].length; j++) {
      let name = petsInTier[i][j];
      game.pets[name].tokensPerSec+=gains[name];
    }
  }
  //column 1
  for (let i=0; i<petsInTier.length; i++) {
    let gains = getUpgradesGain(1, i);
    for (let name in gains) {
      game.pets[name].energyCost-=gains[name];
    }
  }
  //column 2
  for (let i=0; i<petsInTier.length; i++) {
    let gains = getUpgradesGain(2, i);
    for (let name in gains) {
      game.pets[name].maxCount+=gains[name];
    }
  }
  
  //altar
  for (let name in altarUpgrades) {
    if (user.altarUpgrades[name]>0) {
      game.pets[name].petReq = altarUpgrades[name][user.altarUpgrades[name]-1].nextReq;
    }
  }
  
  //pets & shop again
  setTotalPetCost();
  
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
