window.onscroll = function () {
  scrollFunction()
};

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






//testing nav bar hamburger menu / bar icon * /
$(".menu-trigger").on('click', function () {
  $('nav').toggleClass("open");
  $(this).toggleClass("icon-active");
});