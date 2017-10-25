// Random # 19-120 is selected
// Random # 1-12 is selected and assigned to each diamond
// Player starts with 0 diamonds
// Player selects a diamond and value of that diamond is assigned to their cart of diamonds
// if cart > # to match - the player losses (losses++) and game resets
// else if cart < # to match - the play keeps selecting
// else the cart === # to match - the player wins (wins++) and game resets


//Global Variables
var numDiamonds = 0;
var userDiamonds = 0;
var wins = 0;
var losses = 0;



var randomNumDiamonds = function() {
	diamondsToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	//insert answer into HTML
	$('.diamond-match').html(diamondsToMatch);
};


// Run Function for the random number of Diamonds
randomNumDiamonds();

var diamondValues = function() {
	diamondvalue = Math.floor(Math.random() * 12) + 1;
	//insert answer into HTML to assign value
	// $('.diamond-match').html(diamondsToMatch);
};

// Run Function for the random number of Diamonds
diamondValues();

console.log(diamondValues);