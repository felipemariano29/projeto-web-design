const
    navbar = document.getElementById("navbar"),
    navItens = document.querySelectorAll(".nav-item"),
    setaBaixo = document.getElementById("seta-baixo");

let
    altura = 983;

setaBaixo.addEventListener("click", () => {document.documentElement.scrollTop = 1*altura})

window.onscroll = () => { sempreNoTopo() }

navItens.forEach(e => {
    e.addEventListener('click', () => {
        let altura = 983;
        if(e.innerText==="home") document.documentElement.scrollTop = 0*altura;
        else if(e.innerText==="info") document.documentElement.scrollTop = 1*altura;
        else if(e.innerText==="geral") document.documentElement.scrollTop = 2*altura;
        else if(e.innerText==="ods") document.documentElement.scrollTop = 3*altura;
        else if(e.innerText==="gráficos") document.documentElement.scrollTop = 4*altura;
        else if(e.innerText==="ranking") document.documentElement.scrollTop = 5*altura;
    })
})

function removeCorNav(){
    for(let i=0;i<navItens.length;i++) {
        navItens[i].classList.remove("nav-item-active");
    }
}

function verificaAltura() {
    let altura = 950;
    if(altura < window.scrollY && window.scrollY < (altura*2)){
        removeCorNav();
        navItens[1].classList.add("nav-item-active");
    }
    if((altura*2) < window.scrollY && window.scrollY < (altura*3)){
        removeCorNav();
        navItens[2].classList.add("nav-item-active");
    }
    if((altura*3) < window.scrollY && window.scrollY < (altura*4)){
        removeCorNav();
        navItens[3].classList.add("nav-item-active");
    }
    if((altura*4) < window.scrollY && window.scrollY < (altura*5)){
        removeCorNav();
        navItens[4].classList.add("nav-item-active");
    }
    if((altura*5) < window.scrollY && window.scrollY < (altura*6)){
        removeCorNav();
        navItens[5].classList.add("nav-item-active");
    }
}

setInterval(verificaAltura, 100);

function sempreNoTopo() {
    if (window.pageYOffset >= altura) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
