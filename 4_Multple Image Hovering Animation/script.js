var elem = document.querySelectorAll(".elem");


elem.forEach(function(val,index){
    val.addEventListener("mouseenter", function(){
        val.childNodes[2].style.opacity = 1;
    });

    val.addEventListener("mouseleave", function(){
        val.childNodes[2].style.opacity = 0;
    });

    val.addEventListener("mousemove", function(dets){
        val.childNodes[2].style.left = dets.x+"px";
        val.childNodes[2].style.top = dets.y-index*120+"px";
});

});