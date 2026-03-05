var initialpath = `M 10 100 Q 250 100 1260 100`

var finalpath = `M 10 100 Q 250 100 1260 100`

var string = document.querySelector('#string')

string.addEventListener(`mousemove`, function (dets) {
  initialpath = `M 10 100 Q ${dets.x} ${dets.y} 1260 100`

  gsap.to("svg path", {
    attr: { d: initialpath },
    duration: 0.2,
    ease: "power3.out"
  })
})

string.addEventListener('mouseleave',function(){
  gsap.to("svg path", {
    attr: { d: finalpath },
    duration: 2,
    ease: "elastic.out(1,0.2)"
  })
})


gsap.to(".page2 h1",{
  transform:"translateX(-400%)",
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 0%",
    end:"top -150%",
    scrub:3,
    pin:true,
  }
})
