
animate(); 
function animate(){
    let tl = gsap.timeline({defaults: {duration:1}, opacity:0}); 
    tl.from(".sign", { x:"-100vw",ease: "power3.out"},0)
    if(window.outerWidth >= 650){
        tl.from(".nav-ul", {y:"-100vh"},0)
        tl.from(".left-info", {opacity:0},0.5)
    }else{
        tl.from(".left-info", {opacity:0, x:"-100vw"},0.5)
    }
    tl.from(".social-img",{y:"-150%", opacity:0, ease:"bounce", stagger:0.1},"<1")
    .from(".right-img", {x:"100vw", ease:"bounce"},0.5)
    .from(".circle-abs", {opacity:0},"<1")
}


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry, index)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show'); 
        }else{
            entry.target.classList.remove('show'); 
        }
    }),
    {
        threshold: 0.5, 
    }
})
const sections = document.querySelectorAll('.fade'); 
sections.forEach(section=>{
    observer.observe(section)
})

const logoObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry, index)=>{
        console.log(index)
        if(entry.isIntersecting){
            entry.target.classList.add('comeToTop'); 
        }else{
            entry.target.classList.remove('comeToTop'); 
        }
    }),
    {
        threshold: 0.5, 
    }
})

const logos = document.querySelectorAll('.small-box'); 
logos.forEach(logo=>{
    logoObserver.observe(logo)

})
