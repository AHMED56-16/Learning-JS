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
country = "Pakistan";

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

let score1 = 76;
let score2 = 99;
let score3 = 56;

let totalScore = score1 + score2 + score3;

let averageScore = totalScore / 3;

console.log('Total Score:', totalScore);

console.log('Average Score:', averageScore);

let plates = 20;

let people = 7;

let remainingPlates = plates - people;

remainingPlates++;

let message = 'There are' + " " + remainingPlates + " " + 'plates available';

console.log(message);

// Assignment # 4:

/*
    1.Create "fruits" array and store some fruit values
    2.Setup the last item as number
    3.Assign first fruit to the variable
    4.Reassign last array item to the actual fruit
    5.Log both fist fruit variable and entire fruit array
*/

let fruits = ['apple', 'banana', 'orange', 'grape', 56];

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

/*
Assignment # 6:

    1.create car object
    2.add make, model, year, colors (array), hybrid (boolean) keys
    3.add two methods (drive and stop)
    4.in the function body setup log with random text
    5.Log make
    6.log first color
    7.invoke both methods

*/

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    colors: ['blue', 'black', 'red'],
    hybrid: true,
    drive: function () {
        console.log('Drive carefully');
    },
    stop: function () {
        console.log('Stop the car');
    }
};

console.log('Make:', car.make);

console.log('First Color:', car.colors[0]);

car.drive();

car.stop();

/*
Assignment # 7:

    1.create two objects "person1", "person2" setup name, age (15-25),
    2.status ('resident', 'tourist') keys
    3.setup if else, condition where
    4.age must be bigger than 18 and status must be
    5.equal to 'resident'
    6.test with both objects

*/

let person1 = {
    name: 'Muhammad Ahmed Raza',
    age: 18,
    status: 'resident'
};

let person2 = {
    name: 'Babar Azam',
    age: 30,
    status: 'resident'
};

if (person1.age > 18 && person1.status === 'resident') {
    console.log(person1.name + ' is eligible');
} else {
    console.log(person1.name + ' is not eligible');
}

if (person2.age > 18 && person2.status === 'resident') {
    console.log(person2.name + ' is eligible');
} else {
    console.log(person2.name + ' is not eligible');
}

/*
Assignment # 8:

    1.create function fullName
    2.accept two parameters "firstName", "lastName"
    3.add them together (concat) and return result in upercase
    4.invoke fullName and pass some values
    5.log result
    6.change the order of arguments

*/

function fullName(firstName, lastName) {
    return firstName.toUpperCase() + ' ' + lastName.toUpperCase();
}

let fullNameResult = fullName('Muhammad', 'Ahmed Raza');
console.log('Full Name:', fullNameResult);

let fullNameResult2 = fullName('Ahmed Raza', 'Muhammad');

console.log('Full Name:', fullNameResult2);

