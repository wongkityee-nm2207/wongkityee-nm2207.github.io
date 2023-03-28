// Define the initial data
let allData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'National University of Singapore',
        data: [50000, 55000, 60000, 65000, 70000, 75000],
        borderColor: 'red',
        fill: false
      },
      {
        label: 'Nanyang Technological University',
        data: [45000, 48000, 52000, 55000, 58000, 61000],
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Singapore Management University',
        data: [40000, 42000, 44000, 46000, 48000, 50000],
        borderColor: 'green',
        fill: false
      }
    ]
  };
  
  // Define the options
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return '$' + value.toLocaleString();
            }
          }
        }
      ]
    }
  };
  
  // Create the chart with all universities
  const chart = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: allData,
    options: options
  });
  
  // Update the chart based on the selected option
  const universitiesDropdown = document.getElementById('universities');
  universitiesDropdown.addEventListener('change', function () {
    const selectedValue = universitiesDropdown.value;
    let newData = {
      labels: allData.labels,
      datasets: []
    };
    if (selectedValue === 'all') {
      newData.datasets = allData.datasets;
    } else {
      newData.datasets.push(allData.datasets.find(d => d.label.toLowerCase().includes(selectedValue)));
    }
    chart.data = newData;
    chart.update();
  });
  
  

function myFunction() {
    document.getElementById("demo").innerHTML = "Change Chart";
  }

element.addEventListener("click", myFunction);

