 
function fillpage() {
  $.getJSON('https://thdbapi.herokuapp.com/api', function (data) {
    var wtext = document.querySelector("#text");
    wtext.innerHTML = "Tähän tulee pottukellarin olosuhde tiedot";
    var el = document.querySelector("#temp");
    el.innerHTML = "Uusin lämpötila: " + data[data.length-1][2] + String.fromCharCode(176) + "C ja suhteellinen kosteus: " + data[data.length-1][3] + "%";
  
    var trace1 = {
      x: [],
      y: [],
      type: 'scatter',
      name: "Temperatures"
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
      name: "Humidity"
    };
    for (var i = 0; i < data.length; i++){
      trace2.x.push(data[i][0]);
    }
    for (var i = 0; i < data.length; i++){
     trace2.y.push(data[i][3]);
    }
    
      
    /*
    data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
          el.innerHTML +=`${key};${value[2]} `;
      });
      console.log('-------------------');
  });*/
      
  var data = [trace1, trace2];
  
  Plotly.newPlot('plotData', data);
});
}