$(document).ready(function() {
	
// Display Residential Data	
	$.ajax({
		"url": '_view/residential',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.value.accType;
				var fname   = com.value.fname;
				var lname   = com.value.lname;
				var street  = com.value.street;
				var city    = com.value.city;
				var state   = com.value.state;
				var zip     = com.value.zip;
				var phone   = com.value.phone;
				var email   = com.value.email;
				$('#residPage').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="resid">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
		                                                '<li>' + "Street:" + " " + street + '</li>'+
		                                                '<li>' + "City:" + " " + city + '</li>'+
		                                                '<li>' + "State:" + " " + state + '</li>'+
		                                                '<li>' + "Zip:" + " " + zip + '</li>'+
		                                                '<li>' + "Phone:" + " " + phone + '</li>'+
		                                                '<li>' + "Email:" + " " + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#residPage').listview('refresh');
		}
	});
	
	
// Display Commercial Data
	$.ajax({
		"url": '_view/commercial',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.value.accType;
				var fname   = com.value.fname;
				var lname   = com.value.lname;
				var street  = com.value.street;
				var city    = com.value.city;
				var state   = com.value.state;
				var zip     = com.value.zip;
				var phone   = com.value.phone;
				var email   = com.value.email;
				$('#commPage').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="commer">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
	                                                	'<li>' + "Street:" + " " + street + '</li>'+
		                                                '<li>' + "City:" + " " + city + '</li>'+
		                                                '<li>' + "State:" + " " + state + '</li>'+
		                                                '<li>' + "Zip:" + " " + zip + '</li>'+
		                                                '<li>' + "Phone:" + " " + phone + '</li>'+
		                                                '<li>' + "Email:" + " " + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#comlist').listview('refresh');
		}
	});
	
	
// Display Fire Monitoring Data
	$.ajax({
		"url": '_view/fire',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.value.accType;
				var fname   = com.value.fname;
				var lname   = com.value.lname;
				var street  = com.value.street;
				var city    = com.value.city;
				var state   = com.value.state;
				var zip     = com.value.zip;
				var phone   = com.value.phone;
				var email   = com.value.email;
				$('#firePage').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="firemon">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
	                                                	'<li>' + "Street:" + " " + street + '</li>'+
		                                                '<li>' + "City:" + " " + city + '</li>'+
		                                                '<li>' + "State:" + " " + state + '</li>'+
		                                                '<li>' + "Zip:" + " " + zip + '</li>'+
		                                                '<li>' + "Phone:" + " " + phone + '</li>'+
		                                                '<li>' + "Email:" + " " + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#firlist').listview('refresh');
		}
	});
	
// Display Medical Alert Data
	$.ajax({
		"url": '_view/medical',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.value.accType;
				var fname   = com.value.fname;
				var lname   = com.value.lname;
				var street  = com.value.street;
				var city    = com.value.city;
				var state   = com.value.state;
				var zip     = com.value.zip;
				var phone   = com.value.phone;
				var email   = com.value.email;
				$('#mediPage').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="medialert">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
	                                                	'<li>' + "Street:" + " " + street + '</li>'+
		                                                '<li>' + "City:" + " " + city + '</li>'+
		                                                '<li>' + "State:" + " " + state + '</li>'+
		                                                '<li>' + "Zip:" + " " + zip + '</li>'+
		                                                '<li>' + "Phone:" + " " + phone + '</li>'+
		                                                '<li>' + "Email:" + " " + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#mediPage').listview('refresh');
		}
	});
	
// Display TakeOver Data
	$.ajax({
		"url": '_view/takeover',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, com){
				var accType = com.value.accType;
				var fname   = com.value.fname;
				var lname   = com.value.lname;
				var street  = com.value.street;
				var city    = com.value.city;
				var state   = com.value.state;
				var zip     = com.value.zip;
				var phone   = com.value.phone;
				var email   = com.value.email;
				$('#potePage').append(
						$('' +
								'<div>' +
                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="takeov">'+
                                        '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                '<H2>' + lname + ', ' + fname + '</H2>'+
                                                	'<ul>' +
	                                                	'<li>' + "Street:" + " " + street + '</li>'+
		                                                '<li>' + "City:" + " " + city + '</li>'+
		                                                '<li>' + "State:" + " " + state + '</li>'+
		                                                '<li>' + "Zip:" + " " + zip + '</li>'+
		                                                '<li>' + "Phone:" + " " + phone + '</li>'+
		                                                '<li>' + "Email:" + " " + email + '</li>'+
		                                            '</ul>' +
                                        '</div>'+
                                '</div>'
                        )
				);
			});
			$('#potePage').listview('refresh');
		}
	});

// form validation
	$("#newclientform").validate({
		   rules: {
		     // simple rule, converted to {required:true}
		     name: "required",
		     // compound rule
		     email: {
		       required: true,
		       email: true
		     }
		   }
		})
/*
	var clform = $('#newclientform'),
    clerrorslink = $('#clerrorslink');
    
	clform.validate({
	        invalidHandler: function(form, validator){
	                clerrorslink.bind('click', function(){
	                        return false;
	                });
	                
	                var html = '';
	            
	                for(var key in validator.submitted){
	                        var label = $('label[for^="'+ key +'"]').not('[generated]');
	                        var legend = label.closest('fieldset').find('.ui-controlgroup-label');
	                        var fieldName = legend.length ? legend.text() : label.text();
	                        html += '<li>'+ fieldName +'</li>';
	                };
	        
	                $("#newclienterrors ul").html(html);
	        },
	
	        submitHandler: function(form, validator){
	            var data = clform.serializeArray();
	            parseClientform(data);
	        }
	
	});
*/
	
// end	
});

