var companies = [
	{name: 'Apex', category: 'Retail', start: 1990, end: 2000},
	{name: 'Bata', category: 'Finance', start: 1980, end: 2020},
	{name: 'Kafco', category: 'Retail', start: 1970, end: 2010},
	{name: 'SoftTech', category: 'Technology', start: 1990, end: 2003},
	{name: 'Bapex', category: 'Auto', start: 1985, end: 2017},
	{name: 'akibTech', category: 'Technology', start: 2017, end: 2021},
];
var ages = [30,23,46,78,12,35,67,89,20,35,5];

// for compare for loop
// for(var i=0; i<companies.length; i++){
// 	console.log(companies[i]);
// }

// forEach loop. We can use forEach because it is match more sufficient respect to for loop
// companies.forEach(function(company){
// 	console.log(company);
// });

companies.forEach(company=>console.log(company));

// filter

// for loop 1 example
// var canDrink = []; 
// for(var i=0; i<ages.length;i++){
// 	if(ages[i]>=22){
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);

// for loop 2 example
// var drink = [];
// for(var i=0; i<ages.length; i++){
// 	if(ages[i]<=30){
// 		drink.push(ages[i]);
// 	}
// }
// console.log(drink);

// same think we can do without creating extra empty array and we don't need to push()
// var myAge = ages.filter(function(age){
// 	if(age>=21){
// 		return true;
// 	}
// });
// console.log(myAge);
var myAge = ages.filter(age=> age>=21);
console.log(myAge);


var retailCompany = companies.filter(company=>company.category==='Technology');
console.log(retailCompany);

var retailsCompany = companies.filter(company=>company.category!='Retail');
console.log(retailsCompany);

var companyFoundation = companies.filter(company=>(company.start>=1980 && company.start>=1985));
console.log(companyFoundation);

var lastTenYears = companies.filter(company=>(company.end-company.start>10));
console.log(lastTenYears);

// map() for specific element
var companyName = companies.map(company=>(`${company.name} [${company.start}-${company.end}]`));
console.log(companyName);


var sqr = ages.map(age=>Math.sqrt(age));
console.log(sqr);

var multi = ages.map(age=>age*2);
console.log(multi);

// we can add more than one map 
var multiDivi = ages.map(age=>age*4).map(age=>age/2);
console.log(multiDivi);

// sort() here turnary operator ? means (if) and : means (else). c1 and c2 for example
var sortCompany = companies.sort((c1,c2)=>(c1.start>c2.start?1:-1));
console.log(sortCompany);

var sortName = companies.sort((n1,n2)=>(n1.name>n2.name)?1:-1);
console.log(sortName);
// i can sort based on anything 


// ascending and decending
var asc = ages.sort();
console.log(asc); //here is a problem single integer not come in asc format


// right asc format
var asc1 = ages.sort((a,b)=>(a-b));
console.log(asc1);

// right dsc format
var dsc = ages.sort((a,b)=>(b-a));
console.log(dsc);

// we can use filter,sort,map together to (.)


