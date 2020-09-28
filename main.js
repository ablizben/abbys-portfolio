$(document).ready(function() {
    $("#moveToAboutMe").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".aboutMeContainer").offset().top
        },
        100 //speed
      );
    });
    $("#moveToProjects").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".projectsContainer").offset().top
        },
        100 //speed
      );
    });
  });
    $("#moveToContact").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".contactContainer").offset().top
        },
        100 //speed
      );
    });
