$(document).ready(function() {
	$.ajax({
		"url": '/sales_college_pbdb/_all_docs?include_docs=true&start_key="res:"&end_key="res:zzzzz"',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.doc.accType;
				var fname   = com.doc.fname;
				var lname   = com.doc.lname;
				var street  = com.doc.street;
				var city    = com.doc.city;
				var state   = com.doc.state;
				var zip     = com.doc.zip;
				var phone   = com.doc.phone;
				var email   = com.doc.email;
				$('#reslist').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="resid">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
		                                                '<li>' + "Street:" + street + '</li>'+
		                                                '<li>' + "City:" + city + '</li>'+
		                                                '<li>' + "State:" + state + '</li>'+
		                                                '<li>' + "Zip:" + zip + '</li>'+
		                                                '<li>' + "Phone:" + phone + '</li>'+
		                                                '<li>' + "Email:" + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#reslist').listview('refresh');
		}
	});
	
	
	
	$.ajax({
		"url": '/sales_college_pbdb/_all_docs?include_docs=true&start_key="com:"&end_key="com:zzzzz"',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.doc.accType;
				var fname   = com.doc.fname;
				var lname   = com.doc.lname;
				var street  = com.doc.street;
				var city    = com.doc.city;
				var state   = com.doc.state;
				var zip     = com.doc.zip;
				var phone   = com.doc.phone;
				var email   = com.doc.email;
				$('#comlist').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="resid">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
		                                                '<li>' + "Street:" + street + '</li>'+
		                                                '<li>' + "City:" + city + '</li>'+
		                                                '<li>' + "State:" + state + '</li>'+
		                                                '<li>' + "Zip:" + zip + '</li>'+
		                                                '<li>' + "Phone:" + phone + '</li>'+
		                                                '<li>' + "Email:" + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#comlist').listview('refresh');
		}
	});
	
	
	
	$.ajax({
		"url": '/sales_college_pbdb/_all_docs?include_docs=true&start_key="fir:"&end_key="fir:zzzzz"',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.doc.accType;
				var fname   = com.doc.fname;
				var lname   = com.doc.lname;
				var street  = com.doc.street;
				var city    = com.doc.city;
				var state   = com.doc.state;
				var zip     = com.doc.zip;
				var phone   = com.doc.phone;
				var email   = com.doc.email;
				$('#firlist').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="resid">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
		                                                '<li>' + "Street:" + street + '</li>'+
		                                                '<li>' + "City:" + city + '</li>'+
		                                                '<li>' + "State:" + state + '</li>'+
		                                                '<li>' + "Zip:" + zip + '</li>'+
		                                                '<li>' + "Phone:" + phone + '</li>'+
		                                                '<li>' + "Email:" + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#firlist').listview('refresh');
		}
	});
	
});

