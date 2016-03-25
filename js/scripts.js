$(document).ready(function() {
  $("form").submit(function(event) {

    // var firstName = ($("#nameFirst")input)
    //
    // var lastName = ($("#nameLast")input)

    var fullName = ("firstName"+" lastName")

    var points = 0;

    var result = parseInt($("select#gender").val());
    points += result;

    result = parseInt($("select#gender").val());
    points += result;

    result = parseInt($("select#climate").val());
    points += result;

    result = parseInt($("select#enjoy").val());
    points += result;

    result = parseInt($("select#food").val());
    points += result;

    result = parseInt($("select#children").val());
    points += result;

    result = parseInt($("select#transport").val());
    points += result;

    result = parseInt($("select#music").val());
    points += result;

    result = parseInt($("select#duration").val());
    points += result;

    result = parseInt($("select#budget").val());
    points += result;

    // if (points === 68) {
    //   $("div#stayHome").removeClass("hidden");
    //   alert("You should probably just stay home...");
    

    if (points < 200) {
      $("div#boringVacation").removeClass("hidden");
      alert("Road trip to a corn farm seems fitting for you.");
    }

    if (points > 199 && points < 400) {
      $("div#okayVacation").removeClass("hidden");
      alert("Have a day at the beach, you've earned it.");
    }

    if (points > 499 && points < 600) {
      $("div#funVacation").removeClass("hidden");
      alert("Six Flags is calling you!");
    }

    if (points > 599) {
      $("div#realAdventure").removeClass("hidden");
      alert("You should go backpacking through the mountains and lowlands of Asia");
    }

    event.preventDefault();
  });
});
