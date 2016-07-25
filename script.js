var chartData = [
    {
        "scale": 0,
        "first": 0,
        "three":0,
        "second": 0,
    },
    {
        "scale": 0.25,
        "first": 0,
        "three":0,
        "second": 1,
    }, {
        "scale": 0.5,
        "first": 0,
        "three":0,
        "second": 0
    }, {
        "scale": 0.75,
        "first": 0,
        "three":6,"second": 0
    }, {
        "scale":1,
        "first": 0,
        "three":6,"second": 0
    }, {
        "scale":1.25,
        "first": 0,
        "three":6,"second": 0
    }, {
        "scale": 1.5,
        "first": 0,
        "three":6,"second": 0
    }, {
        "scale": 1.75,
        "first": 1,
        "three":6,"second": 2
    }, {
        "scale": 2,
        "first": 6,
        "three":6,"second": 8
    }, {
        "scale": 2.25,
        "first": 17,
        "three":6,"second": 20
    }, {
        "scale": 2.5,
        "first": 20,
        "three":6,"second": 22
    }, {
        "scale":2.75,
        "first": 29,
        "three":6,"second": 31
    }, {
        "scale":3,
        "first": 27,
        "three":6,"second": 18
    }, {
        "scale": 3.25,
        "first": 32,
        "three":6,"second": 35
    }, {
        "scale": 3.5,
        "first": 28,
        "three":6,"second": 29
    }, {
        "scale": 3.75,
        "first": 30,
        "three":6,"second": 15
    },
    {
        "scale": 4,
        "first": 18,
        "three":6,"second": 13
    },
    {
        "scale": 4.25,
        "first": 20,
        "three":6,"second": 14
    },
    {
        "scale": 4.5,
        "first": 25,
        "three":6,"second": 21
    },
    {
        "scale": 4.75,
        "first": 20,
        "three":6,"second": 27
    },
    {
        "scale": 5,
        "first": 12,
        "three":6,"second": 8
    },
];


var chart;
chart = AmCharts.makeChart("chartdiv", {
    "export": {
        "enabled": true
    },
    "type": "serial",
    "theme": "light",
    "marginRight": 30,
    "startDuration": 1,
    "dataProvider": chartData,
    "valueAxes": [{
        "gridAlpha": 0.07,
        "position": "left",
    }],
    "graphs": [{
        "balloonText": "<span style='font-size:14px; color:#000;'><b>[[value]]%</b></span>",
        "title": "Cars",
        "valueField": "second",
        "bullet": "round",
        "id": "g1",
        "bulletBorderAlpha": 1,
        "bulletColor": "#000",
        "bulletSize": 5,
        "lineThickness": 2,
        "type": "smoothedLine",
        "legendValueText": "$[[value]]M",

    }, {
        "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]%</b></span>",
        "title": "Motorcycles",
        "valueField": "first",
        "bullet": "round",
        "id": "g2",
        "bulletBorderAlpha": 1,
        "bulletColor": "#000",
        "bulletSize": 5,
        "lineThickness": 2,
        "type": "smoothedLine",
        "legendValueText": "$[[value]]M",

    }, {
        "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]%</b></span>",
        "title": "Bicycles",
        "valueField": "three",
        "bullet": "round",
        "id": "g3",
        "bulletBorderAlpha": 1,
        "bulletColor": "#000",
        "bulletSize": 5,
        "lineThickness": 2,
        "type": "smoothedLine",
        "legendValueText": " [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]]",
    }],
    "legend": {
        "useGraphSettings": true,
        "position": "bottom"
    },
    "marginTop": 10,
    "marginLeft": 0,
    "marginBottom": 0,

    "chartCursor": {
        "cursorPosition": "mouse",
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "fullWidth": true,
        "cursorAlpha": 0.05,

    },
    "valueScrollbar":{
        "oppositeAxis":false,

        "scrollbarHeight":10
    },
    "export": {
        "enabled": true
    },
    "categoryField": "scale",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.07,
        "title": "",
        "guides": [{
            category: 0.25,
            toCategory: 2.25,
            lineColor: "#CC0000",
            lineAlpha: 1,
            fillAlpha: 0.1,
            fillColor: "#CC0000",
            dashLength: 2,
            inside: true,
            labelRotation: 0,
            position: "middle",
            label: "Beklenenin \n Çok \n Altında"
        },
            {
                category: 2.25,
                toCategory: 3.25,
                lineColor: "#F2A516",
                lineAlpha: 1,
                fillAlpha: 0.1,
                fillColor: "#F2A516",
                dashLength: 2,
                inside: true,
                labelRotation: 0,
                position: "middle",
                label: "Beklenenin \n Altında"
            },
            {
                category: 3.25,
                toCategory: 4,
                lineColor: "#140FA6",
                fillColor: "#140FA6",
                lineAlpha: 1,
                fillAlpha: 0.1,
                dashLength: 2,
                inside: true,
                labelRotation: 0,
                position: "top",
                label: "Beklenen \n"
            },
            {
                category: 4,
                toCategory: 4.5,
                lineColor: "#0583F2",
                lineAlpha: 1,
                fillAlpha: 0.1,
                fillColor: "#0583F2",
                dashLength: 2,
                inside: true,
                labelRotation: 0,
                position: "top",
                label: "Beklenenin \n Üstünde"
            },
            {
                category: 4.5,
                toCategory: 5,
                lineColor: "#56BF70",
                lineAlpha: 1,
                fillAlpha: 0.1,
                fillColor: "#56BF70",
                dashLength: 2,
                inside: true,
                labelRotation: 0,
                position: "top",
                label: "Beklenenin \n Çok\n Üstünde"
            },]

    },

});







































/*
var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "marginTop": 17,
    "autoMarginOffset": 20,
    "dataProvider": chartData,

    "graphs": [{
        "bullet": "round",
        "id": "g1",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 7,
        "lineThickness": 2,
        "title": "Price",
        "type": "smoothedLine",
        "useLineColorForBulletBorder": true,
        "valueField": "first"
    },
        {
            "bullet": "round",
            "id": "g2",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 7,
            "lineThickness": 2,
            "title": "Price2",
            "type": "smoothedLine",
            "useLineColorForBulletBorder": true,
            "valueField": "second"
        }
    ],
    "chartCursor": {
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "fullWidth": true,
        "cursorAlpha": 0.05
    },
    "categoryField": "scale",
    "export": {
        "enabled": true
    }
});
var xAxis = new AmCharts.ValueAxis();
xAxis.position = "left";
xAxis.title="asdasd";
xAxis.autoGridCount = true;
xAxis.guides=[
    {

        category: 8,
        toCategory: 9,
        lineColor: "#000",
        lineAlpha: 1,
        fillAlpha: 0.2,
        fillColor: "#000",
        dashLength: 2,
        inside: true,
        labelRotation: 90,
        label: "fines for speeding increased"
    },
];
//xAxis.guides=[
//    {
//        "dashLength": 5,
//        "inside": true,
//        "label": "Beklenenin Çok Üstünde",
//        "lineAlpha": 1,
//        value:8,
//        toValue:9,
//    }
//];

chart.addValueAxis(xAxis);

var yAxis = new AmCharts.ValueAxis();

yAxis.autoGridCount = true;
yAxis.title = "aaa";



chart.addValueAxis(yAxis);

//var valueAxis={
//    "dashLength": 1,
//    "guides": [{
//        "dashLength": 5,
//        "inside": true,
//        "label": "average",
//        "lineAlpha": 1,
//        value:123
//    }],
//    };
//chart.addValueAxis(valueAxis);

//var divName="chartdiv";
//
//var chart;
//
//
//
//chart = new AmCharts.AmSerialChart();
//chart.categoryField = "date";
//chart.theme="light";
//chart.startDuration = 1;
//chart.marginRight= 80;
//chart.marginTop= 17;
//// category
//var categoryAxis = chart.categoryAxis;
//
//// value
//
//var valueAxis2={
//        "dashLength": 10,
//        "guides": [{
//            "dashLength": 5,
//            "inside": false,
//            "label": "average",
//            "lineAlpha": 1,
//            "value": 90.4
//        }],
//    "position": "left"};
//
//var valueAxis={
//    "dashLength": 10,
//    "guides": [{
//        "dashLength": 5,
//        "inside": false,
//        "label": "average",
//        "lineAlpha": 1,
//        "value": 10
//    }],
//    "position": "left"};
//chart.addValueAxis(valueAxis2);
//chart.addValueAxis(valueAxis);
//
//var graph = new AmCharts.AmGraph();
//graph.id= "g2";
//graph.bullet= "round";
//graph.bulletBorderAlpha= 0;
//graph.bulletColor= "#000";
//graph.bulletSize= 7;
//graph.lineThickness= 2;
//graph.balloonText = "<span style='font-size:12px;'>[[title]]<br></span>";
//graph.title = "grafik",
//graph.valueField = "price";
//graph.showBalloon = true;
//graph.type = "smoothedLine";
//graph.fillAlphas = 0.8;
//chart.addGraph(graph);
//
//var graph2 = new AmCharts.AmGraph();
//graph2.bullet= "round";
//graph2.id= "g1";
//graph2.bulletBorderAlpha= 1;
//graph2.bulletColor= "#000";
//graph2.bulletSize= 7;
//graph2.lineThickness= 2;
//graph2.balloonText = "<span style='font-size:12px;'>[[title]]<br></span>";
//graph2.title = "grafik2",
//graph2.valueField = "price2";
//graph2.showBalloon = true;
//graph2.type = "smoothedLine";
//graph2.fillAlphas = 0.8;
//chart.addGraph(graph2);
//
//
//
//chart.dataProvider = chartData;
//
//chart.write(divName);*/