$(document).ready(function(){
  	$.ajax({
  		type:'GET',
        url: "data.json",
        datatype: 'json',
  	  	success: function(data) {
  	  		var output = "";
  	  		for(i in data){
  	 			output += "<tr><td>" + data[i].firstname + "</td><td>" + data[i].lastname + "</td><td>" + data[i].dob + "</td></tr>";
  	  		}
  			$("tbody").html(output);
  	 	}
  	});
});