let group = [...document.getElementsByClassName("group")];
let amount = [...document.getElementsByClassName("amount")];
let icon = [...document.querySelectorAll(".amount i")]

amount.forEach(e => {
    e.addEventListener("click", () => {
        group.forEach(ele => {
            if (ele.style.display === "flex") {
                ele.style.display = "none"
                console.log(ele.childNodes);
                icon.forEach(elem => {
                    elem.style.transform = "rotate(180deg)";
                    elem.style.marginTop = "2px";
                })
            } else {
                ele.style.display = "flex";
                icon.forEach(elem => {
                    elem.style.transform = "rotate(0deg)";
                    elem.style.marginTop = "-4px";
                })
            }

        })
    })
});

let burguer = document.getElementById("burguer");
let sideBar = document.getElementById("sideBar");

burguer.addEventListener("click", () => {
    if (sideBar.className === "open"){
        sideBar.className = "closed";
    } else {
        sideBar.className = "open";
    }
});


