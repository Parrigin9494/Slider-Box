$(document).ready(function(){
    $("#opt1").click(function(){
        $(".area").css("transform", "translate3d(0px, 0px, 0px)"); 
        $("#op1").css("border-right", "4px solid #3881c4");
        $("#op2").css("border-right", "none");
        $("#op3").css("border-right", "none");
    });
    $("#opt2").click(function(){
        $(".area").css("transform", "translate3d(-100%, 0px, 0px)");
        $("#op1").css("border-right", "none");
        $("#op2").css("border-right", "4px solid #3881c4");
        $("#op3").css("border-right", "none");
    });
    $("#opt3").click(function(){
        $(".area").css("transform", "translate3d(-200%, 0px, 0px)");
        $("#op1").css("border-right", "none");
        $("#op2").css("border-right", "none");
        $("#op3").css("border-right", "4px solid #3881c4");
    });
});