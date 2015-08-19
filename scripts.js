

$(document).ready(function() {
    console.log( "ready!" );

// In your HTML, include a ‘generate’ button, that when clicked,
// will generate a new div container in the index.html. 

// The new div should include some text that reads “Line #” and 
// then a number specific to the number of times the 
// generate button has been clicked. 

var NewDiv = function(line,num) {
	this.line = ('Line#');
	this.num = num;
}

$('#generate').on('click',function(e) {
	e.preventDefault();

       var $newDiv = (
		$line = 'Line#'(),
		$num = num()
);

 $('#generate').append$('<div>');

var NewDiv = function(line,num) {
	this.line = 'Line#';
	this.num = num;

}
       });

console.log(NewDiv);


var call = function(){

$('#generate').text('Line # ' + num);

}

});


// The new div should include some text that reads “Line #” 
// and then a number specific to the number of times the 
// generate button has been clicked. 



// console.log(generate);

// var generate = $('#generate').append("<div>Test</div>");

// var newDiv = new NewDiv ('line','num');





// The new div should include some text that reads “Line #” and then a number specific to the number of times the 
// generate button has been clicked. 


// In addition to the text, you will need to include two buttons within the new div. 

// One button will be entitled “Change Color” and the othear button will entitled “Remove”.
// The Change Color button should change the background color of the div container relative to the Change Color 
// button that was clicked. 