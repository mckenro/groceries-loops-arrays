$(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    var groceryList = ["firstItem", "secondItem", "thirdItem", "fourthItem"];
    var userList = [];
    groceryList.forEach(function(listItem) {
      var listItem = $("#" + listItem).val().toUpperCase();
      userList.push(listItem);


      // userInput.sort();
      // var upperGroceryList = userInput.map(function(listItem) {
      //   return listItem.toUpperCase();
      // });
    });
    console.log(userList);
    userList.sort();
    console.log(userList);
    $("#groceries").hide();
    userList.forEach(function(list) {
      $("#shoppingList").append("<li>" + list + "</li>");
    });
    // console.log(groceryList);



  });
});
