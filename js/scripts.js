$(document).ready(function(){
  $(".portfolio-content").hide();
  $(".closing-X").hide();

  $(".portfolio-block").click(function(){
    $(".portfolio-block").addClass("full-width");
    $(".portfolio-content").show();
    $(".closing-X").show();
  });

  $(".closing-X").click(function(){
    $(".portfolio-block").removeClass('full-width');
  });
});
