$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#dismiss, .overlay").on("click", function () {
    $("#sidebar").removeClass("active");
    $(".overlay").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").addClass("active");
    $(".overlay").addClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});

//Carosel
(function ($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );

    doAnimations($animatingElems);
  });
})(jQuery);
//# sourceURL=pen.js

// Application Form
const form = document.querySelector(".mainForm");
const formOne = document.querySelector(".formStep1");
const formTwo = document.querySelector(".formStep2");
const formThree = document.querySelector(".formStep3");
const formBtn = document.querySelectorAll(".formBtn");
let count = 0;
const formActive = function () {
  form.classList.remove("hidden");
};
const formNext = function (e) {
  if (e === 0) {
    formOne.classList.add("hidden");
    formTwo.classList.remove("hidden");
    count++;
  } else if (e === 1) {
    formTwo.classList.add("hidden");
    formThree.classList.remove("hidden");
  }
};
//application selection button
for (let i = 0; i < formBtn.length; i++) {
  formBtn[i].addEventListener("click", formActive);
}
//Next button
document.querySelector(".formNext").addEventListener("click", function () {
  if (count === 0) {
    formOne.classList.add("hidden");
    formTwo.classList.remove("hidden");
    count++;
  } else if (count === 1) {
    formTwo.classList.add("hidden");
    formThree.classList.remove("hidden");
    document.querySelector(".formNext").classList.add("hidden");
    document.querySelector(".btnProcess").classList.remove("hidden");
  }
});

//Reset button
document.querySelector(".buttonReset").addEventListener("click", function () {
  formOne.classList.remove("hidden");
  formThree.classList.add("hidden");
  document.querySelector(".formNext").classList.remove("hidden");
  document.querySelector(".btnProcess").classList.add("hidden");
  console.log("proceed");
  count = 0;
});
