console.log("test")
  var topics =["guns","dogs","fishing","drums","arnold schwarzenegger"] 
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    


$("#add-gif").on("click",function(){




	var gif= $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q='+buttonText+'&limit10&api_key=dc6zaTOxFJmzC";
	
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });


})
function renderButtons(){
	$("#gif-view").empty();

	for (var i = 0; i < topics.length; i++) {
		var a =$("<button>");
		a.addClass("gif");
		a.attr("data-name",topics[i]);
		a.text(topics[i]);

		$("#gif-view").append(a);
	}
}

$("#add-gif").on("click",function(event){
	event.preventDefault();
	var g = $("#input").val().trim();
	topics.push(g);

	renderButtons();

})


















      






