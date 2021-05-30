// ******************************* CHAP 31-34  **********************************



// TASK 1
// var date = new Date();
// document.write(date);



// TASK 2
// var month = ["jan"  , "feb" , "mar" , "apr" ,"may" , "june" , "july" , "aug" , "sep"  , "oct" ,"nov" , "dec"]
// var  date  = new Date().getMonth();
// var callMonth = month[date];
// document.write("The current month is :" + " " + callMonth);



// TASK 3

// var day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// var date = new Date().getDay();
// var currentDay = day[date];
// document.write("The current day is :" + " " + currentDay);


// TASK 4

// var a = new Date();
// var x = a.toString(a);
// var y = x.slice(0,4);
// if (y === "sat" || y=== "sun"){
//     document.write("Its fun day");
// }
// else {
//     document.write("its working day");
// }


// TASK 5

// var a = new Date();
// var x = a.toString(a);
// var y = x.slice(4,6);
// if (y > "15"){
//     document.write("Its last days of month");
// }
// else {
//     document.write("its start days of month");
// }



// TASK 6


// var a = new Date();
// var b = a.getTime();
// document.write( "milliSECONDS towards 1970s : " + " " + b);
// var c;
//  c = b / 60000;
// document.write( "minutes towards 1970s : " + " " + c);




// TASK 7

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }



//  TASK 8

// var a = new Date("thu , dec, 31 , 2020");
// document.write(a);
// var b = a.setFullYear(2019 , 2,  4 , "wed") ;
// document.write(b);


//  TASK 9

// var a = new Date("12 , jun , 2015");
// var b = a.getTime(a);
// var c = (60  * 60  * 24  * 1000)% 365 ;
// document.write(c + " " + "days have passed before first  ramadan.");


// TASK 10


// var a = new Date("sat , Dec , 5 , 2015");
// document.write(a);
// var b = a.getTime("sat , Dec , 5 , 2015");
// var c = b/1000;
// document.write("<br>" + c);



// TASK 11

// var a = new Date();
// document.write("cureent date and time" + " " + a);
// var b = a.setHours(8);
// var c = new Date(b);
// document.write("<br> " + "1 hour  ago it was" +c);


// TASK 12

// var a = new Date();
// document.write("cureent date and time" + " " + a);
// var b = a.setFullYear(1920);
// var c = new Date(b);
// document.write("<br> " + "100 years back it was" + " " +c);


// TASK 13

// var a = new Date ( prompt("enter dob"));
// var b = a.getTime();
// var c = new Date();
// var d = c.getTime();
// var diff = d - b;
// var age = Math.floor(diff);
// var finalAGE = Math.floor(age/(1000*60*60*24*30*12));
// document.write( "you are"+ " " + finalAGE + "" + "years old.");



//  TASK 14

// var name = prompt("enter a name");
// var month = prompt("enter a months name");
// var unit = +prompt("enter a number of unit ");
// var cPu = +prompt("enter charges per unit");
// var billWITHOUTdue = unit * cPu;
// var charges = 350;
// var lateDUEbill = billWITHOUTdue + charges;
// document.write(" <h1> K- ELCTRIC BILLS </h1> <br>");
// document.write("CUSTOMER NAME :" + " " + name + "<br>");
// document.write("MONTH :" + " " + month + "<br>");
// document.write("unit number :" + " " + unit + "<br>");
// document.write("CHARGES PER UNIT :" + " " + cPu + "<br>");
// document.write("Net Amount Payable (within Due Date) = :" + " " + billWITHOUTdue + "<br>");
// document.write("Net Amount Payable (after Due Date) = :" + " " + lateDUEbill + "<br>");
