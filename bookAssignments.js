//CHAPTER # 1-ALERTS:

// Alerts are a simple way to display messages to the user. They can be used for various purposes, such as displaying error messages, confirming user actions, or providing feedback to the user.

// Syntax:

// alert(message);

//Assignment # 1:Write a script to greet your website visitor uding JS alert box.

alert("Hello, welcome to my website!");

//Assignment # 2:Write a script to display following message on your webpage 
// Error! Please enter a valid Password

alert("Error! Please enter a valid Password");

//Assignment # 3:Write a script to display following message on your webpage: (Hint : Use line break)
//Welcome to JS land...
//Happy Coding!

alert("Welcome to JS land...\nHappy Coding!");

//Assignment # 4:Write a script to display following message in seqvence:

// 1.Welcome to JS land...
// 2.Happy Coding!
//Prevent this page from creating additional dialogues

alert("Welcome to JS land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogues");

//Assignment # 5:Generate the following message through browser's developer console:

//Hello.. I can run JS throgh my web browser's console

// Assignment # 5: Generate the following message through browser's developer console:
// Hello.. I can run JS through my web browser's console

alert("Hello.. I can run JS through my web browser's console");


//CHAPTER # 2-Variables for string:

// Variables are containers for storing data values. They are created using the let, const, or var keyword.

// Syntax:

// let variableName = "value";

//Assignment # 1:Declare a variable called userName

let userName;

//Assignment # 2:Declare a variable called myName & assign to it a string that represents your full name

let myName = "Muhammad Ahmed Raza";

/*Assignment # 3:Write a script to 
    a.Declare a JS variable called message
    b.Assign "Hello world" to variable "message"
    c.Display the message in alert box
*/

let message;
message = "Hello world";
alert(message);

//Assignment # 4:Write a script to save student's bio data in JS variable and show the data in alert boxes

let studentBio = {
    name: "Muhammad Ahmed Raza",
    age: 18,
    enrolledInCourse:"Certified Mobile Application development"
};

alert(studentBio.name);

alert(studentBio.age+" "+"years old");

alert(studentBio.enrolledInCourse);

/*Assignment # 5:Write a script to display the following alert using one JS variable
    PIZZA
    PIZZ
    PIZ
    PI
    P
*/

let myVar="PIZZA\nPIZZ\nPIZ\nPI\nP"

alert(myVar);

//Assignment # 6:Declare a varible called email and assign it to the string that represents your email address.Show the below mentioned message in an alert box.(Hint:Use string concatination)

//My email address is muhammadahmedraza445@gmail.com

let email="muhammadahmedraza445@gmail.com"

alert("My email address is "+email);

//Assignment # 7:Declare a varible called book and give it the value "A smarter way to learn JS".Dispaly the following message in an alert box:

//I am trying to learn from the book A smarter way to learn JS

let book="A smarter way to learn JS";

alert("I am trying to learn from the book "+book);

//Assignment # 8:Write a script to display this in browser through JavaScript

let displayingContentInBrowserFromJavaScript="Yah! I can write HTML content in JavaScript"

document.write(displayingContentInBrowserFromJavaScript)

//Assignment # 9:Store following string in varible and show in alert box and browser through JavaScript

// "---------ஜரமாக---------"

let displayingInBrowserAndAlertBox="---------ஜரமாக---------";

alert(displayingInBrowserAndAlertBox);

document.write(displayingInBrowserAndAlertBox);

//CHAPTER # 3-Variables for numbers:

// Variables for numbers are used to store numeric values. They are created using the let, const, or var keyword.

// Syntax:

// let variableName = value;

//Assignment # 1: Declare a variable called age & assign it to your age.Show your age in an alert box.

let age=18;

alert(`I am ${age} years old `);

//Assignment # 2: Declare and initialize a variable to keep track of how many times a visitor has visited a webpage.Show his/her number of visits on your webpage.For example:"You have visited site N times"

let numberOfVisits=16;

alert(`You have visited site ${numberOfVisits} times`);

//Assignment # 3: Declare a variable called birthYear and assign it to your birth year.Show the following message in your browser:
/*
    My birth year is ____
    Data type of my declared variable is ______
*/

let birthYear=2006;

document.write(`<br>My birth year is ${birthYear}.<br>Data type of my declared variable is ${typeof birthYear}`);

/*
    Assignment # 4:
        A visitor visits an online clothing website www.xyzClothing.com.Write a script to store in variables the following information:
            a. Visitor's name
            b. Product title
            c. Quantity of product purchased
        Show the following message in your browser:
        "Babar Azam ordered 56 T-shirts on XYZ Clothing store".
*/

let visitorName="Babar Azam";
let productTitle="T-shirts";
let quantity=56;

document.write(`<br>${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store`);

//CHAPTER # 4-Variables names:Legal & Illegal:

//Assignment # 1:Declare 3 variables in one statement

let name="Muhammad Ahmed Raza", rollNo=271422, isStudent=true;

//Assignment # 2: Declare 5 legal and 5 illegal variable names

let legalVariable1=123;
let legalVariable2="abc";
let legalVariable3=true;
let legalVariable4=undefined;
let legalVariable5=null;

// let 2=true;
// let @=false;
// let !abc=abc;
// let function="Hello World";
// let 3a="34"

//Assignment # 3: Declare this in your browser

/*
    a)A heading stating "Rules for naming JS Variables"
    b)Variable names can only contain letters, numbers,underscores and $ signs.For example:$my1stVariable
    c)Variables must begin with a letter,underscores or $ sign.For example: $my1stVariable _my1stVariable my1stVariable
    d)Variable names are case-sensitive
    e)Variable names should not be JS keywords
*/

document.write("<h2>Rules for naming JS Variables</h2>");
document.write("<p>Variable names can only contain letters, numbers,underscores and $ signs.For example: $my1stVariable</p>");
document.write("<p>Variables must begin with a letter,underscores or $ sign.For example: _my1stVariable my1stVariable my1stVariable</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");

//CHAPTER # 5-Math Expressions:

//Assignment # 1:Write a program that take two numbers and add them in a new variable.Show the result in your browser.

//For example:Sum of 56 and 16 is 72
let num1=+prompt("Give first number")

let num2=+prompt("Give second number")

let sum=num1+num2;

document.write(`Sum of ${num1} and ${num2} is ${sum}`);

//Assignment # 2:Repeat task 1 for subtraction,multiplication,division and modulus

let subtraction=num1-num2;

let multiplication=num1*num2;

let division=num1/num2;

let modulus=num1%num2;

document.write(`<br>Subtraction of ${num1} and ${num2} is ${subtraction}`);

document.write(`<br>Multiplication of ${num1} and ${num2} is ${multiplication}`);

document.write(`<br>Division of ${num1} and ${num2} is ${division}`);

document.write(`<br>Modulus of ${num1} and ${num2} is ${modulus}`);

//Assignment # 3:
/*  
    3. Do the following using JS Mathematic Expressions
        a. Declare a variable.
        b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
        c. Initialize the variable with some number.
        d. Show the value of variable in your browser like "Initial value: 5".
        e. Increment the variable.
        f. Show the value of variable in your browser like “Value after increment is: 6".
        g. Add 7 to the variable.
        h. Show the value of variable in your browser like "Value after addition is: 13".
        i. Decrement the variable.
        j. Show the value of variable in your browser like "Value after decrement is: 12".
        k. Show the remainder after dividing the variable's value by 3.
        l. Output: "The remainder is : o".
*/

let variable=56;

document.write(`Value after variable declaration is: ${variable}`);

variable=16;

document.write(`<br>Initial value: ${variable}`);

variable++;

document.write(`<br>Value after increment is: ${variable}`);

variable+=7;

document.write(`<br>Value after addition is: ${variable}`);

variable--;

document.write(`<br>Value after decrement is: ${variable}`);

let remainder=variable%3;

document.write(`<br>The remainder is: ${remainder}`);

//Assignment # 4:Cost of one movie ticket is 1000PKR.Write a script to store ticket price i a variable and calculate the cost of buying 5 tickets to a movie

let ticketPrice=1000;

let totalCost=ticketPrice*5;

document.write(`<br>Total cost of buying 5 tickets is: ${totalCost} PKR`);

//Assignment # 5:Write a script to display multiple table of any number in your browser.

/*
    For example:
        Table of 4 
        4x1=4
        4x2=8
        4x3=12
        4x4=16
        4x5=20
        4x6=24
        4x7=28
        4x8=32
        4x9=36
        4x10=40
*/

let number=+prompt("Enter a number to have a table of any number in your browser");

document.write("<br>Table of "+number);
document.write("<br>"+number+"* 1 ="+number*1);
document.write("<br>"+number+"* 2 ="+number*2);
document.write("<br>"+number+"* 3 ="+number*3);
document.write("<br>"+number+"* 4 ="+number*4);
document.write("<br>"+number+"* 5 ="+number*5);
document.write("<br>"+number+"* 6 ="+number*6);
document.write("<br>"+number+"* 7 ="+number*7);
document.write("<br>"+number+"* 8 ="+number*8);
document.write("<br>"+number+"* 9 ="+number*9);
document.write("<br>"+number+"* 10 ="+number*10);


/* 
Assignment # 6: The Temperature Converter: It's hot out! Let's make a converter based on the steps here.
    a. Store a Celsius temperature into a variable.
    b. Convert it to Fahrenheit & output "NNоC is NNоF”.
    c. Now store a Fahrenheit temperature into a variable. 
    d. Convert it to Celsius & output “NNoF is NNоC".

Conversion Formulae:
    °C (°F-32) x 5/9
    °F (°C X9/5)+32

For example:
    25°C is 77°F
    70°F is 21.11111111111111°C
        
*/
let tempInCelsius=40;

let tempInFahrenheit=(tempInCelsius * 9/5) + 32;

document.write(`<br>${tempInCelsius}°C is ${tempInFahrenheit}°F`);

let tempInFahrenheit2=100;

let tempInCelsius2=(tempInFahrenheit - 32) * 5/9;

document.write(`<br>${tempInFahrenheit2}°F is ${tempInCelsius2}°C`);

/*
Assignment # 7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.
*/

let item1Price=500;
let item2Price=700;

let item1Quantity=2;
let item2Quantity=3;

let shippingCharges=100;

let total=item1Price*item1Quantity + item2Price*item2Quantity + shippingCharges;

document.write("<br><h2>Shopping Cart</h2>");
document.write(`<br>Price of item 1 is ${item1Price}`);
document.write(`<br>Quantity of item 1 is ${item1Quantity}`);
document.write(`<br>Price of item 2 is ${item2Price}`);
document.write(`<br>Quantity of item 2 is ${item2Quantity}`);
document.write(`<br>Shipping charges are ${shippingCharges}`);

document.write(`<br>Total cost of your order is ${total} PKR`);

//Assignment # 8:Store total marks & marks obtained by a student in 2 variables.Compute the percentage and show the result in your browser 

let totalMarks=1100;
let marksObtained=838;

let percentage=(marksObtained/totalMarks)*100;

document.write("<br><h2>Marks Sheet</h2>");

document.write(`<br>Total marks are ${totalMarks}`);

document.write(`<br>Marks obtained are ${marksObtained}`);

document.write(`<br>Percentage obtained is ${percentage}%`);
/*
    Assignment # 9:
        Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
        (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
*/
document.write("<br><h2>Currency in PKR</h2>");

let totalCurrency=10*104.80 + 25*28;

document.write(`<br>Total currency in PKR : ${totalCurrency} PKR`);

/*
    Assignment # 10:Write a program to initialize a variable with some number and do arithmetic in following sequence:
        a. Add 5
        b. Multiply by 10
        c. Divide the result by 2
        Perform all calculations in a single expression
*/

let num=25;

let result=(num+5)*10/2;

document.write("<br>Result: "+result);

/*
    Assignment # 11:The Age Calculator: Forgot how old someone is? Calculate it!
        a. Store the current year in a variable.         
        b. Store their birth year in a variable.
        c. Calculate their 2 possible ages based on the stored values.
        Output them to the screen like so: “They  are either NN or NN years old".
*/
document.write("<br><h2>Age Calculator</h2>");

let currentYear=2024;
let yearOfBirth=2006;

let age1=currentYear-yearOfBirth;
let age2=currentYear-(yearOfBirth+1);

document.write(`<br>They are either ${age1} or ${age2} years old.`);

/*
    Assignment # 12:The Geometrizer: Calculate properties of a circle.
    a. Store a radius into a variable.
    b. Calculate the circumference based on the radius, and output "The circumference is NN".
    (Hint: Circumference of a circle = 2 π г, π = 3.142)
    Calculate the area based on the radius, and output “The area is NN". (Hint: Area of a circle =  πг2,π=3.142)
*/

document.write("<br><h2>The Geometrizer</h2>");

let radius=20;
let π =3.142;
let circumference=2*π*radius;
let area=π * radius**2;
document.write("<br>Radius of circle:"+radius);
document.write(`<br>Circumference of circle is ${circumference}`);
document.write(`<br>Area of circle is ${area}`);


/*
    Assignment # 13:The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply" of your favorite snack is? Wonder no more.
        a. Store your favorite snack into a variable
        b. Store your current age into a variable.
        c. Store a maximum age into a variable.
        d. Store an estimated amount per day (as a number).
        e. Calculate how many would you eat total for the rest of your life.
        Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
*/

document.write("<br><h2>The Lifetime Supply Calculator</h2>");

let favoriteSnack="Chocolate bars";
let currentAge=18;
let maximumAge=120;
let estimatedAmountPerDay=5;
let totalAmount=estimatedAmountPerDay * (maximumAge-currentAge);
document.write(`<br>Favorite snack:${favoriteSnack}`)
document.write(`<br>Current age:${currentAge}`);
document.write(`<br>Maximum age:${maximumAge}`);
document.write(`<br>You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}`);