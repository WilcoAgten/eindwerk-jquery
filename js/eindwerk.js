$(document).ready(function () {
  //wilco
  let accordion = $("#accordion");

  $.getJSON("chapters.json", function (data) {
    $.each(data, function (i, chapter) {
      let line =
        "<h3>" +
        chapter.name +
        " (" +
        chapter.duration +
        "uur)" +
        "</h3><div><p>" +
        chapter.description +
        "</p></div>";
      $("#accordion").append(line);
    });

    accordion.accordion({
      active: true,
      collapsible: true,
      icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" },
    });
  });

  let stickymenu = $(".stickymenu");
  if ($(window).width() < 1230) {
    stickymenu.css("position", "static");
  } else {
    stickymenu.sticky({
      topSpacing: 0,
    });
  }

  $("#logo").animate({ "font-size": "24px" }, 1000, "linear");

  $("#fuw button").on("click", function () {
    window.open(
      "https://www.cvodeverdieping.be/opleidingen/full-stack-webdeveloper",
      "_blank"
    );
  });

  //einde wilco

  //joris

  $(".stickymenu button").on("click", function () {
    window.open("https://www.cvodeverdieping.be/inschrijven/12171", "_blank");
  });

  let clock;
  clock = $(".clock").FlipClock({
    clockFace: "MinuteCounter",
    autoStart: false,
    callbacks: {
      stop: function () {
        $(".message").html("Helaas, dat wordt volle pot betalen.");
      },
    },
  });
  clock.setCountdown(true);
  clock.setTime(1799);
  clock.start();

  $(".sliderbox").css("right", "-1000px");

  $(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 600) {
      $(".sliderbox").css({ right: "0px", transition: "ease-in-out 1s" });
    } else {
      $(".sliderbox").css("right", "-1000px");
    }
  });

  //einde joris

  //nico
  $("#eocjs-newsticker").eocjsNewsticker({
    speed: 25,
  });

  let emailInput = $("#email");
  $(".ftrbtn").on("click", function (e) {
    e.preventDefault();
    console.log(emailInput.val());
    if (emailInput.val().length != 0) {
      $.ajax({
        url: "subscribers.php",
        type: "POST",
        data: "email=" + emailInput.val(),
        success: function () {
          alert("Bedankt voor je inschrijving op onze nieuwsbrief");
        },
      });
    }
  });

  $(window).scroll(function () {
    $(".fadeIn").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() + 800;

      console.log(bottom_of_element);
      console.log(bottom_of_window);

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 1200);
      }
    });
  });

  //einde nico
});
