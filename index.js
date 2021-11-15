
$(".bookmark").click(function(){
    $("#book-1").toggleClass("book");
    $("#logo-2").toggleClass("logo2");
    $("#logo-3").toggleClass("logo3");
})

function myFunction() {
    var x = document.getElementById("book-1");
    if (x.innerHTML === "Bookmark") {
      x.innerHTML = "Bookmarked";
    } else {
      x.innerHTML = "Bookmark";
    }
}

$('.radio1').click(function() {
    if($('#inlineRadio1').is(':checked')) { 
      $(".radio1").addClass("div-7");
      $(".modal-footer1").removeClass("modal-display"); 
      for(var i = 2 ; i < 4; i++){
        $(".radio" + i).removeClass("div-7");
        $(".modal-footer" + i).addClass("modal-display"); 
      }
    }else{
      $(".radio1").removeClass("div-7");
    }
});

$('.radio2').click(function() {
  if($('#inlineRadio2').is(':checked')) { 
    for(var i = 1 ; i < 4; i++){
      $(".radio" + i).removeClass("div-7");
      $(".modal-footer" + i).addClass("modal-display");
    }
    $(".radio2").addClass("div-7");
    $(".modal-footer2").removeClass("modal-display");
  }else{
    $(".radio2").removeClass("div-7");
  }
});

$('.radio3').click(function() {
  if($('#inlineRadio3').is(':checked')) { 
    $(".radio3").addClass("div-7");
    $(".modal-footer3").removeClass("modal-display");
    for(var i = 1 ; i < 3; i++){
        $(".radio" + i).removeClass("div-7");
        $(".modal-footer" + i).addClass("modal-display"); 
    }
  }else{
    $(".radio3").removeClass("div-7");
  }
});
