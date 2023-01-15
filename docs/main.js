import participants from "./data/participants.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  console.log(participants[0])

  const body = document.querySelector("body");
  body.innerHTML = participants[0].name

})
