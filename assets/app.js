import { 
            navbarFunc,
            verificaAltura,
            sempreNoTopo,
            geraItemInfo,
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

odsFunc();

desenhaGrafico();

geraTabela();