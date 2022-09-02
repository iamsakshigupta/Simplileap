
if (screen.width < 1028) {
  $("#navbar").remove();

  // $("a").remove(".nav-home");
  // $("a").remove(".nav-services");
  // $("a").remove(".nav-about");
  // $("a").remove(".nav-portfolio");
  // $("a").remove(".nav-contact");
  // $("a").remove(".nav-login");
  // $("a").remove(".PhoneIcon");
  // $("a").remove(".nav-number");
  // $("a").remove(".searchIcon");
  $(".services-web").remove();
  $(".services-uiux").remove();
  $(".services-appdev").remove();
  $(".services-dmarket").remove();

  $("span").remove(".hero-phone");
  $("span").remove(".hero-email");

  $("div").remove(".dmarket-tile");
  $("div").remove(".webdev-tile");
  $("span").remove(".workView");
  $(".form1").remove();
  $(".form").remove();

  var delay = 5000,
    setTimeoutConst;

  $(".menuIcon").hover(function() {
      $(".mobile-dropdown").css('display', 'block');
      $(".mobile-nav-about").css('display', 'block');
      $(".mobile-nav-services").css('display', 'block');
      $(".mobile-nav-home").css('display', 'block');
      $(".mobile-menu-arrow").css('display', 'block');
      $(".mobile-nav-portfolio").css('display', 'block');
      $(".mobile-nav-contact").css('display', 'block');
      $(".mobile-nav-login").css('display', 'block');

    },
    function() {
      // clearTimeout(setTimeoutConst);
      setTimeoutConst = setTimeout(function() {
        $(".mobile-dropdown").css('display', 'none');
        $(".mobile-nav-about").css('display', 'none');
        $(".mobile-nav-services").css('display', 'none');
        $(".mobile-nav-home").css('display', 'none');
        $(".mobile-menu-arrow").css('display', 'none');
        $(".mobile-nav-portfolio").css('display', 'none');
        $(".mobile-nav-contact").css('display', 'none');
        $(".mobile-nav-login").css('display', 'none');

      }, delay);

    });
  $(".mobile-nav-services").hover(function() {
      $(".mobile-expanded-dropdown").css('display', 'block');
      $(".mobile-expanded-nav-about").css('display', 'block');
      $(".mobile-expanded-nav-services").css('display', 'block');
      $(".mobile-expanded-nav-home").css('display', 'block');

      $(".mobile-expanded-dropdown-webdev-php").css('display', 'block');
      $(".mobile-expanded-dropdown-dmarket").css('display', 'block');
      $(".mobile-expanded-dropdown-uiux").css('display', 'block');
      $(".mobile-expanded-dropdown-appdev").css('display', 'block');


      $(".mobile-expanded-menu-arrow").css('display', 'block');
      $(".mobile-expanded-nav-portfolio").css('display', 'block');
      $(".mobile-expanded-nav-contact").css('display', 'block');
      $(".mobile-expanded-nav-login").css('display', 'block');

      $(".mobile-dropdown").css('display', 'none');
      $(".mobile-nav-about").css('display', 'none');
      $(".mobile-nav-services").css('display', 'none');
      $(".mobile-nav-home").css('display', 'none');
      $(".mobile-menu-arrow").css('display', 'none');
      $(".mobile-nav-portfolio").css('display', 'none');
      $(".mobile-nav-contact").css('display', 'none');
      $(".mobile-nav-login").css('display', 'none');

    },
    function() {
      // clearTimeout(setTimeoutConst);
      setTimeoutConst = setTimeout(function() {
        $(".mobile-expanded-dropdown").css('display', 'none');
        $(".mobile-expanded-nav-about").css('display', 'none');
        $(".mobile-expanded-nav-services").css('display', 'none');
        $(".mobile-expanded-nav-home").css('display', 'none');

        $(".mobile-expanded-dropdown-webdev-php").css('display', 'none');
        $(".mobile-expanded-dropdown-dmarket").css('display', 'none');
        $(".mobile-expanded-dropdown-uiux").css('display', 'none');
        $(".mobile-expanded-dropdown-appdev").css('display', 'none');


        $(".mobile-expanded-menu-arrow").css('display', 'none');
        $(".mobile-expanded-nav-portfolio").css('display', 'none');
        $(".mobile-expanded-nav-contact").css('display', 'none');
        $(".mobile-expanded-nav-login").css('display', 'none');

      }, delay);

    });





} else {
  $("span").removeClass(".mobile-work-arrow-left");
  $("span").removeClass(".mobile-work-arrow-right");
  $(".services-carousel").remove();



  var delay = 5000,
    setTimeoutConst;

  $(".nav-services").hover(function() {
      $('.nav-services').css('color', '#4CB1A0');
      $('.dropdown').css('display', 'block');
      $('.dropdown-webdev').css('display', 'block');
      $('.dropdown-uiux').css('display', 'block');
      $('.dropdown-dmarket').css('display', 'block');
      $('.dropdown-appdev').css('display', 'block');
      $('.menu-arrow').css('display', 'block');
    });


    // },
    // function() {
    //   // clearTimeout(setTimeoutConst);
    //   setTimeoutConst = setTimeout(function() {
    //     $('.nav-services').css('color', '#000000');
    //     $('.dropdown').css('display', 'none');
    //     $('.dropdown-webdev').css('display', 'none');
    //     $('.dropdown-uiux').css('display', 'none');
    //     $('.dropdown-dmarket').css('display', 'none');
    //     $('.dropdown-appdev').css('display', 'none');
    //     $('.menu-arrow').css('display', 'none');
    //   }, delay);
    //
    // });

  var delay2 = 2000,
    setTimeoutConst;

  $(".work-dmarket-text").hover(function() {
      $('.work-dmarket-text').css('color', "#4CB1A0");


    },
    function() {
      // clearTimeout(setTimeoutConst);

          $('.work-dmarket-text').css('color', "#000000");
      });



  $(".work-webdev-text").hover(function() {
        $('.work-webdev-text').css('color', "#4CB1A0");

    },
    function() {

      $('.work-webdev-text').css('color', "#000000");
      });

  $(".work-mdesign-text").hover(function() {
      $('.work-mdesign-text').css('color', "#4CB1A0");


    },
    function() {

        $('.work-mdesign-text').css('color', "#000000");
      });

  // $(".work-dmarket").hover(function() {
  //     $('.work-dmarket').css('background', "#FFFFFF");
  //
  //
  //   },
  //   function() {
  //
  //       $('.work-dmarket').css('background-image', 'url(css/work-dmarket.png)');
  //     });


  $(".dropdown-webdev").hover(function() {
      $('.dropdown-webdev').css('color', '#4CB1A0');
      $('.dropdown-webdev-php').css('display', 'block');
    },
    function() {
      // clearTimeout(setTimeoutConst);
      setTimeoutConst = setTimeout(function() {
        $('.dropdown-webdev').css('color', '#000000');
        $('.dropdown-webdev-php').css('display', 'none');

      }, delay);



    });

  $(".services-digitalmarket").hover(function() {

    $('.dmarket-hover').fadeIn();
    $('.dmarket').css('color', '#ffffff');
      $('.dmarket-line').css('color', '#ffffff');
      $('.services-dmarket').css('background-image', 'url(css/dmarket-icon.png)');
      $('.dmarket-text').css('color', '#ffffff');


  },function(){
    $('.dmarket-hover').fadeOut();
    // $('.dmarket-hover').css('display', 'none');
     $('.dmarket').css('color', '#000000');
      $('.dmarket-line').css('color', '#4CB1A0');
      $('.services-dmarket').css('background-image', 'url(css/service-dmarket.png)');
      $('.dmarket-text').css('color', '#000000');
  });

  $(".services-web").hover(function() {

    $('.webdev-hover').fadeIn();
    $('.webdev').css('color', '#ffffff');
      $('.line').css('color', '#ffffff');
      $('.services-webdev').css('background-image', 'url(css/web-icon.png)');
      $('.services-text').css('color', '#ffffff');


  },function(){
    $('.webdev-hover').fadeOut();
     $('.webdev').css('color', '#000000');
      $('.line').css('color', '#4CB1A0');
      $('.services-webdev').css('background-image', 'url(css/webdev.jpg)');
      $('.services-text').css('color', '#000000');
  });

  $(".services-uiux").hover(function() {

    $('.ui-hover').fadeIn();
    $('.ui-title').css('color', '#ffffff');
      $('.ui-line').css('color', '#ffffff');
      $('.services-ui').css('background-image', 'url(css/ui-hover.png)');
      $('.ui-text').css('color', '#ffffff');


  },function(){
    $('.ui-hover').fadeOut();
    $('.ui-title').css('color', '#000000');
      $('.ui-line').css('color', '#4CB1A0');
      $('.services-ui').css('background-image', 'url(css/ui-icon.png)');
      $('.ui-text').css('color', '#000000');

  });

  $(".services-appdev").hover(function() {

    $('.app-hover').fadeIn();
    $('.app-title').css('color', '#ffffff');
      $('.app-line').css('color', '#ffffff');
      $('.services-app').css('background-image', 'url(css/app-hover.png)');
      $('.app-text').css('color', '#ffffff');


  },function(){
    $('.app-hover').fadeOut();
    $('.app-title').css('color', '#000000');
      $('.app-line').css('color', '#4CB1A0');
      $('.services-app').css('background-image', 'url(css/appdev-icon.png)');
      $('.app-text').css('color', '#000000');

  });



}


document.addEventListener("DOMContentLoaded", () => {

 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
  }, step);
 }
 counter("count1", 0, 45, 3000);
 counter("count2", 0, 63, 2500);
 counter("count3", 0, 25, 3000);
 counter("count4", 0, 2, 3000);
});
