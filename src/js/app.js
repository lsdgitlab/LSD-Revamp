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

});
//custom js code end here

// import career from './career-job-details'
// import ldtv from './ldtv'

  //********  on button click append the youtube links to popup ********


 

  
  
