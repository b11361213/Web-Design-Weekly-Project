// Document
// [長條圖  |  Charts  |  Google for Developers](https://developers.google.com/chart/interactive/docs/gallery/barchart?hl=zh-tw)

// Passing in parameter
// [javascript - Passing in parameter in Google Charts function - Stack Overflow](https://stackoverflow.com/questions/47502800/passing-in-parameter-in-google-charts-function)

// Custom chart position
// [javascript - Remove padding or margins from Google Charts - Stack Overflow](https://stackoverflow.com/questions/9661456/remove-padding-or-margins-from-google-charts/13439095#13439095)

// Get table length
// [javascript - Counting the number of rows in a table NOT using jquery - Stack Overflow](https://stackoverflow.com/questions/8369467/counting-the-number-of-rows-in-a-table-not-using-jquery)

// Change Chart Bg
// [Google Chart Background Color - Stack Overflow](https://stackoverflow.com/questions/8808100/google-chart-background-color/12033559#12033559)

// Change Title size
// [html - How to change google chart title font size? - Stack Overflow](https://stackoverflow.com/questions/37176219/how-to-change-google-chart-title-font-size/37176450#37176450)

// Change Axis size
// [Google charts change haxis font size - Stack Overflow](https://stackoverflow.com/questions/27156928/google-charts-change-haxis-font-size/51377725#51377725)

// Change bar width
// [bar chart - Google BarChart set width of bars? - Stack Overflow](https://stackoverflow.com/questions/6702043/google-barchart-set-width-of-bars/17032798#17032798)

// Change bar color
// [Google Charts - Change individual bar color - Stack Overflow](https://stackoverflow.com/questions/10592776/google-charts-change-individual-bar-color/10836518#10836518)

// Multi chart
// [繪製多個圖表  |  Charts  |  Google for Developers](https://developers.google.com/chart/interactive/docs/basic_multiple_charts?hl=zh-tw)


function drawChart( dataArrayTable, divElementId, chartTitle,
    
                    bgColor, titleColor, barColor,
                    xAxisColor, yAxisColor,
    
                    [ xAxisTitle, yAxisTitle,
                    titleFontSize, titleBold, titleItalic,
                    xAxisFontSize, xAxisBold, xAxisItalic,
                    yAxisFontSize, yAxisBold, yAxisItalic ]
                    ) {

    var data = google.visualization.arrayToDataTable( dataArrayTable );

    var view = new google.visualization.DataView( data );
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options = {
        title: chartTitle,
        // subtitle: subtitle,
        width: 960,
        height: 960,
        backgroundColor: bgColor,
        bar: { groupWidth: "55%" },
        legend: { position: "none" },
        chartArea: { left: 270, top: 130, height: '80%', width: '60%' },
        series: [{color: barColor, visibleInLegend: true}, {color: 'red', visibleInLegend: false}],
        
        titleTextStyle: { color: titleColor, fontSize: titleFontSize, bold: titleBold, italic: titleItalic },
        vAxis: { title: xAxisTitle, textStyle: { color: xAxisColor, fontSize: xAxisFontSize, bold: xAxisBold, italic: xAxisItalic } },
        hAxis: { title: yAxisTitle, baselineColor: yAxisColor, gridlineColor: yAxisColor, textStyle: { color: yAxisColor, fontSize: yAxisFontSize, bold: yAxisBold, italic: yAxisItalic } }
    }

    var chart = new google.visualization.BarChart(document.getElementById(divElementId));
    chart.draw(view, options);
}



// normal config/setting

let dataArray, varElementId, varTitle;

let dataLearnCode = [
    ['Resources', 'Percentages'],
    ['Other online resources (e.g., videos, blogs, forum)', 80.13],
    ['Books / Physical media', 51.8],
    ['School (i.e., University, College, etc)', 50.14],
    ['Online Courses or Certification', 49.28],
    ['On the job training', 46.06],
    ['Colleague', 23.41],
    ['Friend or family member', 11.33],
    ['Coding Bootcamp', 9.81],
    ['Hackathons (virtual or in-person)', 80.2],

    // ['Gold', 0000],
];

let dataYearsCoding = [
    ['Years', 'Percentages'],
    ['Less than 1 year', 1.11],
    ['1 to 4 years', 14.7],
    ['5 to 9 years', 26.44],
    ['10 to 14 years', 19.89],
    ['15 to 19 years', 11.71],
    ['20 to 24 years', 9.47],
    ['25 to 29 years', 5.88],
    ['30 to 34 years', 4.14],
    ['35 to 39 years', 2.71],
    ['40 to 44 years', 2.63],
    ['45 to 49 years', 0.78],
    ['More than 50 years', 0.55],
];

let dataDeveloperType = [
    ['Developer Type', 'Percentages'],
    ['Developer, full-stack', 33.48],
    ['Developer, back-end', 17.88],
    ['Developer, front-end', 6.6],
    ['Developer, desktop or enterprise applications', 5.08],
    ['Developer, mobile', 3.38],
    ['Engineering manager', 2.64],
    ['Student', 2.6],
    ['Developer, embedded applications or devices', 2.4],
    ['Data scientist or machine learning specialist', 2.07],
    ['DevOps specialist', 1.8],
    ['Academic researcher', 1.76],
    ['Research & Development role', 1.76],
    ['Senior Executive (C-Suite, VP, etc.)', 1.73],
    ['Engineer, data', 1.62],
    ['Cloud infrastructure engineer', 1.35],
    ['Developer, game or graphics', 1.13],
    ['Data or business analyst', 1.09],
    ['System administrator', 0.97],
    ['Project manager', 0.77],
    ['Developer, QA or test', 0.76],
    ['Security professional', 0.62],
    ['Product manager', 0.58],
    ['Engineer, site reliability', 0.56],
    ['Educator', 0.54],
    ['Scientist', 0.46],
    ['Developer Experience', 0.42],
    ['Blockchain', 0.42],
    ['Hardware Engineer', 0.37],
    ['Designer', 0.37],
    ['Database administrator', 0.33],
    ['Developer Advocate', 0.28],
    ['Marketing or sales professional', 0.19],
];



// advanced config

let titleFontArray = [24, true, true];
let xAxisFontArray = [15, false, false];
let yAxisFontArray = [15, false, false];

let varBgColor = '#7077A1';
let varTextColor = '#FFF';
let varBarColor = '#FFC436';

// let varLineColor = '';
// let varBarColor = '#F6D776';

let configArray = [
    '', '',     // xAxisTitle, yAxisTitle
    titleFontArray[0], titleFontArray[1], titleFontArray[2],    // FontSize, Bold, Italic
    xAxisFontArray[0], xAxisFontArray[1], xAxisFontArray[2],
    yAxisFontArray[0], yAxisFontArray[1], yAxisFontArray[2],

];

// let varSubtitle = ''

// let tSize = titleFont[0]; tBold = titleFont[1]; tItalic = titleFont[2];
// let xSize = xAxisFont[0]; xBold = xAxisFont[1]; xItalic = xAxisFont[2];
// let ySize = yAxisFont[0]; yBold = yAxisFont[1]; yItalic = yAxisFont[2];

// =====


// draw chart

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(
    function() { drawChart(
        dataArrayTable = dataLearnCode, divElementId = "learnCode", chartTitle = "Learing how to codes",
        
        bgColor = varBgColor, titleColor = varTextColor, barColor = varBarColor,
        xAxisColor = varTextColor, yAxisColor = varTextColor,
        
        configArray ) }
);

google.charts.setOnLoadCallback(
    function() { drawChart(
        dataArrayTable = dataYearsCoding, divElementId = "yearsCoding", chartTitle = "Years coding",
        
        bgColor = varBgColor, titleColor = varTextColor, barColor = varBarColor,
        xAxisColor = varTextColor, yAxisColor = varTextColor,
        
        configArray ) }
);

google.charts.setOnLoadCallback(
    function() { drawChart(
        dataArrayTable = dataDeveloperType, divElementId = "developerType", chartTitle = "Developer Type",
        
        bgColor = varBgColor, titleColor = varTextColor, barColor = varBarColor,
        xAxisColor = varTextColor, yAxisColor = varTextColor,
        
        configArray ) }
);

// google.charts.setOnLoadCallback(
//     function() { drawChart( dataArrayTable = dataArray, divElementId = "learnCode",
//                             title = varTitle, xAxisTitle = xTitle, yAxisTitle = yTitle,
//                             titleFontSize = tSize, titleBold = tBold, titleItalic = tItalic,
//                             xAxisFontSize = xSize, xAxisBold = yBold, xAxisItalic = xItalic,
//                             yAxisFontSize = ySize, yAxisBold = xBold, yAxisItalic = yItalic,
//                             bgColor = varBgColor, titleColor = textColor, barColor = varBarColor,
//                             xAxisColor = textColor, yAxisColor = textColor ) }
// );