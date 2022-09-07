import { 
            navbarFunc,
            verificaAltura,
            sempreNoTopo,
            geraItemInfo,
            geraTopicoGeral,
            odsFunc,
            desenhaGrafico,
            geraTabela

        } from "./funcoes.js";

navbarFunc();

window.onscroll = () => { 
    verificaAltura();
    sempreNoTopo(); 
}

geraItemInfo();

geraTopicoGeral();

odsFunc();

desenhaGrafico();

geraTabela();