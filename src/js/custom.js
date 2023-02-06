$(document).ready(function(){
    
    $('ul.cat-list li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.cat-list li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });	


    $(".hamburger-menu").click(function(){
        $(this).toggleClass("act");
        $(".mob-menu").toggleClass("menu-open");
        $("span").toggleClass('act');
    })


    $('.has-submenu').on('click',function(){
        // $('.l1').on('click',function(){
        var tag = $(this).attr('value');
        var tag1 = $(this).text();
       // window.alert("#layer"+tag1);
       var back_link="#layer"+tag;
       //window.alert(back_link);
      $('.mnav-link').attr('href',back_link);
       //$('.nav-link').text(tag1);
       $('.mnav-link').attr('value',tag);
       $("#layer"+tag).removeClass('hide-menu'); 
        $("#layer"+tag).toggleClass('show-menu'); 
   });
   $('.mnav-link').on('click',function(){
        var tag = $(this).attr('href');
       var val= $(this).attr('value');
       // window.alert(val);
        $(tag).removeClass('show-menu'); 
        var back_link="#layer"+(val-1);
        $('.mnav-link').attr('href',back_link);
       $('.mnav-link').attr('value',val-1);
       //window.alert(back_link);
       
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



});