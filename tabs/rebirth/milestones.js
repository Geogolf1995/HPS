//Updates
function updateRebirthMilestones() {
  for (let num in milestones) {
    if (user.rebirthCount>=milestones[num].req) {
      di("milestone"+num).style.backgroundColor = "var(--purpleHover)";
    }
    else {
      di("milestone"+num).style.backgroundColor = "var(--blackBg)";
    }
  }
  di("rebirthCount").textContent = user.rebirthCount;
}
