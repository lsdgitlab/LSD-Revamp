// import lozad from 'lozad';
// const observer = lozad();

// // window.Chart = Chart;
// observer.observe();

//cutom js code start here
$(document).ready(function () {
  $('ul.cat-list li').click(function () {
    var tab_id = $(this).attr('data-tab')
    $('ul.cat-list li').removeClass('current')
    $('.tab-content').removeClass('current')
    $(this).addClass('current')
    $('#' + tab_id).addClass('current')
  })
$(document).ready(function(){
    
  $('ul.cat-list li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('ul.cat-list li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
  });	

//start of mobile menu
  $(".hamburger-menu").click(function(){
      $(this).toggleClass("act");
      $(".mob-menu").toggleClass("menu-open");
      $("span").toggleClass('act');
  })


  $('.has-submenu').on('click',function(){
      var tag = $(this).attr('value');
      var tag1 = $(this).text();
     var back_link="#layer"+tag;
    $('.mnav-link').attr('href',back_link);
     $('.mnav-link').attr('value',tag);
     $("#layer"+tag).removeClass('hide-menu'); 
      $("#layer"+tag).toggleClass('show-menu'); 
 });
 $('.mnav-link').on('click',function(){
      var tag = $(this).attr('href');
     var val= $(this).attr('value');
      $(tag).removeClass('show-menu'); 
      var back_link="#layer"+(val-1);
      $('.mnav-link').attr('href',back_link);
     $('.mnav-link').attr('value',val-1);
     
 });

 
 $('.has-sub-submenu-1').click(function(){    
  $('.layer2 ul.list').hide();
  $('.consult').show(100);
 });
 $('.has-sub-submenu-2').click(function(){    
  $('.layer2 ul.list').hide();
  $('.market').show(100);
 });
 $('.has-sub-submenu-3').click(function(){    
  $('.layer2 ul.list').hide();
  $('.transform').show(100);
 });
//end of mobile menu

//start section career LP page address 
//  var size;
//  size = $(window).width();   
 
//  if(size < 767) {
//      $(function() {
//          $('.city-name').on('click', function (j) {
     
//              var dropDown = $(this).closest('.loc-address').find('.city-address');
//              $(this).closest('.location-acc').find('.city-address').not(dropDown).slideUp();
     
//              if ($(this).hasClass('active')) {
//              $(this).removeClass('active');
//              } else {
//              $(this).closest('.location-acc').find('.city-name.active').removeClass('active');
//              $(this).addClass('active');
//              }
     
//              dropDown.stop(false, true).slideToggle();
//              j.preventDefault();
//          });
//      });
 
//  }
//end section career LP page address 


});
//cutom js code end here

// import career from './career-job-details'
// import ldtv from './ldtv'

  //********  on button click append the youtube links to popup ********


  //start of mobile menu
  $('.hamburger-menu').click(function () {
    $(this).toggleClass('act')
    $('.mob-menu').toggleClass('menu-open')
    $('span').toggleClass('act')
  })

  $('.has-submenu').on('click', function () {
    var tag = $(this).attr('value')
    var tag1 = $(this).text()
    var back_link = '#layer' + tag
    $('.mnav-link').attr('href', back_link)
    $('.mnav-link').attr('value', tag)
    $('#layer' + tag).removeClass('hide-menu')
    $('#layer' + tag).toggleClass('show-menu')
  })
  $('.mnav-link').on('click', function () {
    var tag = $(this).attr('href')
    var val = $(this).attr('value')
    $(tag).removeClass('show-menu')
    var back_link = '#layer' + (val - 1)
    $('.mnav-link').attr('href', back_link)
    $('.mnav-link').attr('value', val - 1)
  })
=======
// start survey-details page pie chart js
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
// end survey-details page pie chart js

  $('.has-sub-submenu-1').click(function () {
    $('.layer2 ul.list').hide()
    $('.consult').show(100)
  })
  $('.has-sub-submenu-2').click(function () {
    $('.layer2 ul.list').hide()
    $('.market').show(100)
  })
  $('.has-sub-submenu-3').click(function () {
    $('.layer2 ul.list').hide()
    $('.transform').show(100)
  })
  //end of mobile menu

  //start section career LP page address
  var size
  size = $(window).width()

  if (size < 767) {
    $(function () {
      $('.city-name').on('click', function (j) {
        var dropDown = $(this).closest('.loc-address').find('.city-address')
        $(this)
          .closest('.location-acc')
          .find('.city-address')
          .not(dropDown)
          .slideUp()

        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
        } else {
          $(this)
            .closest('.location-acc')
            .find('.city-name.active')
            .removeClass('active')
          $(this).addClass('active')
        }

        dropDown.stop(false, true).slideToggle()
        j.preventDefault()
      })
    })
  }
  //end section career LP page address
})
//cutom js code end here

// import career from './career-job-details'
// import ldtv from './ldtv'

//********  on button click append the youtube links to popup ********

// ;
