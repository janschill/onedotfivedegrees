import participants from "./data/participants.json" assert { type: "json" };
import globalMeanTemps from "./data/global-mean-temp-land-ocean.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");
  const headerBody = header.querySelector(".main-header__body");
  const currentTemperature = globalMeanTemps[globalMeanTemps.length - 1]
  headerBody.innerHTML = `${currentTemperature.lowess5} °C`

  const globalMeanTempChart = document.getElementById("globalMeanTempChart");
  new Chart(globalMeanTempChart, {
    type: "line",
    data: {
      labels: globalMeanTemps.map(t => t.year),
      datasets: [{
        data: globalMeanTemps.map(t => t.lowess5),
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      tension: 0.5,
      elements: {
        point: {
          radius: 0
        },
        line: {
          borderColor: '#fafafa'
        }
      },
      scales: {
        x: {
          display: false,
          ticks: {
            display: false
          }
        },
        y: {
          display: false,
          ticks: {
            display: false
          }
        }
      }
    }
  });
})
