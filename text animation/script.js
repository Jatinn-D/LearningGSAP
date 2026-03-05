function textbreak(){
  var h1 = document.querySelector("h1")

  var h1text = h1.textContent

  var splitted = h1text.split("")

  var halfvalue = Math.floor(splitted.length/2)

  var empty = ""

  splitted.forEach(function (elem,index) {
    if(index<halfvalue){
      empty += `<span class='left'>${elem}</span>`
    }
    else{
      empty += `<span class='left'>${elem}</span>`
    }
  })
  h1.innerHTML = empty
}

textbreak()

gsap.from(".left",{
  y: 30,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  delay: 0.5,
})

gsap.from(".right",{
  y: 30,
  opacity: 0,
  stagger:-0.15,
  duration: 0.6,
  delay: 0.5,
})