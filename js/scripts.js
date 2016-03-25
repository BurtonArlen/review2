$(document).ready(function() {
  $("form").submit(function(event) {

    var firstName = $("input#nameFirst").val();

    var lastName = $("input#nameLast").val();

    var fullName = (firstName + " " + lastName);

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

    if (points < 100) {
      alert(fullName + " you should probably just stay home...");
    }

    if (points > 100 && points < 200) {
      $("div#boringVacation").removeClass("hidden");
      $("body").removeClass("main");
      $("body").addClass("nebraska");
      alert(fullName + ", looks like a road trip to a wheat field seems fitting for you.");
    }

    if (points > 199 && points < 400) {
      $("div#okayVacation").removeClass("hidden");
      $("body").removeClass("main");
      $("body").addClass("beach");
      alert(fullName + ", I hope you have a good day at the beach, you've earned it.");
    }

    if (points > 499 && points < 600) {
      $("div#funVacation").removeClass("hidden");
      $("body").removeClass("main");
      $("body").addClass("sixflags");
      alert(fullName + ", Six Flags is calling you!");
    }

    if (points > 599) {
      $("div#realAdventure").removeClass("hidden");
      $("body").removeClass("main");
      $("body").addClass("asia");
      alert(fullName + ", the mountains, forests, and lowlands of Asia are the only things that can satiate your wild sense adventure!");
    }

    event.preventDefault();
  });
});
