 // $(function() {
 //  $(".change-sleep").on("click", function(event) {
 //    var id = $(this).data("id");
 //    var newSleep = $(this).data("newsleep");

 //    var newSleepState = {
 //      sleepy: newSleep
 //    };

 //    // Send the PUT request.
 //    $.ajax("/api/cats/" + id, {
 //      type: "PUT",
 //      data: newSleepState
 //    }).then(
 //      function() {
 //        console.log("changed sleep to", newSleep);
 //        // Reload the page to get the updated list
 //        location.reload();
 //      }
 //    );
 //  }); 


$(function(){

  $(".create-form").on("submit", function(event) {

      event.preventDefault();

      var newBurger = {
        burger_name: $("#burg").val().trim(),

      };

      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
      function() {
        console.log("created new burger");

          location.reload();
        }
        );
    });


  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var ifEaten = $(this).data("ifeaten");

    var newEatenStatus = {
      devoured: ifEaten
    };

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "POST",
      data: newEatenStatus
    }).then(
      function() {
        console.log("changed status to", ifEaten);
        // Reload the page to get the updated list

        location.reload();
      }
    );
  });




});