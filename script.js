var app = new Vue({
  el: "#app",
  data: {
    results: {}
  }
});
$.getJSON("https://api.npms.io/v2/search?q=keywords:hyperterm&size=100", function(data) {
  app.results = data.results;
});