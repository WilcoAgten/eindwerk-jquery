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

  $('#logo').animate({ 'font-size': '24px' }, 1000, 'linear');

 

  //einde wilco

  //Nico
  $("#eocjs-newsticker").eocjsNewsticker({
    speed: 25,
  });
  //einde Nico

  //joris

  $(".stickymenu button").on("click", function () {
    console.log("test");
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

  //einde joris
  let emailInput = $("#email");
  $(".ftrbtn").on("click", function (e) {
    e.preventDefault();
    console.log(emailInput.val());
    if (emailInput.val().length != 0) {
      $.ajax({
        url: "subscribers.php",
        type: "POST",
        data: "email=" + emailInput.val(),
        success: function() {
          alert('Bedankt voor je inschrijving op onze nieuwsbrief');
      }
      
      });
    }
  });
});
