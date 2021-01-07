$(document).ready(function() {
  //scroll to about me section
    $("#moveToAboutMe").click(function() {
      $("body,html").animate(
        {
          scrollTop: $("#aboutMe-skills").offset().top
        },
        100 //speed
      );
    });
    //scroll to projects section
    $("#moveToProjects").click(function() {
      $("body,html").animate(
        {
          scrollTop: $("#projectContainer").offset().top
        },
        100 //speed
      );
    });
  });
  //scroll to contact section
    $("#moveToContact").click(function() {
      $("body,html").animate(
        {
          scrollTop: $("#contactContainer").offset().top
        },
        100 //speed
      );

    });


 