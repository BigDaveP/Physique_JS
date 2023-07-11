$(document).ready(function() {
    var onUsage = false;
    setInterval(function(){   
        ballphysics($("#ball"))
    }, 10)
    $("#ball").on("mousedown", function(){
        onUsage = true 
        var cursorPosition = {x: -1, y: -1};
        $(document).on("mousemove", function(event){
            var ballPosition = {x: -1, y: -1};
            cursorPosition.x = event.clientX - $("#box").offset().left;
            cursorPosition.y = event.clientY - $("#box").offset().top;
            if(cursorPosition.x < 35){
                cursorPosition.x = 35;
            }
            if(cursorPosition.x > ($("#box").width() - 35)){
                cursorPosition.x = $("#box").width() - 35;
            }
            if(cursorPosition.y < 35){
                cursorPosition.y = 35;
            }
            if(cursorPosition.y > ($("#box").height() - 35)){
                cursorPosition.y = $("#box").height() - 35;
            }
            $("#ball").css("top", cursorPosition.y-35 +"px");
            $("#ball").css("left", cursorPosition.x-35 +"px");
            ballPosition.x = $("#ball").css("left")
            ballPosition.y = $("#ball").css("top")
        });
    });
    $(document).on("mouseup", function(){
        $(document).off("mousemove");
        onUsage = false
    });

    function ballphysics(element){
        if(!onUsage){
            if((parseInt($(element).css("top"))+35) < ($("#box").height() - 35)){
                $(element).css("top", parseInt(element.css("top"))*1.015+"px")
            }
        }
    }

});
