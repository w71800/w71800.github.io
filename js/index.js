$(".navi_switch").click(function()
  {
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$("section").click(function()
  {
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })

$(".switcher_bus").click(function()
  {
    $(this).addClass("hint_border")
    $(this).css("background-color","white")
    $(".bus").removeClass("invisible")
    $(".mrt").addClass("invisible") 
    $(".switcher_mrt").removeClass("hint_border")
    $(".switcher_mrt").css("background-color","#F1F3F3")
  })

$(".switcher_mrt").click(function()
  {
    $(this).addClass("hint_border")
    $(this).css("background-color","white")
    $(".mrt").removeClass("invisible")
    $(".bus").addClass("invisible")
    $(".switcher_bus").removeClass("hint_border")
    $(".switcher_bus").css("background-color","#F1F3F3")
  })

$(".START").click(function()
  {
    $(this).addClass("invisible")
    $(this).css("height","0")
    $(".choose").removeClass("invisible")
  })