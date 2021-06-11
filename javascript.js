$("document").ready(function(){
    
    $("#1").on("click", function() {
        // Increase the size of hsk1.
        $("#hsk1").animate({height:"+=20px", width:"+=20px"}, "fast");
        // decrease size of hsk2
        $("#hsk2").animate({height:"-=20px", width:"-=20px"}, "fast");
    })
    $("#2").on("click", function() {
        //decrease size of hsk1
        $("#hsk1").animate({height:"-=20px", width:"-=20px"}, "fast");
        //increase size of hsk2
        $("#hsk2").animate({height:"+=20px", width:"+=20px"}, "fast");
    })

})
$("#reset").on("click", function() {
    $("#hsk1").animate({height:"100px", width:"100px"}, "fast");
    $("#hsk2").animate({height:"100px", width:"100px"}, "fast");
})
