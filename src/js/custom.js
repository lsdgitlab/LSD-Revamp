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
   var size;
   size = $(window).width();   
   
   if(size < 767) {
       $(function() {
           $('.city-name').on('click', function (j) {
       
               var dropDown = $(this).closest('.loc-address').find('.city-address');
               $(this).closest('.location-acc').find('.city-address').not(dropDown).slideUp();
       
               if ($(this).hasClass('active')) {
               $(this).removeClass('active');
               } else {
               $(this).closest('.location-acc').find('.city-name.active').removeClass('active');
               $(this).addClass('active');
               }
       
               dropDown.stop(false, true).slideToggle();
               j.preventDefault();
           });
       });
   
   }
//end section career LP page address 


});

