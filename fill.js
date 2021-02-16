 
function fillpage() {
  $.getJSON('https://thdbapi.herokuapp.com/api', function (data) {
    // JSON result in `data` variable
    var wtext = document.querySelector("#text");
    wtext.innerHTML = "Tähän tulee pottukellarin olosuhde tiedot";
    var el = document.querySelector("#temp");
    el.innerHTML = "tähän lämpötila " + data;
  });
}