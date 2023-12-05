const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




function preloader(){
  var tl = gsap.timeline()

  tl.to("#preloader",{
    y:-1000,
    duration:2
  })

  tl.from("#page1 > #face1 > #display",{
    opacity:0,
    duration:0.5
  })
  
  tl.from("#page1 > #face1 > #display > #display1 > h1, #page1 > #face1 > #display > #display1 > p",{
      width:0,
      opacity:0.8,
      duration:0.7,
      stagger:0.3
  })
  
  tl.from("#page1 > #face1 > #display > #display1 > button",{
    y:-30,
    opacity:0,
    duration:0.5,
  })
  
  tl.from("#page1 > #face1 > #display > #display2 > img",{
    scale:1.3,
    opacity:0,
    duration:0.8,
  })

  gsap.to("#page3 > #sale > p",{
    transform: "translateX(-367%)",
    duration:100,
    repeat:-1,
    yoyo:true
  })

}






var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    start:"0% 90%",
    end:"50% 50%",
    scrub:2
  }
})

tl1.to("#page1 > #face1 > #display > #display2 > img",{
    top:"200%",
    rotate:"10deg"
}, "lorep")

// tl1.from("#page2 > #face2",{
//   opacity:0,
//   duration:0.5
// }, "lorep")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    start:"0% 90%",
    end:"50% 50%",
    scrub:1
  }
})

tl2.to("#page1 > #face1 > #display > #display2 > img",{
    top:"445%",
    rotate:"0deg",
    scale:0.7
})




var cursor = document.querySelector("#cursor");
var cursor2 = document.querySelector("#cursor2");
var cursor3 = document.querySelector("#cursor3");



var display1 = document.querySelector(".display1");
var display2 = document.querySelector(".display2");
var page4 = document.querySelector("#page4");
var face5 = document.querySelector("#face5");




display1.addEventListener("mouseenter", function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
  })
})

display1.addEventListener("mouseleave", function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})

display1.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    top:dets.y,
    left:dets.x
  })
})



display2.addEventListener("mouseenter", function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
  })
})

display2.addEventListener("mouseleave", function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})

display2.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    top:dets.y,
    left:dets.x
  })
})



page4.addEventListener("mouseenter", function(){
  gsap.to(cursor2,{
    scale:1,
    opacity:1
  })
})

page4.addEventListener("mouseleave", function(){
  gsap.to(cursor2,{
    scale:0,
    opacity:0
  })
})

page4.addEventListener("mousemove", function(dets){
  gsap.to(cursor2,{
    top:dets.y,
    left:dets.x
  })
})




face5.addEventListener("mouseenter", function(){
  gsap.to(cursor3,{
    scale:1,
    opacity:1
  })
})

face5.addEventListener("mouseleave", function(){
  gsap.to(cursor3,{
    scale:0,
    opacity:0
  })
})

face5.addEventListener("mousemove", function(dets){
  gsap.to(cursor3,{
    top:dets.y-70,
    left:dets.x-60
  })
})





var videoBox = document.querySelector("#display5");
var video = document.querySelector("#video");
var videoButton = document.querySelector("#cursor3");

videoBox.addEventListener("mouseenter", function(){
  gsap.to(video,{
    opacity:1,
    duration:1.5
  })
  video.play();
});

videoButton.addEventListener("click", videoToggle);
video.addEventListener("click", videoToggle);


function videoToggle(){

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
