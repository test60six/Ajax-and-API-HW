console.log("test")
  var topics =["guns","dogs","fishing","drums","arnold schwarzenegger"] 
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    


&("#add-gif").on("click"function())

function displaytopics(){

	var gif= $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
}


function renderButtons(){
	$("#gif-view").empty();

	for (var i = 0; i < .length; i++) {
		var a =$("<button>");
		a.addClass("gif");
		a.attr("data-name",topics[i]);
		a.text(topics[i]);

		$("#gif-view").append(a);
	}
}



















function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#button1").empty();

        // Loops through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("movie");
          // Added a data-attribute
          a.attr("data-name", topics[i]);
          // Provided the initial button text
          a.text(topics[i]);
          // Added the button to the buttons-view div
          $("#button1").append(a);
        }
      }






