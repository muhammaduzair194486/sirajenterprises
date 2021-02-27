
/*====================================================================
            Animation wow master (For animation)
=====================================================================*/

 
$(function () {
    /*animate on scroll*/
    new WOW().init();
    
}); 

$(window).on('load', function() {
     
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");;
});



/*How to use JQuery*/

//$('h1').hide();
//$('h1').hide(1000);
//  $('h1').hide(1000).show(1000);  

//$('h1').slideUp(1000);
//$('h1').slideUp(1000).show(1000);

//
//$(function(){
//    
//    $('h1').slideUp(1000).slideDown(1000);
//
//    $('#main').css({
//   color:'red',
//    fontSize: 25
//
//    
//});
//
//$('.red').css({
//   color:'blue',
//    border:'10px solid green'
//    
//});
//
//$('#function1').click(function(){
//                     $('#function1').css({
//                        color:'lightgreen',
//                        fontSize:30,
//        
//                        });
//                     
//                     
//                     });
//    
//    
//});
//
//
//$(window).on("load", function(){
//    alert("Window is loaded.");
//});


/*====================================================================
                    Preloader
=====================================================================*/

$(window).on('load', function () { //makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*====================================================================
                team members    owl-carousel
=====================================================================*/

$(function() {
    $("#team-members").owlCarousel({
        
        items:2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"> </i>', 
                 '<i class="fa fa-angle-right"> </i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items:2
            }
        }

        
    }); 
});



/*====================================================================
                team progrss bar
=====================================================================*/
//this script is only use for progress bar without scrolling
//$(function() {
//  $(".progress-bar").each(function(){
//     $(this).animate({
//         width: $(this).attr("aria-valuenow") + "%"
//     },1000); 
//  });
//  });



//this script is only use for progress bar with scrolling

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});



/*====================================================================
                Responsive tabs
=====================================================================*/

$(function(){
   $('#services-tabs').responsiveTabs({
   animation: 'slide',
});
    
});

/*====================================================================
            Portfolio
=====================================================================*/

$(window).on('load', function() {
    //Initialize Isotope
    $("#isotope-container").isotope({
        
    });
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function(){
        //alert("You clicked filter button");
        
        //get filter value
        
        var filtervalue = $(this).attr('data-filter');
        //alert('you' + filtervalue);
        
        //filter portfolio
        
        $('#isotope-container').isotope({
           filter:  filtervalue
        });
        
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
        
    });
    
});


/*Magnifier popup + galley*/


$(function(){
$('#portfolio-wrapper').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
    gallery: {
        enabled: true
    }
});
    
});


/*====================================================================
            Testimonial
=====================================================================*/



$(function() {
    $("#testimonial-slider").owlCarousel({
        items:1,
        type:1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiv : {
            0: {
                items: 1
            },
            1200: {
                items: 1
            },
        },
        navText: ['<i class="fa fa-angle-left"> </i>', 
                 '<i class="fa fa-angle-right"> </i>']

        
    }); 
});




/*====================================================================
            Stats counter
=====================================================================*/

$(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
       
            
        });
    });


/*====================================================================
            CLients section
=====================================================================*/

$(function() {
    $("#clients-list").owlCarousel({
        items:6,
        type:1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"> </i>', 
                 '<i class="fa fa-angle-right"> </i>'],
        
          responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items:3
            },
               768: {
                items:6
            }
              
        }

        
    }); 
});



/*====================================================================
            Google Map
=====================================================================*/

$(window).on('load', function() {
    

       
    //google map variable
    var addressString = '230 Broadway, NY, New york 10007, USA';
    var mylatlng = {lat: 40.712685, lng: -74.005920};
    
    // 1. Render map
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: mylatlng
    }); 
      
    // 2. Add Marker
    var marker = new google.maps.Marker({
       position:  mylatlng,
        map: map,
        title: "Click To See Address"
        
    });
    
    
    // 3. Add Info Window
    
    var infowindow = new google.maps.InfoWindow({
       content: addressString
    });
    
    // Show info window when user clicks marker
    marker.addListener('click', function() {
       infowindow.open(map, marker); 
    });
    
    
    // 4. Resize Function 
    
    google.maps.event.addDomListener(window, 'resize', function() {
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
        
        
    });
    
});


/*====================================================================
                Navigation bar
=====================================================================*/

// Show  & hide white navigation bar certain scroll bar

$(function() {
    
    showHideNav();
    
$(window).scroll(function() {
//    alert("scroling");
    showHideNav();
});
    
    
    function showHideNav() {
        
   
        
        if($(window).scrollTop() > 50){
        //alert("Your Scroll Position is  greater than 50 pixel, Your Scroll Position = " + $(window).scrollTop());
        
        $("nav").addClass("white-nav-top");
        
        // show dark logo
        $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");  
        
        
            /*show back-to-top buton*/    
            
            $("#back-to-top").fadeIn();
            
    }
    else {
        //alert("Your Scroll Position is  less than 50 pixel, Your Scroll Position = " + $(window).scrollTop());
        
        $("nav").removeClass("white-nav-top"); 
        //show normal logo
        $(".navbar-brand img").attr("src", "img/logo/logo.png"); 
        
        /*Hide back-to-top buton*/    
            
            $("#back-to-top").fadeOut();
    } 
        
    }
    

});


/*Smooth Scrolling*/

    $(function () {
       $("a.smooth-scroll").click(function (event) {
           event.preventDefault();
           
           //get section id like #about, #services, #work, #team and etc;
           
           var section_id = $(this).attr("href");
           
           $("html, body").animate({
               scrollTop: $(section_id).offset().top - 64 
           }, 1250, "easeInOutExpo");
       }); 
    });




/*====================================================================
                Navigaton menu show and hide
=====================================================================*/

$(function() {
   
    /*Show mobile nav menu*/
    $('#mobile-nav-open-btn').click(function() {
       $('#mobile-nav').css("height", "100%"); 
    });
    
    /*hide mobile nav menu*/
    $('#mobile-nav-close-btn, #mobile-nav a').click(function() {
       $('#mobile-nav').css("height", "0%"); 
    });
    
});


