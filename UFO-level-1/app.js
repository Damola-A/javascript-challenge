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
    console.log(dateInput.property("value"));

    var filtered = tableData.filter(sightings =>{
        return (sightings.datetime===dateInput.property("value") || !dateInput.property("value") ) 
    })

    displayData(filtered);
    });
    
