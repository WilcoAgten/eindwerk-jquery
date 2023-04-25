jQuery(function ($) {
  let min30 = new Date(Date.now() + 1000 * 60 * 30);
  let jaartal = min30.getFullYear().toString();
  let maand = min30.getMonth().toString();
  let dag = min30.getDay().toString();
  let uur = min30.getHours().toString();
  let minuten = min30.getMinutes().toString();
  let seconden = min30.getSeconds().toString();

  console.log(minuten.length);

  if (maand.length == 1) {
    maand = "0" + maand;
  }
  if (dag.length == 1) {
    dag = "0" + dag;
  }
  if (uur.length == 1) {
    uur = "0" + uur;
  }
  if (minuten.length == 1) {
    minuten = "0" + minuten;
  }
  if (seconden.length == 1) {
    seconden = "0" + seconden;
  }

  let tijd =
    jaartal +
    "-" +
    maand +
    "-" +
    dag +
    " " +
    uur +
    ":" +
    minuten +
    ":" +
    seconden;

  $("#timer").flipper("init");
  $("#timer").attr("data-datetime", tijd);
});
