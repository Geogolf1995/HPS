//Read Document
function di(id) {return document.getElementById(id)}


//Change Display
function showId(id, type) {document.getElementById(id).style.display = (type)?type:""}
function hideId(id) {document.getElementById(id).style.display = "none"}
function visOff(id) {document.getElementById(id).style.visibility = "hidden"}
function visOn(id) {document.getElementById(id).style.visibility = ""}
