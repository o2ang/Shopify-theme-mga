(function () {
  "use strict";

  var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    //allowTouchMove: false,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 3,
    },

    //freeMode:true,
    //threshold:10,

    //loop: true,
    //speed: 5000,

    //centeredSlides: true,
    //preventInteractionOnTransition: true,

    //lazy: true,
    /*		
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },*/

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    breakpoints: {
      // when window width is >= 750px
      750: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function () {},
    },
  });
})();

/*jQuery */
(function () {
  "use strict";

  let viewerWidth = window.innerWidth ? window.innerWidth : $(window).width();
  let viewerHeight = window.innerHeight
    ? window.innerHeight
    : $(window).height();

  let timer;

  $(window).on("load resize", function () {
    viewerWidth = window.innerWidth ? window.innerWidth : $(window).width();
    viewerHeight = window.innerHeight ? window.innerHeight : $(window).height();

    if ($(".js-tile-1").length) {
      if (viewerWidth >= 768) {
        $(".js-tile-1").tile(2);
      } else {
        $(".js-tile-1").removeAttr("style");
      }
    }

    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {}, 200);
  });

  $(function () {
    $(".js-collapsible").each(function (i, e) {
      $(this).on("click", function () {
        //alert("1");
        $(this).toggleClass("open");
        $(this)
          .parent()
          .find(".mga-footer-menu-item, .mga-footer-menu-product-item")
          .slideToggle();
      });
    });
  });

  $(function () {
    $(".waypoint").waypoint(
      function (direction) {
        let activePoint = $(this.element);

        if (direction === "down") {
          activePoint.addClass("show");
        } else {
        }
      },
      {
        offset: "80%",
      }
    );
  });
  $(function () {
    setTimeout(function () {
      let $link = $("#shopify-pc__banner__body-policy-link");
      if ($link.length && $("html[lang='en']").length) {
        let href = $link.attr("href").replace("/policies", "/en/policies");
        $link.attr("href", href);
      }

      $link = $(".isense-cc-link");
      if ($link.length && $("html[lang='ja']").length) {
        let href = $link.attr("href").replace("/en/policies", "/policies");
        $link.attr("href", href);
      }
    }, 1000);
  });

  $(function () {
    if ($(".shopify-policy__title").length) {
      let $h1 = $(".shopify-policy__title h1");
      //$h1.text($h1.text().replace("Refund policy", "RETURN POLICY"));
    }
  });
})();
