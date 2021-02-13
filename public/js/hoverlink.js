const allboxes = document.querySelectorAll(".box");

allboxes.forEach(box => {
    const visit = box.querySelector(".solve");
    const hoverbox = box.querySelector(".hoverbox");

    visit.addEventListener("mouseover", () =>{
        hoverbox.classList.remove("hidden");
    });

    visit.addEventListener("mouseout", () => {
        hoverbox.classList.add("hidden");
    });
});
