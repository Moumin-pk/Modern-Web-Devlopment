const scroll = new LocomotiveScroll({
    el: document.querySelector('#main '),
    smooth: true
});

var scrol = document.querySelector('#scrol');

window.addEventListener('mousemove',function(dets){
    xscale = gsap.utils.clamp(0.8,1.2,ydiff);
    yscale = gsap.utils.clamp(0.8,1.2,xdiff);

   scrol.style.left = dets.x + "px" ;
   scrol.style.top = dets.y + "px" ;
   scrol.style.transform = `scale(${xscale},${ yscale})`;

   
   var xprev = 0;
   var yprev = 0;

   var xdiff = dets.clientX - xprev;
   var ydiff = dets.clientY - yprev;

   var xprev = dets.clientX;
   var yprev = dets.clientY;
   
})



function firstPageAnim(){
    var tI = gsap.timeline();

    tI.from('#nav',{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease : Expo.easeInOut
    })
    .to('.boundingelem',{
        y: '0',  // Axis
        duration: 2, // Duration
        Stager: .2, // For Delay
        delay: -1,
        ease : Expo.easeInOut // Animation
    })
    .from('#herofooter',{
        y: '-10',
        opacity: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut

    })
}
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });