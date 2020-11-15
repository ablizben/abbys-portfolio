$(document).ready(function() {
  //scroll to about me and skills section
    $("#moveToAboutMe").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".aboutMeContainer").offset().top
        },
        100 //speed
      );
    });
    //scroll to projects section
    $("#moveToProjects").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".projectsContainer").offset().top
        },
        100 //speed
      );
    });
  });
  //scroll to contact section
    $("#moveToContact").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".contactContainer").offset().top
        },
        100 //speed
      );
    });

    
