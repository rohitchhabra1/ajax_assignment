$(document).ready(function(){
	
  	$.ajax({
  		type:'GET',
        url: "data.json",
        datatype: 'json',
  	  	success: function(data) {
  	  		var output = "<tr><th>First Name</th><th>Last Name</th><th>DOB</th></tr>";
  	  		for(i in data){
  	 			output += "<tr><td>" + data[i].firstname + "</td><td>" + data[i].lastname + "</td><td>" + data[i].dob + "</td></tr>";
  	  		}
  			$("table").html(output);
  	 	}

  	});
  	
  });