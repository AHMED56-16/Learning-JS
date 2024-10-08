// //CHAPTER # 1-ALERTS:

// // Alerts are a simple way to display messages to the user. They can be used for various purposes, such as displaying error messages, confirming user actions, or providing feedback to the user.

// // Syntax:

// // alert(message);

// //Assignment # 1:Write a script to greet your website visitor uding JS alert box.

// alert("Hello, welcome to my website!");

// //Assignment # 2:Write a script to display following message on your webpage 
// // Error! Please enter a valid Password

// alert("Error! Please enter a valid Password");

// //Assignment # 3:Write a script to display following message on your webpage: (Hint : Use line break)
// //Welcome to JS land...
// //Happy Coding!

// alert("Welcome to JS land...\nHappy Coding!");

// //Assignment # 4:Write a script to display following message in seqvence:

// // 1.Welcome to JS land...
// // 2.Happy Coding!
// //Prevent this page from creating additional dialogues

// alert("Welcome to JS land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogues");

// //Assignment # 5:Generate the following message through browser's developer console:

// //Hello.. I can run JS throgh my web browser's console

// // Assignment # 5: Generate the following message through browser's developer console:
// // Hello.. I can run JS through my web browser's console

// alert("Hello.. I can run JS through my web browser's console");


// //CHAPTER # 2-Variables for string:

// // Variables are containers for storing data values. They are created using the let, const, or var keyword.

// // Syntax:

// // let variableName = "value";

// //Assignment # 1:Declare a variable called userName

// let userName;

// //Assignment # 2:Declare a variable called myName & assign to it a string that represents your full name

// let myName = "Muhammad Ahmed Raza";

// /*Assignment # 3:Write a script to 
//     a.Declare a JS variable called message
//     b.Assign "Hello world" to variable "message"
//     c.Display the message in alert box
// */

// let message;
// message = "Hello world";
// alert(message);

// //Assignment # 4:Write a script to save student's bio data in JS variable and show the data in alert boxes

// let studentBio = {
//     name: "Muhammad Ahmed Raza",
//     age: 18,
//     enrolledInCourse:"Certified Mobile Application development"
// };

// alert(studentBio.name);

// alert(studentBio.age+" "+"years old");

// alert(studentBio.enrolledInCourse);

// /*Assignment # 5:Write a script to display the following alert using one JS variable
//     PIZZA
//     PIZZ
//     PIZ
//     PI
//     P
// */

// let myVar="PIZZA\nPIZZ\nPIZ\nPI\nP"

// alert(myVar);

// //Assignment # 6:Declare a varible called email and assign it to the string that represents your email address.Show the below mentioned message in an alert box.(Hint:Use string concatination)

// //My email address is muhammadahmedraza445@gmail.com

// let email="muhammadahmedraza445@gmail.com"

// alert("My email address is "+email);

// //Assignment # 7:Declare a varible called book and give it the value "A smarter way to learn JS".Dispaly the following message in an alert box:

// //I am trying to learn from the book A smarter way to learn JS

// let book="A smarter way to learn JS";

// alert("I am trying to learn from the book "+book);

// //Assignment # 8:Write a script to display this in browser through JavaScript

// let displayingContentInBrowserFromJavaScript="Yah! I can write HTML content in JavaScript"

// document.write(displayingContentInBrowserFromJavaScript)

// //Assignment # 9:Store following string in varible and show in alert box and browser through JavaScript

// // "---------ஜரமாக---------"

// let displayingInBrowserAndAlertBox="---------ஜரமாக---------";

// alert(displayingInBrowserAndAlertBox);

// document.write(displayingInBrowserAndAlertBox);

// //CHAPTER # 3-Variables for numbers:

// // Variables for numbers are used to store numeric values. They are created using the let, const, or var keyword.

// // Syntax:

// // let variableName = value;

// //Assignment # 1: Declare a variable called age & assign it to your age.Show your age in an alert box.

// let age=18;

// alert(`I am ${age} years old `);

// //Assignment # 2: Declare and initialize a variable to keep track of how many times a visitor has visited a webpage.Show his/her number of visits on your webpage.For example:"You have visited site N times"

// let numberOfVisits=16;

// alert(`You have visited site ${numberOfVisits} times`);

// //Assignment # 3: Declare a variable called birthYear and assign it to your birth year.Show the following message in your browser:
// /*
//     My birth year is ____
//     Data type of my declared variable is ______
// */

// let birthYear=2006;

// document.write(`<br>My birth year is ${birthYear}.<br>Data type of my declared variable is ${typeof birthYear}`);

// /*
//     Assignment # 4:
//         A visitor visits an online clothing website www.xyzClothing.com.Write a script to store in variables the following information:
//             a. Visitor's name
//             b. Product title
//             c. Quantity of product purchased
//         Show the following message in your browser:
//         "Babar Azam ordered 56 T-shirts on XYZ Clothing store".
// */

// let visitorName="Babar Azam";
// let productTitle="T-shirts";
// let quantity=56;

// document.write(`<br>${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store`);

// //CHAPTER # 4-Variables names:Legal & Illegal:

// //Assignment # 1:Declare 3 variables in one statement

// let name="Muhammad Ahmed Raza", rollNo=271422, isStudent=true;

// //Assignment # 2: Declare 5 legal and 5 illegal variable names

// let legalVariable1=123;
// let legalVariable2="abc";
// let legalVariable3=true;
// let legalVariable4=undefined;
// let legalVariable5=null;

// // let 2=true;
// // let @=false;
// // let !abc=abc;
// // let function="Hello World";
// // let 3a="34"

// //Assignment # 3: Declare this in your browser

// /*
//     a)A heading stating "Rules for naming JS Variables"
//     b)Variable names can only contain letters, numbers,underscores and $ signs.For example:$my1stVariable
//     c)Variables must begin with a letter,underscores or $ sign.For example: $my1stVariable _my1stVariable my1stVariable
//     d)Variable names are case-sensitive
//     e)Variable names should not be JS keywords
// */

// document.write("<h2>Rules for naming JS Variables</h2>");
// document.write("<p>Variable names can only contain letters, numbers,underscores and $ signs.For example: $my1stVariable</p>");
// document.write("<p>Variables must begin with a letter,underscores or $ sign.For example: _my1stVariable my1stVariable my1stVariable</p>");
// document.write("<p>Variable names are case-sensitive</p>");
// document.write("<p>Variable names should not be JS keywords</p>");

// //CHAPTER # 5-Math Expressions:

// //Assignment # 1:Write a program that take two numbers and add them in a new variable.Show the result in your browser.

// //For example:Sum of 56 and 16 is 72
// let firstNum=+prompt("Give first number")

// let secondNum=+prompt("Give second number")

// let sum=firstNum+secondNum;

// document.write(`Sum of ${firstNum} and ${secondNum} is ${sum}`);

// //Assignment # 2:Repeat task 1 for subtraction,multiplication,division and modulus

// let subtraction=num1-num2;

// let multiplication=num1*num2;

// let division=num1/num2;

// let modulus=num1%num2;

// document.write(`<br>Subtraction of ${num1} and ${num2} is ${subtraction}`);

// document.write(`<br>Multiplication of ${num1} and ${num2} is ${multiplication}`);

// document.write(`<br>Division of ${num1} and ${num2} is ${division}`);

// document.write(`<br>Modulus of ${num1} and ${num2} is ${modulus}`);

// //Assignment # 3:
// /*  
//     3. Do the following using JS Mathematic Expressions
//         a. Declare a variable.
//         b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//         c. Initialize the variable with some number.
//         d. Show the value of variable in your browser like "Initial value: 5".
//         e. Increment the variable.
//         f. Show the value of variable in your browser like “Value after increment is: 6".
//         g. Add 7 to the variable.
//         h. Show the value of variable in your browser like "Value after addition is: 13".
//         i. Decrement the variable.
//         j. Show the value of variable in your browser like "Value after decrement is: 12".
//         k. Show the remainder after dividing the variable's value by 3.
//         l. Output: "The remainder is : o".
// */

// let variable=56;

// document.write(`Value after variable declaration is: ${variable}`);

// variable=16;

// document.write(`<br>Initial value: ${variable}`);

// variable++;

// document.write(`<br>Value after increment is: ${variable}`);

// variable+=7;

// document.write(`<br>Value after addition is: ${variable}`);

// variable--;

// document.write(`<br>Value after decrement is: ${variable}`);

// let remainder=variable%3;

// document.write(`<br>The remainder is: ${remainder}`);

// //Assignment # 4:Cost of one movie ticket is 1000PKR.Write a script to store ticket price i a variable and calculate the cost of buying 5 tickets to a movie

// let ticketPrice=1000;

// let totalCostOfTickets=ticketPrice*5;

// document.write(`<br>Total cost of buying 5 tickets is: ${totalCostOfTickets} PKR`);

// //Assignment # 5:Write a script to display multiple table of any number in your browser.

// /*
//     For example:
//         Table of 4 
//         4x1=4
//         4x2=8
//         4x3=12
//         4x4=16
//         4x5=20
//         4x6=24
//         4x7=28
//         4x8=32
//         4x9=36
//         4x10=40
// */

// let number=+prompt("Enter a number to have a table of any number in your browser");

// document.write("<br>Table of "+number);
// document.write("<br>"+number+"* 1 ="+number*1);
// document.write("<br>"+number+"* 2 ="+number*2);
// document.write("<br>"+number+"* 3 ="+number*3);
// document.write("<br>"+number+"* 4 ="+number*4);
// document.write("<br>"+number+"* 5 ="+number*5);
// document.write("<br>"+number+"* 6 ="+number*6);
// document.write("<br>"+number+"* 7 ="+number*7);
// document.write("<br>"+number+"* 8 ="+number*8);
// document.write("<br>"+number+"* 9 ="+number*9);
// document.write("<br>"+number+"* 10 ="+number*10);


// /* 
// Assignment # 6: The Temperature Converter: It's hot out! Let's make a converter based on the steps here.
//     a. Store a Celsius temperature into a variable.
//     b. Convert it to Fahrenheit & output "NNоC is NNоF”.
//     c. Now store a Fahrenheit temperature into a variable. 
//     d. Convert it to Celsius & output “NNoF is NNоC".

// Conversion Formulae:
//     °C (°F-32) x 5/9
//     °F (°C X9/5)+32

// For example:
//     25°C is 77°F
//     70°F is 21.11111111111111°C

// */
// let tempInCelsius=40;

// let tempInFahrenheit=(tempInCelsius * 9/5) + 32;

// document.write(`<br>${tempInCelsius}°C is ${tempInFahrenheit}°F`);

// let tempInFahrenheit2=100;

// let tempInCelsius2=(tempInFahrenheit - 32) * 5/9;

// document.write(`<br>${tempInFahrenheit2}°F is ${tempInCelsius2}°C`);

// /*
// Assignment # 7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// */

// let item1Price=500;
// let item2Price=700;

// let item1Quantity=2;
// let item2Quantity=3;

// let shippingCharges=100;

// let total=item1Price*item1Quantity + item2Price*item2Quantity + shippingCharges;

// document.write("<br><h2>Shopping Cart</h2>");
// document.write(`<br>Price of item 1 is ${item1Price}`);
// document.write(`<br>Quantity of item 1 is ${item1Quantity}`);
// document.write(`<br>Price of item 2 is ${item2Price}`);
// document.write(`<br>Quantity of item 2 is ${item2Quantity}`);
// document.write(`<br>Shipping charges are ${shippingCharges}`);

// document.write(`<br>Total cost of your order is ${total} PKR`);

// //Assignment # 8:Store total marks & marks obtained by a student in 2 variables.Compute the percentage and show the result in your browser 

// let grandTotal=1100;
// let marksObtained=838;

// let achivedPercentage=(marksObtained/grandTotal)*100;

// document.write("<br><h2>Marks Sheet</h2>");

// document.write(`<br>Total marks are ${grandTotal}`);

// document.write(`<br>Marks obtained are ${marksObtained}`);

// document.write(`<br>Percentage obtained is ${achivedPercentage}%`);
// /*
//     Assignment # 9:
//         Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//         (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// */
// document.write("<br><h2>Currency in PKR</h2>");

// let totalCurrency=10*104.80 + 25*28;

// document.write(`<br>Total currency in PKR : ${totalCurrency} PKR`);

// /*
//     Assignment # 10:Write a program to initialize a variable with some number and do arithmetic in following sequence:
//         a. Add 5
//         b. Multiply by 10
//         c. Divide the result by 2
//         Perform all calculations in a single expression
// */

// let num=25;

// let resultOfArithematicSequence=(num+5)*10/2;

// document.write("<br>Result: "+resultOfArithematicSequence);

// /*
//     Assignment # 11:The Age Calculator: Forgot how old someone is? Calculate it!
//         a. Store the current year in a variable.         
//         b. Store their birth year in a variable.
//         c. Calculate their 2 possible ages based on the stored values.
//         Output them to the screen like so: “They  are either NN or NN years old".
// */
// document.write("<br><h2>Age Calculator</h2>");

// let currentYear=2024;
// let yearOfBirth=2006;

// let age1=currentYear-yearOfBirth;
// let age2=currentYear-(yearOfBirth+1);

// document.write(`<br>They are either ${age1} or ${age2} years old.`);

// /*
//     Assignment # 12:The Geometrizer: Calculate properties of a circle.
//     a. Store a radius into a variable.
//     b. Calculate the circumference based on the radius, and output "The circumference is NN".
//     (Hint: Circumference of a circle = 2 π г, π = 3.142)
//     Calculate the area based on the radius, and output “The area is NN". (Hint: Area of a circle =  πг2,π=3.142)
// */

// document.write("<br><h2>The Geometrizer</h2>");

// let radius=20;
// let π =3.142;
// let circumference=2*π*radius;
// let area=π * radius**2;
// document.write("<br>Radius of circle:"+radius);
// document.write(`<br>Circumference of circle is ${circumference}`);
// document.write(`<br>Area of circle is ${area}`);


// /*
//     Assignment # 13:The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply" of your favorite snack is? Wonder no more.
//         a. Store your favorite snack into a variable
//         b. Store your current age into a variable.
//         c. Store a maximum age into a variable.
//         d. Store an estimated amount per day (as a number).
//         e. Calculate how many would you eat total for the rest of your life.
//         Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
// */

// document.write("<br><h2>The Lifetime Supply Calculator</h2>");

// let favoriteSnack="Chocolate bars";
// let currentAge=18;
// let maximumAge=120;
// let estimatedAmountPerDay=5;
// let totalAmount=estimatedAmountPerDay * (maximumAge-currentAge);
// document.write(`<br>Favorite snack:${favoriteSnack}`)
// document.write(`<br>Current age:${currentAge}`);
// document.write(`<br>Maximum age:${maximumAge}`);
// document.write(`<br>You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}`);

// //CHAPTER # 6-9-Math Expressions:
// /*
// Assignment # 1: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// Result:
// The value of a is: 10
// ********************************
// The value of ++a is: 11
// Now the value of a is: 11
// The value of a++ is: 11 
// Now the value of a is: 12
// The value of --a is: 11
// Now the value of a is: 11
// The value of a-- is: 11
// Now the value of a is:10

// */

// let a = 10;

// document.write("Result:");

// document.write("<br>The value of a is: " + a);

// document.write("<br>********************************");

// document.write("<br>The value of ++a is: " + (++a));

// document.write("<br>Now the value of a is: " + a);

// document.write("<br>The value of a++ is: " + (a++));

// document.write("<br>Now the value of a is: " + a);

// document.write("<br>The value of --a is: " + (--a));

// document.write("<br>Now the value of a is: " + a);

// document.write("<br>The value of a-- is: " + (a--));

// document.write("<br>Now the value of a is: " + a);

// /*

// Assignment # 2: What will be the output in variables a, b & result after execution of the following script:

// var a =2, b = 1;
// var result=--a --b +++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// */

// var a2 = 2;
// var b = 1;
// var result = --a2 - --b + ++b + b--;

// document.write("<br>a: " + a2);

// document.write("<br>b: " + b);

// // document.write("<br>--a is a pre-decrement operator so firstly the value of a which was 2 now becomes 1<br>Then there is a subtraction operator<br>Then,--b,which is a pre-decrement operator so because of it the value of b which was 1 now becomes 0<br>The result of --a - --b is 1 <br>Then there is an addition operator<br>Then,++b,which is a pre-increament operator so  the value of b which was 0 now becomes 1<br>The result of --a - --b + ++b is 2 <br>Then there is an addition operator<br>Then,b--,which is a post-decreament operator<br>So,the final  result of --a - --b + ++b + b-- is 3 <br>");

// document.write("<br>result: " + result);

// // Assignment # 3:Write a program that takes input a name from user & greet the user.

// let userNameToGreet = prompt("Enter your name");

// document.write("<br>Hello " + userNameToGreet + "! How are you today?");

// // Assignment # 4:Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// let numberToMultiply = (prompt("Enter a number to display multiplication table (or leave blank for 5):"));

// if (numberToMultiply === "" || isNaN(numberToMultiply)) {
//     numberToMultiply = 5;
// }

// document.write("<br><h2>Multiplication Table of " + numberToMultiply + "</h2>");

// document.write("<br>Table of " + numberToMultiply);
// document.write("<br>" + numberToMultiply + "* 1 =" + numberToMultiply * 1);
// document.write("<br>" + numberToMultiply + "* 2 =" + numberToMultiply * 2);
// document.write("<br>" + numberToMultiply + "* 3 =" + numberToMultiply * 3);
// document.write("<br>" + numberToMultiply + "* 4 =" + numberToMultiply * 4);
// document.write("<br>" + numberToMultiply + "* 5 =" + numberToMultiply * 5);
// document.write("<br>" + numberToMultiply + "* 6 =" + numberToMultiply * 6);
// document.write("<br>" + numberToMultiply + "* 7 =" + numberToMultiply * 7);
// document.write("<br>" + numberToMultiply + "* 8 =" + numberToMultiply * 8);
// document.write("<br>" + numberToMultiply + "* 9 =" + numberToMultiply * 9);
// document.write("<br>" + numberToMultiply + "* 10 =" + numberToMultiply * 10);

// /*

// Assignment # 5:
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks of remaining two subjects from user and store them in different variable
// e) Now,Calculate the total marks and percentage and show the result in browser(Hint:use tables)
// */

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// let totalMarks = 300;

// let obtainedMarks1 = (+prompt("Enter obtained marks for " + subject1 + ":"));

// let obtainedMarks2 = (+prompt("Enter obtained marks for " + subject2 + ":"));

// let obtainedMarks3 = (+prompt("Enter obtained marks for " + subject3 + ":"));

// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// let percentage = (totalObtainedMarks / totalMarks) * 100;

// document.write("<br><h2>Student Performance Report</h2>");

// document.write("<table border='1'>");

// document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");

// document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarks + "</td></tr>");

// document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarks + "</td></tr>");

// document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarks + "</td></tr>");

// document.write("<tr><td>Total</td><td>" + totalObtainedMarks + "</td><td>" + totalMarks + "</td></tr>");

// document.write("<tr><td>Percentage</td><td>" + percentage + "%</td><td></td></tr>");

// document.write("</table>");

// //CHAPTER # 9-11-USER INPUT & CONDITIONAL STATEMENTS:

// // Assignment # 1: Write a program to take "city" name as input from user. If user enters "Karachi”, welcome the user like this: "Welcome to city of lights"

// let cityName = prompt("Enter your city name:");

// if (cityName === "Karachi") {
//     document.write("<br>Welcome to city of lights");
// }

// // Assignment # 2:Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma'am.

// let userGender = prompt("Enter your gender (male/female):");

// if (userGender === "male") {
//     document.write("<br>Good Morning Sir");
// } else if (userGender === "female") {
//     document.write("<br>Good Morning Ma'am");
// }

// // Assignment # 3: Write a program to take input color of road traffic signal from the user & show the message according to this table:
// // Signal color     Message 
// // Red              Must Stop
// // Yellow           Ready to move
// // Green            Move now

// let signalColor = prompt("Enter the color of the road traffic signal (red/yellow/green):");

// if (signalColor === "red") {
//     document.write("<br>Must Stop");
// } else if (signalColor === "yellow") {
//     document.write("<br>Ready to move");
// } else if (signalColor === "green") {
//     document.write("<br>Move now");
// }

// // Assignment # 4: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message "Please refill the fuel in your car"

// let remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):");

// if (remainingFuel < 0.25) {
//     document.write("<br>Please refill the fuel in your car");
// }

// /*
// Assignment # 5:Run this script, & check whether alert message would be displayed or not. Record the outputs.
//         a. var a=4;
//         if (++a ===5){
//         alert("given condition for variable a is true");
//         }

//         b. var b = 82;
//         if (b++===83){
//         alert("given condition for variable b is true");
//         }

//         c. var c = 12;
//         if (c++ === 13){
//         alert("condition 1 is true");
//         }
//         if (c === 13){
//         alert("condition 2 is true");
//         }
//         if (++c < 14){
//         alert("condition 3 is true");
//         }
//         if(c === 14){
//         alert("condition 4 is true");

//         d. var materialCost = 20000;
//         var laborCost = 2000;
//         var totalCost = materialCost + laborCost;
//         if (totalCost === laborCost + materialCost){ alert("The cost equals");
//         }

//         e. if (true){ alert("True");
//         }
//         if (false) { alert("False");
//         }

//         f. if("car"<"cat"){
//         alert("car is smaller than cat");
//         }
// */

// let a3 = 4;

// if (++a3 === 5) {
//     alert("Condition 1 is true");
// }

// let b = 82;

// if (b++ === 83) {
//     alert("Condition 2 is true");
// }

// let c = 12;

// if (c++ === 13) {
//     alert("Condition 3 is true");
// }

// if (c === 13) {
//     alert("Condition 4 is true");
// }

// if (++c < 14) {
//     alert("Condition 5 is true");
// }

// if (c === 14) {
//     alert("Condition 6 is true");
// }

// let materialCost = 20000;

// let laborCost = 2000;

// let totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("Condition 7 is true");
// }

// if (false) {
//     alert("Condition 8 is true");
// }

// if ("car" < "cat") {
//     alert("Condition 9 is true");
// }

// //Assignment # 6: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// // Percentage %                       Grade               Remarks
// // Greater than or equal to 80        A-one               Excellent
// // Greater than or equal to 70        A                   Good
// // Greater than or equal to 60        B                   You need to improve
// //          Less than 60              Fail                Sorry

// let subject1Marks = +prompt("Enter marks obtained in subject 1:");
// let subject2Marks = +prompt("Enter marks obtained in subject 2:");
// let subject3Marks = +prompt("Enter marks obtained in subject 3:");

// let totalMarksObtained = subject1Marks + subject2Marks + subject3Marks;
// let percentageObtained = (totalMarksObtained / 300) * 100;

// let grade;
// let remarks;

// if (percentageObtained >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentageObtained >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentageObtained >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h2>Mark Sheet</h2>");
// document.write("Total Marks: 300");
// document.write("<br>Total Marks Obtained: " + totalMarksObtained);
// document.write("<br>Percentage: " + percentageObtained + "%");
// document.write("<br>Grade: " + grade);
// document.write("<br>Remarks: " + remarks);

// /*
// Assignment # 7:Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show "Bingo! Correct answer".
// b. If the guessed number +1 is the secret number, show "Close enough to the correct answer”.
// */

// let secretNumber = 5;

// let userGuess = +prompt("Guess the secret number (1-10):");

// if (userGuess === secretNumber) {
//     document.write("<br>Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     document.write("<br>Close enough to the correct answer");
// }

// //Assignment # 8: Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// let numberToCheck = +prompt("Enter a number:");

// if (numberToCheck % 3 === 0) {
//     document.write("<br>" + numberToCheck + " is divisible by 3");
// } else {
//     document.write("<br>" + numberToCheck + " is not divisible by 3");
// }

// // Assignment # 9: Write a program that checks whether the given input is an even number or an odd number.

// let numberToCheck2 = +prompt("Enter a number:");

// if (numberToCheck2 % 2 === 0) {
//     document.write("<br>" + numberToCheck2 + " is an even number");
// } else {
//     document.write("<br>" + numberToCheck2 + " is an odd number");
// }
// /*
// Assignment # 10:Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then "It is too hot outside."
// b. T > 30 then "The Weather today is Normal.”
// c. T > 20 then "Today's Weather is cool."
// d. T > 10 then "OMG! Today's weather is so Cool."
// */

// let temperature = +prompt("Enter temperature in Celsius:");

// if (temperature > 40) {
//     document.write("<br>It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("<br>The weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("<br>Today's Weather is cool.");
// } else if (temperature > 10) {
//     document.write("<br>OMG! Today's weather is so Cool.");
// }

// /*
// Assignment # 11:Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// */

// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let operation = prompt("Enter an operation (+, -, *, /, %):");

// if (operation === "+") {
//     document.write("<br>Result: " + (num1 + num2));
// } else if (operation === "-") {
//     document.write("<br>Result: " + (num1 - num2));
// } else if (operation === "*") {
//     document.write("<br>Result: " + (num1 * num2));
// } else if (operation === "/") {
//     if (num2 === 0) {
//         document.write("<br>Error: Division by zero is not allowed.");
//     } else {
//         document.write("<br>Result: " + (num1 / num2));
//     }
// } else if (operation === "%"){
//     if (num2 === 0) {
//         document.write("<br>Error: Division by zero is not allowed.");
//     } else {
//         document.write("<br>Result: " + (num1 % num2));
//     }
// }

// //CHAPTER # 12-13:IF..ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// //Assignment # 1: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// let character = prompt("Enter a character:");

// if (!isNaN(character)) {
//     document.write("<br>" + character + " is a number.");
// }

// else if (character >= "A" && character <= "Z") {
//     document.write("<br>" + character + " is an uppercase letter.");
// }

// else if (character >= "a" && character <= "z") {
//     document.write("<br>" + character + " is a lowercase letter.");
// }

// // //Assignment # 2:Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// let num1 = +prompt("Enter first number:");

// let num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//     document.write("<br>" + num1 + " is larger than " + num2);
// }
// else if (num2 > num1) {
//     document.write("<br>" + num2 + " is larger than " + num1);
// }
// else {
//     document.write("<br>" + num1 + " and " + num2 + " are equal.");
// }

// //Assignment # 3: Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// let number = +prompt("Enter a number:");

// if (number > 0) {
//     document.write("<br>" + number + " is positive.");
// }
// else if (number < 0) {
//     document.write("<br>" + number + " is negative.");
// }
// else {
//     document.write("<br>" + number + " is zero.");
// }

// //Assignment # 4:Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// let vowel = prompt("Enter a single character:");

// if (vowel.toLowerCase() === "a" || vowel.toLowerCase() === "e" || vowel.toLowerCase() === "i" || vowel.toLowerCase() === "o" || vowel.toLowerCase() === "u") {
//     document.write("<br>" + vowel + " is a vowel.");
// }
// else {
//     document.write("<br>" + vowel + " is not a vowel.");
// }

// /*
// Assignment # 5:Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// Check if user has entered password. If not, then give message " Please enter your password" Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password". Show "Incorrect password" otherwise.
// */

// let correctPassword = "ba56";

// let userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     document.write("<br>Please enter your password.");
// }
// else if (userPassword === correctPassword) {
//     document.write("<br>Correct! The password you entered matches the original password.");
// }
// else {
//     document.write("<br>Incorrect password.");
// }

// /*
// Assignment # 6:This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day"; else
// greeting = "Good evening";
// }
// */

// let greeting;
// let hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// //Assignment # 7:Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// /*

// time 1900
// time> 0000 && time < 1200  =>  true => "Good morning!"
//                 false
// time >= 1200 && time < 1700  =>  true => "Good afternoon!"
//                 false
// time = 1700  =>  true => "Good evening
// time < 2100
// false
// time>2100 && time <= 2359  =>  true => "Good night!"
// */

// let time = 1900;

// if (time >= 0 && time < 1200) {
//     document.write("<br>Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     document.write("<br>Good afternoon!");
// } else if (time === 1700) {
//     document.write("<br>Good evening!");
// } else if (time >= 1700 && time <= 2359) {
//     document.write("<br>Good night!");
// }

// //Chapter 14-16:Arrays

// //Assignment # 1:Declare an empty array using JS literal notation to store student names in future.

// let studentsArray = [];

// //Assignment # 2:Declare an empty array using JS object notation to store student names in future.

// let students = {};

// //Assignment # 3: Declare and initialize a strings array.

// let names = ["Babar", "Rizwan", "Saim", "Fakhar", "Saud"];

// //Assignment # 4: Declare and initialize a numbers array.

// let numbers = [1, 2, 3, 4, 5];

// //Assignment # 5: Declare and initialize a booleans array.

// let booleans = [true, false, true, false, true];

// //Assignment # 6: Declare and initialize a mixed array.

// let mixedArray = ["Babar", 1, true, "Rizwan", 2, false];

// //Assignment # 7: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser:

// let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Qualifications</h2>");
// document.write("<br>",education[0]);
// document.write("<br>",education[1]);
// document.write("<br>",education[2]);
// document.write("<br>",education[3]);
// document.write("<br>",education[4]);
// document.write("<br>",education[5]);
// document.write("<br>",education[6]);
// document.write("<br>",education[7]);

// //Assignment # 8: Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
// // Score of Michael is 320. Percentage: 64% 
// // Score of John is 230. Percentage: 46%
// // Score of Tony is 480. Percentage: 96%

// let studentsNames = ["Michael", "John", "Tony"];
// let scores = [320, 230, 480];

// document.write("<br>Score of "+studentsNames[0]+" is "+scores[0]+". Percentage: "+scores[0]/500*100+"%");
// document.write("<br>Score of "+studentsNames[1]+" is "+scores[1]+". Percentage: "+scores[1]/500*100+"%");
// document.write("<br>Score of "+studentsNames[2]+" is "+scores[2]+". Percentage: "+scores[2]/500*100+"%");

// /*
// Assignment # 9:Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.. Display the updated array in your browser.
// */

// let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
// document.write(colors)
// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.

// let colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");

// colors.unshift(colorToAddAtBeginning);

// document.write("<br>Updated array: ", colors);

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.

// let colorToAddAtEnd = prompt("Enter a color to add at the end:");

// colors.push(colorToAddAtEnd);

// document.write("<br>Updated array: ", colors);

// // c. Add two more color to the beginning of the array.

// colors.unshift("Purple", "Orange");

// document.write("<br>Updated array: ", colors);

// // d. Delete the first color in the array.

// colors.shift();

// document.write("<br>Updated array: ", colors);

// // e. Delete the last color in the array.

// colors.pop();

// document.write("<br>Updated array: ", colors);

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.

// let colorToAdd = prompt("Enter a color to add:");
// let indexToAdd = +(prompt("Enter an index to add the color:"));

// colors.splice(indexToAdd, 0, colorToAdd);

// document.write("<br>Updated array: ", colors);

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.

// let indexToDelete = +(prompt("Enter an index to delete colors from:"));
// let numberOfColorsToDelete = +(prompt("Enter the number of colors to delete:"));

// colors.splice(indexToDelete, numberOfColorsToDelete);

// document.write("<br>Updated array: ", colors);

// // Assignment # 10:Write a program to store student scores in an array & sort the array in ascending order using Array's sort method.
// // Scores of Students: 320,230,480,120
// // Ordered Scores of Students: 120,230,320,480

// let scoresArray = [320, 230, 480, 120];
// document.write("<br>Scores of Students: "+ scoresArray);
// scoresArray.sort((a, b) => a - b);
// document.write("<br>Ordered scores of Students: "+ scoresArray);

// // Assignment # 11:Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan", "Hyderabad", "Bahawalpur", "Sialkot", "Sukkur", "Mardan", "Gilgit"];

// let selectedCities = [];

// selectedCities = cities.slice(0, 3);
// document.write("<br>Cities list: <br>"+ cities);
// document.write("<br>Selected Cities list: <br>"+ selectedCities);

// // Assignment # 12: Write a program to create a single string from the below mentioned array:
// // var arr=["Bobzy","the","King"];
// //(User array's join method)

// let arr = ["Bobzy", "the", "King"];
// let singleString = arr.join(" ");
// document.write("<br>Array: "+ arr);
// document.write("<br>String: "+ singleString);

// // Assignment # 13: Create a new array.Store values one by one in such a way that you can access the values in the order in which they were stored(FIFO-First In First Out).

// let devices=["Keyboard", "Mouse","Printer","Monitor"]
// document.write("<br>Device: " + devices);
// document.write("<br>Out<br>" + devices[0]);
// document.write("<br>Out<br>" + devices[1]);
// document.write("<br>Out<br>" + devices[2]);
// document.write("<br>Out<br>" + devices[3]);

// // Assignment # 14: Write a program to create a new array.Store values one by one in such a way that you can access the values in the reverse order of their original order.(LIFO-Last In First Out)

// let devicesReverse= devices.reverse();

// document.write("<br>Device: " + devicesReverse);
// document.write("<br>Out<br>" + devicesReverse[0]);
// document.write("<br>Out<br>" + devicesReverse[1]);
// document.write("<br>Out<br>" + devicesReverse[2]);
// document.write("<br>Out<br>" + devicesReverse[3]);

// // Assignment # 15:Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<br><select>");

// for (let i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");

// //Chapter 17-20:Arrays and Loops

// //Assignment # 1:Declare and initialize an empty multi-dimensional array.(Arrays of array)

// let multiDimArray = [];

// /*
// Assignment # 2:Declare and initialize a multi-dimensional array representing the following matrix
//         0   1   2   3
//         1   0   1   2
//         2   1   0   1
// */

// multiDimArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// //Assignment # 3:Write a program to print numerical counting from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// //Assignment # 4: Write a program to print multiplication table of any number using for loop.Table number and length should be taken as an input from user.

// let tableNumber = +(prompt("Enter a number to show its multiplication table:"));
// let tableLength = +(prompt("Enter the length of the multiplication table:"));

// for (let i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

// /*
// Assignment # 5:Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// apple 
// banana
// mango
// orange 
// strawberry

// Element at index 0 is apple Element at index 1 is banana
// Element at index 2 is mango
// Element at index 3 is orange
// Element at index 4 is strawberry
// */

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write(fruits)
// for (let i = 0; i < fruits.length; i++) {
//     document.write("<br>Element at index " + i + " is " + fruits[i]);
// }

// /*
// Assignment # 6:Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// */

// let counting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i <= 15; i++) {
//     document.write("<br>Counting: " + counting[i]);
// }

// counting.reverse();

// for (let i = 10; i <= counting.length - 2; i++) {
//     document.write("<br>Reverse counting: " + counting[i]);
// }

// counting.reverse();

// for (let i = 0; i <= counting.length - 1; i += 2) {
//     document.write("<br>Even: " + counting[i]);
// }

// for (let i = 1; i <= counting.length - 1; i += 2) {
//     document.write("<br>Odd: " + counting[i]);
// }

// for (let i = 2; i <= counting.length - 1; i++) {
//     document.write("<br>Series: " + counting[i] + "k");
// }

// /*
// Assignment # 7: You have an array
// A = ["cake", "apple pie”, “cookie”, “chips”, “patties"]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.
// */

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Welcome to ABC Bakery.What do want to order sir/ma'am?:");

// let isFound = A.includes(userInput);

// if (isFound) {
//     alert(userInput + " is available at index "+A.indexOf(userInput) +" in our bakery!");
// } else {
//     alert("We are sorry "+userInput + " is not found in our bakery!");
// }

// //Assignment # 8:Write a program to identify the largest number in the array.

// let numbers = [16, 56, 16, 49, 10];

// document.write("\nArray items: " + numbers);

// let largestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];
//         document.write("<br>The largest number is " + numbers[i]);
//     }
// }

// // Assignment # 9: Write a program to find the smallest number in the array.

// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//         document.write("<br>The smallest number is " + numbers[i]);
//     }
// }

// // Assignment # 10: Write a program to print multiples of 5 ranging 1 to 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write("<br>" + i);
//     }
// }
