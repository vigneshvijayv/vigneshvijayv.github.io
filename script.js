$(document).ready(function(){
    $("#loginpage").validate({
        rules:{
            phone:{
                required:true,
                minlength:6
            },
            passbox:{
                required:true,
                minlength:4
            }
        },
        message:{
            phone:"enter minimum number"
        }
    })
})