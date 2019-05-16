$(".navi_switch").click(function()
  {
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$(".navi_switch").on("touchend",function()
  {
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$("section").click(function()
  {
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })

$("section").on("touchend",function()
  {
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })


$(".START").click(function()
  {
    $(this).addClass("invisible")
    $(this).css("height","0")
    $(".choose").removeClass("invisible")
  })

var welcome_width = $(window).width()
var welcome_height = $(window).height()

function welcome_fullscreen()
  {
    if(welcome_width<welcome_height)
    {
      $("#welcome_banner").css("height","100vh")  
      $(".title_straight").removeClass("invisible")
      $(".title_part").addClass("invisible")
    }
    else
    {
      $("#welcome_banner").css("height","default") 
    }
  }

$(document).ready(function()    
  {
    welcome_fullscreen();
  })

// $('#any-element').on('tap', function (e) {
// // All the magic happens here
// })