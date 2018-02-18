






const width = window.innerWidth;
const height = window.innerHeight;


const margin = {
"top":10,
"bottom":10,
"left":10,
"right":10,


}


const vis1svg = d3.select('#vis1')
.append("svg")
.attr("width", width-margin.top-margin.bottom)
.attr("height", height-margin.top-margin.bottom)

function executeVis1 () {

let step =1;


var start = setInterval(cycleTime, 18.52);

function myStopFunction() {
    clearInterval(start);
}


function cycleTime () {
  
  // var hr =1;
  
  // while (step < 480) 
  
  {
  // console.log("step"+step)
  
  var m1 = moment([2007, 0, 1]);;
// var m2 = moment([2007, 0, 20]);
  // var m3= m1.add(step, 'h');
  
  var duration = moment.duration({'hours' : step});
var added  = moment([2007, 0, 1]).add(duration); // February 1
var diff = moment.preciseDiff(m1, added);
  
 var doc = document.querySelector('#time')
 doc.innerHTML=diff;
  if (step < 481) {
    
    // console.log(step);
    step++}
    
    else {myStopFunction()}

    
    
    
}
  
}






d3.csv("data/win_time.csv", function(dat) {

// console.log(dat)

  dat.forEach(function(d) {
    d.duration = +d.duration;
  });

var adjust = -20;

// vis1svg.append('text')
// .attr("x", 100)
// .attr("y", 190)
// .style("font-family", "Nunito Sans")

// const vis1group = vis1svg.append('g');



var vis1g = vis1svg
.selectAll("g")
	.data(dat)
	// .enter()

var vis1gEnter=vis1g
	.enter()
	.append("g");

	console.log("MMYG GRUP");
console.log(vis1gEnter);
	
var circ = vis1gEnter

	// .selectAll("circle")
	// .data(dat)
	// .enter()
	.append("circle")
	.attr("cx", 150)
	  .attr("cy", (d,i) => i*10-adjust)
.attr("stroke", "black")
.attr("fill", "white")
	.attr("r", 2)
	 .attr("T",0);

 // .attr("cy", 300)
	// console.log(two);


circ.transition()
  .duration((d,i)=> d.duration/200)
  .attr("cx", width-100)
  	 .attr("T",481)


  // .attr("r",4)
.ease(d3.easeLinear)
.delay((d,i)=> 100)



// var m1t = moment([2007, 0, 1]);;
// // var m2 = moment([2007, 0, 20]);
//   // var m3= m1.add(step, 'h');
  
//  var durationt = moment.duration({'hours' : circ.T});
// var addedt  = moment([2007, 0, 1]).add(durationt); // February 1

  

// var difft = moment.preciseDiff(m1t, addedt);
  
//   console.log("difft");
//   console.log(difft);
//     // console.log("diff"+diff)

//  var doc = document.querySelector('#time3')
//  doc.innerHTML=difft;





 

	vis1gEnter
	// .selectAll('text')
	// .data(dat)
	// .enter()
	.append("text")
	.text(d=> d.winner)
	.attr("x", 100)
	.style("font-family", "Nunito Sans")
	.style("font-size", "10")
	.style("text-align", "right")
	.style("font-weight", 900)
	.style("font-color", "red")
	  .attr("y", (d,i) => i*10-adjust);	


	  vis1gEnter
	//   .selectAll("text")
	//   .data(dat)
	// .enter()
	.append("text")
	.text(d=> d.Year)
	.attr("x", 50)
	.style("font-family", "Nunito Sans")
	.style("font-size", "9")
	.style("text-align", "right")
	.style("font-weight", 600)
	  .attr("y", (d,i) => i*10-adjust);


	    vis1gEnter.append("line")
	.attr("x1", 100)
	.attr("y1", (d,i) => i*10-adjust)
		.attr("x2", 100)
          .style("stroke", 'black')
          .style("stroke-width", .5)
          .style("stroke-dasharray", "1, 3")



	.attr("y2", (d,i) => i*10-adjust)
	.transition()
  .duration((d,i)=> d.duration/200)
		.attr("x2", width-100)
	.attr("y2", (d,i) => i*10-adjust)
		.ease(d3.easeLinear);


vis1svg.append("text")
	.attr("x", width-100)
	.style("font-family", "Nunito Sans")
	.style("font-size", "9")
	.style("text-align", "right")
	.style("font-weight", 600)
	  .attr("y", 8)
	  	.attr("opacity", 0)
		.transition()
	  .delay( 3522)

	.attr("opacity", 1)

console.log("dat[3]");
console.log(dat[3]);


var text1 = vis1g.append("text")
	.attr("x", width-600)
	.style("font-family", "Nunito Sans")
	.style("font-size", "22")
	.style("text-align", "right")
	.style("font-weight", 600)
	  .attr("y", 100)
	  .text("YO")
	 //  	 // .text(d3.select(this).attr("T"))

	 //  	 .attr("T",0)
	 //  	.attr("opacity", 1)
		// .transition()
	 //  .delay( 22)
	 //  .duration(8910)
	 //  	.attr("T",8910)





// var i = d3.interpolate(0, 8910);

 text1.selectAll("text")
 .text(0)
 	.transition()
 	.duration(8910)	
 	.delay(0)
 












	//   vis1g.append("text")
	// .text("Nome")
	// .attr("x", )
	// .style("font-family", "Nunito Sans")
	// .style("font-size", "12")
	// .style("text-align", "right")
	// .style("font-weight", 600)
	//   .attr("y", (d,i) => i*11+60);

	// vis1.selectAll("text")
	// .data(dat)
	// .enter()
	// .append("text")
	// .text("FAT")
	// .attr("x", 300)
	// .style("font-family", "Nunito Sans")
	// .style("font-size", "11")
	//   .attr("y", 300)


var select1 = vis1svg
	.data(dat)	
	.enter();



	// vis1svg.selectAll("text")
	// .data(dat)	
	// .enter()
	

	vis1gEnter.append('text')
	.attr("y", (d,i) => i*10-adjust+3)
	.attr("x", width-95)
	.text(d=>d.time)
	.style("font-family", "Nunito Sans")
	.style("font-size", "10")
	.style("text-align", "right")
		.attr("opacity", 0)
		.transition()
	  .delay((d,i)=> d.duration/200)

	.attr("opacity", 1)
	.ease(d3.easeLinear)


var circ2 = vis1g
	.append("circle")
	.attr("cx", 100)
	  .attr("cy", 500)
	  .attr("opacity", .2)
// .attr("stroke", "black")
.attr("fill", function(d){if (d.Year>1970 && d.Year <1980) {return "green"} else if (d.Year>1980 && d.Year <=1990)  {return "pink"} else if (d.Year>1990 && d.Year <=2000)  {return "yellow"} else if (d.Year>2000 && d.Year <=2010)  {return "orange"} else if (d.Year>2010 && d.Year <=2018)  {return "blue"}  })
	.attr("r", 20)





circ2.transition()
  .duration((d,i)=> d.duration/50)
  .attr("cx", width-100)

  // .attr("r",4)
.ease(d3.easeLinear)
.delay((d,i)=> 100)

transition()
  .duration((d,i)=> i*3)
  .attr("cy", (d,i)=> (i*3)+450)

  // .attr("r",4)
.ease(d3.easeLinear)
.delay((d,i)=> 100)




})

}

//the time for the last one

// 1782067/200





var vis2svg = d3.select('#vis2')
.append("svg")
.attr("width", width-margin.top-margin.bottom)
.attr("height", height-margin.top-margin.bottom-400)
.attr('transform', 'translate(20,0)rotate(0)')


var vis2Smallsvg = d3.select('#vis2Small')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")

var vis2Smallsvg2 = d3.select('#vis2Small2')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")

var vis2Smallsvg3 = d3.select('#vis2Small3')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")


var vis2Smallsvg4 = d3.select('#vis2Small4')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")



var vis2Smallsvg5 = d3.select('#vis2Small5')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")

var vis2Smallsvg6 = d3.select('#vis2Small6')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")

var vis2Smallsvg7 = d3.select('#vis2Small7')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")


var vis2Smallsvg8 = d3.select('#vis2Small8')
.append("svg")
.attr("width", 300)
.attr("height", 300)
.attr("fill", "purple")


var step2Height = height-margin.top-margin.bottom-400;

const scaleX = d3.scaleLinear().domain([1,26]).range([0, width-margin.left-margin.right-200]);
const scaleY = d3.scaleLinear().domain([0,5]).range([height-margin.top-margin.bottom-400-80, 0]);


const scaleSmallX = d3.scaleLinear().domain([0,26]).range([0, 300]);
const scaleSmallY = d3.scaleLinear().domain([0,5]).range([280, 0]);

var xAxisStep = d3.axisBottom().scale(scaleX).ticks(22);

var yAxisStep = d3.axisLeft().scale(scaleY).ticks(5)

var axisDisplace;

	vis2svg.append('g')
			.attr('transform', 'translate(60,'+(step2Height-30)+')rotate(0)')
			   	.style("font-family", "Nunito Sans")
			   	.style("font-size", "10")
			   	.classed("axis", true)
			   		.call(xAxisStep)


	vis2svg.append('g')
		.attr('transform', 'translate(40,47)rotate(0)')
	.style("font-family", "Nunito Sans")
			   	.style("font-size", "10")
			   				   	.classed("axis", true)
			   				   			.call(yAxisStep)









var adjust = 'translate(70,32)rotate(0)'


vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(13))
.attr("y", scaleY(4))
.text("Susan Butcher")
.attr('transform', adjust)


vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(13))
.attr("cy", scaleY(4))
.attr("fill", "none")
.attr("r", 2)
.attr('transform', adjust)





vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(17))
.attr("y", scaleY(4))
.text("Jeff King")
.attr('transform', adjust)


vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(17))
.attr("cy", scaleY(4))
.attr("r", 2)
.attr('transform', adjust)



vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(19))
.attr("y", scaleY(4))
.text("Martin Buser")
.attr('transform', adjust)


vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(19))
.attr("cy", scaleY(4))
.attr("r", 2)
.attr('transform', adjust)




vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(16))
.attr("y", scaleY(5))
.text("Rick Swenson")
.attr('transform', adjust)



vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(16))
.attr("cy", scaleY(5))
.attr("r", 2)
.attr('transform', adjust)



vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(10))
.attr("y", scaleY(4.3))
.text("Doug Swingley")
.attr('transform', adjust)



vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(10))
.attr("cy", scaleY(4))
.attr("r", 2)
.attr('transform', adjust)


vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(7))
.attr("y", scaleY(4))
.text("Lance Mackey")
.attr('transform', adjust)



vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(9))
.attr("cy", scaleY(4))
.attr("r", 2)
.attr('transform', adjust)


vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(10))
.attr("y", scaleY(3.7))
.text("Dallas Seavey")
.attr('transform', adjust)


vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(10))
.attr("cy", scaleY(4))
.attr("r", 2)
.attr('transform', adjust)


vis2svg.append('text')
.attr("class", "linePoint")
.attr("x", scaleX(24))
.attr("y", scaleY(3))
.text("Mitch Seavey")
.attr('transform', adjust)


vis2svg.append('circle')
.attr("class", "linePointDot")
.attr("cx", scaleX(24))
.attr("cy", scaleY(3))
.attr("r", 2)
.attr('transform', adjust)


vis2svg.append('text')
	.text("↑Career Victories")
	.attr("x", scaleX(2.5))
	.attr("y", scaleY(3))
				   	.style("font-family", "Nunito Sans")
			   	.style("font-size", "20")



			   	vis2svg.append('text')
	.text("←Total Races Run→ ")
	.attr("x", scaleX(15))
	.attr("y", scaleY(0))
				   	.style("font-family", "Nunito Sans")
			   	.style("font-size", "20")
			   	.attr('transform', adjust)


// console.log(scrollmagic);
console.log("scrollmagic");
d3.csv("data/eliteTrans0.csv", function(data2) {

// console.log(data2);




data2.forEach(function (d){ d.Year = +d.Year; d.Butcher = +d.Butcher; d.Swenson = +d.Swenson});
// console.log(scaleY(12));


function executeSm (sv, ms){

// console.log("ECEXUTEDS");



const lineSm1 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Susan Butcher'])})
	  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");

const lineSm2 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Rick Swenson'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");


const lineSm3 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Martin Buser'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepAfter)
 	// .interpolate("step");

 	const lineSm4 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Jeff King'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)


 // var totalLength = line4[0].getTotalLength();

    // line4
    //   .attr("stroke-dasharray", '100, 100')
    //   .attr("stroke-dashoffset", '100')
    //   .transition()
    //     .duration(2000)
    //     .ease("linear")
    //     .attr("stroke-dashoffset", 0);



 	// .interpolate("step");


 	const lineSm5 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Doug Swingley'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");

 	const lineSm6 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Lance Mackey'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");


 	const lineSm7 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Dallas Seavey'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepAfter)
 	// .interpolate("step");

 	const lineSm8 = d3.line()
	.x(function(d) {return scaleSmallX(d.Year)})
	.y(function(d) {return scaleSmallY(d['Mitch Seavey'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepAfter)
 	// .interpolate("step");






var lineGraphSmall1 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm1)
                                                 .attr("class", "lineStyle")
                         .style("stroke", function(){if (ms == 'Susan Butcher') {return "blue" }else return'#DCDCDC'})




var lineGraphSmall2 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm2)
                                                   .attr("class", "lineStyle")
                         .style("stroke", function(){if (ms == 'Rick Swenson') {return "blue" }else return'#DCDCDC'})





var lineGraphSmall3 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm3)
                                                .attr("class", "lineStyle")
                                                .style("stroke", function(){if (ms == 'Martin Buser') {return "blue" }else return'#DCDCDC'})





                           var lineGraphSmall4 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm4)
                                 .attr("class", "lineStyle")
                                .style("stroke", function(){if (ms == 'Jeff King') {return "blue" }else return'#DCDCDC'})






                           var lineGraphSmall5 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm5)
                                                    .attr("class", "lineStyle")
                                .style("stroke", function(){if (ms == 'Doug Swingley') {return "blue" }else return'#DCDCDC'})




                           var lineGraphSmall6 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm6)
                                                   .attr("class", "lineStyle")
                                .style("stroke", function(){if (ms == 'Lance Mackey') {return "blue" }else return'#DCDCDC'})



                           var lineGraphSmall7 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm7)
                                                   .attr("class", "lineStyle")
                                                   .style("stroke", function(){if (ms == 'Dallas Seavey') {return "blue" }else return'#DCDCDC'})





                           var lineGraphSmall8 = sv.append("path")
							.data([data2])
                           .attr("d", lineSm8)
                         .attr("class", "lineStyle")
                         .style("stroke", function(){if (ms == 'Mitch Seavey') {return "blue" }else return'#DCDCDC'})


var highlight = "purple";

if (ms =="Susan Butcher") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm1)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}

if (ms =="Rick Swenson") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm2)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}



if (ms =="Martin Buser") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm3)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}



if (ms =="Jeff King") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm4)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}


if (ms =="Doug Swingley") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm5)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}


if (ms =="Lance Mackey") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm6)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}


if (ms =="Dallas Seavey") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm7)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}



if (ms =="Mitch Seavey") {

sv.append("path")
							.data([data2])
                           .attr("d", lineSm8)
                         .attr("class", "lineStyle")
                         .style("stroke", highlight)


}






// const jeff = data2.filter(e=>e['Jeff King'] >-1 && e['Jeff King'] < 5)

// console.log(dallas);


// lineGraphSmall4
// .data([jeff])
//    .attr("d", lineSm7)
//    .attr("opacity", 1)
//                                                    .attr("class", "lineStyle")
//                                                    .style("stroke", function(){if (ms == 'Jeff King') {return "red" }else return'#DCDCDC'})



// d3.select('body').style('background-color', 'black');

// var lift = d3.selectAll("path").style('stroke', 'blue');

// lift.each(function() {
//   this.parentNode.insertBefore(this, this.parentNode.firstChild);
// });


    // .on("mouseover", function(){
    //     // move to front
    //     this.parentNode.appendChild(this);
    // })




sv.append('text')
.text(ms)
.attr("x", 100)
.attr("y", 50)
.style('font-family', "Nunito Sans")
.style('fill', "black")
.style('font-weight', 700)


	
}

executeSm(vis2Smallsvg, "Susan Butcher");
executeSm(vis2Smallsvg2, "Rick Swenson");
executeSm(vis2Smallsvg3, "Martin Buser");
executeSm(vis2Smallsvg5, "Doug Swingley");
executeSm(vis2Smallsvg6, "Lance Mackey");
executeSm(vis2Smallsvg7, "Dallas Seavey");
executeSm(vis2Smallsvg8, "Mitch Seavey");
executeSm(vis2Smallsvg4, "Jeff King");


// const lookUp {};


const line1 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Susan Butcher'])})
	  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");

const line2 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Rick Swenson'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");


const line3 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Martin Buser'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepAfter)
 	// .interpolate("step");

 	const line4 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Jeff King'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)


 // var totalLength = line4[0].getTotalLength();

    // line4
    //   .attr("stroke-dasharray", '100, 100')
    //   .attr("stroke-dashoffset", '100')
    //   .transition()
    //     .duration(2000)
    //     .ease("linear")
    //     .attr("stroke-dashoffset", 0);



 	// .interpolate("step");


 	const line5 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Doug Swingley'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");

 	const line6 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Lance Mackey'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepBefore)
 	// .interpolate("step");


 	const line7 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Dallas Seavey'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepAfter)
 	// .interpolate("step");

 	const line8 = d3.line()
	.x(function(d) {return scaleX(d.Year)})
	.y(function(d) {return scaleY(d['Mitch Seavey'])})
		  .defined(function (d) { return d[1] !== null; })

	.curve(d3.curveStepAfter)
 	// .interpolate("step");




var lineGraph1 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line1)
                               .attr("class", "lineStyle1")
                         // .style("stroke", "red")
.attr('transform', adjust)

                   





var lineGraph2 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line2)
                                                   .attr("class", "lineStyle1")
                                                          // .style("stroke", "red")
.attr('transform', adjust)

                         // .style("stroke", '#08589e')





var lineGraph3 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line3)
                                                .attr("class", "lineStyle1")
.attr('transform', adjust)





                           var lineGraph4 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line4)
                                 .attr("class", "lineStyle1")
.attr('transform', adjust)





                           var lineGraph5 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line5)
                                                    .attr("class", "lineStyle1")
.attr('transform', adjust)



                           var lineGraph6 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line6)
                                                   .attr("class", "lineStyle1")
.attr('transform', adjust)


                           var lineGraph7 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line7)
                                                   .attr("class", "lineStyle1")
.attr('transform', adjust)




                           var lineGraph8 = vis2svg.append("path")
							.data([data2])
                           .attr("d", line8)
                         .attr("class", "lineStyle1")
.attr('transform', adjust)









})





var vis3svg = d3.select('#vis3')
.append("svg")
.attr("width", width-margin.top-margin.bottom)
.attr("height", height-margin.top-margin.bottom)

d3.csv("data/careersSum.csv", function(data3) {




// console.log(data3)

vis3svg.selectAll("circle")
	.data(data3)
	.enter()
	.append("circle")
	.attr("cx", 100)
	.attr("cy", 100)
	.attr("r", 15)





});






const scaleScatterX = d3.scaleLinear().domain([0,34]).range([0, width-margin.top-margin.bottom-90]);
const scaleScatterY = d3.scaleLinear().domain([80,0]).range([height-margin.top-margin.bottom-140, 0]);



// var rotateTranslate = d3.svg.transform().rotate(-45).translate(200, 100);
// // rect2.attr('transform', rotateTranslate);



var vis4svg = d3.select("#vis4")
.append("svg")
.attr("width", width-margin.top-margin.bottom)
.attr("height", height-margin.top-margin.bottom)
// .append('g')
// .attr("transform", "rotate(-45)")

// .attr('transform', 'translate(200,-110)rotate(-45)')


// vis4svg.attr('transform', 'translate(200,-110)rotate(-45)')
vis4svg.attr('transform', 'translate(30,30)rotate(0)')






// .attr("transform", "rotate(-45)")
// var vis4svg1 = vis4svg.append('g')

// var rotate = d3.svg.transform().rotate(-45);


// vis4svg.attr('transform', rotate);

// vis4svg.attr('transform', rotate);




// const vis4svg= vis4svg.transform().rotate(45);

d3.csv('data/careersSum.csv', function (data4) {

vis4svg.selectAll("circle")
	.data(data4)
		.enter()
		.append('circle')
		.attr("cx", d=>scaleScatterX(d.n))
		.attr("cy", d=>scaleScatterY(d.mean))
		.attr("r", 5)
		.attr("fill", "black")
		// .attr("stroke", "black")
		.attr("fill", function(d) {if (d.name =="Jeff King" || d.name =="Martin Buser" || d.name =="Rick Swenson" || d.name =="Susan Butcher" || d.name =="Doug Swingley" || d.name =="Lance Mackey" || d.name =="Jeff King" || d.name =="Mitch Seavey"|| d.name =="Dallas Seavey" || d.name =="John Baker" || d.name =="Robert Sorilie" || d.name =="Joe Runyan" || d.name =="Libby Riddles"|| d.name =="Dean Osmar"|| d.name =="Rick Mackey"|| d.name =="Joe May"|| d.name =="Dick Mackey"|| d.name =="Gerald Riley"|| d.name =="Emmitt Peters"|| d.name =="Carl Huntington"|| d.name =="Dick Wilmarth"){return "darkblue"}})

		.attr("opacity", .3)
		.attr('transform', 'translate(20,20)rotate(0)')

var vis4svgG = vis4svg.append('g');

vis4svgG.append('text')
	.text("←Number of Races Run →")
	.attr("x", scaleScatterX(15))
	.attr("y", scaleScatterY(12))
				   	.style("font-family", "Nunito Sans")
			   	.style("font-size", "20")


vis4svgG.append('text')
	.text("↑Career Place Average ")
	.attr("x", scaleScatterX(3))
	.attr("y", scaleScatterY(72))
				   	.style("font-family", "Nunito Sans")
			   	.style("font-size", "20")


vis4svg.selectAll("text")
	.data(data4)
		.enter()
		.append('text')
		.attr("x", d=>scaleScatterX(d.n))
		.attr("y", d=>scaleScatterY(d.mean))
		// .text( d=>d.name)
		.attr("opacity", .9)
		.style("font-size", 6)





})




var xAxisbar = d3.axisTop().scale(scaleScatterX).ticks(12);

var yAxisbar = d3.axisLeft().scale(scaleScatterY).ticks(22)

var axisDisplace;

	vis4svg.append('g')
			.attr('transform', 'translate(20,20)rotate(0)')
			   	.style("font-family", "Nunito Sans")
			   	.style("font-size", "10")
			   	.classed("axis", true)
			   		.call(xAxisbar)


	vis4svg.append('g')
		.attr('transform', 'translate(20,20)rotate(0)')
	.style("font-family", "Nunito Sans")
			   	.style("font-size", "10")
			   				   	.classed("axis", true)
			   				   			.call(yAxisbar)




const vis5svg = d3.select('#vis5')
	.append('svg')
	.attr("width", width-margin.top-margin.bottom)
	.attr("height", height-margin.top-margin.bottom)


const scalePatternX = d3.scaleLinear().domain([0,1050000]).range([0, width-margin.left-margin.right-250]);


d3.csv("data/2013output.csv", function (data5){


// data5.forEach(function (d){ d.enRoute_Yentna = +d.enRoute_Yentna; d.restTime_Yentna=  +d.restTime_Yentna});

// data2.forEach(function (d){ d.Year = +d.Year; d.Butcher = +d.Butcher; d.Swenson = +d.Swenson});

console.log("THE DATAS5");
console.log(data5);

const restColor = "#3288bd";
const runColor = "#66c2a5";

var select5 = vis5svg.selectAll('line')
	.data(data5, function(d) { return d.musher; })	
	.enter();

	var select5g = select5.append('g');

	var barWidth = 9;
	var barGap =9;


select5g.append('text')
	.text(d=>d.musher)
	.attr("x", 20)
	.style("font-size", 8)
	.style("font-family","Nunito Sans")
	.attr("y", (d,i)=>i*barGap)
	.attr('transform', 'translate(0,33)rotate(0)')




function executePattern (x1, x2, action, delayTime) {

	select5g.append('line')
	// .style("stroke", "green")  // colour the line
	.style("stroke-width", function() { if (action=="rest") {return barWidth-2} else {return barWidth-2 }})  // colour the line
	.attr("opacity", 0)
	.attr("stroke-dasharray", "1, .1")
	    .attr("y1", (d,i)=>i*barGap)      // y position of the first end of the line
    .attr("y2", (d,i)=>i*barGap)
.attr('transform', 'translate(0,30)rotate(0)')


	.attr("x1", (d,i)=>scalePatternX(d[x1])+50  )   // x position of the first end of the line
    .attr("x2", (d,i)=>scalePatternX(d[x2])+50 )   // x position of the second end of the line
	    .transition()
    .delay(delayTime)
    // .delay((d,i)=>i*200)
.ease(d3.easeCircle)

    .attr("x1", (d,i)=>scalePatternX(d[x1])+100)     // x position of the first end of the line
    .attr("y1", (d,i)=>(i*barGap))      // y position of the first end of the line
    .attr("x2", (d,i)=>scalePatternX(d[x2])+100)    // x position of the second end of the line
    .attr("y2", (d,i)=>(i*barGap))
    	.attr("opacity", 1)
    	// .attr("stroke-linecap", "round")

	.style("stroke", function() {if (action =="rest") {return restColor} else {return runColor }}) 





}


var patternDelay = 400;

function executeVis5 () {

executePattern('enRoute_Yentna', 'restTime_Yentna', "rest", (patternDelay*1));
executePattern('restTime_Yentna', 'enRoute_Skwentna', "run", patternDelay*2);
executePattern('enRoute_Skwentna', 'restTime_Skwentna', "rest", patternDelay*3);
executePattern('restTime_Skwentna', 'enRoute_Finger.Lake', "run", patternDelay*4);
executePattern('enRoute_Finger.Lake', 'restTime_Finger.Lake', "rest", patternDelay*5);
executePattern('restTime_Finger.Lake', "enRoute_Rainy.Pass", "run", patternDelay*6);
executePattern('enRoute_Rainy.Pass', 'restTime_Rainy.Pass', "rest", patternDelay*7);
executePattern('restTime_Rainy.Pass', 'enRoute_Rohn', "run", patternDelay*8);
executePattern('enRoute_Rohn', 'restTime_Rohn', "rest", patternDelay*9);
executePattern('restTime_Rohn', 'enRoute_Nikolai', "run", patternDelay*10);
executePattern('enRoute_Nikolai', 'restTime_Nikolai', "rest", patternDelay*11);
executePattern('restTime_Nikolai', 'enRoute_McGrath', "run", patternDelay*12);
executePattern('enRoute_McGrath', 'restTime_McGrath', "rest", patternDelay*13);
executePattern('restTime_McGrath', 'enRoute_Takotna', "run", patternDelay*14);
executePattern('enRoute_Takotna', 'restTime_Takotna', "rest", patternDelay*15);
executePattern('restTime_Takotna', 'enRoute_Ophir', "run", patternDelay*16);
executePattern('enRoute_Ophir', 'restTime_Ophir', "rest", patternDelay*17);
executePattern('restTime_Ophir', 'enRoute_Iditarod', "run", patternDelay*18);
executePattern('enRoute_Iditarod', 'restTime_Iditarod', "rest", patternDelay*19);
executePattern('restTime_Iditarod', 'enRoute_Shageluk', "run", patternDelay*20);
executePattern('enRoute_Shageluk', 'restTime_Shageluk', "rest", patternDelay*21);
executePattern('restTime_Shageluk', 'enRoute_Anvik', "run", patternDelay*22);
executePattern('enRoute_Anvik', 'restTime_Anvik', "rest", patternDelay*23);
executePattern('restTime_Anvik', 'enRoute_Grayling', "run", patternDelay*24);
executePattern('enRoute_Grayling', 'restTime_Grayling', "rest", patternDelay*25);
executePattern('restTime_Grayling', 'enRoute_Eagle.Island', "run", patternDelay*26);
executePattern('enRoute_Eagle.Island', 'restTime_Eagle.Island', "rest", patternDelay*27);
executePattern('restTime_Eagle.Island', 'enRoute_Kaltag', "run", patternDelay*28);
executePattern('enRoute_Kaltag', 'restTime_Kaltag', "rest", patternDelay*29);
executePattern('restTime_Kaltag', 'enRoute_Unalakleet', "run", patternDelay*30);
executePattern('enRoute_Unalakleet', 'restTime_Unalakleet', "rest", patternDelay*31);
executePattern('restTime_Unalakleet', 'enRoute_Shaktoolik', "run", patternDelay*32);
executePattern('enRoute_Shaktoolik', 'restTime_Shaktoolik', "rest", patternDelay*33);
executePattern('restTime_Shaktoolik', 'enRoute_Koyuk', "run", patternDelay*34);
executePattern('enRoute_Koyuk', 'restTime_Koyuk', "rest", patternDelay*35);
executePattern('restTime_Koyuk', 'enRoute_Elim', "run", patternDelay*36);
executePattern('enRoute_Elim', 'restTime_Elim', "rest", patternDelay*37);
executePattern('restTime_Elim', 'enRoute_White.Mountain', "run", patternDelay*38);
executePattern('enRoute_White.Mountain', 'restTime_White.Mountain', "rest", patternDelay*39);
executePattern('restTime_White.Mountain', 'enRoute_Safety', "run", patternDelay*40);
executePattern('enRoute_Safety', 'restTime_Safety', "rest", patternDelay*41);
executePattern('restTime_Safety', 'enRoute_Nome', "run", patternDelay*42);



// executePattern('enRoute_Finger.Lake', 'restTime_Finger.Lake', "rest", 50);
// executePattern('enRoute_Finger.Lake', 'restTime_Finger.Lake', "rest", 50);



	select5
	.append('line')
	.style("stroke", "black")  // colour the line
	.style("stroke-width", barWidth-2)  // colour the line
    .attr("x1", (d,i)=>50)     // x position of the first end of the line
    .attr("y1", (d,i)=>i*barGap)      // y position of the first end of the line
    .attr("x2", (d,i)=>50)     // x position of the second end of the line
    .attr("y2", (d,i)=>i*barGap)
.attr('transform', 'translate(0,30)rotate(0)')


    .transition()
    .delay(300)
        .attr("x1", (d,i)=>100)     // x position of the first end of the line
    .attr("y1", (d,i)=>i*barGap)      // y position of the first end of the line
    .attr("x2", (d,i)=>scalePatternX(d.enRoute_Yentna)+100)     // x position of the second end of the line
    .attr("y2", (d,i)=>i*barGap)
	.style("stroke", runColor)  // colour the line

}



var visCont = new ScrollMagic.Controller();

	var vis5Scene = new ScrollMagic.Scene({

			triggerElement: "#vis5Trigger",
			duration: 900}).addTo(visCont)
	// .setClassToggle("#bars", "fade")
		.on("start", function () {
				executeVis5()});



});


var visCont2 = new ScrollMagic.Controller();


	var vis1Scene = new ScrollMagic.Scene({

			triggerElement: "#vis1Trigger",
			duration: 900}).addTo(visCont2)
	// .setClassToggle("#bars", "fade")
		.on("start", function () {
				executeVis1()});








// start();
// console.log(moment);
// console.log(start);




