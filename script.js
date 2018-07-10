var app = new Vue({
  el: "#app",
  data: {
    find: "",
    results: {},
    active: localStorage.getItem("active") || "hyperterm",
    tabs: [{
      name: "Hyper",
      id: "hyperterm"
    },{
      name: "Gulp",
      id: "gulpplugin"
    }]
  },
  methods: {
    search: function() {
      $.getJSON("https://api.npms.io/v2/search?q=keywords:" + app.active + "+" + app.find + "&size=100", function(data) {
        app.results = data.results;
      });
    }
  }
});
var timer;
$(document).keyup(function() {
  clearTimeout(timer)
  timer = setTimeout(function() {
    app.search();
  }, 500);
});
app.search();