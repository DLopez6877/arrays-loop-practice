
// front end below this line
$(function() {

  $("#groceryForm").submit(function(event){
    var groceries = ["grocery1", "grocery2", "grocery3", "grocery4", "grocery5", "grocery6"];
    var newArray = [];
    
    groceries.forEach(function(grocery){
      var groceryInput = $("input#" + grocery).val();
      newArray.push(groceryInput);
    });

    newArray = newArray.sort();

    newArray.forEach(function(grocerySorted){
      $("#grocery-list").append('<li>' + grocerySorted.toUpperCase() + '</li>');
      $("#groceryForm").hide();
      $("#grocery-list").show();
    });

    event.preventDefault();
  });

});
