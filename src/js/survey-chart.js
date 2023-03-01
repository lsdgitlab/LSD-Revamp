
var canvas = document.getElementById('survey-piechart')
var ctxPie = canvas.getContext('2d')


var chart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ["57", "41", "2"],
    datasets: [{
      label: 'My dataset',
      data: [25, 5, 70],
      backgroundColor: [
        '#FEB811',
        '#8383EE',
        '#F15A22'
      ],
      borderColor: [
        '#FEB811',
        '#8383EE',
        '#F15A22'
      ],
      borderWidth: 0,
      hoverBackgroundColor: [
        '#FEB811',
        '#8383EE',
        '#F15A22'
      ],
      hoverBorderWidth: 2,
      datalabels: {
        anchor: 'end'
      }
    }]
  },  
  options: {
    legend: {
        display: false
    },
    title: {        
        display: false,
        text: ["Concern around online data sharing"]
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
          enabled: false
    },
    // events: false,
    // animation: {
    //     duration: 500,
    //     easing: "easeOutQuart",
    //     onComplete: function () {
    //     var ctxPie = this.chart.ctxPie;
    //     ctxPie.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
    //     ctxPie.textAlign = 'center';
    //     ctxPie.textBaseline = 'bottom';

    //     this.data.datasets.forEach(function (dataset) {

    //         for (var i = 0; i < dataset.data.length; i++) {
    //         var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
    //             total = dataset._meta[Object.keys(dataset._meta)[0]].total,
    //             mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
    //             start_angle = model.startAngle,
    //             end_angle = model.endAngle,
    //             mid_angle = start_angle + (end_angle - start_angle)/2;

    //         var x = mid_radius * Math.cos(mid_angle);
    //         var y = mid_radius * Math.sin(mid_angle);

    //         ctxPie.fillStyle = '#fff';
    //         if (i == 3){ // Darker text color for lighter background
    //             ctxPie.fillStyle = '#444';
    //         }
    //         var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
    //         //   ctxPie.fillText(dataset.data[i], model.x + x, model.y + y);
    //         // Display percent in another line, line break doesn't work for fillText
    //         ctxPie.fillText(percent, model.x + x, model.y + y + 15);
    //         }
    //     });               
    //     }
    // }
    

  }
});
