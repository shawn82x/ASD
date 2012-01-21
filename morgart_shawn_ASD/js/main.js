// ASD: 12-01: Project 2

// Author: Shawn R. Morgart

//Wait until the DOM is ready.

$(function(){

// GET data from JSON file.
        
/*        $.ajax({
                url:      '127.0.0.1:5984/sales_college_pbdb/_all_docs?include_docs=true&start_key="com:"&end_key="com:zzzzz"',
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
        
                success: function(data) {
                        $.each(data.rows, function(index, com){
                            var accType = com.doc.accType;
                            var fname   = com.doc.fname;
                            var lname   = com.doc.lname;
                            var street  = com.doc.street;
                            var city    = com.doc.city;
                            var zip     = com.doc.zip;
                            var phone   = com.doc.phone;
                            var email   = com.doc.email;
                            $('#residPage').append(
                                    $('<li>').append(
                                            $('<a>').attr("href", "#").text(lname + " ," + fname)
                                    )
                            );
                        });
                $('#programlist').listview('refresh');
                },

        });
*/        
// Parse XML data.

        $.ajax({
                url:      'xhr/list2.xml',
                type:     'GET',
                dataType: 'xml',
                success:  function (response){
                        $(response).find("client").each(function(){
                                $('' +
                                        '<div data-role="listview" data-inset="true" data-theme="b" data-count-theme="a" id="resid">' +
                                                '<div data-role="collapsible" data-theme="b" data-collapsed="true">' +
                                                        '<H1>' + $(this).find("lname").text() + ', ' + $(this).find("fname").text() + '<H1>' +
                                                '</div>' +
                                        '</div>'
                                ).appendTo('#commPage')
                        });
                }
        });
        
        
        
// CSV data.
        $.ajax({
                type:      'GET', 
                url:       'xhr/list3.csv', 
                dataType:  'text', 
                success:   function(text) {
                        var fields = text.split(/\n/);
                                fields.pop(fields.length-1); 
                        var headers = fields[0].split(','),
                                html = '<table>'; html += '<tr>';
                        
                        for(var i = 0; i < headers.length; i += 1) { 
                                html += '<th scope="col">' + headers[i] + '</th>'; 
                        } 
                        
                        html += '</tr>'; 
                        
                        var data = fields.slice(1, fields.length); 
                        
                        for(var j = 0; j < data.length; j += 1) { 
                                var dataFields = data[j].split(','); 
                                html += '<tr>'; 
                                html += '<td>' + dataFields[0] + '</td>'; 
                                html += '<td>' + dataFields[1] + '</td>'; 
                                html += '<td>' + dataFields[2] + '</td>'; 
                                html += '</tr>'; 
                        } 
                        
                        html += '</table>'; 
                        
                        $(html).appendTo('#firePage');
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


