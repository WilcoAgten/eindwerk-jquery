$(document).ready(function () {
    
    //wilco
    let accordion = $('#accordion');

    $.getJSON("chapters.json", function (data) {
        $.each(data, function (i, chapter) {
          let line =
          "<h3>" + chapter.name + " (" + chapter.duration + "uur)" + "</h3><div><p>" + chapter.description+ "</p></div>";
          $("#accordion").append(line);
        });

        accordion.accordion({
            active: true,
            collapsible: true,
            icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
        });
      });

      
    
    


    
    //einde wilco
    
});