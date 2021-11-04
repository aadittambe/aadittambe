

var map = L.map('map', {
    minZoom: 7,
    maxZoom: 10,
}).setView([38.9, -77], 8);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWFkaXR0YW1iZSIsImEiOiJja3R2eDFjZjMyZXJxMnhwcTR0Y3F5eGk2In0.9AAyIXkTkCMcZ8NNlDPB9g', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

function getColorTotal(d, min = -9.30, max = 16.4243631767252, endColor = '#1979b9', startColor = '#de5826') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorWhite(d, min = -20, max = 20, endColor = '#1979b9', startColor = '#de5826') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorBlack(d, min = -21, max = 40, endColor = '#1979b9', startColor = '#de5826') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorHispanic(d, min = 0, max = 102, endColor = '#1979b9', startColor = '#7C6970') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorIndian(d, min = -51, max = 30, endColor = '#1979b9', startColor = '#de5826') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorAsian(d, min = 0, max = 85, endColor = '#1979b9', startColor = '#7C6970') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorPacific(d, min = 0, max = 120, endColor = '#1979b9', startColor = '#7C6970') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorOther(d, min = 0, max = 370, endColor = '#1979b9', startColor = '#7C6970') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function getColorTwo(d, min = 0, max = 265, endColor = '#1979b9', startColor = '#7C6970') {
    const scale = chroma.scale([startColor, endColor]).domain([min, max]);
    return scale(d).hex();
}

function style(feature) {
    var property = parseFloat((feature.properties.total)).toFixed(1);

    return {
        fillColor: getColorTotal(property),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function onEachFeature(feature, layer) {
    // control that shows state info on hover
    // var info = L.control();

    // info.onAdd = function (map) {
    //     this._div = L.DomUtil.create('div', 'info');
    //     this.update();
    //     return this._div;
    // };

    // info.update = function (props) {
    //     this._div.innerHTML = '<h4>Maryland change in population</h4>' + (props ?
    //         '<b>' + props['County'] + '</b><br />' + 'Change: ' + props['Percent change in total population'] + '%'
    //         : 'Hover over a state');
    // };

    // info.addTo(map);
    // console.log(feature.properties.County)
    layer.bindPopup("<p style = \"text-align:center;\">" + '<strong>' + feature.properties.geographic_area_name + '</strong>' + " <br>Percent change in total population: " + '<strong>' + parseFloat((feature.properties.total)).toFixed(1) + "%  </strong></p>");
}
var geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature, style: style });

geojsonLayer.addTo(map);

var totalLegend = L.control({ position: 'bottomright' });

totalLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [22, 18, 14, 10, 6, 2, -2, -6, -10],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorTotal(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};

//Create the copd legend
var whiteLegend = L.control({ position: 'bottomright' });

whiteLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [22, 18, 14, 10, 6, 2, -2, -6, -10],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorWhite(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};


//Create the heart disease legend
var blackLegend = L.control({ position: 'bottomright' });

blackLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-26, -18, -10, -2, 6, 14, 22, 30],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorBlack(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};


//Create the kidney legend
var hispanicLegend = L.control({ position: 'bottomright' });

hispanicLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [100, 80, 60, 40, 20],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorHispanic(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};


//Create the diabetes legend
var indianLegend = L.control({ position: 'bottomright' });

indianLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [35, 25, 15, 5, -5, -15, -25, -35],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorIndian(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};

var asianLegend = L.control({ position: 'bottomright' });

asianLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [85, 75, 65, 55, 45, 35, 25, 15],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorAsian(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};

var pacificLegend = L.control({ position: 'bottomright' });

pacificLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [120, 10, 80, 60, 40, 20],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorPacific(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};

var otherLegend = L.control({ position: 'bottomright' });

otherLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [400, 350, 300, 250, 200, 150, 100, 50],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorOther(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};

var twoLegend = L.control({ position: 'bottomright' });

twoLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [150, 140, 130, 120, 100, 90],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorTwo(grades[i] + 1) + '"></i> ' +
            grades[i] + '%' + (grades[i + 1] ? ' and ' + grades[i + 1] + '%' + '<br>' : ' and less');
    }

    return div;
};


// get color depending on population density value
// function getColor(d) {
//     // console.log(d)
//     return d > 15 ? '#800026' :
//         d > 10 ? '#BD0026' :
//             d > 5 ? '#E31A1C' :
//                 d > 0 ? '#FC4E2A' :
//                     d > 5 ? '#FD8D3C' :
//                         d > 7.5 ? '#FEB24C' :
//                             d > 10 ? '#FED976' :
//                                 '#FFEDA0';
// }



// function style(feature) {
//     return {
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         // dashArray: '3',
//         fillOpacity: 0.8,
//         fillColor: getColor(feature.properties['Percent change in total population'])
//     };
// }

// function highlightFeature(e) {
//     var layer = e.target;

//     layer.setStyle({
//         weight: 5,
//         color: '#666',
//         // dashArray: '',  
//         fillOpacity: 1
//     });

//     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//     }

//     info.update(layer.feature.properties);
// }

// var geojson;

// function resetHighlight(e) {
//     geojson.resetStyle(e.target);
//     info.update();
// }

// function zoomToFeature(e) {
//     map.fitBounds(e.target.getBounds());
// }

// function onEachFeature(feature, layer) {
//     layer.on({
//         mouseover: highlightFeature,
//         mouseout: resetHighlight,
//         click: zoomToFeature
//     });
// }

// geojson = L.geoJson(mdData, {
//     style: style,
//     onEachFeature: onEachFeature
// }).addTo(map);

var currentLegend = totalLegend;


var dropdown = L.control({ position: 'topright' });

dropdown.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<select id="select1"><option>Total</option><option>White</option><option>Black</option><option>Hispanic</option><option>American Indian</option><option>Asian</option><option>Pacific Islander</option><option>Other</option><option>Two or more races</option></select>';
    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
    return div;
};
dropdown.addTo(map);

$('#select1').change(function () {


    //Create a variable called property and assign what feature property from the GeoJson to show based on the dropdown
    var property;

    //For each dropdown option, set the property to display from the GeoJson
    if (this.value == "Total") {
        property = 'total';

    }

    else if (this.value == "White") {
        property = "white";

    }
    else if (this.value == "Black") {
        property = "black";

    }

    else if (this.value == "Hispanic") {
        property = "hispanic";

    }

    else if (this.value == "American Indian") {
        property = "native";

    }

    else if (this.value == "Asian") {
        property = "asian";

    }

    else if (this.value == "Pacific Islander") {
        property = "pacific_islander";

    }

    else if (this.value == "Other") {
        property = "other";

    }

    else if (this.value == "Two or more races") {
        property = "two_races";

    }

    function styleTotal(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorTotal(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    function styleWhite(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorWhite(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function styleBlack(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorBlack(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function styleHispanic(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorHispanic(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function styleAmericanIndian(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorIndian(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function styleAsian(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorAsian(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function stylePacific(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorPacific(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }


    function styleOther(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorOther(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function styleTwo(feature) {

        //This takes the property variable from above and does some math to turn decimal into percent and show the number to one decimal point
        property2 = parseFloat(feature['properties'][property]).toFixed(1);

        return {
            fillColor: getColorTwo(property2),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    function onEachFeature2(feature, layer) {
        var updatedProperty
        // Create custom popups for two zip codes with no data
        // console.log((feature['properties'][property]))
        // console.log('----')
        // console.log(layer)
        if (property == "black") {
            updatedProperty = "Black population"
        }
        else if (property == "white") {
            updatedProperty = "white population"
        }
        else if (property == "hispanic") {
            updatedProperty = "Hispanic population"
        }
        else if (property == "Asian") {
            updatedProperty = "Asian population"
        }
        else if (property == "native") {
            updatedProperty = "American Indian population"
        }
        else if (property == "pacific_islander") {
            updatedProperty = "Pacific Islander population"
        }
        else if (property == "other") {
            updatedProperty = "population that identifies as other"
        }
        else if (property == "two_races") {
            updatedProperty = "population that identifies as two or more races"
        }
        if (isNaN(feature['properties'][property]) == true) {
            layer.bindPopup("<p style = \"text-align:center;\">" + '<strong>' + feature.properties.geographic_area_name + '</strong>' + " <br>" + "Note: " + 'In 2010, no one identified as Pacific Islander. In 2020, this number changed to 2. ' + "</p>");
        } else {
            // this is the default popup
            layer.bindPopup("<p style = \"text-align:center;\">" + '<strong>' + feature.properties.geographic_area_name + '</strong>' + " <br>" + "Percent change in " + updatedProperty + ": " + '<strong>' + parseFloat((feature['properties'][property])).toFixed(1) + "% </strong></p>");
        }
    }

    if (this.value == "Total") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleTotal });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = totalLegend;
        totalLegend.addTo(map);

    }

    else if (this.value == "White") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleWhite });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = whiteLegend;
        whiteLegend.addTo(map);

    }

    else if (this.value == "Black") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleBlack });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = blackLegend;
        blackLegend.addTo(map);

    }
    else if (this.value == "Hispanic") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleHispanic });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = hispanicLegend;
        hispanicLegend.addTo(map);

    }

    else if (this.value == "American Indian") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleAmericanIndian });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = indianLegend;
        indianLegend.addTo(map);

    }

    else if (this.value == "Asian") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleAsian });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = asianLegend;
        asianLegend.addTo(map);

    }

    else if (this.value == "Pacific Islander") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: stylePacific });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = pacificLegend;
        pacificLegend.addTo(map);

    }

    else if (this.value == "Other") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleOther });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = otherLegend;
        otherLegend.addTo(map);

    }

    else if (this.value == "Two or more races") {

        map.removeLayer(geojsonLayer);
        geojsonLayer = new L.geoJson(mdData, { onEachFeature: onEachFeature2, style: styleTwo });
        geojsonLayer.addTo(map);

        map.removeControl(currentLegend);
        currentLegend = twoLegend;
        twoLegend.addTo(map);

    }


})

map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


// var legend = L.control({ position: 'bottomleft' });

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 10, 20, 50, 100, 200, 500, 1000],
//         labels = ['this'],
//         from, to;

//     for (var i = 0; i < grades.length; i++) {
//         from = grades[i];
//         to = grades[i + 1];

//         labels.push(
//             '<i style="background:' + getColorTotal(from + 1) + '"></i> ' +
//             from + (to ? '&ndash;' + to : '+'));
//     }

//     div.innerHTML = labels.join('<br>');
//     return div;
// };

currentLegend.addTo(map);
