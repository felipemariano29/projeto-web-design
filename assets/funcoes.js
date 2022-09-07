import {
            ods,
            infoDados,
            graficos,
            ranking

        } from './dados.js';

export { 
            navbarFunc,
            removeCorNav,
            verificaAltura,
            sempreNoTopo,
            geraItemInfo,
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
    altura = 950;

setaBaixo.addEventListener("click", () => {document.documentElement.scrollTop = altura + 33})

function navbarFunc() {
    let alt = altura + 33;
    navItens.forEach(e => {
        e.addEventListener('click', () => {
            if(e.innerText==="home") document.documentElement.scrollTop = 0*alt;
            else if(e.innerText==="info") document.documentElement.scrollTop = 1*alt;
            else if(e.innerText==="geral") document.documentElement.scrollTop = 2*alt;
            else if(e.innerText==="ods") document.documentElement.scrollTop = 3*alt;
            else if(e.innerText==="gráficos") document.documentElement.scrollTop = 4*alt;
            else if(e.innerText==="ranking") document.documentElement.scrollTop = 5*alt;
        })
    })
}

function removeCorNav() {
    for(let i=0;i<navItens.length;i++) {
        navItens[i].classList.remove("nav-item-active");
    }
}

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
}

function sempreNoTopo() {
    if (window.pageYOffset > (altura + 33)) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

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
}

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
        img.classList.add('icone-ods')

        divOds.appendChild(divIconeOds);
        divOds.appendChild(legendaOds);
        
        divIconeOds.appendChild(img);
        legendaOds.textContent = ods[i].pontos;

        divOds.addEventListener("click", () => {
            tituloPorOds.innerHTML = '';

            tituloPorOds.appendChild(tituloOds);
            tituloPorOds.appendChild(descricaoOds);

            tituloOds.textContent = i+1 + '. ' + ods[i].titulo;
            descricaoOds.textContent = ods[i].descricao + '.';
        })

        todasOds.appendChild(divOds);
    }
}

function desenhaGrafico() {
    google.charts.load("current", {packages:['corechart']});

    for(let i=0;i<graficos.length;i++){
        google.charts.setOnLoadCallback(geraGrafico);
    
        function geraGrafico() {
            let 
                dados = google.visualization.arrayToDataTable(graficos[i].dados),
                visualizacao = new google.visualization.DataView(dados),
                largura,
                opcoes,
                grafico = new google.visualization.ColumnChart(document.getElementById(graficos[i].id));
    
            visualizacao.setColumns([0, 1,
                                        { calc: "stringify",
                                        sourceColumn: 1,
                                        type: "string",
                                        role: "annotation" },
                                    2]);
            if(graficos[i].id === 'por-regiao'){
                largura = 700;
            } else if (graficos[i].id === 'por-estado'){
                largura = 1500;
            }
            opcoes = {
                width: largura,
                height: 300,
                bar: {groupWidth: "60%"},
                legend: { position: "none" },
                backgroundColor: "transparent"
            }
            grafico.draw(visualizacao, opcoes);
        }
    }
}

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
}