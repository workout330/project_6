var graphDiv = document.getElementById('chart')
var days = [0, 0, 0, 0, 0, 0, 0, 0];

var data = [
    {
        x: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Total'],
        y: days,
        name: 'You',
        type: 'bar'
    }
];

var layout = {barmode: 'group', title: {text: 'Weekly Workout Data'}, xaxis: {title: { text: 'Day'}, rangemode: 'tozero'}, yaxis: {title: { text: 'Hours Worked OUt'}, rangemode: 'tozero'}};


Plotly.newPlot(graphDiv, data, layout);

function newFriend(){
    graphDiv = document.getElementById('chart')
    var newUser = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]
    var sum = 0;
    for(i = 0; i < newUser.length; i++){
        sum = sum +  newUser[i];
    }
    newUser.push(sum)
    graphDiv.data.push(
        {
            x: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Total'],
            y: newUser,
            name: document.getElementById('friendName').value,
            type: 'bar'
        }
    );

    Plotly.newPlot(graphDiv, data, graphDiv.layout);
    console.log('reached')
}

function update(){
    graphDiv = document.getElementById('chart');
    var day = document.getElementById('SelectDay').value;
    var hours = document.getElementById('HourInfo').value;
    var dataNew = graphDiv.data
    dataNew[0].y[day] = hours;

    var sum = 0;
    for(i = 0; i < 7; i++){
        sum = sum + parseInt(dataNew[0].y[i]);
    }
    dataNew[0].y[7] = sum;
    Plotly.newPlot(graphDiv, dataNew, graphDiv.layout)
}
