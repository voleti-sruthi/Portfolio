const ham = document.getElementsByClassName("ham")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuList = document.getElementsByClassName("menu-item");
var i;
function dropDown(){
    ham.classList.toggle("active");
    menu.classList.toggle("active");
    document.getElementsByClassName("dispbody")[0].classList.toggle("hidemain");
}
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click",() =>{
    ham.classList.remove("active");
    menu.classList.remove("active");
}
))

const gallery = document.querySelector(".projectsSpace");
const itemboxes = document.querySelectorAll(".itembox");

gallery.addEventListener("click",(e)=>{
    if(e.target.classList.contains("filter")){
        gallery.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const filterValue = e.target.getAttribute("data-filter");

        itemboxes.forEach(item => {
            if(item.classList.contains(filterValue) || filterValue == "all"){
                item.classList.add("show");
                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            }
        })
    }
})