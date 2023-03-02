$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  var vw;
  $(window).resize(function () {
    vw = $(window).width() / 2;
    $("#card *").hide();
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
  });

  $("#initial").click(function () {
    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#turn_on").fadeIn("slow");
      });
  });

  $("#play").click(function () {
    // changeColor();
    var audio = $(".song")[0];
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(10000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $("#welcome_dance").remove();
    $(this)
      .fadeOut("slow")
      .delay(8000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    $("#banner").css("display", "block");
    $(".bannar").addClass("center");
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  function loopOne() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b1").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b2").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b3").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b4").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b5").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b6").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = Math.floor(Math.random() * $(window).width() + 1);
    var randtop = Math.floor(Math.random() * $(window).height() + 1);
    $("#b7").animate({ left: randleft, bottom: randtop }, 8000, function () {
      loopSeven();
    });
  }

  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");
    // $('#b3').addClass('balloons-rotate-behaviour-two');
    // $('#b4').addClass('balloons-rotate-behaviour-one');
    // $('#b5').addClass('balloons-rotate-behaviour-one');
    // $('#b6').addClass('balloons-rotate-behaviour-two');
    // $('#b7').addClass('balloons-rotate-behaviour-one');
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    // chỗ này
    $(this)
      .fadeOut("slow")
      .delay(13000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $("#cake_pink").css("display", "block");
    $("#candle").css("display", "block");

    $("#cake_pink").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(20000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  $("#story").click(function () {
    var audio1 = $(".song")[0];
    audio1.pause();
    var audio2 = $(".song1")[0];
    audio2.play();
    $(this).fadeOut("slow");
    $("#card").css("display", "block");
    $("#card").show();
    $("#card").css("position", "absolute");
    $("#card").css("z-index", 9999);
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });
    $("#card").fadeIn("slow");

    $(this)
      .fadeOut("slow")
      .delay(70000)
      .promise()
      .done(function () {
        $("#picture_time").fadeIn("slow");
      });
  });

  $("#picture_time").click(function () {
    window.location.replace("src/html/surprise.html");
  });
});

//alert('hello');
