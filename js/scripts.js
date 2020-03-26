$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var age = parseInt($("input#age").val());
    var music = $("#music").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var personType = $("input:radio[name=time]:checked").val();
    var color = $("#color").val();

    


  if (age < 18) {
    alert("Sorry! All our celebrity options are too old for you!")
  } else if ((music === "Country" || music === "Classic music") && (color === "Red" || color === "Blue" || color === "Purple" || color === "Orange")) {
    $("#gaga").show();
  } else if ((music === "Techno" || music === "Rap") && (color === "Black" || color === "Orange" || color === "Yellow" || color == "Red")) {
    $("#biber").show();
  } else if ((music === "Classic music" || music === "Techno") && color === "Blue" || color === "Yellow" || color === "Red" || color === "Purple" ){
    $("#beyonce").show();
  } else {
    $("#hutcherson").show();
  }


  event.preventDefault();
  });
});