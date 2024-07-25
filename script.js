let crsr = document.querySelector("#cursor")
let crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(e){
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"

    crsr_blur.style.left = e.x - 200 + "px"
    crsr_blur.style.top = e.y - 200 + "px"
})

let h4all = document.querySelectorAll("#nav h4")

h4all.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    element.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "150px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav", 
        scroller: "body",
        start: "top -15%",
        end: "top -20%",
        scrub: 2
    } 
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -75%",
        scrub: 2
    }
})

gsap.from("#about-us-text, #about-us img", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {        
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3
    }
})

gsap.from("#colon1", {
    y: -70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body", 
        start: "top 55%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body", 
        start: "top 55%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body", 
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})