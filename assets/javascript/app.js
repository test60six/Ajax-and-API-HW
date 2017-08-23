console.log("test")
  var topics =["guns","dogs","fishing","drums","arnold schwarzenegger"] 
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    


$("#gif-view").on("click", ".gif",function(){})

$("#gif-buttons").on("click",".gif-search",function(){
	var buttonText = $(this).text().trim();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+buttonText+"&limit=10&api_key=dc6zaTOxFJmzC";
	
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
    	$("#gif-view").empty();
    	var lean = response.data.length
    	var i=0
    	for (i; i <lean; i++) {
    	
    		var image = $("<img src='"+response.data[i].images.original.url+"'>");
    		$("#gif-view").append(image);
    	}
      console.log(response);
    });







})






function renderButtons(){
	$("#gif-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		var a =$("<button>");
		a.addClass("gif-search");
		a.attr("data-name",topics[i]);
		a.text(topics[i]);

		$("#gif-buttons").append(a);
	}
}

$("#add-gif").on("click",function(event){
	event.preventDefault();
	var g = $("#input").val().trim();
	topics.push(g);

	renderButtons();


	
})


renderButtons();















      






