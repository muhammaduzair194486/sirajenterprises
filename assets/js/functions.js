// sticky header
/*$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//>=, not <=
if (scroll >= 300) {
//clearHeader, not clearheader - caps H
$("header").addClass("stickyheader");
} else {
$("header").removeClass("stickyheader");  
}
});*/
// sticky header end

// wow start
new WOW().init();
// wow end

// sticky social
$(document).scroll(function () {
	"use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }

    if (y >= 70) {
        $(".header-main").addClass("showmenu");
    } else {
        $(".header-main").removeClass("showmenu");
    } 

}); 
// sticky social end

// $(window).scroll(function () {
//     var sc = $(window).scrollTop()
//     if (sc > 10) {
//         $("#headerstcky").addClass("small")
//     } else {
//         $("#headerstcky").removeClass("small")
//     }
// });

$(document).ready(function() {
"use strict";

function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    var a=getURLParameter('pack');
    console.log(a);

    $('#packages1 option:eq('+ a +')').prop('selected', true);
    
 console.log($('#packages1').val());
   
    //*****************************
    // Sale Black Friday and Cyber Monday
    //*****************************
    $('.salecrcle-btn').click(function() {
        $('.sale-blckfriday, .salecrcle-btn, .sale-box, .uppersale-bx').toggleClass('open');
    });
    window.setTimeout(function(){
           $('.salecrcle-btn, .salecrcle-btn, .sale-box, .uppersale-bx').toggleClass("open");
       }, 6000);
    ////// end


   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
    });


    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
        }
    }); 

$('.mobile-toggle').click(function() {
        $('.lft-menu').toggleClass('active');
    });
$('.drpdwn').click(function() {
        $('.tgledropdown').toggleClass('active');
    });
     

$(".cs-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
    
    });

$(".sldrtstmnl").slick({
    dots: false,
    arrows: true,
    centerMode:true,
    centerPadding:'290px 0 0',
    speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 769,
      settings: {
    dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
    });
    
    
$(".sldrtstmnl2").slick({
    dots: false,
    arrows: true,
    // centerMode:true,
    // centerPadding:'290px 0 0',
    // speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    });
    
  

// $(".pckgslidersec").slick({
//     dots: false,
//     arrows: true,
//     speed: 1000,
//     slidesToShow: 3,
//     autoplay: false,
//     slidesToScroll: 1,
//     responsive: [
//     {
//       breakpoint: 769,
//       settings: {
//     dots: true,
//         arrows: false,
//         autoplay: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
//     });


$('.pckgslidersec').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
//=========== EXIT POPUP FUNCTION START

 
    
    
// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val);


(function(w) {
    "use strict";
    w.ysExit = function(o) {

        var defaults = {
                width: '40%', //popup width
                height: '', //popup height
                target: '#ys-container', //popup selector
                cookieValidity: 1, //days
                closeOnOutsideClick: true, //close popup if user clicks outside
                delay: 0, //delay in ms until the popup is registered
                debug: false //if true, the cookie will not be set
                
            },
            options = fixOptions(o),
            element = document.querySelector(options.target),
            layer   = document.querySelector('.ys-layer'),
            closeBt = document.querySelector(options.target + ' .ys-popup-close'),
            inner = document.querySelector(options.target + ' .ys-box'),
            exitBt = document.querySelector(options.target + ' .ys-exit'),

            //cookies management helper
            cookies = {
                set: function(name, value, days) {
                    var components = [name + '=' + value];

                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 3600 * 1000));
                        components.push('expires=' + date.toGMTString());
                    }
                    
                    components.push('path=/');

                    document.cookie = components.join('; ');
                },
                get: function(name) {
                    var start = name + '=',
                        arr = document.cookie.split(';'),
                        i;

                    for(i = 0; i < arr.length; i++) {
                        var item = arr[i].trim();
                        
                        if (item.indexOf(start) === 0){
                            return item.substring(start.length);
                        }
                    }

                    return null;
                }
            },
            //the popup object
            pop = {
                active: false,
                mouseLeftWindow: function(e) {
                    var from, to;
                    
                    e = e ? e : window.event;
                    from = e.relatedTarget || e.toElement;

                    if (!from || from.nodeName === "HTML") {
                        pop.open();
                    }
                },
                setDimension: function(dimension, value) {
                    if (value.toString().indexOf('%') === -1) {
                        value = value + 'px';
                    }
                    
                    inner.style[dimension] = value;
                },
                attachEvents: function() {
                    function close(e) {
                        pop.destroy();
                        e.preventDefault();
                    }
                    
                    document.addEventListener('mouseout', pop.mouseLeftWindow, false);
                    closeBt.addEventListener('click', close);
                    exitBt.addEventListener('click', close);
                    
                    if (options.closeOnOutsideClick) {
                        element.addEventListener('click', close);
                        inner.addEventListener('click', function(e) {
                            e.stopPropagation();
                        });
                    }
                    
                    this.active = true;
                },
                detachEvents: function() {
                    document.removeEventListener('mouseout', pop.mouseLeftWindow);
                },
                open: function() {
                    var self = this;
                    
                    element.classList.add('visible');
                    layer.classList.add('visible');
                    self.detachEvents();

                    setTimeout(function() {
                        self.setDimension('width', options.width);
                        self.setDimension('height', options.height);
                    }, 20);

                    setTimeout(function() {
                        element.classList.add('finished');
                    }, 200);
                },
                destroy: function() {
                    if (this.active) {
                        pop.detachEvents();

                        setTimeout(function () {
                            element.parentNode.removeChild(element);
                            layer.classList.remove('visible');
                        }, 200);
                        
                        if (!options.debug) {
                            cookies.set('ysExit', 1, options.cookieValidity);
                        }
                    }
                }
            };
        
        //helper functions
        function fixOptions(options) {
            var newOptions = {};
            
            Object.keys(defaults).forEach(function(key) {
                newOptions[key] = options.hasOwnProperty(key) ? options[key] : defaults[key];
            });
            
            return newOptions;
        }
        
        function delegate(obj, func) {
            return function() {
                func.apply(obj, arguments);
            };
        }
        
        //start logic
        if (!cookies.get(options.cookieIdentifier)) {
            if (typeof options.delay !== 'number') {
                throw new Error('options.delay must be a numeric value');
            }

            if (!element) {
                throw new Error('Could not find element with selector: ' + options.target);
            }
            
            if (element.parentNode !== document.body) {
                throw new Error(options.target + ' element must be placed directly inside of the <body> element');
            }
            
            setTimeout(delegate(pop, pop.attachEvents), options.delay);
        }
        
        //return object with public interface
        return {
            open: delegate(pop, pop.open),
            destroy: delegate(pop, pop.destroy),
            getElement: function() {
                return element;
            }
        };
    };
})(window);






var options = {
debug: false,
}




if ($.cookie('ysExit') == 1)
     {

     }
else{
 ysExit(options);
}

//=========== EXIT POPUP FUNCTION END

// function addEvent(obj, evt, fn) {
//     if (obj.addEventListener) {
//         obj.addEventListener(evt, fn, false);
//     } else if (obj.attachEvent) {
//         obj.attachEvent("on" + evt, fn);
//     }
// }

// addEvent(document, 'mouseout', function(evt) {
//     if (evt.toElement == null && evt.relatedTarget == null) {
//         $('.popup').slideDown();
//     };
// });

// $('a.close').click(function() {
//     $('.popup').slideUp();
// });

////// main slider
 $("").slick({
    dots: false,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });


 $(".nhome-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade:true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    pauseOnHover:false,
    responsive: [
    {
      breakpoint: 990,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });



 $(".partnerslider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true
    
    });

$(".testimonial-slider").slick({
    dots: false,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 3,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 990,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

$(".servculli").slick({
    dots: false,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 990,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

// $(document).ready(function() {
// var movementStrength = 25;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $("#top-image").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = height * pageY * -1 - 50;
//           $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });
 $('[data-parallaxit]').each(function(){
        var $this = $(this),
        movement = $(this).data('parallax-value');
        $(window).mousemove(function(e) {
            var $win = $(this),
            relX = e.pageX - $(this).offset().left,
            relY = e.pageY - $(this).offset().top;
            
            $this.css({
                'left': (relX - $win.width() / 2) / $win.width() * movement,
                'top': (relY - $win.height() / 2) / $win.height() * movement
            });
            
        });
    });


// progress bar
 var time = 4;
 var $bar, $slick, isPause, tick, percentTime;
$slick = $('.nhome-slider'); 
$bar = $('.slider-progress .progress');   
$('.slider-wrapper').on({
mouseenter: function() { isPause = false; },
mouseleave: function() { isPause = false; }
});
 function startProgressbar() { resetProgressbar(); percentTime = 0; isPause = false; tick = setInterval(interval, 10); }
  function interval() {
    if(isPause === false) { percentTime += 1 / (time+0.1); $bar.css({ width: percentTime+"%" }); if(percentTime >= 100)
        { $slick.slick('slickNext'); startProgressbar(); }
    }
  }
function resetProgressbar() { $bar.css({ width: 0+'%' }); clearTimeout(tick); }
startProgressbar();  
////// main slider end

////// number slider
 var slickOpts = {
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),

    customPaging: function(slick,index) {
        return '<a> 0' + (index + 1) + '</a>';
    }
  };

  $('.number-slider').slick(slickOpts);
////// number slider end

$(".clickbutton").click(function(){
   $('.floatbutton').toggleClass("active");
   $('.crossplus').toggleClass("rotate");
});


// $(".butn").click(function(){
// $(this).closest('.txt-wrp').toggleClass("active");
//  $('.txt-wrp').removeClass("active");
// }
// );

$(".butn").click(function(){

 if($(this).closest('.txt-wrp').hasClass("active")){
  $(this).closest('.txt-wrp').removeClass("active");
 }
 else{
  $('.txt-wrp').removeClass("active");
  $(this).closest('.txt-wrp').addClass("active");
 }
 }
);

    $('.timer').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

////// tabs 
$('[data-targetit]').on('click',function () {
$(this).siblings().removeClass('current');
$(this).addClass('current');
var target = $(this).data('targetit');
console.log(target);
$(".mytabs").removeClass("current");
$('.'+target).addClass("current");
$('.pckgslidersec').slick('refresh');
$('.'+target).siblings('[class^="tabs"]').removeClass('current');

});
////// tabs end



////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
		adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end
////// mob slider
    $(".bnrlogo").slick({
        arrows: false,
        dots: false,
        autoplay: true,
    adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end


// $(".package-slider").slick({
//         dots: true,
//         arrows: false,
//         infinite: false,
//         speed: 600,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//     responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     }); 



////// testimonial slider
$("").slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  responsive: [
    {
    breakpoint: 776,
    settings: {
     vertical:false,
     arrows: false
    }
  }
]
}); 
////// testimonial slider end

//*****************************
    // Responsive Slider
    //*****************************
    var respsliders = {
      1: {slider : '.packslider'},
      2: {slider : '.boxwrap'}
      // 3: {slider : '.partnerslider'}
      


    };

    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: false,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });  

////// product gallery slider
$(".product-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.product-gallery-nav'
    });  
$('.product-gallery-nav').slick({
  dots: false,
  arrows: true,  
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  verticalSwiping:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.product-slider-gallery',
  responsive: [
      {
      breakpoint: 991,
      settings: {
      vertical:false,
      }
    },
    {
    breakpoint: 776,
    settings: {
     vertical:false,
    }
  },
    {
      breakpoint: 480,
      settings: {
        vertical:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
]
}); 
////// product gallery slider end





$('.thumb-slider').slick({
centerMode: true,
centerPadding: '0px',
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 3
}
},
{
breakpoint: 767,
settings: {
arrows: false,
dots:false,
centerMode: false,
centerPadding: '10px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 1
}
}
]
});

///// gallery simple
$('.slider-for').slick({
dots: true,
arrows:false,
infinite: true,
speed: 500,
slide: 'li',
fade: false,
cssEase: 'linear',
centerMode: true,
slidesToShow: 1,
variableWidth: true,
autoplay: true,
autoplaySpeed: 4000,
responsive: [{
	breakpoint: 800,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	},
	breakpoint: 1200,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	}
}],
customPaging: function (slider, i) {
	return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>';
}
});
///// gallery simple end

////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
});	
////// gallery slider end



////// thumb gallery slider
$(".bid-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.bid-gallery-nav'
    });  
$('.bid-gallery-nav').slick({
  dots: false,
  arrows: false,  
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.bid-slider-gallery',
  responsive: [
{
breakpoint: 767,
settings: {
 vertical:false,
}
}
]
});

// my custom slider starts

// $(".partner-slider").slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 991,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }
//     }, {
//         breakpoint: 767,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }]
// });


 $(function(){
    //Slim Scroller

           $.mCustomScrollbar.defaults.theme="light-1"; //set "light-2" as the default theme
           $(".list-scroll,.scrollcontent,.subscription-list").mCustomScrollbar({
               scrollButtons:{
                   enable:true
               },
               callbacks:{
                   onTotalScroll:function(){ addContent(this) },
                   onTotalScrollOffset:100,
                   alwaysTriggerOffsets:false
               }
           });


    });

//*****************************
    // Tabbing 
    //*****************************
    
    $('[data-targetit]').on('click',function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.'+target).siblings('[class^="tabs"]').removeClass('current');
        $('.'+target).addClass('current');
        $('.slick-slider').slick('setPosition', 0);

    });


////// thumb gallery slider end

// function getURLParameter(name) {
//     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))
// }


function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var val = getURLParameter('pack');
// $('#packages').val(val);  


if(val == '1') {
        $('#packages').val('Basic Website Packages - $199.00');
    }
if(val == '2'){
   $('#packages').val('Startup Website Packages - $394.00');
} 
if(val == '3'){
   $('#packages').val('Professional Website Packages - $844.00');
} 
if(val == '4'){
   $('#packages').val('Basic Logo Package - $44.00');
} 
if(val == '5'){
   $('#packages').val('Start Up Logo Package - $74.00');
} 
if(val == '6'){
   $('#packages').val('Professional Logo Package - $124.00');
} 
if(val == '7'){
   $('#packages').val('Startup SEO Plan - $1,000.00');
} 
if(val == '8'){
   $('#packages').val('Scaling SEO Plan - $1,500.00');
} 
if(val == '9'){
   $('#packages').val('Venture SEO Plan - $2,000.00');
}
if(val == '10'){
   $('#packages').val('Starter Video Package - $349.00');
}
if(val == '11'){
   $('#packages').val('Business Video Package - $599.00');
}
if(val == '12'){
   $('#packages').val('Premium Video Package - $999.00');
} 


// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val); 



////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
// $('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 

////// fancybox
$('[data-fancybox="swf-file"]').fancybox({
	iframe : {
		css : {
			width : '336px',
			height : '280px'
		}
	}
});

$('[data-fancybox="video-file"]').fancybox({
	iframe : {
		css : {
			width : '580px',
			height : '340px'
		}
	}
});		
////// fancybox end

let ip; 
let ip_value;
 $("#phone-country,#phone-coun").intlTelInput({
     
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
    geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
              ip=resp.ip;
            
              
            });
          },
       initialCountry: "auto",
       nationalMode: true,
       separateDialCode: true,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
     // utilsScript: "<?php echo $basesurl;?>js/utils.js"
    });



setTimeout(function(){
    console.log(ip);
    
    $('input[name="pc"]').val($('.selected-dial-code').text());
   $('input[name="cip"]').val(ip);
    console.log(ip);
    $('input[name="ctry"]').val( $('.country-list .country.active .country-name').text());
}, 3000);

setTimeout(function(){
    $('.regionform input[name="pc1"]').val($('.regionform .selected-dial-code').text());
    $('.regionform input[name="ctry1"]').val( $('.regionform .country-list .country.active .country-name').text());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').text());


var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);
 });

 

// car scroll top
var $scrolltop = jQuery('.car-top');
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() >= 200) {
        $scrolltop.addClass("show");
        $scrolltop.addClass("car-down");
    } else {
        $scrolltop.removeClass("show");
        setTimeout(function() {
            $scrolltop.removeClass('car-down');
        }, 300);
    }
});
$scrolltop.on('click', function() {
jQuery('html,body').animate({
    scrollTop: 0
}, 800);
jQuery(this).addClass("car-run");
setTimeout(function() {
    $scrolltop.removeClass('car-run');
}, 1000);
return false;
});
// car scroll top end

}); // document ready end
 
 ////// slick gallery counter
var $gallery = $('.gallery-slider-main');
var slideCount = null;

$gallery.on('init', function(event, slick){
	"use strict";
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	"use strict";
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	"use strict";
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	"use strict";
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
////// slick gallery counter end
 

// validate contact form on keyup and submit
    $("#banform").validate({
      rules: {
        username: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        agree: "required"
      },
      messages: {
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        email: "Please enter a valid email address"
      }
    });

    $("#contactForm").validate();



////// footer year
$(function(){
"use strict";
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});	


function setButtonURL(){
 javascript:$zopim.livechat.window.show();
 }





$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".goto").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});



//=========== BLINK POPUP STARTS

$(".book-call-now").click(function(){
        $('.book-call-ys-layer').fadeIn();
        $('.book-call-ys-container').fadeIn();
        $('.book-call-ys-popup-content').fadeIn();
    });

$(".book-callbtn").click(function(){
        $('.book-call-ys-layer').fadeIn();
        $('.book-call-ys-container').fadeIn();
        $('.book-call-ys-popup-content').fadeIn();
    });

    $(".book-call-ys-popup-close").click(function(){
        $('.book-call-ys-layer').fadeOut();
        $('.book-call-ys-container').fadeOut();
        $('.book-call-ys-popup-content').fadeOut();
    });

//=========== BLINK POPUP ENDS


//=========== btm form start

    $('.cs-select').on('click',function(){
        $('.cs-select').toggleClass( "cs-active" );
    });
    
$('#multi25').mdbRange({
  single: {
    active: true,
    multi: {
      active: true,
      rangeLength: 2,
      bgThumbColor: ['black', '#eee'],
      textThumbColor: ['#fff', 'red']
    }
  }
});

function upd1(){
    
    var a = $('#ra1').val();
    $('#start_range').val('$'+a*'500');
}
function upd2(){
    
    var b = $('#ra2').val();
    $('#end_range').val('$'+b*'500'); 
} 

function updatesel(a){
    $('#sel_ser').html(a);
    $('#interest').val(a);
}   



//=========== btm form end