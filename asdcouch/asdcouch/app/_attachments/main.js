$(function(){
	
	$CouchApp(function(app) {
		app.loggedInNow(function(login) {
			var postForm = app.docForm("form#new-post", {
				id : document.location.hash.replace('#',''),
				fields : ["title", "body"],
				template : {
					type : "post",
					format : "markdown",
					author : login
				},
				onLoad : function(doc) {
					if (doc._id) {
						$('h1').html('Editing #<a href="post.html#'+doc._id+'">'+doc._id+'</a>');
						B.setupDeleteHandler(postForm);
					}
					$('label[for=body]').append(' <em>with '+(doc.format||'html')+'</em>');
				},
				beforeSave : B.preparePostForSave,
				success : function(resp) {
					$("#saved").text("Saved _rev: "+resp.rev).fadeIn(500).fadeOut(3000);
					$('h1').html('Editing #<a href="post.html#'+resp.id+'">'+resp.id+'</a>');
				}
			}); function() {
				B.redirectToLoginPage();
			};
		});
	});

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
							$('' + '<div>' +
	                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="com">'+
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
			                                           '<div data-role="fieldcontain">' +
			                                				'<div class="ui-grid-a">' +
			                                			    	'<div class="ui-block-a"><input type="submit" value="Edit Client" data-theme="a" id="savecl"/></div>' +
			                                			    	'<div class="ui-block-b"></div>' +
			                                			    '</div>' +
			                                			'</div>' +
			                                '</div>' +
	                                 '</div>' +
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
	                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="com">'+
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
			                                            '<div data-role="fieldcontain">' +
			                                				'<div class="ui-grid-a">' +
			                                			    	'<div class="ui-block-a"><input type="submit" value="Edit Client" data-theme="a" id="savecl"/></div>' +
			                                			    	'<div class="ui-block-b"></div>' +
			                                			    '</div>' +
			                                			'</div>' +
	                                        '</div>'+
	                                '</div>'
	                        )
					);
				});
				$('#commPage').listview('refresh');
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
	                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="com">'+
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
			                                            '<div data-role="fieldcontain">' +
			                                				'<div class="ui-grid-a">' +
			                                			    	'<div class="ui-block-a"><input type="submit" value="Edit Client" data-theme="a" id="savecl"/></div>' +
			                                			    	'<div class="ui-block-b"></div>' +
			                                			    '</div>' +
			                                			'</div>' +
	                                        '</div>'+
	                                '</div>'
	                        )
					);
				});
				$('#firePage').listview('refresh');
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
	                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="com">'+
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
			                                            '<div data-role="fieldcontain">' +
			                                				'<div class="ui-grid-a">' +
			                                			    	'<div class="ui-block-a"><input type="submit" value="Edit Client" data-theme="a" id="savecl"/></div>' +
			                                			    	'<div class="ui-block-b"></div>' +
			                                			    '</div>' +
			                                			'</div>' +
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
	                                '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="com">'+
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
			                                            '<div data-role="fieldcontain">' +
			                                				'<div class="ui-grid-a">' +
			                                			    	'<div class="ui-block-a"><input type="submit" value="Edit Client" data-theme="a" id="savecl"/></div>' +
			                                			    	'<div class="ui-block-b"></div>' +
			                                			    '</div>' +
			                                			'</div>' +
	                                        '</div>'+
	                                '</div>'
	                        )
					);
				});
				$('#potePage').listview('refresh');
			}
		});

// form validation
/*
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
		});
		

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
});

