//Source: MOE | GES Employment Rates and Salaries of NUS, NTU, SMU, SUTD, SIT and SUSS Graduates.

// pay by degree cluster

let degree = ['Arts, Design & Media', 'Built Environment', 'Business', 'Dentistry', 'Education (NIE)', 'Engineering', 'Health Sciences', 'Humanities & Social Sciences', 'Information & Digital Technologies', 'Music', 'Sciences', 'Yale-NUS', 'Architecture', 'Biomedical Sciences and Chinese Medicine', 'Law', 'Medicine', 'Pharmacy'];

let degreeDataObj = {
  labels: degree,
  datasets: [
    {
      label: "2020",
      data: [3300, 3500, 3500, 4200, 3800, 3900, 3500, 3500, 4760, 3275, 3500, 4038, 4000, 3000, 5000, 5250, 3700],
      borderWidth: 2,
      fill: false,
      backgroundColor: "rgb(0, 120, 255)",
      borderColor: "rgb(0, 0, 0)"
    },
    {
      label: '2021',
      data: [3500, 3600, 3723, 4200, 3798, 3900, 3635, 3550, 5000, 3100, 3600, 4150, 4000, 3100, 5600, 0, 3915],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, 
    {
      label: '2022',
      data: [3500, 3750, 4100, 4200, 4200, 4600, 3700, 3800, 5625, 3590, 3900, 5000, 4400, 3175, 6375, 0, 4000],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }
  ]
};

var degreeBasicChart = new Chart("degreeBasicChart", {
  type: "line",
  data: degreeDataObj,
  
});

// event listener to dropdown menu so that year can be selected when displayed on chart
var yearSelector = document.getElementById("year-selector");
yearSelector.addEventListener("change", function() {
  // Update chart data
  var selectedYear = yearSelector.value;
  var datasetIndex = parseInt(selectedYear) - 2020;
  degreeBasicChart.data.datasets.forEach(function(dataset) {
    dataset.hidden = true;
  });
  degreeBasicChart.data.datasets[datasetIndex].hidden = false;
  degreeBasicChart.update();
});


  function resetChart() {
    degreeBasicChart.data.datasets.forEach((dataset) => {
      dataset.hidden = false;
    });
    degreeBasicChart.update();
  }


// ends here


// Data
const data = {
  labels: [
    'Arts, Design & Media',
    'Built Environment',
    'Business',
    'Dentistry',
    'Education (NIE)',
    'Engineering',
    'Health Sciences',
    'Humanities & Social Sciences',
    'Information & Digital Technologies',
    'Music',
    'Sciences',
    'Yale-NUS',
    'Architecture',
    'Biomedical Sciences and Chinese Medicine',
    'Law',
    'Medicine',
    'Pharmacy',
  ],
  datasets: [
    {
      label: 'Proportion of Graduates in Full-Time Permanent Employment in 2021',
      data: [
        69.3,
        88.9,
        88.7,
        100,
        100,
        86.9,
        85.9,
        75.6,
        93.7,
        35.3,
        75.8,
        73.9,
        96.6,
        77.3,
        95.5,
        NaN,
        91.9,
      ],
      backgroundColor: [
        '#F8B195',
        '#F67280',
        '#C06C84',
        '#6C5B7B',
        '#355C7D',
        '#6C7A89',
        '#C2B280',
        '#E8DDCB',
        '#9D9584',
        '#0E9AA7',
        '#3DA4AB',
        '#F7DB4F',
        '#E3B505',
        '#D57A66',
        '#7A6A53',
        '#D4AC0D',
        '#464159',
      ],
    },
  ],
};

// Options
const options = {
  title: {
    display: true,
    text: 'Proportion of Graduates in Full-Time Permanent Employment in 2021',
  },
};


const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
    


const labelYear = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]

const dataObj = {
  labels: labelYear,
  datasets: [
    {
      label: "NUS",
      data:  [3180.151515, 3361.058824, 3459.222222, 3502.588235, 3537.243243, 3625.181818, 3853.805556, 3995.153846, 4100.921053],
      borderWidth: 2,
      fill: false,
      backgroundColor: "RGB(192, 108, 132)",
      borderColor: "rgb(0, 0, 0)",
      pointBackgroundColor: 'RGB(192, 108, 132)', // Change point color
      pointBorderColor: '#fff', // Change point border color
      pointBorderWidth: 2, // Increase point border width
      pointRadius: 5, // Increase point size
      pointHoverRadius: 10 // Increase point size on hover
    },
    {
      label: "NTU",
      data:  [3081.34375, 3155.75758, 3270.878788, 3308.794118, 3397.514286, 3472.054054, 3614.526316, 3730.825, 3832.128205],
      borderWidth: 2,
      fill: false,
      backgroundColor: "RGB(108, 91, 123)",
      borderColor: "rgb(0, 0, 0)",
      pointBackgroundColor: 'RGB(108, 91, 123)', // Change point color
      pointBorderColor: '#fff', // Change point border color
      pointBorderWidth: 2, // Increase point border width
      pointRadius: 5, // Increase point size
      pointHoverRadius: 10 // Increase point size on hover
    },
    {
      label: "SMU",
      data:  [3615.916667, 3785.25, 3709.083333, 3835.75, 3947, 3954.833333, 4104.583333, 4052.833333, 4514.833333],
      borderWidth: 2,
      fill: false,
      backgroundColor: "RGB(53, 92, 125)",
      borderColor: "rgb(0, 0, 0)",
      pointBackgroundColor: 'RGB(53, 92, 125)', // Change point color
      pointBorderColor: '#fff', // Change point border color
      pointBorderWidth: 2, // Increase point border width
      pointRadius: 5, // Increase point size
      pointHoverRadius: 10 // Increase point size on hover
    },
    {
      label: "SUSS",
      data:  [NaN, NaN, NaN, NaN, NaN, 3133.333333, 3112.5, 3099.714286, 3350.625],
      borderWidth: 2,
      fill: false,
      backgroundColor: "RGB(14, 154, 167)",
      borderColor: "rgb(0, 0, 0)",
      pointBackgroundColor: 'RGB(14, 154, 167)', // Change point color
      pointBorderColor: '#fff', // Change point border color
      pointBorderWidth: 2, // Increase point border width
      pointRadius: 5, // Increase point size
      pointHoverRadius: 10 // Increase point size on hover
    },
    {
      label: "SIT",
      data:  [NaN, 2985.25, 3059.88, 3232.692308, 3176.535714, 3349.96875, 3493.774194, 3567.918919, 3650.212121],
      borderWidth: 2,
      fill: false,
      backgroundColor: "RGB(122, 106, 83)",
      borderColor: "rgb(0, 0, 0)",
      pointBackgroundColor: 'RGB(122, 106, 83)', // Change point color
      pointBorderColor: '#fff', // Change point border color
      pointBorderWidth: 2, // Increase point border width
      pointRadius: 5, // Increase point size
      pointHoverRadius: 10 // Increase point size on hover
    },
    {
      label: "SUTD",
      data:  [NaN, NaN, 3683.333333, 3750, 3824.333333, 3975, 4075, 4025, 4343.75],
      borderWidth: 2,
      fill: false,
      backgroundColor: "RGB(70, 65, 89)",
      borderColor: "rgb(0, 0, 0)",
      pointBackgroundColor: 'RGB(70, 65, 89)', // Change point color
      pointBorderColor: '#fff', // Change point border color
      pointBorderWidth: 2, // Increase point border width
      pointRadius: 5, // Increase point size
      pointHoverRadius: 10 // Increase point size on hover
    }
  ]
}

const optionsObj = { 
  maintainAspectRatio: true,
  legend: {
    display: false
  },
  title: {
    display: true,
    text: ['Something'],
    fontFamily: "TrebuchetMS",
    fontSize: 24,
    fontColor: 'rgb(0,120,0)',
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontColor: 'rgb(0,0,0)'
      },
      gridLines: {
        display: true,
        color: 'rgb(255,255,255)'
      },
      scaleLabel: {
        display: true,
        labelString: 'Average Monthly Basic Pay (SGD)',
        fontColor: 'rgb(0,0,0)',
        fontSize: 16,
        fontFamily: "TrebuchetMS"
      }
    }],
    xAxes: [{
      ticks: {
        fontColor: 'rgb(0,0,0)',
        maxRotation: 45,
        minRotation: 45,
        fontSize: 14,
        fontFamily: "TrebuchetMS"
      },
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: true,
        labelString: 'Year',
        fontColor: 'rgb(0,0,0)',
        fontSize: 16,
        fontFamily: "TrebuchetMS"
      }
    }]
  },
  plugins: {
    title: {
      display: true,
      text: 'Average Monthly Basic Pay of Graduates by Autonomous Universities',
      fontColor: 'rgb(0,0,0)',
      fontFamily: "TrebuchetMS",
      fontSize: 100,
      padding: {
        top: 20,
        bottom: 20
      }
    },
    subtitle: {
      display: true,
      text: 'Source: MOE | 2022 GES Employment Rates and Salaries of NUS, NTU, SMU, SUTD, SIT and SUSS Graduates by Course Cluster. ',
      fontColor: 'rgb(0,0,0)',
      fontFamily: "TrebuchetMS",
      fontSize: 14,
      padding: {
        top: 0,
        bottom: 10
      }
    },
    datalabels: {
      display: true,
      font: {
        size: 12,
        weight: 'bold'
      },
      color: 'rgb(0,0,0)',
      anchor: 'end',
      formatter: (value, context) => {
        return value.toFixed(2);
      }
    }
  }
};

let chartType = "bar"; // default chart type

// create chart
var basicPayChart = new Chart("basic-pay", {
  type: chartType,
  data: dataObj,
  options: optionsObj
});


// add event listener to switch between chart types
document.querySelector('#chart-type').addEventListener('change', (event) => {
  chartType = event.target.value;
  basicPayChart.destroy(); // destroy old chart
  basicPayChart = new Chart("basic-pay", {
    type: chartType,
    data: dataObj,
    options: optionsObj
  }); // create new chart with selected type
});


new Chart("basic-pay", {
  type: "bar",
  data: dataObj,
  options: { 
    maintainAspectRatio: true,
    legend: {
        display: false
    },
    title: {
        display: true,
        text: [],//set this to 'Something'
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: 'rgb(0,120,0)',
    }
}
});

// ends here

function myFunction() {
    document.getElementById("demo").innerHTML = "Change Chart";
  }

element.addEventListener("click", myFunction);

