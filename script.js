const words = [
"Registered Patent Agent",
"Patent Drafting Expert",
"IP Consultant",
"Patent Filing Specialist"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.querySelector(".typing").textContent = currentWord.substring(0,j);

if(!isDeleting && j===currentWord.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){
i=0;
}

}

setTimeout(type,isDeleting?60:120);

}

type();

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".section").forEach(section=>{

observer.observe(section);

});

const menu=document.querySelector(".menu");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});
