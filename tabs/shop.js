//Buttons
function buyPet(name) {
  if (logActions) {console.log("user > buyPet("+name+")")}
  //check if user does not already have this pet
  if (!user.hasPets.includes(name)) {
    //check if user is a high enough rank
    if (user.rank>=game.pets[name].tier) {
      //check if user can afford the pet
      if (user.energy>=game.pets[name].energyCost) {
        //check if user has the required pets
        let hasPetReq = true;
        for (let needPetName of game.pets[name].petReq) {
          if (!hasPetReq) {break}
          if (!user.hasPets.includes(needPetName)) {
            hasPetReq = false;
            break;
          }
        }
        if (hasPetReq) {
          //take resources
          user.energy-=game.pets[name].energyCost;
          for (let needPetName of game.pets[name].petReq) {
            takePet(needPetName);
          }
          //give pet
          givePet(name);
          if (logActions) {console.log("buyPet("+name+") > success")}
        }
        else if (logActions) {console.log("buyPet("+name+") > fail, user does not have the required pets")}
      }
      else if (logActions) {console.log("buyPet("+name+") > fail, user does not have enough energy")}
    }
    else if (logActions) {console.log("buyPet("+name+") > fail, user is not a high enough rank")}
  }
  else if (logActions) {console.log("buyPet("+name+") > fail, user already has pet")}
}

//changes user data
function givePet(name) {
  if (logActions) {console.log("givePet("+name+")")}
  //check if user does not have this pet
  if (!user.hasPets.includes(name)) {
    user.hasPets+=name;
    //add pet to UI
    addPet(name);
    if (logActions) {console.log("givePet("+name+") > success")}
  }
  else if (logActions) {console.log("givePet("+name+") > fail, user already has this pet")}
}
function takePet(name) {
  if (logActions) {console.log("takePet("+name+")")}
  //check if user has this pet
  if (user.hasPets.includes(name)) {
    user.hasPets = user.hasPets.replace(name, "");
    //remove pet from UI
    removePet(name);
    if (logActions) {console.log("takePet("+name+") > success")}
  }
  else if (logActions) {console.log("takePet("+name+") > fail, user does not have this pet")}
}

//purely visual
function addPet(name) {
  di("petSlotIcon"+name).textContent = name;
  showId("petSlotDesc"+name);
}
function removePet(name) {
  di("petSlotIcon"+name).textContent = "";
  hideId("petSlotDesc"+name);
}


//Calculate Costs and Gains


//Update HTMl
function updateShop() {
  if (logUpdates) {console.log("updateShop")}
  for (let name in game.pets) {
    //energy cost
    di("shopPetEnergyCost"+name).textContent = e(game.pets[name].energyCost);
    //pet requirements
    //only put '-' in front if you need other pets to buy this one
    let reqStr = (game.pets[name].petReq)?"-":"",
        reqTiers = {};
    //iterate through required pets
    for (let reqName of game.pets[name].petReq) {
      //save the color for styling
      let color = tierColors[game.pets[reqName].tier];
      //separate pets by tier with their color as the key
      reqTiers[color] = (reqTiers[color])?reqTiers[color]+=reqName:reqName;
    }
    
    //iterate through each tier of required pets
    for (let color in reqTiers) {
      let names = reqTiers[color];
      //add colored span for each tier
      reqStr += "<span class=\""+color+"Text\">"+reqTiers[color]+"</span>";
    }
    di("shopPetPetCost"+name).innerHTML = reqStr;
    //token gain
    di("shopPetGain"+name).textContent = e(game.pets[name].tokensPerSec);
    
    //check if user is a high enough rank to view this pet
    if (user.rank>=game.pets[name].tier) {
      showId("shopPet"+name);
    }
    else {
      hideId("shopPet"+name);
    }
  }
}
