// Random # 19-120 is selected
// Random # 1-12 is selected and assigned to each diamond
// Player starts with 0 diamonds
// Player selects a diamond and value of that diamond is assigned to their cart of diamonds
// if cart > # to match - the player losses (losses++) and game resets
// else if cart < # to match - the play keeps selecting
// else the cart === # to match - the player wins (wins++) and game resets


//Global Variables
var numDiamonds;
var userDiamonds;
var diamond1;
var diamond2;
var diamond3;
var diamond4;
var wins = 0;
var losses = 0;



//  Random Number function that can be reused when looking for a random number between a set of two numbers (ex. 1 through 12)
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Setting Diamond Values

// Diamond is clicked and the value of that diamond is added to userDiamonds
// Once added needs to display new userDiamonds number .html
$(".diamond_1").click(function () {
	userDiamonds += diamond1;
	$(".diamond-count").html(userDiamonds);

	//need to call game function so diamonds can be checked
	gameCheck(userDiamonds);
});

$(".diamond_2").click(function () {
	userDiamonds += diamond2;
	$(".diamond-count").html(userDiamonds);

	gameCheck(userDiamonds);
});

$(".diamond_3").click(function () {
	userDiamonds += diamond3;
	$(".diamond-count").html(userDiamonds);

	gameCheck(userDiamonds);
});

$(".diamond_4").click(function () {
	userDiamonds += diamond4;
	$(".diamond-count").html(userDiamonds);

	gameCheck(userDiamonds);
});



// The start of the game aka RESET

var gameStart = function() {
	// set user diamonds to 0 each game
	userDiamonds = 0;
	$('.diamond-count').html(userDiamonds);
	//choose random number between 19 - 120 for user to match each game
	numDiamonds = randomNum(19, 120);
	$('.diamond-match').html(numDiamonds);
	//assign a new value to each diamond each game
	diamond1 = randomNum(1,12);
	diamond2 = randomNum(1,12);
	diamond3 = randomNum(1,12);
	diamond4 = randomNum(1,12);
	

};




// Playing the Game 
// if userDiamonds is === to numDiamonds then player WINS - win++ to scoreboard
// else if userDiamonds is > numDiamonds then player LOSES - losses++ to scoreboard
// game should keep running if the userDiamonds is < numDiamonds - may not need to be coded

var gameCheck = function () {
	if (userDiamonds === numDiamonds) {
		wins++;
		$(".numWins").html("<h3>Wins: "+ wins + "</h3>");
		gameStart();
	} else if (userDiamonds > numDiamonds){
		losses++;
		$(".numLosses").html("<h3>Losses: "+ losses + "</h3>");
		gameStart();
	}
};






gameStart();



















// OLD CODE BELOW -------------------------------------------------




// runs function for # diamonds to match
// runs function for value for each diamond
// resets # of current diamonds to 0



// var randomNumDiamonds = function() {
// 	diamondsToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// 	//insert answer into HTML
// 	$('.diamond-match').html(diamondsToMatch);
// };

// Run Function for the random number of Diamonds
// randomNumDiamonds();




// var diamondValues = function() {
// 	for (var i = 0; i < 4; i++) {
// 	$('.diamond_'+[i]).val(Math.floor(Math.random() * 12) + 1);	
// 	}
// 	// diamondvalue = Math.floor(Math.random() * 12) + 1;
// 	//insert answer into HTML to assign value
// 	// $('.diamond-match').html(diamondsToMatch);
// };

// Run Function for the random number of Diamonds
// diamondValues();


// Game Starts
// console.log(numDiamonds);

