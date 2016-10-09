

// d3.select('.item').text('select') //selects the first item of class item and changes its innerText

// d3.selectAll('.item').text('select')  //selects all elements of class item and changes their innterText to select

// d3.select('.item:nth-child(3)').text('select')     //to select third element in item class
// d3.selectAll('.item:nth-child(3n)').text('select')	//to select every third element
// d3.selectAll('.item:nth-child(n+3)').text('select')  //all the elelements after third element, including third element
// d3.selectAll('.item:nth-child(odd)').text('select')	//all the alternate elements, starting from 0

// /*----------------------------------------------------------------------------------------------------------------------*/

// d3.selectAll('.item:nth-child(2n)')
//   .html('<strong>selected</strong>')	//similar to .text; changes the innerText

// d3.select('.item:nth-child(2)')
//   .append('div')
//   .html('<strong>selected</strong>')	//add div tag after 2nd element in item class

// d3.select('#chart')
//   .append('div')
//   .html('<strong>selected</strong>')	//appends div after the last item in chart div

// d3.select('#chart')
//   .insert('div',':nth-child(3)')
//   .html('<strong>selected</strong>')	//inserts div after the second child, into 3rd position

// d3.select('#chart .item:nth-child(3)')
//   .remove()								//to remove an element

// /*----------------------------------------------------------------------------------------------------------------------*/

// d3.selectAll('.item')
//   .attr('class', 'highlight')   //to add attribute to an element

// d3.selectAll('.item')
//   .classed('highlight', true)    //to add a class to an element


// d3.selectAll('.item:nth-child(3)')
//   .classed({
//   	'highlight': true,
//   	'item': false,
//   	'bigger': true
//   })							//using an object inside .classed

// d3.selectAll('.item:nth-child(3)')
//   .style({
//   	'background': '#268BD2',
//   	'padding': '10px',
//   	'margin': '5px',
//   	'color': '#EEE8D5'
//   })							//.style() used to add CSS; it adds style attribute to the element

// /*----------------------------------------------------------------------------------------------------------------------*/

//  d3.selectAll('.item')
//    .data([true])
//    .style('background', '#268BD2')		//the style() is applied to the first item returned by the selectAll. This is becaused .data() has only one value

//  d3.selectAll('.item')
//    .data([true, true])
//    .style('background', '#268BD2')		//the style() is applied to the first two elements returned by selectAll as data() has 2 true

// /*----------------------------------------------------------------------------------------------------------------------*/

//  var myStyles = ['#268BD2'];

//   d3.selectAll('.item')
//    .data(myStyles)
//    .style('background', myStyles[0])

// ----------------------------------------------------------------------------------------------------------------------

//  var myStyles = ['#268BD2', '#BD3613']

//   d3.selectAll('.item')
//    .data(myStyles)
//    .style('background', function(d) {
//    		return d;
//    })									//argument 'd' in callback function gets the value returned by the previous chained method, ie, data. Hence it will get the value myStyles
//    										// So, for every element under item,

// /*----------------------------------------------------------------------------------------------------------------------*/

//   var myStyles = [
//   	'#268BD2', 
//   	'#BD3613',
//   	'#A57706',
//   	'#2176C7',
//   	'#595AB7'
//   ];

// d3.selectAll('.item')
//   .data(myStyles)
//   .style({
//   	'color': 'white',
//   	'background': function(d) {
//   		return d;
//   	}
//   })

// /*----------------------------------------------------------------------------------------------------------------------*/

// var myStyles = [
// 	{ width: 200,
// 	  color: '#268BD2'},
// 	{ width: 220,
// 	  color: '#BD3613'},
// 	{ width: 230,
// 	  color: '#A57706'},
// 	{ width: 290,
// 	  color: '#2176C7'},
// 	{ width: 240,
// 	  color: '#595AB7'},
// ];

// d3.selectAll('.item')
//   .data(myStyles)
//   .style({
//   	'color': 'white',
//   	'background': function(d) {
//   		return d.color;
//   	},
//    	'width': function(d) {
//   		return d.width;
//   	}
//   })

// /*----------------------------------------------------------------------------------------------------------------------*/

// var myStyles = [
// 	{ width: 200,
// 	  name: 'Mozart',
// 	  color: '#268BD2'},
// 	{ width: 220,
// 	  name: 'Beethoven',
// 	  color: '#BD3613'},
// 	{ width: 230,
// 	  name: 'Chopin',
// 	  color: '#A57706'},
// 	{ width: 290,
// 	  name: 'Bach',
// 	  color: '#2176C7'},
// 	{ width: 240,
// 	  name: 'Vivaldi',
// 	  color: '#595AB7'},
// ];

// d3.selectAll('#chart')
//   .data(myStyles)
//   .enter().append('div')
//   .classed('item', true)
//   .text(function(d) {
//   	return d.name;
//   })
//   .style({
//   	'color': 'white',
//   	'background': function(d) {
//   		return d.color;
//   	},
//    	'width': function(d) {
//   		return d.width;
//   	}
//   })								// This creates the divs but on running it like this, the divs won't be present in the section with id chart. 
//   									// These created divs will be present at the end of the page after the body closing tag, instead.
//   									// To add these divs to section element, need to add another selectAll() targetting the divs.


// d3.selectAll('#chart').selectAll('div')				//The second selectAll actually targets the divs which are being created two lines down
//   .data(myStyles)									// Though it might seem that the second selectAll is selecting the divs; it doesn't as
//   .enter().append('div')							// there are no divs yet
//   .classed('item', true)
//   .text(function(d) {
//   	return d.name;
//   })
//   .style({
//   	'color': 'white',
//   	'background': function(d) {
//   		return d.color;
//   	},
//    	'width': function(d) {
//   		return d.width;
//   	}
//   }) 									// 


/*----------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------*/

//---------SVG----------//  

// d3.select('#chart')
//   .append('svg')
//   	.attr('width', 600)
//   	.attr('height', 400)
//   	.style('background', "#93A1A1")
//   .append("rect")
//   	.attr('x', 200)
//   	.attr('y', 100)
//   	.attr('height', 200)
//   	.attr('widtch', 200)
//   	.style('fill', '#CB4B19')	
//   d3.select('svg')
// 	  .append('circle')
// 	  	.attr('cx', '300')
// 	  	.attr('cy', '200')
// 	  	.attr('r', '50')
// 	  	.style('fill', '#840043')    //second d3.select is part of the first; hence, the whole statement is a single command



//---------SVG BarChart----------//   

// var barData = [20, 30, 45, 15];

// var height = 400,
// 	width = 600,
// 	barWidth = 50,
// 	barOffset = 5;

// d3.select('#chart').append('svg')
// 	.attr('height', height)
// 	.attr('width', width)
// 	.style('background', '#C9D7D6')
// 	.selectAll('rect').data(barData)		// this barData is sent to each rect created below; hence each callback function gets it
// 	.enter().append('rect')
// 		.style('fill', '#C61C6F')
// 		.attr('width', barWidth)
// 		.attr('height', function(d){		// d equals input from barData, one at a time
// 			return d;
// 		})
// 		.attr('x', function(d, i){			// d equals the data from barData array, one at a time and i equals the index of it (automatic)
// 			return i * (barWidth + barOffset);
// 		})
// 		.attr('y', function(d){
// 			return height - d;				// notice that withouth this, all rect are place at the top end of the chart area, this return changes each ones place
// 		})

//---------SVG Scales----------//  

//----Quantitative Scales-----//

var bardata = [20, 30, 20, 15, 40];			// The max value in here will fill the height (below) and rest of the values with the percentage of the height accordingly

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scaleLinear()				// in v3, it is d3.scale.linear()
        .domain([0, d3.max(bardata)])		// .domain() takes an input array with minimum and maximum values for the chart
        .range([0, height])					// .range() also takes an input array with minimum and maximum values.

d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#C9D7D6')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', '#C61C6F')
        .attr('width', barWidth)
        .attr('height', function(d) {
            return yScale(d);
        })
        .attr('x', function(d,i) {
            return i * (barWidth + barOffset);
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })

//------Ordinal Scales------//