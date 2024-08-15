// Access the elements of DOM
let navBar = document.querySelector('header'); 
let year = document.querySelector('[year]'); 
let bar1 = document.querySelector(".bar1"); 
let bar2 = document.querySelector(".bar2"); 
let bar3 = document.querySelector(".bar3"); 
let navUl = document.querySelector('[nav-ul]'); 
let moreProjects = document.querySelectorAll('[seeMore]'); 
const moreButton = document.querySelector('[see-more-button]'); 

// Global variable creation. 
let prevScroll = window.scrollY; 
let date = new Date(); 
let shown = false; 

year.textContent = date.getFullYear(); 
//Evenet listners. 
window.addEventListener('scroll', handleNav); 


// functions. 
function handleNav(){
    let curScroll = window.scrollY; 

    if(curScroll > prevScroll){
        navBar.classList.remove('show'); 
    }else{
        navBar.classList.add('show'); 
        if(curScroll ==0){
            navBar.style.backgroundColor = "rgba(2,2,2,0.2)"; 
        }else{
            navBar.style.backgroundColor = "rgba(2,2,2,0.9)"; 
        }
    }
    prevScroll = curScroll; 
}


function displayNav(){
    if(!shown){
        shown = true; 
        navUl.classList.add("active"); 
        bar2.classList.add("hide-Bar"); 
        bar1.classList.add("bar-rotate-1"); 
        bar3.classList.add("bar-rotate-3"); 
    }else{
        shown = false; 
        navUl.classList.remove("active"); 
        bar2.classList.remove("hide-Bar"); 
        bar1.classList.remove("bar-rotate-1"); 
        bar3.classList.remove("bar-rotate-3"); 
    }
}

function loadProjects(){
    moreButton.style.display = "none"; 
    moreProjects.forEach((project)=>{
        project.style.display = "block"; 
    })
}
