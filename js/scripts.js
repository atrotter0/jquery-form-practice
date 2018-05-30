$(document).ready(function() {
  //Mad Libs
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  //Letter for a friend
  $("#formTwo").submit(function(event) {
    var firstName = $("input#first-name").val();
    $("#friend-name").text(firstName);
    $("#letter").show();

    event.preventDefault();
  });

  //Shout
  $("#formThree").submit(function(event) {
    var input = $("input#userInput").val().toUpperCase();
    $(".output").text(input);
    $("#shout").show();

    event.preventDefault();
  });
});
