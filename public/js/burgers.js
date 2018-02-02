






$(function() {


anime.timeline({loop: true})
  .add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 700,
    offset: '-=50'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 20,
  easing: "linear",
  loop: true
});



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