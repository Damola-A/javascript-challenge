// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")

function displayData(info){ 
    tbody.text("")
    info.forEach(function(sightings){
    new_tableRow = tbody.append("tr")
    Object.entries(sightings).forEach(function([key, value]){
        new_table = new_tableRow.append("td").text(value)	
    })
})}

displayData(tableData)

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");

    console.log(dateInput.property("value"));
    console.log(cityInput.property("value"));
    console.log(stateInput.property("value"));
    console.log(countryInput.property("value"));
    console.log(shapeInput.property("value"));

    var filtered = tableData.filter(sightings =>{
        return (sightings.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
                  (sightings.city===cityInput.property("value") || !cityInput.property("value")) &&
                  (sightings.state===stateInput.property("value") || !stateInput.property("value")) &&
                  (sightings.country===countryInput.property("value") || !countryInput.property("value")) &&
                  (sightings.shape===shapeInput.property("value") || !shapeInput.property("value"))
       })

       displayData(filtered);
    });
    


