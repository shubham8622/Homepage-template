let bars = document.getElementById("bars");
let mobileNavigation = document.getElementById("mobileNavigation"); 
bars.addEventListener("click",()=>{
(mobileNavigation.classList.contains("active"))?mobileNavigation.classList.remove("active"):mobileNavigation.classList.add("active");
})