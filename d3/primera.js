//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var data=[
 {nombre : "La bella y la bestia", ganancias : 1263521126},
 {nombre: "The Fate of the Furious", ganancias : 1235761498},
 {nombre : "Spider-Man: Homecoming", ganancias : 880166924},
 {nombre : "Thor: Ragnarok", ganancias : 863565527},
 {nombre : "Guardianes de la Galaxia Vol. 2", ganancias : 794861794},
];

var w = 900;
var h = 900;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#EEEEEE");

 d3.selectAll('circle')
    .data(data)
    .attr('fill','#d35a0a')
    .attr('r', function(d) {
      return d.ganancias / 50000000;
    })

 d3.selectAll('text')
    .data(data)
    .attr('fill','#ffffff')                      
    .text(function(d) {
      return ". " + d.nombre + "  " + "$" + d.ganancias;
    });