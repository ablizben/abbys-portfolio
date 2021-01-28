$(document).ready(function () {
  //scroll to about me section
  $("#move-to-about-me").click(function () {
    $("body,html").animate({
        scrollTop: $(".about-me-container").offset().top
      },
      100 //speed
    );
  });
  //scroll to projects section
  $("#move-to-projects").click(function () {
    $("body,html").animate({
        scrollTop: $(".project-container").offset().top
      },
      100 //speed
    );
  });
});
//scroll to contact section
$("#move-to-contact").click(function () {
  $("body,html").animate({
      scrollTop: $(".contact-container").offset().top
    },
    100 //speed
  );

});