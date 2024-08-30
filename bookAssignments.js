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

document.write(`My birth year is ${birthYear}.\nData type of my declared variable is ${typeof birthYear}`);

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

document.write(`${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store`);

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