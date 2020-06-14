
getFoodData()
var num = 0
function getFoodData() {
$.get("/api/recents", function(userFooddb) {

    }).then(function(response) {
        console.log(response);

        // Creating a div to hold the new card
        var foodCard = $("<div class='card'>");
        var cardContent = $("<div class='card-content'>");
        var media = $("<div class='media'>")
        var mediacontent = $("<div class='media-content'>")
        // Storing the food name data
        var namefood = response[num].foodName;
        //console.log(foodname)
        // Creating an element to have the rating displayed
        var pOne = $("<p class='title is-8'>").text(namefood);

        var resturant = response[num].resturantName
        var foodnotes = response[num].foodNote

        var pTwo = $("<p class='title is-6'>").text(resturant)
        var foodnotes = $("<div class='content'>").text(foodnotes)


        console.log(resturant)
        foodCard.append(cardContent);
        cardContent.append(media);
        media.append(mediacontent);
        mediacontent.append(pOne);
        mediacontent.append(pTwo);
        cardContent.append(foodnotes);

        if (num <= response.length - 1){
             num ++
        }
        getFoodData()
       
       
        
        $("#cardholder").prepend(foodCard);
    });
}