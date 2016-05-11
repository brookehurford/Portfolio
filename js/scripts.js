$(document).ready(function(){
  $(".portfolio-content").hide();
  $(".closing-X").hide();

  $(".portfolio-link").click(function(){
    $(".portfolio-block").addClass("full-width");
    $(".portfolio-content").show();
    $(".closing-X").show();
    $(".contact-block").hide();
  });

  $(".closing-X").click(function(){
    $(".portfolio-block").removeClass('full-width');
    $(".portfolio-content").hide();
    $(".closing-X").hide();
    $(".contact-block").show();
  });
});
