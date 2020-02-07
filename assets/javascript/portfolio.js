$(".button-primary").on("click", function() {

    $(".button-primary").text("Reach Out");

    $("#bio, #picture").fadeOut("slow", function() {
        $(".hidden1").fadeIn("slow");
    });

    divClone = $("div.work-div").clone(true)

});

    $(".work").on("click", function() {

        $(this).css({"width": "600px", "margin": "30%"})
        $(this).attr("src", $(this).attr("data-attr"));
        $(this).removeClass("work")
        $(this).css("opacity", "1");
        $(".work").hide();
        $(".button-primary").text("Back to Work");
        $(".button-primary").addClass("One");

    })

    $(".One").on("click", function() {

        $(divClone.clone(true)).appendTo(".hidden");
        
    });