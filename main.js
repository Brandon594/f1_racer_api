   
function APICall(year,set){
  $.get("https://ergast.com/api/f1/"+year+"/"+set+"/driverStandings.json", function( data )
   {
    for (var index = 0; index < data["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"].length; index++) {
      var driverStanding = data["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][index];
      var position = driverStanding["position"];
      var points = driverStanding["points"];
      var id = driverStanding["Driver"]["driverId"];
      console.log(id);
      $("#resultTable").append("<tr><td>" + position + "</td><td>" + id + "</td><td>" + points + "</td></tr>");
  }
  })
}


//anonymous function which parses year & set 
$(function() {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('year') && urlParams.has('set')) {
    var year = urlParams.get('year');
    var set = urlParams.get('set');
    APICall(year,set)
}})


