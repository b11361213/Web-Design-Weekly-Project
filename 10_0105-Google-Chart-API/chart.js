// Document
// [長條圖  |  Charts  |  Google for Developers](https://developers.google.com/chart/interactive/docs/gallery/barchart?hl=zh-tw)

// Change Chart Bg
// [Google Chart Background Color - Stack Overflow](https://stackoverflow.com/questions/8808100/google-chart-background-color/12033559#12033559)

// Passing in parameter
// [javascript - Passing in parameter in Google Charts function - Stack Overflow](https://stackoverflow.com/questions/47502800/passing-in-parameter-in-google-charts-function)

// Change Title size
// [html - How to change google chart title font size? - Stack Overflow](https://stackoverflow.com/questions/37176219/how-to-change-google-chart-title-font-size/37176450#37176450)

// Change Axis size
// [Google charts change haxis font size - Stack Overflow](https://stackoverflow.com/questions/27156928/google-charts-change-haxis-font-size/51377725#51377725)

// Multi chart
// [繪製多個圖表  |  Charts  |  Google for Developers](https://developers.google.com/chart/interactive/docs/basic_multiple_charts?hl=zh-tw)


function drawChart( dataArrayTable, divElementId, 
                    title, xAxisTitle, yAxisTitle,
                    titleFontSize, titleBold, titleItalic,
                    xAxisFontSize, xAxisBold, xAxisItalic,
                    yAxisFontSize, yAxisBold, yAxisItalic,
                    bgColor, titleColor,
                    xAxisColor, yAxisColor ) {

    var data = google.visualization.arrayToDataTable( dataArrayTable );

    var view = new google.visualization.DataView( data );
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: title,
        // subtitle: subtitle,
        width: 660,
        height: 580,
        backgroundColor: bgColor,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
        
        titleTextStyle: { color: titleColor, fontSize: titleFontSize, bold: titleBold, italic: titleItalic },
        vAxis: { title: xAxisTitle, textStyle: { color: xAxisColor, fontSize: xAxisFontSize, bold: xAxisBold, italic: xAxisItalic } },
        hAxis: { title: yAxisTitle, baselineColor: yAxisColor, gridlineColor: yAxisColor, textStyle: { color: yAxisColor, fontSize: yAxisFontSize, bold: yAxisBold, italic: yAxisItalic  }}
    }

    var chart = new google.visualization.BarChart(document.getElementById(divElementId));
    chart.draw(view, options);
}

var dataArray = [
    ['Element', 'Density', { role: 'style' }],
    ['Copper', 8.94, '#b87333'],            // RGB value
    ['Silver', 10.49, 'silver'],            // English color name
    ['Gold', 19.30, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
];

let varTitle = 'Learning how to code';
// let varSubtitle = ''
let xTitle = '';
let yTitle = '';

let titleFont = [22, true, true];
let tSize = titleFont[0]; tBold = titleFont[1]; tItalic = titleFont[2];
let xAxisFont = [16, true, false];
let xSize = xAxisFont[0]; xBold = xAxisFont[1]; xItalic = xAxisFont[2];
let yAxisFont = [16, true, false];
let ySize = yAxisFont[0]; yBold = yAxisFont[1]; yItalic = yAxisFont[2];

let varBgColor = '#7077A1';
let textColor = '#FFF';

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(
    function() { drawChart( dataArrayTable = dataArray, divElementId = "learnCode",
                            title = varTitle, xAxisTitle = xTitle, yAxisTitle = yTitle,
                            titleFontSize = tSize, titleBold = tBold, titleItalic = tItalic,
                            xAxisFontSize = xSize, xAxisBold = yBold, xAxisItalic = xItalic,
                            yAxisFontSize = ySize, yAxisBold = xBold, yAxisItalic = yItalic,
                            bgColor = varBgColor, titleColor = textColor,
                            xAxisColor = textColor, yAxisColor = textColor ) }
);

google.charts.setOnLoadCallback(
    function() { drawChart( dataArrayTable = dataArray,  divElementId = "yearsCoding",
                            title = varTitle, xAxisTitle = xTitle, yAxisTitle = yTitle,
                            titleFontSize = tSize, titleBold = tBold, titleItalic = tItalic,
                            xAxisFontSize = xSize, xAxisBold = yBold, xAxisItalic = xItalic,
                            yAxisFontSize = ySize, yAxisBold = xBold, yAxisItalic = yItalic,
                            bgColor = varBgColor, titleColor = textColor,
                            xAxisColor = textColor, yAxisColor = textColor ) }
);

google.charts.setOnLoadCallback(
    function() { drawChart( dataArrayTable = dataArray,  divElementId = "devloperType",
                            title = varTitle, xAxisTitle = xTitle, yAxisTitle = yTitle,
                            titleFontSize = tSize, titleBold = tBold, titleItalic = tItalic,
                            xAxisFontSize = xSize, xAxisBold = yBold, xAxisItalic = xItalic,
                            yAxisFontSize = ySize, yAxisBold = xBold, yAxisItalic = yItalic,
                            bgColor = varBgColor, titleColor = textColor,
                            xAxisColor = textColor, yAxisColor = textColor ) }
);