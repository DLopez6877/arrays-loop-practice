
// front end below this line
$(function() {

  // create grocery list when submitting form
  $("#groceryForm").submit(function(event){
    var groceries = ["grocery1", "grocery2", "grocery3", "grocery4", "grocery5", "grocery6"];
    var newArray = [];

    groceries.forEach(function(grocery){
      var groceryInput = $("input#" + grocery).val();
      if (groceryInput === "") {
        groceryInput = "(Blank)";
      }
      newArray.push(groceryInput);
    });

    newArray = newArray.sort();

    newArray.forEach(function(grocerySorted){
      $("#grocery-list").append('<li>' + grocerySorted.toUpperCase() + '</li>');
    });

    $("#groceryForm").hide();
    $(".grocery-list").show();

    event.preventDefault();
  });

  // create a deck of cards
  $(".cards-here").click(function(event) {
    var cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    var suits = ["Spade", "Hearts", "Clubs", "Diamonds"];
    var completedCards = [];

    cards.forEach(function(card){
      suits.forEach(function(suit){
        completedCards.push(card + " of " + suit );
      });
    });

    completedCards = completedCards.sort();

    completedCards.forEach(function(completedCard) {
      $("#deck").append("<li>" + completedCard + "</li>");
    });

    if ($(".see-hide").text("see")){
      $(".see-hide").text("hide");
    } else {
      $(".see-hide").text("see");
    }

    $("#deck").toggle();

    event.preventDefault();
  });

  // split text and return words with value of how many times they appear for Word Play
  $("#word-btn").click(function() {
    var sent = $("#sent").val();
    var lowerSent = sent.toLowerCase();
    var splitSent = lowerSent.split(" ");
    var result = [];

    splitSent.sort();


    // for (index = 0; index < splitSent.length; index + 1) {
    //   var counter = 0;
    //   for (var i = 0; i < splitSent.length; i + 1) {
    //     if (splitSent[index] === splitSent[i]) {
    //       counter + 1;
    //     }
    //   }
    //   if ((result[result.length - 1]) !== ("'" + splitSent[index] + "'" + " repeats " + counter + " times")) {
    //     result.push("'" + splitSent[index] + "'" + " repeats " + counter + " times");
    //   }
    // };
    result.forEach(function(line) {
      $(".word-result").append("<li>" + line + "</li>");
    });

    $("#word-form").hide();
    $("#word-result").show();

    event.preventDefault();
  });
});
