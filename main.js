window.onscroll = function () {
  scrollFunction()
};

//nav bar appearing only after scroll
function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 20) {
    document.querySelector(".menu-trigger").style.top = "0";
  } else {
    document.querySelector(".menu-trigger").style.top = "-50px";
  }
}

//scroll to about me section
$("#move-to-about-me").click(function () {
  $("body,html").animate({
      scrollTop: $("#about-me-container").offset().top
    },
    100 //speed
  );
});
//scroll to projects section
$("#move-to-projects").click(function () {
  $("body,html").animate({
      scrollTop: $("#project-container").offset().top
    },
    100 //speed
  );
});

//scroll to contact section
$("#move-to-contact").click(function () {
  $("body,html").animate({
      scrollTop: $("#contact-container").offset().top
    },
    100 //speed
  );
});


//nav bar hamburger menu 
$(".menu-trigger").on('click', function () {
  $('nav').toggleClass("open");
  $(this).toggleClass("icon-active");
  console.log(this);
});

//exits out of nav menu after clicking on destination
$('.close-menu-nav').on('click', function () {
  $('nav').toggleClass("open");
  $('.menu-trigger').toggleClass("icon-active");
});