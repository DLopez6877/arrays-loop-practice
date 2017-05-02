
// front end below this line
$(function() {

  // create grocery list when submitting form
  $("#groceryForm").submit(function(event){
    var groceries = ["grocery1", "grocery2", "grocery3", "grocery4", "grocery5", "grocery6"];
    var newArray = [];

    groceries.forEach(function(grocery){
      var groceryInput = $("input#" + grocery).val();
      console.log(groceryInput);
      if (groceryInput === "") {
        groceryInput = "(Blank)";
      }
      newArray.push(groceryInput);
    });

    newArray = newArray.sort();

    newArray.forEach(function(grocerySorted){
      $("#grocery-list").append('<li>' + grocerySorted.toUpperCase() + '</li>');
      $("#groceryForm").hide();
      $(".grocery-list").show();
    });

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

    $("#deck").toggle();
  });

});
