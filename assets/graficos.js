google.charts.load("current", {packages:['corechart']});

google.charts.setOnLoadCallback(graficoRegiao);
google.charts.setOnLoadCallback(graficoEstado);

function graficoRegiao() {
        var dadosRegiao = google.visualization.arrayToDataTable([
        ["Região", "Porcentagem", { role: "style" } ],
        ["Sul", 40, "#30440D"],
        ["Sudeste", 88, "#30440D"],
        ["Norte", 60, "#30440D"],
        ["Nordeste", 99, "#30440D"],
        ["Centro Oeste", 13, "#30440D"]
    ]);

    var visualizacaoRegiao = new google.visualization.DataView(dadosRegiao);
    visualizacaoRegiao.setColumns([0, 1,
                    { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                    2]);

    var opcoesRegiao = {
        width: 700,
        height: 300,
        bar: {groupWidth: "60%"},
        legend: { position: "none" },
        backgroundColor: '#E6F4CD'
    };
    var regiao = new google.visualization.ColumnChart(document.getElementById("por-regiao"));
    regiao.draw(visualizacaoRegiao, opcoesRegiao);
}

function graficoEstado() {
    var dadosEstado = google.visualization.arrayToDataTable([
    ["Estado", "Porcentagem", { role: "style" } ],
    ["AC", 40, "#30440D"],
    ["AL", 88, "#30440D"],
    ["AP", 60, "#30440D"],
    ["AM", 99, "#30440D"],
    ["BA", 37, "#30440D"],
    ["CE", 38, "#30440D"],
    ["ES", 45, "#30440D"],
    ["GO", 22, "#30440D"],
    ["MA", 78, "#30440D"],
    ["MT", 54, "#30440D"],
    ["MS", 40, "#30440D"],
    ["MG", 18, "#30440D"],
    ["PA", 77, "#30440D"],
    ["PB", 25, "#30440D"],
    ["PR", 63, "#30440D"],
    ["PI", 78, "#30440D"],
    ["RJ", 23, "#30440D"],
    ["RN", 15, "#30440D"],
    ["RS", 86, "#30440D"],
    ["RO", 45, "#30440D"],
    ["RR", 65, "#30440D"],
    ["SC", 67, "#30440D"],
    ["SP", 23, "#30440D"],
    ["SE", 18, "#30440D"],
    ["TO", 47, "#30440D"],
    ["DF", 13, "#30440D"]
]);

var visualizacaoEstado = new google.visualization.DataView(dadosEstado);
visualizacaoEstado.setColumns([0, 1,
                { calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation" },
                2]);

var opcoesEstado = {
    width: 1500,
    height: 300,
    bar: {groupWidth: "60%"},
    legend: { position: "none" },
    backgroundColor: '#E6F4CD'
};
var estado = new google.visualization.ColumnChart(document.getElementById("por-estado"));
estado.draw(visualizacaoEstado, opcoesEstado);
}