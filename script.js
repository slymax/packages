var app = new Vue({
  el: "#app",
  data: {
    search: "",
    results: {}
  }
});
function search() {
  $.getJSON("https://api.npms.io/v2/search?q=keywords:hyperterm" + "+" + app.search + "&size=100", function(data) {
    app.results = data.results;
  });
}
$('input').keypress(function(e) {
  if (e.which == 13) search();
});
search();