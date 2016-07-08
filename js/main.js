
$(document).on('ready', function() {

  $(".switch button").click(
    function(event) {
      $(".switch button").toggleClass("off on");
      $("body").toggleClass("light dark");

      if ($('button').hasClass("off")){
        $("h1").text("Hey! Who turned out the lights!");
        console.log("its Dark");
      } else {
        $("h1").text("It's so bright in here!");
        console.log("its light");
      }
    }
  );

});
