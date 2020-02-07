$(".button-primary").on("click", function() {

    $(".button-primary").text("Reach Out");
    $("#bio, #picture").fadeOut("slow", function() {
        $("#test").fadeIn("slow");

    });

});