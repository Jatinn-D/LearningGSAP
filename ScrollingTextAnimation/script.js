function scrolltextanimation(){
  window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translate(-200%)",
      repeat: -1,
      ease: "none",
      duration: 2,
    })
    gsap.to(".marque img",{
      rotate: 180,
    })
  } else {
    gsap.to(".marque", {
      transform: "translate(0%)",
      repeat: -1,
      ease: "none",
      duration: 2,
    })
    gsap.to(".marque img",{
      rotate: 0,
    })
  }
})

}
scrolltextanimation();
