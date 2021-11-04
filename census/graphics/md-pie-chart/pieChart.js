// 2010 values
var census2010 = [{
    title: "White",
    value: 54.69
},
{
    title: "Black",
    value: 28.99
},
{
    title: "Hispanic",
    value: 8.15
},
{
    title: "Asian",
    value: 5.48
},
{
    title: "Two or more races",
    value: 5.48
},
{
    title: "Other",
    value: 0.20
},
{
    title: "American Indian",
    value: 0.23
},
{
    title: "Pacific Islander",
    value: 0.04
}
];

// 2020 values
var census2020 = [{
    title: "White",
    value: 47.16
},
{
    title: "Black",
    value: 29.05
},
{
    title: "Hispanic",
    value: 11.81
},
{
    title: "Asian",
    value: 6.76
},
{
    title: "Two or more races",
    value: 4.38
},
{
    title: "Other",
    value: 0.57
},
{
    title: "American Indian",
    value: 0.19
},
{
    title: "Pacific Islander",
    value: 0.04
}
];


var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(["#de5826", "#faa916", "#2ec4b6", "#8fd694", "#80217f", '#1979b9', '#990000', '#fbd603']);


var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var svg = d3.select("#pie")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var pie = d3.pie()
    .value(function (d) {
        // console.log(d.value)
        return d.value;
    })
    .sort(null);

var g = svg.selectAll("arc")
    .data(pie(census2020))
    // .data(pie(census2020))
    .enter().append("g")
    .attr("class", "arc")
    .on('mouseover', function (d, i) {
        // console.log(d)
        // console.log('---')
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.95')
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html('<strong>' + d.data.title + '</strong>' + "<br/>" + d.value + "%")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })
    .on('mouseout', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '1')
        div.transition()
            .duration(500)
            .style("opacity", 0);
    })
    .attr('transform', 'translate(0, 0)');

g.append("path")
    .attr("d", arc)
    .style("fill", function (d) {
        // console.log(data)
        return color(d.data.title);
    });

document.getElementById("census2010").style.backgroundColor = "#666666"
document.getElementById("census2020").style.backgroundColor = "#fbd603"

function changeData(data) {
    var pie = d3.pie()
        .value(function (d) {
            // console.log(d.value)
            return d.value;
        })(data);

    path = d3.select("#pie")
        .selectAll("path")
        .data(pie);
    path.transition().duration(1).attr("d", arc);
    // console.log(data)
    g
        .data(data)
        .on('mouseover', function (d, i) {
            // console.log(d)
            // console.log('---')
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.95')
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html('<strong>' + d.title + '</strong>' + "<br/>" + d.value + "%")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1')
            div.transition()
                .duration(500)
                .style("opacity", 0);
        })
}

d3.select("button#census2010")
    .on("click", function () {
        changeData(census2010);
        document.getElementById("census2010").style.backgroundColor = "#fbd603"
        document.getElementById("census2020").style.backgroundColor = "#666666"
    })
d3.select("button#census2020")
    .on("click", function () {
        changeData(census2020);
        document.getElementById("census2010").style.backgroundColor = "#666666"
        document.getElementById("census2020").style.backgroundColor = "#fbd603"
    })

// Thank you to the following resources for inspiration:
// https://medium.com/@kj_schmidt/quick-fix-to-make-your-d3-js-graph-responsive-bb63520cfba8
// https://medium.com/@kj_schmidt/hover-effects-for-your-scatter-plot-447df80ea116
// https://www.d3-graph-gallery.com/graph/pie_changeData.html