// import lozad from 'lozad';
// const observer = lozad();

// // window.Chart = Chart;
// observer.observe();

// import career from './career-job-details'
// import ldtv from './ldtv'


// if(canvas){

// var canvas = document.getElementById('myChart')
// var ctx = canvas.getContext('2d')
// var chart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: [
//       "Media",
//       "UI/UX",
//       "Creative & Communication",
//       "Innovations & Technology",
//       "Customer Experience",
//       "Data & Insights",
//     ],
//     datasets: [{
//       label: 'Dataset 1',
//       data: [15, 15, 15, 15, 15, 15],
//       backgroundColor: [
//           '#2C93D4',
//           '#37C9EE',
//           '#3FDAD8',
//           '#3F86DA',
//           '#3F4FDA',
//           '#13538A'
//       ],
//       borderColor: [
//           '#2C93D4',
//           '#37C9EE',
//           '#3FDAD8',
//           '#3F86DA',
//           '#3F4FDA',
//           '#13538A'
//       ],
//       borderWidth: 1,
//       descriptions: [                
//         ['Description 1', 'Description 1', 'Description 1'],
//         [ 'Customer Journey Mapping', 'UI/UX Audit & Strategy', 'Digital Assets Strategy', 'Digital Product Strategy', 'Competition benchmarking', 'Conversion Rate Optimization',],
//         ['Description 2', 'Description 2', 'Description 2'],
//         ['Description 3', 'Description 3', 'Description 3'],
//         ['Description 4', 'Description 4', 'Description 4'],
//         ['Description 5', 'Description 5', 'Description 5'],
//       ],    
//       labels: [
//         "Media",
//         "UI/UX",
//         "Creative & Communication",
//         "Innovations & Technology",
//         "Customer Experience",
//         "Data & Insights",
//       ]
//     }]
//   },
//   options: {
//     legend: {
//         display: false
//     },
//     title: {
//         display: false,
//         text: ["LS Digital Marketing Transformation Framework"]
//     },
//     animation: {
//         // animateScale: true,
//         // animateRotate: true
//         animateScale: false,
//         animateRotate: false
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     tooltips: {
//       enabled: false,
//       callbacks: {
//         title: function(tooltipModel, data) {
//           return data.labels[tooltipModel[0].index];
//         },
//         label: function(tooltipModel, data) {
//           var value = data.datasets[tooltipModel.datasetIndex].data[tooltipModel.index];
//           var descriptions = data.datasets[tooltipModel.datasetIndex].descriptions[tooltipModel.index];
//           var label = '';
//           // label += 'Value: ' + value;
         
//           if (descriptions) {
//             label += '\n';
//             label += '';            
//             for (var i = 0; i < descriptions.length; i++) {
//               label += '<li>' + descriptions[i] + '</li>'            }
           
//           }
       
//           return label;
//         }
//       },     

//       custom: function(tooltipModel) {
//         // Tooltip Element
//         var tooltipEl = document.getElementById('chartjs-tooltip');

//         // Create element on first render
//         if (!tooltipEl) {
//           tooltipEl = document.createElement('div');
//           tooltipEl.id = 'chartjs-tooltip';
//           tooltipEl.innerHTML = '<table></table>';
//           document.body.appendChild(tooltipEl);
//         }

//         // Hide if no tooltip
//         if (tooltipModel.opacity === 0) {
//           tooltipEl.style.opacity = 0;
//           return;
//         }

//         // Set caret Position
//         tooltipEl.classList.remove('above', 'below', 'no-transform');
//         if (tooltipModel.yAlign) {
//           tooltipEl.classList.add(tooltipModel.yAlign);
//         } else {
//           tooltipEl.classList.add('no-transform');
//         }

//         // Set Text
//         if (tooltipModel.body) {
//           var titleLines = tooltipModel.title || [];
//           var bodyLines = tooltipModel.body.map(function(bodyItem) {
//             return bodyItem.lines;
//           });

//           var innerHtml = '<thead>';

//           titleLines.forEach(function(title) {
//             innerHtml += '<tr><th>' + title + '</th></tr>';
//           });
//           innerHtml += '</thead><tbody>';

//           bodyLines.forEach(function(body, i) {
//             var colors = tooltipModel.labelColors[i];
//             var style = 'background:white' + colors.backgroundColor;
//             style += '; border-color:' + colors.borderColor;
//             style += '; border-width: 2px';
//             var span = '<span class="chartjs-tooltip-key"></span>';
//             innerHtml += '<tr><td>' + span + '<ul>' + body + '</ul>' + '</td></tr>';
//           });
//           innerHtml += '</tbody>';

//           var tableRoot = tooltipEl.querySelector('table');
//           tableRoot.innerHTML = innerHtml;
//         }

//         // `this` will be the overall tooltip
//         var position = this._chart.canvas.getBoundingClientRect();

//         // Display, position, and set styles for font
//         tooltipEl.style.opacity = 1;
//         tooltipEl.style.position = 'absolute';
//         tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
//         tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
//         tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
//         tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
//         tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
//         tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
//         tooltipEl.style.backgroundColor = '#ffffff';
//       }
//     }
//   }
// });


// }

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         legend: {
//             display: true,
//             position: 'bottom'
//         }
//     }
// });

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            pieceLabel: {
                render: 'label',
                fontColor: '#fff',
                fontSize: 30,
                fontStyle: 'bold',
                position: 'inside',
                textMargin: 10,
                format: function(value, context) {
                    return context.dataset.labels[context.dataIndex] + ': ' + value;
                }
            }
        }
    }
});









