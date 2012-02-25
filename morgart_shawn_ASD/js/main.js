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
                        for(var i=0, j=response.savedContacts.length; i<j; i++){
                                var savedClients = response.savedContacts[i];
                                $('' +
                                        '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="c" id="resid">'+
                                                '<div data-role="collapsible" data-theme="a" data-collapsed="true">'+
                                                        '<H1>' + savedClients.lname + ', ' + savedClients.fname + '</H1>'+
                                                        '<p>' + savedClients.street + '</p>'+
                                                        '<p>' + savedClients.city + '</p>'+
                                                        '<p>' + savedClients.state + '</p>'+
                                                        '<p>' + savedClients.zip + '</p>'+
                                                        '<p>' + savedClients.phone + '</p>'+
                                                        '<p>' + savedClients.email + '</p>'+
                                                '</div>'+
                                        '</div>'
                                ).appendTo('#savedPage')
                        };
                        $('#programlist').listview('refresh');
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
        
        $('#newclientform').submit(function(){
                var obj = {};
                obj.lname = 'lname';
                obj.fname = 'fname';
                obj.street = 'street';
                obj.city = 'city';
                obj.state = 'state';
                obj.zip = 'zip';
                obj.phone = 'phone';
                obj.email = 'email';
                
                obj.repStyle = 'repStyle';
                
                obj.direction = 'direction';
                obj.source = 'source';
                obj.reason = 'reason';
                obj.level = 'level';
                obj.scope = 'scope';
                obj.change = 'change';
                
                obj.channel = 'channel';
                
                obj.convincers = 'convincers';
                
                obj.theor = 'theor';
                obj.util = 'util';
                obj.aesth = 'aesth';
                obj.soci = 'soci';
                obj.indiv = 'indiv';
                obj.trad = 'trad';
                
                obj.socStyle = 'socStyle';
                
                obj.dom = 'dom';
                obj.inf = 'inf';
                obj.stead = 'stead';
                obj.comp = 'comp';
                
                obj.textarea = 'textarea';
                
                alert('Submit Client?');
                return false;

        });
    
});


