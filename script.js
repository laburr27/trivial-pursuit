///James' comments will have triple slashes

$(document).ready(function() {

//get value assigned to a question

  var blueQ1=$("#blueQ").attr("data-bq");
  var pinkQ1=$("#pinkQ").attr("data-pq");
  var yellowQ1=$("#yellowQ").attr("data-yq");
  var brownQ1=$("#brownQ").attr("data-brq");
  var purpleQ1=$("#purpleQ").attr("data-puq");
  var orangeQ1=$("#orangeQ").attr("data-oq");

// get value assigned to button

  /// I would urge more semantic variable names here
  var blueA1=$("#bA1").attr("data-ba1");
  var blueA2=$("#bA2").attr("data-ba2");
  var blueA3=$("#bA3").attr("data-ba3");
  var blueA4=$("#bA4").attr("data-ba4");

  var pinkA1=$("#pA1").attr("data-pa1");
  var pinkA2=$("#pA2").attr("data-pa2");
  var pinkA3=$("#pA3").attr("data-pa3");
  var pinkA4=$("#pA4").attr("data-pa4");

  var yellowA1=$("#yA1").attr("data-ya1");
  var yellowA2=$("#yA2").attr("data-ya2");
  var yellowA3=$("#yA3").attr("data-ya3");
  var yellowA4=$("#yA4").attr("data-ya4");

  var brownA1=$("#brA1").attr("data-bra1");
  var brownA2=$("#brA2").attr("data-bra2");
  var brownA3=$("#brA3").attr("data-bra3");
  var brownA4=$("#brA4").attr("data-bra4");

  var purpleA1=$("#puA1").attr("data-pua1");
  var purpleA2=$("#puA2").attr("data-pua2");
  var purpleA3=$("#puA3").attr("data-pua3");
  var purpleA4=$("#puA4").attr("data-pua4");

  var orangeA1=$("#oA1").attr("data-oa1");
  var orangeA2=$("#oA2").attr("data-oa2");
  var orangeA3=$("#oA3").attr("data-oa3");
  var orangeA4=$("#oA4").attr("data-oa4");

  console.log(brownQ1);
  console.log(orangeA1);
  console.log(purpleA2);
  console.log(blueA3);
  console.log(blueA4);

//user clicks button; COMPARE button value to question value; IF equal THEN change feedback to purple, ELSE change feedback to red

//BLUE Q & A

///you can replace much of your code by refactoring: you have pretty WET/repetitive code here that can be elegantly condensed.
///Ids and data-attributes are not strictly necessary in your case, although they helped you to write your conditionals. You have question and answer classes, but they are on the things that contain the answers. Switching the individual answers to have the answer class, along with encapsulating your data in javascript, will allow you radically refactor your code.

/*
You can make these improvements and then do something like this to cut your LOC by 90%:

$("button").click(function(){
  if ( $(this).attr("data-answer") == "correct" ){
    $(this).find(".feedback").css("background-color", "green");
  } else {
    $(this).find(".feedback").css("background-color", "red");
  }
  score++;
})
*/

$("#bA1").click(function(){
  if (blueA1 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA2").click(function(){
  if (blueA2 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA3").click(function(){
  if (blueA3 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

$("#bA4").click(function(){
  if (blueA4 == blueQ1) {
    $("#blueFb").css("background-color", "green");
  } else {
    $("#blueFb").css("background-color", "red");
  }
});

//PINK Q&A

$("#pA1").click(function(){
  if (pinkA1 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA2").click(function(){
  if (pinkA2 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA3").click(function(){
  if (pinkA3 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

$("#pA4").click(function(){
  if (pinkA4 == pinkQ1) {
    $("#pinkFb").css("background-color", "green");
  } else {
    $("#pinkFb").css("background-color", "red");
  }
});

//YELLOW Q&A

$("#yA4").click(function(){
  if (yellowA4 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA1").click(function(){
  if (yellowA1 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA2").click(function(){
  if (yellowA2 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA3").click(function(){
  if (yellowA3 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

$("#yA4").click(function(){
  if (yellowA4 == yellowQ1) {
    $("#yellowFb").css("background-color", "green");
  } else {
    $("#yellowFb").css("background-color", "red");
  }
});

//BROWN Q&A

$("#brA4").click(function(){
  if (brownA4 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA1").click(function(){
  if (brownA1 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA2").click(function(){
  if (brownA2 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA3").click(function(){
  if (brownA3 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

$("#brA4").click(function(){
  if (brownA4 == brownQ1) {
    $("#brownFb").css("background-color", "green");
  } else {
    $("#brownFb").css("background-color", "red");
  }
});

//PURPLE Q&A

$("#puA1").click(function(){
  if (purpleA1 == purpleQ1) {
    $("#purpleFb").css("background-color", "green");
  } else {
    $("#purpleFb").css("background-color", "red");
  }
});

$("#puA2").click(function(){
  if (purpleA2 == purpleQ1) {
    $("#purpleFb").css("background-color", "green");
  } else {
    $("#purpleFb").css("background-color", "red");
  }
});

$("#puA3").click(function(){
  if (purpleA3 == purpleQ1) {
    $("#purpleFb").css("background-color", "green");
  } else {
    $("#purpleFb").css("background-color", "red");
  }
});

$("#puA4").click(function(){
  if (purpleA4 == purpleQ1) {
    $("#purpleFb").css("background-color", "green");
  } else {
    $("#purpleFb").css("background-color", "red");
  }
});

//ORANGE Q&A

$("#oA4").click(function(){
  if (orangeA4 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA1").click(function(){
  if (orangeA1 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA2").click(function(){
  if (orangeA2 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA3").click(function(){
  if (orangeA3 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

$("#oA4").click(function(){
  if (orangeA4 == orangeQ1) {
    $("#orangeFb").css("background-color", "green");
  } else {
    $("#orangeFb").css("background-color", "red");
  }
});

//reloads the page using the "Try Again" button
$("#reload").click(function(){
  location.reload(true);
});



});
