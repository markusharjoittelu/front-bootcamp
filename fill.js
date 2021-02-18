/* fill.js creates content to index.html with Javasript*/
function fillpage() {
  /*Get data from Heroku app api*/
  $.getJSON('https://thdbapi.herokuapp.com/api', function (data) {
    var wtext = document.querySelector("#text");
    wtext.innerHTML = "Tähän tulee pottukellarin olosuhde tiedot";
    var el = document.querySelector("#temp");
    el.innerHTML = "Uusin lämpötila: " + data[data.length-1][2] + String.fromCharCode(176) + "C ja suhteellinen kosteus: " + data[data.length-1][3] + "%";
    
  /*Create trace arrays from data */
    var trace1 = {
      x: [],
      y: [],
      type: 'scatter',
      name: "Kellarin lämpötilat"
    };
    for (var i = 0; i < data.length; i++){
     trace1.x.push(data[i][0]);
    }
    for (var i = 0; i < data.length; i++) {
      trace1.y.push(data[i][2]);
    }

    var trace2 = {
      x: [],
      y: [],
      type: 'scatter',
      name: "Kellarin suhteelliset kosteudet"
    };
    for (var i = 0; i < data.length; i++){
      trace2.x.push(data[i][0]);
    }
    for (var i = 0; i < data.length; i++){
     trace2.y.push(data[i][3]);
    }

    var trace3 = {
      x: [],
      y: [],
      type: 'scatter',
      name: "Lämpötilat ulkona"
    };
    for (var i = 0; i < data.length; i++){
     trace3.x.push(data[i][0]);
    }
    for (var i = 0; i < data.length; i++) {
      trace3.y.push(data[i][4]);
    }

    var trace4 = {
      x: [],
      y: [],
      type: 'scatter',
      name: "Suhteelliset kosteudet ulkona"
    };
    for (var i = 0; i < data.length; i++){
     trace4.x.push(data[i][0]);
    }
    for (var i = 0; i < data.length; i++) {
      trace4.y.push(data[i][5]);
    }

  var data1 = [trace1, trace3];
  var data2 = [trace2, trace4];
  
  Plotly.newPlot('plotTemps', data1);
  Plotly.newPlot('plotHums', data2);

});
}