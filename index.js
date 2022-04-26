//if-else statement
/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population) 
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

const philPopulation = 112;

const country = 'Philippines';

if (philPopulation > 33) {
    console.log( country + ' Population is above average')
} else {
    console.log( country + '\'s population is ' + (33-philPopulation) + '  million below average');

}

//Equality Operators: == vs. === 

//1. 4, 23, 23, false, 18
//2.
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Type Conversion and Coercion 

var numNeighbours = prompt('How many neighbour countries does your country have?');
if(numNeighbours == 1){
  console.log('Only 1 border!');
}
else if(numNeighbours > 1){
  console.log('More than 1 border');
}
else{
  console.log('No borders');
}

var numNeighbours = prompt('How many neighbour countries does your country have?');
if(numNeighbours === 1){
  console.log('Only 1 border!');
}
else if(numNeighbours > 1){
  console.log('More than 1 border');
}
else{
  console.log('No borders');
}

var numNeighbours = 1;
if(numNeighbours === 1){
  console.log('Only 1 border!');
}
else if(numNeighbours > 1){
  console.log('More than 1 border');
}
else{
  console.log('No borders');
}

//Logical Operators
const herlanguage = 'English';
const myCountry = 'Philippines';
const language = 'English';
var isIsland = 'Philippines';
isIsland = false;
const population = 40;

if (herlanguage === 'English' && population < 50 && !isIsland) { 
	console.log("You should live in " + myCountry ); 
} 
else { 
	console.log(myCountry + " does not meet your criteria") ; 
}

//The switch Statement
var mylanguage = "English";
 switch (mylanguage) {
 	case 'chinese':
	case 'mandarin':
 		console.log('MOST number of native speakers!');
 		break;
	case 'spanish':
 		console.log('2nd place in number of native speakers'); 
    break; 
	case 'english':
 		console.log('3rd place');
 		break;
 	case 'hindi': 
  	console.log('Number 4');
 		break;
 	case 'arabic': 
  	console.log('5th most spoken language'); 
    break;
 default: 
 		console.log('Great language too :D'); 
    }

//The Conditional(Ternary) Operator
const mycountry = 'Philippines';
population >= 33 ? console.log(mycountry + '\'s population is above average') : console.log(country + '\'s population is below average');

