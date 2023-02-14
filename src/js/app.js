// import lozad from 'lozad';
// const observer = lozad();

// // window.Chart = Chart;
// observer.observe();

// import career from './career-job-details'
// import ldtv from './ldtv'
// import { myChart} from "./customChart";
// import Chart from 'chart.js';
var canvas = document.getElementById('myChart')
var ctx = canvas.getContext('2d')

var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Customer', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50, 60, 70],
      descriptions: [
        ['Description 1a', 'Description 1b', 'Description 1c'],
        ['Description 2a', 'Description 2b', 'Description 2c'],
        ['Description 3a', 'Description 3b', 'Description 3c'],
        ['Description 4a', 'Description 4b', 'Description 4c'],
        ['Description 5a', 'Description 5b', 'Description 5c'],
        ['Description 6a', 'Description 6b', 'Description 6c'],
        ['Description 7a', 'Description 7b', 'Description 7c'],
      ]
    }]
  },
  options: {
    tooltips: {
      enabled: false,
      callbacks: {
        title: function(tooltipModel, data) {
          return data.labels[tooltipModel[0].index];
        },
        label: function(tooltipModel, data) {
          var value = data.datasets[tooltipModel.datasetIndex].data[tooltipModel.index];
          var descriptions = data.datasets[tooltipModel.datasetIndex].descriptions[tooltipModel.index];
          var label = '';
          // label += 'Value: ' + value;
         
          if (descriptions) {
            label += '\n';
            label += '';
            
            for (var i = 0; i < descriptions.length; i++) {
              label += '<li>' + descriptions[i] + '</li>'            }
           
          }
       
          return label;
        }
      },     

      custom: function(tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<table></table>';
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(function(bodyItem) {
            return bodyItem.lines;
          });

          var innerHtml = '<thead>';

          titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
          });
          innerHtml += '</thead><tbody>';

          bodyLines.forEach(function(body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
            innerHtml += '<tr><td>' + span + '<ul>' + body + '</ul>' + '</td></tr>';
          });
          innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
      }
    }
  }
});




