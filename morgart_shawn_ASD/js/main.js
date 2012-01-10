// ASD: 12-01: Project 2

// Author: Shawn R. Morgart

//Wait until the DOM is ready.

$(function(){
        
        $.ajax({
                url:      'xhr/list.php',
                type:     'GET',
                dataType: 'json',
                success:  function(response){                                                                                    
                        for(var i=0, j=response.resiContacts.length; i<j; i++){
                                var resiCon = response.resiContacts[i];
                                $('' +
                                        '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="a" id="resid">'+
                                                '<div data-role="collapsible" data-theme="b" data-collapsed="true">'+
                                                        '<H1>' + resiCon.lname + ', ' + resiContacts.fname + '</H1>'+
                                                        '<p>' + resiCon.street + '</p>'+
                                                        '<p>' + resiCon.city + '</p>'+
                                                        '<p>' + resiCon.state + '</p>'+
                                                        '<p>' + resiCon.zip + '</p>'+
                                                        '<p>' + resiCon.phone + '</p>'+
                                                        '<p>' + resiCon.email + '</p>'+
                                                '</div>'+
                                        '</div>'
                                ).appendTo('#residPage')
                        };
                }
        });

        // Form Validation for "General Data" tab on "Add New Client" page.

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
        
                submitHandler: function(){
                    var data = clform.serializeArray();
                    parseClientform(data);
                }
        
        });
    
});


