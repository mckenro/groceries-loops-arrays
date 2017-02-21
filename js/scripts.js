$(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userString = ($("#oneSentence").val()).trim();
    var splitArray = userString.split(" ");
    var newArray = [];
    for (var index = 0; index <= splitArray.length; index+=1){
      var word = splitArray[index];
      if (word.length >= 3) {
        newArray.push(word);
        $("#output").append("<li>" + word + "</li>");
      }
    }
  });
});
