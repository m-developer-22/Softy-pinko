var flag=true;
document.querySelector("#lines").addEventListener("click",function(){
    if(flag===true)
    {
        document.querySelector("#lines").style.gap=0;
        document.querySelector("#line1").style.rotate="45deg";
        document.querySelector("#line2").style.rotate="-45deg";
        flag=false;
        gsap.to("#linkdata",{
            height:"60vh",
            display:"flex",
            duration:.4,
            onComplete: function(){
                document.querySelectorAll("#linkdata a").forEach(function(elem){
                    elem.style.display="flex";
                })
            }
        })
    }
    else
    {
        document.querySelector("#lines").style.gap="10px";
        document.querySelector("#line1").style.rotate="0deg";
        document.querySelector("#line2").style.rotate="0deg";
        document.querySelectorAll("#linkdata a").forEach(function(elem){
            elem.style.display="none";
        })
        flag=true;
        gsap.to("#linkdata",{
            height:"0vh",
            display:"none",
            duration:.4
        })
    }
})

gsap.from("#card1",{
    scrollTrigger:{
      trigger:`#card1`,
      start:`top 90%`,
    //   markers:true
    },
    opacity:0,
    duration:1,
    ease: Expo.easeInOut,
    y:100,
})
gsap.from("#card2",{
    scrollTrigger:{
      trigger:`#card2`,
      start:`top 90%`,
    //   markers:true
    },
    opacity:0,
    duration:1,
    ease: Expo.easeInOut,
    y:100,
})
gsap.from("#card3",{
    scrollTrigger:{
      trigger:`#card3`,
      start:`top 90%`,
    //   markers:true
    },
    opacity:0,
    duration:1,
    ease: Expo.easeInOut,
    y:100,
})