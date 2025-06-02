//info
//public version format: public release adding content . public release tweaking content
//beta version format: 'beta' - latest public release . beta release adding or tweaking content
//public version: 1.0
//beta version: beta-1.0


//Update Messages
const updateMessages = {
  "v1.1": "- Added a changelog<br>- Added 1 achievement<br> - Several visual feedback improvements<br>- Fixed 2 bugs",
}


//load from local storage if available
var savedUser;
function loadGame(importedUser) {
  savedUser = importedUser || /*JSON.parse(localStorage.getItem("user"))*/setUser();
  if (savedUser != null) {
    console.log("Loading from version "+savedUser.version);
    //do not modify saved user in case version update breaks the game
    let loadUser = JSON.parse(JSON.stringify(savedUser));
    updateVersion(loadUser);
  }
  else {
    console.log("Loading version: "+setUser().version);
    user = setUser();
    initialization();
  }
}
function updateVersion(loadUser) {
  let updated = false;
  //for when localStorage is added
  switch(loadUser.version){
    //load from latest public release, into beta releases
    case "v1.0": {
      loadUser.version = "v1.1";
      updated = true;
    }
    case "beta-1.0": {
      //update beta releases
      updated = true;
    }
  }
  //load updated data into user
  user = JSON.parse(JSON.stringify(loadUser));
  console.log("Version "+loadUser.version+" loaded successfully");
  //set game initilization
  initialization(updated);
}
function initialization(updated) {
  //set game state based on user's progress
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
      let updateMessage = "";
      for (let version in updateMessages) {
        updateMessage+="<br>Version "+version+"<br>"+updateMessages[version]+"<br>";
      }
      alertify.alert("What's New:<br>"+updateMessage);
      alertify.message("Loaded Version "+user.version);
      /*
    if (updated) {
      let updateMessage = "";
      for (let version in updateMessages) {
        updateMessage += "<br>"+version+"<br>"+updateMessages[version]+"<br>";
        if (version == versionStart) {break}
      }
      alertify.alert("What's New:"+updateMessage);
      alertify.message("Loaded Version " + versionStart + " > " + user.version)
    }
      */
    }
    else {
      alertify.message("Loaded Version "+user.version);
    }
  }, 1000);
}
function setGame() {
  //the order matters!
  
  //achievements
  getAchievementsTokensPerSec();
  
  //resources
  getTokensPerSec();
  
  //pets & shop
  for (let name of user.hasPets) {
    addPet(name);
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
}
