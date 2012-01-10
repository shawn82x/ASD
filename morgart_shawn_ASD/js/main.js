// ASD: 12-01: Project 2

// Author: Shawn R. Morgart

//Wait until the DOM is ready.

$(function(){
        
        $.ajax({
                url:      'xhr/list.json',
                type:     'GET',
                dataType: 'json',
                success:  function(response){                                                                                    
                        console.log(response);
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


