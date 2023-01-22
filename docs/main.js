function plotGlobalMeanTempsChart(data, parentElement) {
  new Chart(parentElement, {
    type: "line",
    data: {
      labels: data.map(t => t.year),
      datasets: [{
        data: data.map(t => t.lowess5),
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
}

document.addEventListener("DOMContentLoaded", async () => {
  const header = document.querySelector(".main-header");
  const headerBody = header.querySelector(".main-header__body");
  // const participantsRequest = await fetch("./data/participants.json");
  // const participants = await participantsRequest.json();
  const globalMeanTempsRequest = await fetch("./data/global-mean-temp-land-ocean.json")
  const globalMeanTemps = await globalMeanTempsRequest.json();
  const currentTemperature = globalMeanTemps[globalMeanTemps.length - 1];
  headerBody.innerHTML = `${currentTemperature.lowess5} °C`;

  const globalMeanTempChart = document.getElementById("globalMeanTempChart");
  plotGlobalMeanTempsChart(globalMeanTemps, globalMeanTempChart)
});
