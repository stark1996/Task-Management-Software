$(document).ready(function(){
    var urlRoot = 'http://35.202.86.61/office-management/';
    $(document).on('click','#submitLogin',function(){
        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({ 
            url:urlRoot+'employees/login',
            type:'POST',
            datatype:'JSON',
            data:{'username':username,'password':password},
            success:function(employee){
                console.log('done');
                $(location).attr('href','dashboard.html');
                
            },
            error:function(error){
                console.log(error.responseText);
            } 
        });
    });
    // $(document).on('click','#show',function(){
    //     $.ajax({
    //         async: true,
    //         crossDomain: true,
    //         url:urlRoot+'employees/dashboard/',
    //         method:'GET',
    //         datatype:'JSON',
    //         success:function(data){   
    //             console.log(data);
    //             console.log(data.name);
    //         },
    //         error:function(error){
    //             console.log(error.responseText)
    //         }
    //     });

    // });


});