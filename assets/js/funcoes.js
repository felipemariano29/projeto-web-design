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
    navItens = document.querySelectorAll("nav a"),
    setaBaixo = document.getElementById("seta-baixo"),
    listaOds = document.getElementById("lista-ods"),
    tituloOds = document.getElementById("titulo-ods"),
    tabelas = document.querySelectorAll(".tabelas"),
    informacoes = document.getElementById("info"),
    topicos = document.getElementById("topicos"),
    topoBtn = document.getElementById("topo-btn"),
    altura = window.innerHeight;

window.addEventListener("load", () => {document.documentElement.scrollTop = 0})
setaBaixo.addEventListener("click", () => {document.documentElement.scrollTop = altura});
topoBtn.addEventListener("click", () => {document.documentElement.scrollTop = 0});

function navbarFunc() {
    navItens.forEach(e => {
        e.addEventListener('click', () => {
            if(e.innerText==="Home") document.documentElement.scrollTop = 0*altura;
            else if(e.innerText==="Info") document.documentElement.scrollTop = 1*altura;
            else if(e.innerText==="Geral") document.documentElement.scrollTop = 2*altura;
            else if(e.innerText==="ODS") document.documentElement.scrollTop = 3*altura;
            else if(e.innerText==="Gráficos") document.documentElement.scrollTop = 4*altura;
            else if(e.innerText==="Ranking") document.documentElement.scrollTop = 5*altura;
        })
    })
};

function removeCorNav() {
    for(let i=0;i<navItens.length;i++) {
        navItens[i].classList.remove("active");
    }
};

function verificaAltura() {
    if(window.scrollY <= altura){
        removeCorNav();
        navItens[0].classList.add("active");
    }
    if(altura <= window.scrollY && window.scrollY < (altura*2)){
        removeCorNav();
        navItens[1].classList.add("active");
    }
    if((altura*2) <= window.scrollY && window.scrollY < (altura*3)){
        removeCorNav();
        navItens[2].classList.add("active");
    }
    if((altura*3) <= window.scrollY && window.scrollY < (altura*4)){
        removeCorNav();
        navItens[3].classList.add("active");
    }
    if((altura*4) <= window.scrollY && window.scrollY < (altura*5)){
        removeCorNav();
        navItens[4].classList.add("active");
    }
    if((altura*5) <= window.scrollY && window.scrollY < (altura*6)){
        removeCorNav();
        navItens[5].classList.add("active");
    }
    if(window.scrollY > (altura*6) - 500){
        navbar.style.display = "none";
    }
    if(window.scrollY < (altura*6) - 500){
        navbar.style.display = "flex";
    }
};

function sempreNoTopo() {
    if (window.pageYOffset > (altura)) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

function geraItemInfo() {
    for(let i=0;i<4;i++){
        let
            article = document.createElement("article"),
            articleHead = document.createElement("head"),
            icon = document.createElement("i"),
            articleTitle = document.createElement("h3"),
            articleText = document.createElement("p");

        icon.classList.add(infoDados[i].icone[0]);
        icon.classList.add(infoDados[i].icone[1]);

        article.appendChild(articleHead);
        articleHead.appendChild(icon);
        articleHead.appendChild(articleTitle);
        article.appendChild(articleText);

        articleTitle.textContent = infoDados[i].titulo;
        articleText.textContent = infoDados[i].descricao;

        informacoes.appendChild(article);
    }
};

function geraTopicoGeral() {
    for(let i=0;i<desempenhoGeral.length;i++){
        const 
            p = document.createElement("p"),
            li = document.createElement("li");

        p.textContent = desempenhoGeral[i].topico + '.'

        li.appendChild(p);
        topicos.appendChild(li);
    }
};

function odsFunc() {
    for(let i=0;i<ods.length;i++){
        let 
            titulo = document.createElement('h3'),
            descricao = document.createElement('p'),
            li = document.createElement('li'),
            button = document.createElement('button'),
            icone = document.createElement('figure'),
            img = document.createElement('img'),
            pontos = document.createElement('p');

        button.type = "button";
        img.src = ods[i].icone;
        pontos.textContent = ods[i].pontos;
        
        icone.appendChild(img);
        
        button.appendChild(icone);

        li.appendChild(button);
        li.appendChild(pontos);
        
        if(i === 0) button.autofocus = true;

        button.addEventListener("click", () => {
            tituloOds.innerHTML = '';

            titulo.textContent = i+1 + '. ' + ods[i].titulo;
            descricao.textContent = ods[i].descricao + '.';
            
            tituloOds.appendChild(titulo);
            tituloOds.appendChild(descricao);
        })

        listaOds.appendChild(li);

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
                titulo = document.createElement('h3'),
                tabela = document.createElement('table');

        for(let j=0;j<ranking[i].dados.length;j++){
            let
                linha = document.createElement('tr'),
                cidade = document.createElement('p'),
                pontuacao = document.createElement('p');

            pontuacao.classList.add('pontuacao');

            linha.appendChild(cidade);
            linha.appendChild(pontuacao);
            tabela.appendChild(linha);

            titulo.textContent = ranking[i].titulo;
            cidade.textContent = ranking[i].dados[j].nome + ' (' + ranking[i].dados[j].estado + ')';
            pontuacao.textContent = ranking[i].dados[j].pontuação;

            tabelas[i].appendChild(titulo);
            tabelas[i].appendChild(tabela);
        };
    };
};