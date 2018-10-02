$(function () {

    $("#addBurger").on("click", function (event) {
        event.preventDefault();

        var addBurger = {burger_name: $("#textInput").val().trim(), devoured: false}



        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(
            function () {
        
                location.reload();
            }
        );
    });



    $(".eatMe").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var eatMe = $(this).data("devoured");

        var eatMeState = {
            devoured: eatMe,
        };
      
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatMeState
        }).then(
            function () {
                console.log("changed devoured to", eatMeState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });






});




























// $(function () {
//     $(".change-devoured").on("click", function (event) {
//         var id = $(this).data("id");
//         var newDevour = $(this).data("devoured");

//         var newDevourState = {
//             devoured: newDevour
//         };

//         // Send the PUT request.
//         $.ajax("/api/burger/" + id, {
//             type: "PUT",
//             data: newDevourState
//         }).then(
//             function () {
//                 console.log("YUM YUM", newDevour);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });

//     $("#addBgr").on("click", function (event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();

//         var newBurger = {
//             name: $("#bgr").val().trim(),
//         };


//         // Send the POST request.
//         $.ajax("/api/burger", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function () {
//                 console.log("added new burger");

//                 location.reload();
//             }
//         );
//     });
// });