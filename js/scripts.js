$(document).ready(function(){

  $('.materialboxed').materialbox();

  $(".portfolio-content").hide();
  $("#portfolio-details").hide();
  $(".songLab-content").hide();
  $(".scoop-content").hide();
  $(".closing-X").hide();

  $(".portfolio-link").click(function(){
    $(".portfolio-block").addClass("full-width");
    $(".portfolio-content").show();
    $(".closing-X").show();
    $(".contact-block").hide();
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
    return false;
  });

  $(".closing-X").click(function(){
    $(".portfolio-block").removeClass('full-width');
    $(".portfolio-content").hide();
    $(".closing-X").hide();
    $(".contact-block").show();
    $("#portfolio-details").hide();
    $(".songLab-content").hide();
  });

  $("#allProjects").click(function(){
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
  })

  $(".songLab").click(function(){
    // Items to Hide
    $(".scoop-content").hide();
    $(".fringe-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".songLab-content").show();

    // Scroll Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".scoop").click(function(){
    // Items to Hide
    $(".songLab-content").hide();
    $(".fringe-content").hide();

    //Items to Show
    $("#portfolio-details").show();
    $(".scoop-content").show();

    // Scroll Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })

  $(".fringe").click(function(){
    // Items to Hide
    $(".songLab-content").hide();
    $(".scoop-content").hide();

    // Items to Show
    $("#portfolio-details").show();
    $(".fringe-content").show();

    //Scroll to Code
    $('html, body').animate({
        scrollTop: $("#portfolio-details").offset().top
    }, 1000);
    return false;
  })
});
