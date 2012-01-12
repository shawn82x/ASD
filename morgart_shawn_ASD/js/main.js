// ASD: 12-01: Project 2

// Author: Shawn R. Morgart

//Wait until the DOM is ready.

$(function(){

// GET data from JSON file.
        
        $.ajax({
                url:      'xhr/list.json',
                type:     'GET',
                dataType: 'json',
                success:  function(response){                      
                        for(var i=0, j=response.resContacts.length; i<j; i++){
                                var resCon = response.resContacts[i];
                                $('' +
                                        '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="resid">'+
                                                '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                        '<H1>' + resCon.lname + ', ' + resCon.fname + '</H1>'+
                                                        '<p>' + resCon.street + '</p>'+
                                                        '<p>' + resCon.city + '</p>'+
                                                        '<p>' + resCon.state + '</p>'+
                                                        '<p>' + resCon.zip + '</p>'+
                                                        '<p>' + resCon.phone + '</p>'+
                                                        '<p>' + resCon.email + '</p>'+
                                                '</div>'+
                                        '</div>'
                                ).appendTo('#residPage')
                        };
                },
                error:function(xhr, ajaxOptions, thrownError){
                    alert(xhr.status);
                    alert(thrownError);
                }

        });
        
        
        $.ajax({
                url:      'xhr/list2.xml',
                type:     'GET',
                dataType: 'xml',
                success:  'XMLparser',
                error:    function(xhr, ajaxOptions, thrownError){
                                alert(xhr.status);
                                alert(thrownError);
                }
        });
        
        
        function xmlParser(xml){
                        for(var i=0, j=xml.commClients.length; i<j; i++){
                                var commCl = xml.commClients[i];
                                $( '' +
                                        '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="a" id="resid">' +
                                                '<div data-role="collapsible" data-theme="b" data-collapsed="true">' +
                                                        '<H1>' + 'commCl.lname' + ', ' + 'commCl.fname' + '</H1>' +
                                                        '<p>' + 'commCl.street' + '</p>' +
                                                        '<p>' + 'commCl.zip' + '</p>' +
                                                '</div>' +
                                        '</div>'
                                ).appendTo('#commPage')
                        };

                }
          

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


