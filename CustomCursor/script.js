var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
  })
})

imageDiv.addEventListener("mouseenter",function(){
  cursor.innerHTML="🡢"
  gsap.to(cursor,{
    scale:5,
    backgroundColor:"rgba(0, 0, 0, 0.5)",
  })
})

imageDiv.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#fff",
  })
})