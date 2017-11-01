    $(document).ready(function() {
	$( "#cityField" ).keyup(function() {
	  var url = "/getcity?q="+$("#cityField").val();
	  $.getJSON(url,function(data) {
	      var everything;
	      everything = "<ul>";
	      $.each(data, function(i,item) {
		everything += "<li> "+data[i].city;
	      });
	      everything += "</ul>";
	      $("#txtHint").html(everything);
	  })
	  .done(function() { console.log('getJSON request succeeded!'); })
	  .fail(function(jqXHR, textStatus, errorThrown) { 
	    console.log('getJSON request failed! ' + textStatus); 
	    console.log("incoming "+jqXHR.responseText);
	  })
	  .always(function() { console.log('getJSON request ended!');
	  });
	});
	$("#weatherButton").click(function(e) {
	  e.preventDefault();
	  var value = $("#cityField").val();
	  $("#displayCity").text(value);



	  var myurl = "https://api.wunderground.com/api/8567fecc5539ec9a/geolookup/conditions/q/UT/";
	  myurl += value;
	  myurl += ".json";
	  console.log(myurl);
	  $.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(parsed_json) {
	      console.log(parsed_json);
	      var location = parsed_json['location']['city'];
	      var temp_string = parsed_json['current_observation']['temperature_string'];
	      var current_weather = parsed_json['current_observation']['weather'];
	      everything = "<ul>";
	      everything += "<li>Location: "+location;
	      everything += "<li>Temperature: "+temp_string;
	      everything += "<li>Weather: "+current_weather;
	      everything += "</ul>";
	      $("#weather").html(everything);
	   } 
	  });
	});
	  $("#searchButton").click(function(e) {
	  e.preventDefault();
	  var input = $("#searchStack").val();
	  console.log(input);
	  var myurl = "/getword?w="+input;
	  console.log(myurl);
	  $.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(parsed_json) {
	      console.log(parsed_json);
	      var everything = "<h3> Word:  " + input.toUpperCase() + " </h3>"
	      $.each(parsed_json, function(i,item) {
	      	everything += "<h4> result " + (i+1).toString() + " </h4>";
	      	everything += "<ul>";
			everything += "<li> definition:  "+parsed_json[i].defenition+"</li>";
			example = "";
			if (parsed_json[i].example ==  null)
				example = "";
			else
				example = parsed_json[i].example;

			everything += "<li> example:  "+example+" </li>";
			everything += "<li> type:  "+parsed_json[i].type+" </li>";
			everything += "</ul>"
	        console.log(everything);
	      });
              console.log(everything);	      
              $("#searchResults").html(everything);
	      } 
	  });
	});	
  });
