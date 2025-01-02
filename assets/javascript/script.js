const bar = document.querySelector("#bar");
const nav = document.querySelector("#menu-items");
const cross = document.querySelector("#cross");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.toggle('active');
    })
}
cross.addEventListener("click",()=>{
    nav.classList.toggle("active");
})
