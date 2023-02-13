// import lozad from 'lozad';
// const observer = lozad();

// // window.Chart = Chart;
// observer.observe();


import career from './career-job-details'
import ldtv from './ldtv'
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

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins :{
          tooltip:{
              enabled : false
          }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
