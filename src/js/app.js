// import lozad from 'lozad';
// const observer = lozad();

// // window.Chart = Chart;
// observer.observe();

// import career from './career-job-details'
// import ldtv from './ldtv'
// import { myChart} from "./customChart";
// import Chart from 'chart.js';

// render
// const myChart = new Chart(
//     document.getElementById('myChart'),
//     condfig
// )

// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {

//   type: 'doughnut',
//   data: {
//     labels: ["Red", "Blue", "Yellow"],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     tooltips: {
//       callbacks: {
//         title: function(tooltipItem, data) {
//           return data['labels'][tooltipItem[0]['index']];
//         },
//         label: function(tooltipItem, data) {
//           return data['datasets'][0]['data'][tooltipItem['index']];
//         },
//         afterLabel: function(tooltipItem, data) {
//           var dataset = data['datasets'][0];
//           var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
//           return '(' + percent + '%)';
//         }
//       },
//       backgroundColor: '#FFF',
//       titleFontSize: 16,
//       titleFontColor: '#0066ff',
//       bodyFontColor: '#000',
//       bodyFontSize: 14,
//       displayColors: false
//     }
//   }

// });

// var ctx = document.getElementById('myChart').getContext('2d')
// var chart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'My Dataset',
//         data: [0, 10, 5, 2, 20, 30, 45],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     tooltips: {
//       callbacks: {
//         label: function (tooltipItem, data) {
//           var label = data.datasets[tooltipItem.datasetIndex].label || ''
//           if (label) {
//             label += ': '
//           }
//           label += tooltipItem.yLabel
//           return (
//             '<div style="background-color: rgba(255, 255, 255, 0.9); border: 1px solid #00FF00; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); padding: 5px 10px; border-radius: 5px;">' +
//             label +
//             '</div>'
//           )
//         },
//       },
//     },
//   },
// })
var chart

var canvas = document.getElementById('myChart')

if (chart) {
  chart.destroy()
}

var ctx = canvas.getContext('2d')
chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Dataset',
        data: [0, 10, 5, 2, 20, 30, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    tooltips: {
      custom: function (tooltip) {
        // tooltip will be false if tooltip is not visible or should be hidden
        if (!tooltip) return
        // Hide the tooltip element initially
        tooltip.opacity = 0
      },
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || ''
          if (label) {
            label += ': '
          }
          label += tooltipItem.value

          // Create a custom div element for the tooltip
          var tooltipEl = document.createElement('div')
          tooltipEl.style.backgroundColor = 'rgba(25, 254, 10, 1)'
          tooltipEl.style.border = '1px solid rgba(0, 0, 0, 0.5)'
          tooltipEl.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)'
          tooltipEl.style.padding = '5px 10px'
          tooltipEl.style.borderRadius = '5px'
          tooltipEl.innerHTML = label

          // Place the custom div element in the tooltip
          document.body.appendChild(tooltipEl)

          // Position the tooltip
          tooltipEl.style.left = window.pageXOffset + tooltip.x + 'px'
          tooltipEl.style.top = window.pageYOffset + tooltip.y + 'px'
          tooltip.opacity = 1

          // Return false to indicate that the tooltip should not be rendered by the browser
          return false
        },
      },
    },
  },
})
