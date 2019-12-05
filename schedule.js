var graphDiv = document.getElementById('chart')
var days = [0, 0, 0, 0, 0, 0, 0, 0];

var data = [
    {
        y: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Total'],
        x: days,
        name: 'You',
        type: 'bar',
        orientation: 'h'
    }
];

var layout = {barmode: 'group', title: {text: 'Planned Workout'}, xaxis: {title: { text: 'Planned Hours'}, rangemode: 'tozero'}, yaxis: {title: { text: 'Day'}, rangemode: 'tozero'}};


Plotly.newPlot(graphDiv, data, layout);


function update(){
    graphDiv = document.getElementById('chart');
    var day = document.getElementById('SelectDay').value;
    var hours = document.getElementById('HourInfo').value;
    var dataNew = graphDiv.data
    dataNew[0].x[day] = hours;

    var sum = 0;
    for(i = 0; i < 7; i++){
        sum = sum + parseInt(dataNew[0].x[i]);
    }
    dataNew[0].x[7] = sum;
    Plotly.newPlot(graphDiv, dataNew, graphDiv.layout)
}