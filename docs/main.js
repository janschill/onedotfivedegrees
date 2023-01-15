import participants from "./data/participants.json" assert { type: "json" };
import globalMeanTemps from "./data/global-mean-temp-land-ocean.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");
  const headerBody = header.querySelector(".main-header__body");
  const currentTemperature = globalMeanTemps[globalMeanTemps.length - 1]
  headerBody.innerHTML = `${currentTemperature.lowess5} °C`
})
