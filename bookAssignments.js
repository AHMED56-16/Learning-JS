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

// let variableName = value;

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