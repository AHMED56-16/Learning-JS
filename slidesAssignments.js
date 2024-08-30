//Assignment # 1:
/*
    1.Create a "firstName" and "Last_Name" variables
    2.Assign your values
    3.Create "address" variable & assign "main street" valve to it
    4.Re-assign adress to "first street" later
    5.Log all values in the console
*/

let firstName;
let Last_Name;

firstName = 'Muhammad';
Last_Name = 'Ahmed Raza';

let address = 'main street';

address = 'first street';

console.log(firstName);

console.log(Last_Name);

console.log(address);

// Assignment # 2:

/*
    1.Create "street" and "country" variables
    2.Assign your values
    3.Create "fullMailingAddress" variable and assign the result of "street + country"
    4.Remember about the space
    5.Log "fullMailingAddress" in the console
*/

let street;
let country;

street = '123 Main St';
country="Pakistan";

let fullMailingAddress = street + ' ' + country;

console.log(fullMailingAddress);

// Assignment # 3:

/*
    1.Create "score1","score2","score3" variables & assign values (0 to 100)
    2.Calculate total score and average score,and assign them to the variables
    3.Log total score and average score
    4.Create 'plates' variables & assign 20
    5.Create people variables & assign 7
    6.Calculate remaining plates and assign to the variable
    7.Add one to remaining plates
    8.Create message variable & display 'There are (your value goes here) plates available'-string concatination
    9.Log message 
*/

let score1=76;
let score2=99;
let score3=56;

let totalScore = score1 + score2 + score3;

let averageScore = totalScore / 3;

console.log('Total Score:', totalScore);

console.log('Average Score:', averageScore);

let plates = 20;

let people = 7;

let remainingPlates = plates - people;

remainingPlates++;

let message = 'There are'+" "+remainingPlates +" "+'plates available';

console.log(message);

// Assignment # 4:

/*
    1.Create "fruits" array and store some fruit values
    2.Setup the last item as number
    3.Assign first fruit to the variable
    4.Reassign last array item to the actual fruit
    5.Log both fist fruit variable and entire fruit array
*/

let fruits = ['apple', 'banana', 'orange', 'grape',56];

let firstFruit = fruits[0];

fruits[fruits.length - 1] = 'mango';

console.log('First Fruit:', firstFruit);

console.log('Fruits Array:', fruits);

// Assignment # 5:

/*
    1.Create "calculateTotal" function
    2.Add two parameters subTotal,tax
    3.Return sum of parameters

    4.Create 3 vars "order1","order2" and "order3" 
    5.Call "calculateTotal",pass in some values and assign result to each orders
    6.Log all three orders
*/

function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

let order1 = calculateTotal(100, 5);

let order2 = calculateTotal(200, 10);

let order3 = calculateTotal(300, 15);

console.log('Order 1:', order1);

console.log('Order 2:', order2);

console.log('Order 3:', order3);
