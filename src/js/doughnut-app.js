
var canvas = document.getElementById('piechart')
var ctx = canvas.getContext('2d')


var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      "Media",
      "UI/UX",
      "Creative & Communication",
      "Innovations & Technology",
      "Customer Experience",
      "Data & Insights",
    ],
    datasets: [{
      label: 'Dataset 1',
      data: [15, 15, 15, 15, 15, 15],
      backgroundColor: [
          '#2C93D4',
          '#37C9EE',
          '#3FDAD8',
          '#3F86DA',
          '#3F4FDA',
          '#13538A'
      ],
      borderColor: [
          '#2C93D4',
          '#37C9EE',
          '#3FDAD8',
          '#3F86DA',
          '#3F4FDA',
          '#13538A'
      ],
      borderWidth: 0,
      hoverBackgroundColor: [
        '#2C93D4',
        '#37C9EE',
        '#3FDAD8',
        '#3F86DA',
        '#3F4FDA',
        '#13538A'
      ],
      hoverBorderWidth: 0,
      descriptions: [                
        [ 'Lorem ipsum dolor sit-1', 'Lorem ipsum dolor sit amet it', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet it',],
        [ 'Customer Journey Mapping', 'UI/UX Audit & Strategy', 'Digital Assets Strategy', 'Digital Product Strategy', 'Competition benchmarking', 'Conversion Rate Optimization',],
        [ 'Lorem ipsum dolor sit-3', 'Lorem ipsum dolor sit amet it', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet it',],
        [ 'Lorem ipsum dolor sit-4', 'Lorem ipsum dolor sit amet it', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet it',],
        [ 'Lorem ipsum dolor sit-5', 'Lorem ipsum dolor sit amet it', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet it',],
        [ 'Lorem ipsum dolor sit-6', 'Lorem ipsum dolor sit amet it', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet it',],
      ],
      datalabels: {
        anchor: 'end'
      }
    }]
  },  
  plugins: {
    datalabels: {
      backgroundColor: function(context) {
        return context.dataset.backgroundColor;
      },
      borderColor: 'white',
      borderRadius: 25,
      borderWidth: 2,
      color: 'white',
      display: function(context) {
        var dataset = context.dataset;
        var count = dataset.data.length;
        var value = dataset.data[context.dataIndex];
        return value > count * 1.5;
      },
      font: {
        weight: 'bold'
      },
      padding: 6,
      formatter: Math.round
    }
  },
  options: {
    legend: {
        display: false
    },
    title: {
        // display: true,
        display: false,
        text: ["LS Digital Marketing Transformation Framework"]
    },
    animation: {
        // animateScale: true,
        // animateRotate: true
        animateScale: false,
        animateRotate: false
    },
    responsive: true,
    maintainAspectRatio: false,
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
              label += '<li>' + descriptions[i] + '</li>'            
            }
           
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
            innerHtml += '<tr><th><span class="chartjs-tooltip-key"><img src="img/icons/ui-ux.png" alt=""></span>' + title + '</th></tr>';
          });
          innerHtml += '</thead><tbody>';

          bodyLines.forEach(function(body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:white' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            // var span = '<span class="chartjs-tooltip-key"></span>';
            // innerHtml += '<tr><td>' + span + '<ul>' + body + '</ul>' + '</td></tr>';
            innerHtml += '<tr><td>' + '<ul>' + body + '</ul>' + '</td></tr>';
          });
          innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.display = 'block';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        // tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        // tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        // tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.backgroundColor = 'white';
        
      }
      
    },

  }
});
