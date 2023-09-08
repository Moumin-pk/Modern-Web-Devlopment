const scroll = new LocomotiveScroll({
    el: document.querySelector('#main '),
    smooth: true
});

var scrol = document.querySelector('#scrol');

window.addEventListener('mousemove',function(dets){
   scrol.style.left = dets.x + "px";
   scrol.style.top = dets.y + "px";
})