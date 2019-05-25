$(".navi_switch").click(function(){
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$(".navi_switch").on("touchend",function(){
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$("section").click(function(){
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })

$("section").on("touchend",function(){
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })


$(".START").click(function(){
    $(this).addClass("invisible")
    $(this).css("height","0")
    $(".choose").removeClass("invisible")
  })

var welcome_width = $(window).width()
var welcome_height = $(window).height()

function welcome_fullscreen(){
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

var loading_countdown = 9000

$(".NewGame").click(function(){
  $("#welcome_banner").addClass("invisible")
  $("#NewGame").removeClass("invisible")
  $(".loading").addClass("nowloading")
  setTimeout(function(){
      loading_complete()
      }, loading_countdown)
})

$(".load").click(function(){
  $("#welcome_banner").addClass("invisible")
  $("#LOAD").removeClass("invisible")
  $(".loading").addClass("nowloading")
  setTimeout(function(){
      loading_complete()
      }, loading_countdown)
})

$(".save").click(function(){
  $("#welcome_banner").addClass("invisible")
  $("#SAVE").removeClass("invisible")
  $(".loading").addClass("nowloading")
  setTimeout(function(){
      loading_complete()
      }, loading_countdown)
})

function loading_complete(){
    $(".loading").addClass("invisible_opacity")
    $(".login").removeClass("invisible_opacity")
  }

$(document).ready(function(){
    welcome_fullscreen()
    $(".list_seperate").css("margin-bottom","7.5rem")
  })