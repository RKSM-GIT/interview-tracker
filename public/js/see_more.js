/****** SEE MORE ******/

const box = document.querySelectorAll(".box");

box.forEach(i => {
  if( i.offsetHeight > 100){
    i.querySelector(".longcopy").classList.add("maxHeight");
    i.querySelector("button").classList.remove("hidden");
  }
})


box.forEach(i => i.querySelector("button").addEventListener("click" , () => {
  if(i.querySelector(".longcopy").classList.contains("maxHeight")){
    i.querySelector(".longcopy").classList.remove("maxHeight");
    i.querySelector("button").textContent = "See Less";
  }
  else {
    i.querySelector(".longcopy").classList.add("maxHeight");
    i.querySelector("button").textContent = "See More";
  }
}));