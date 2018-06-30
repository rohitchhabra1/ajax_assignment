$(document).ready(function(){
	$("table").append("<tr><th>First Name</th><th>Last Name</th><th>DOB</th><tr>");
  	$.ajax({
  		type:'GET',
        url: "data.json",
        datatype: 'json',
  	  	success: function(data) {
  	  		for(i in data){
  	 			$("table").append("<tr><td>"+data[i].firstname+"</td><td>"+data[i].lastname+"</td><td>"+data[i].dob+"</td></tr>");
  	  		}
  	 	}
  	});
  });