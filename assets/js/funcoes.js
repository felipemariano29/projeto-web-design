import {
            ods,
            infoDados,
            desempenhoGeral,
            graficos,
            ranking

        } from './dados.js';

export { 
            navbarFunc,
            removeCorNav,
            verificaAltura,
            sempreNoTopo,
            geraItemInfo,
            geraTopicoGeral,
            odsFunc,
            desenhaGrafico,
            geraTabela
        };

const
    navbar = document.getElementById("navbar"),
    setaBaixo = document.getElementById("seta-baixo"),
    navItens = document.querySelectorAll(".nav-item"),
    todasOds = document.getElementById("todas-ods"),
    tituloPorOds = document.getElementById("titulo-por-ods"),
    tabelas = document.querySelectorAll(".tabelas"),
    informacoes = document.getElementById("informacoes"),
    topicos = document.getElementById("topicos"),
    topoBtn = document.getElementById("topoBtn"),
    altura = 950;

setaBaixo.addEventListener("click", () => {document.documentElement.scrollTop = altura + 33});
topoBtn.addEventListener("click", () => {document.documentElement.scrollTop = 0});

function navbarFunc() {
    let alt = altura + 33;
    navItens.forEach(e => {
        e.addEventListener('click', () => {
            if(e.innerText==="Home") document.documentElement.scrollTop = 0*alt;
            else if(e.innerText==="Info") document.documentElement.scrollTop = 1*alt;
            else if(e.innerText==="Geral") document.documentElement.scrollTop = 2*alt;
            else if(e.innerText==="ODS") document.documentElement.scrollTop = 3*alt;
            else if(e.innerText==="Gráficos") document.documentElement.scrollTop = 4*alt;
            else if(e.innerText==="Ranking") document.documentElement.scrollTop = 5*alt;
        })
    })
};

function removeCorNav() {
    for(let i=0;i<navItens.length;i++) {
        navItens[i].classList.remove("nav-item-active");
    }
};

function verificaAltura() {
    if(window.scrollY < altura){
        removeCorNav();
        navItens[0].classList.add("nav-item-active");
    }
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
    if(window.scrollY > (altura*6) - 500){
        navbar.style.display = "none";
    }
    if(window.scrollY < (altura*6) - 500){
        navbar.style.display = "flex";
    }
};

function sempreNoTopo() {
    if (window.pageYOffset > (altura + 33)) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

function geraItemInfo() {
    let info = document.createElement("div");
    for(let i=0;i<4;i++){
        let
            itemInfo = document.createElement("div"),
            containerTituloItem = document.createElement("div"),
            iconeItem = document.createElement("i"),
            tituloItem = document.createElement("h3"),
            textoItem = document.createElement("p");

        info.classList.add("info");
        itemInfo.classList.add("item-info");
        containerTituloItem.classList.add("titulo-item-info");
        iconeItem.classList.add(infoDados[i].icone[0]);
        iconeItem.classList.add(infoDados[i].icone[1]);

        info.appendChild(itemInfo);
        itemInfo.appendChild(containerTituloItem);
        containerTituloItem.appendChild(iconeItem);
        containerTituloItem.appendChild(tituloItem);
        itemInfo.appendChild(textoItem);

        tituloItem.textContent = infoDados[i].titulo;
        textoItem.textContent = infoDados[i].descricao;

        informacoes.appendChild(info);
    }
};

function geraTopicoGeral() {
    for(let i=0;i<desempenhoGeral.length;i++){
        const 
            p = document.createElement("p"),
            div = document.createElement("div");

        div.classList.add("container-topicos")
        p.classList.add("topicos")

        p.textContent = desempenhoGeral[i].topico + '.'

        div.appendChild(p);
        topicos.appendChild(div);
    }
};

function odsFunc() {
    for(let i=0;i<ods.length;i++){
        let 
            divOds = document.createElement('div'),
            divIconeOds = document.createElement('div'),
            legendaOds = document.createElement('p'),
            img = document.createElement('img'),
            tituloOds = document.createElement('h3'),
            descricaoOds = document.createElement('p')

        divOds.classList.add('ods');
        divIconeOds.classList.add('container-ods');
        legendaOds.classList.add('legenda-ods');
        img.src = ods[i].icone;
        img.classList.add('icone-ods');

        divOds.appendChild(divIconeOds);
        divOds.appendChild(legendaOds);
        
        divIconeOds.appendChild(img);
        legendaOds.textContent = ods[i].pontos;

        if(i === 0) divIconeOds.classList.add('container-ods-selecionado');

        divOds.addEventListener("click", () => {
            tituloPorOds.innerHTML = '';

            for(let i=0; i<ods.length;i++){
                todasOds.children[i].children[0].classList.remove('container-ods-selecionado');
            }
            divIconeOds.classList.add('container-ods-selecionado');

            tituloPorOds.appendChild(tituloOds);
            tituloPorOds.appendChild(descricaoOds);

            tituloOds.textContent = i+1 + '. ' + ods[i].titulo;
            descricaoOds.textContent = ods[i].descricao + '.';

        })

        todasOds.appendChild(divOds);

    }
};

function desenhaGrafico() {

    for(let i=0;i<graficos.length;i++){
        const data = {
            labels: graficos[i].nome,
            datasets: [{
            label: 'Pontuação',
            backgroundColor: '#418FDE',
            borderColor: '#418FDE',
            color: '#418FDE',
            data: graficos[i].valor,
            }]
        };
        
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                            y: {
                                beginAtZero: false
                                }
                        },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: '#3F4756',
                        titleColor: '#DDF2FF',
                        bodyColor: '#DDF2FF',
                        displayColors: false,
                    }
                }
            }
        };
        
        const grafico = new Chart(
            document.getElementById(graficos[i].id),
            config
        );
    }
};

function geraTabela() {
    for(let i=0;i<ranking.length;i++){
        let
                tituloTabela = document.createElement('h3'),
                tabela = document.createElement('div')
        for(let j=0;j<ranking[i].dados.length;j++){
            let
                linha = document.createElement('div'),
                cidade = document.createElement('div'),
                pontuacao = document.createElement('div'),
                nomeCidade = document.createElement('p'),
                numPontuacao = document.createElement('p');

            tabela.classList.add('tabela');
            linha.classList.add('linha');
            cidade.classList.add('cidade');
            pontuacao.classList.add('pontuacao');

            tabela.appendChild(linha);
            linha.appendChild(cidade);
            linha.appendChild(pontuacao);
            cidade.appendChild(nomeCidade);
            pontuacao.appendChild(numPontuacao);

            tituloTabela.textContent = ranking[i].titulo
            nomeCidade.textContent = ranking[i].dados[j].nome + ' (' + ranking[i].dados[j].estado + ')';
            numPontuacao.textContent = ranking[i].dados[j].pontuação;

            tabelas[i].appendChild(tituloTabela);
            tabelas[i].appendChild(tabela);
        }
    }
};