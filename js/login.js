let type = document.getElementById("typeSelect");
let login = document.getElementById("loginBtn");

login.addEventListener("click", (event) => {
    if (type.value === "profe") {
        window.location.href = "./profesor/home.html";
    } else if (type.value === "dpto") {
        window.location.href = "./departamento/home.html";
    } else if (type.value === "tech") {
        window.location.href = "./tecnologia/home.html";
    } else if (type.value === "compras") {
        window.location.href = "./compras/home.html";
    } else if (type.value === "soporte") {
        window.location.href = "./soporte/home.html";
    } else {
        alert("Debes escoger un rol");
    }
});


let left = document.getElementById("leftArrow");
let right = document.getElementById("rightArrow");
let title = [...document.getElementsByClassName("title")];
let message = [...document.getElementsByClassName("message")];
let indicator = [...document.getElementsByClassName("indicator")];
let activeMsg = 0;

indicator.forEach((element, index) => {
    element.addEventListener("click", () => {
        title.forEach(t => {
            t.className = "title";
        });
        message.forEach(m => {
            m.className = "message";
        });
        indicator.forEach(ind => {
            ind.className = "indicator";
        });
        indicator[index].classList.add("active");
        message[index].classList.add("active");
        title[index].classList.add("active");
        activeMsg = index;
    });
});

left.addEventListener("click", () => {
    title.forEach(t => {
        t.className = "title";
    });
    message.forEach(m => {
        m.className = "message";
    });
    indicator.forEach(ind => {
        ind.className = "indicator";
    });
    if (activeMsg  < 1) {
        activeMsg = 4;
    } else {
        activeMsg --;
    }
    indicator[activeMsg].classList.add("active");
    message[activeMsg].classList.add("active");
    title[activeMsg].classList.add("active");
});

right.addEventListener("click", () => {
    title.forEach(t => {
        t.className = "title";
    });
    message.forEach(m => {
        m.className = "message";
    });
    indicator.forEach(ind => {
        ind.className = "indicator";
    });
    if (activeMsg > 3) {
        activeMsg = 0;
    } else {
        activeMsg++;
    }
    indicator[activeMsg].classList.add("active");
    message[activeMsg].classList.add("active");
    title[activeMsg].classList.add("active");
});

setInterval(() => {
    title.forEach(t => {
        t.className = "title";
    });
    message.forEach(m => {
        m.className = "message";
    });
    indicator.forEach(ind => {
        ind.className = "indicator";
    });
    if (activeMsg > 3) {
        activeMsg = 0;
    } else {
        activeMsg++;
    }
    indicator[activeMsg].classList.add("active");
    message[activeMsg].classList.add("active");
    title[activeMsg].classList.add("active");
}, 10000);