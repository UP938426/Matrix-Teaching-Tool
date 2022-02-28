

//throughout, used Number(variable) as otherwise it is saved as a string. "Number(x)" turns x into a number rather than a string, allowing it to be mathematically variableipulated.
//have tried to retrieve values using .valueasnumber instead of .value but no success so far. Will look further into it

//use variable "x" to bring up steps? set on button press and go from there

//do I need to clear buffers (e.g. variableA11)? No issues found so far



//provides navbar with functionality, rather than using hyperlinks
//navbar links






//function to create random matrix A. When button is clicked, uses random number generator to create numbers from 10 to 10
//   Math.round(Math.random()) produces a number that is either 0 or 1. Multiplying by 2 gives either 0 or 2. Subtract 1 gives either -1 or 1.
//math.round used
// Other possibilities exist, such as

// cos(0) = 1
// cos(PI) = -1
// random_sign = cos( PI x ( 0 or 1 ) );
//random_sign = Math.cos( Math.PI * Math.round( Math.random() ) );
//Found at https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
//I have edited this to use math floor and incremented the number by one (i.e. 15 to 16). This enables each number to have a full range that creates it - 0-0.999, instead of 0-0.499 at
//the extremes of +/15. This should give a more even distribution of numbers.

//$ is from jQuery library, searches for ids or titles etc
//
randomA.onclick = function() {

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a11.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a12.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a21.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a22.value = rndmNum4;

}

randomB.onclick = function() { //function to create random matrix B.

  rndmNum1 = Math.round(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b11.value = rndmNum1;

  rndmNum2 = Math.round(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b12.value = rndmNum2;

  rndmNum3 = Math.round(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b21.value = rndmNum3;

  rndmNum4 = Math.round(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b22.value = rndmNum4;

}

inverseA.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  determinantA2x2 = (Number(variableA11) * Number(variableA22)) - (Number(variableA12) * Number(variableA21));

  inverseA2x2multiplier = 1 / determinantA2x2;

  ans11.long = variableA22 * inverseA2x2multiplier;
  ans12.long = -(variableA21 * inverseA2x2multiplier);
  ans21.long = -(variableA12 * inverseA2x2multiplier);
  ans22.long = variableA11 * inverseA2x2multiplier;

  ans11.value = ans11.long.toFixed(4)
  ans12.value = ans12.long.toFixed(4)
  ans21.value = ans21.long.toFixed(4)
  ans22.value = ans22.long.toFixed(4)
}

inverseB.onclick = function() {
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  determinantB2x2 = (Number(variableB11) * Number(variableB22)) - (Number(variableB12) * Number(variableB21));

  inverseB2x2multiplier = 1 / determinantB2x2;

  ans11.long= variableB22 * inverseB2x2multiplier;
  ans12.long = -(variableB21 * inverseB2x2multiplier);
  ans21.long = -(variableB12 * inverseB2x2multiplier);
  ans22.long = variableB11 * inverseB2x2multiplier;

  ans11.value = ans11.long.toFixed(4)
  ans12.value = ans12.long.toFixed(4)
  ans21.value = ans21.long.toFixed(4)
  ans22.value = ans22.long.toFixed(4)

}




transposeA2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;


  ans11.value = variableA11;
  ans12.value = variableA21;
  ans21.value = variableA12;
  ans22.value = variableA22;

}

transposeB2x2.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;


  ans11.value = variableB11;
  ans12.value = variableB21;
  ans21.value = variableB12;
  ans22.value = variableB22;


}

determinantA2x2.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  determinantA2x2 = (Number(variableA11) * Number(variableA22)) - (Number(variableA12) * Number(variableA21));
determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA2x2 + "."  + " <br> Reveal the method below.";

}
//jQuery
//$("determinantAns").text("The determinant of Matrix A is " + determinantA2x2);
//$("determinantAns").html("The determinant of Matrix A is " + determinantA2x2);

determinantB2x2.onclick = function() {
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  determinantB2x2 = (Number(variableB11) * Number(variableB22)) - (Number(variableB12) * Number(variableB21));
  determinantAns.innerHTML = "The determinant of Matrix B is " + determinantB2x2 + "."  + " <br> Reveal the method below.";
}

addition2x2.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  ans11.value = Number(variableA11) + Number(variableB11);
  ans12.value = Number(variableA12) + Number(variableB12);
  ans21.value = Number(variableA21) + Number(variableB21);
  ans22.value = Number(variableA22) + Number(variableB22);
}

subtraction2x2AminusB.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  ans11.value = Number(variableA11) - Number(variableB11);
  ans12.value = Number(variableA12) - Number(variableB12);
  ans21.value = Number(variableA21) - Number(variableB21);
  ans22.value = Number(variableA22) - Number(variableB22);
}


subtraction2x2BminusA.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  ans11.value = Number(variableB11) - Number(variableA11);
  ans12.value = Number(variableB12) - Number(variableA12);
  ans21.value = Number(variableB21) - Number(variableA21);
  ans22.value = Number(variableB22) - Number(variableA22);

}

multiplyAB2x2.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  ans11.value = ((Number(variableA11) * Number(variableB11)) + ((Number(variableA12) * Number(variableB21))));

  ans12.value = ((Number(variableA11) * Number(variableB12)) + ((Number(variableA12) * Number(variableB22))));

  ans21.value = ((Number(variableA21) * Number(variableB11)) + ((Number(variableA22) * Number(variableB21))));

  ans22.value = ((Number(variableA21) * Number(variableB12)) + ((Number(variableA22) * Number(variableB22))));
}

multiplyBA2x2.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  ans11.value = ((Number(variableB11) * Number(variableA11)) + ((Number(variableB12) * Number(variableA21))));

  ans12.value = ((Number(variableB11) * Number(variableA12)) + ((Number(variableB12) * Number(variableA22))));

  ans21.value = ((Number(variableB21) * Number(variableA11)) + ((Number(variableB22) * Number(variableA21))));

  ans22.value = ((Number(variableB21) * Number(variableA12)) + ((Number(variableB22) * Number(variableA22))));
}


// scalarA.onclick = function() {
//   scalarA = scalarA2x2.value;
//   variableA11 = a11.value;
//   variableA12 = a12.value;
//   variableA21 = a21.value;
//   variableA22 = a22.value;
//
//   ans11.value = Number(variableA11) * Number(scalarA);
//   ans12.value = Number(variableA12) * Number(scalarA);
//   ans21.value = Number(variableA21) * Number(scalarA);
//   ans22.value = Number(variableA22) * Number(scalarA);
// }
//
//
// scalarB.onclick = function() {
//   scalarB = scalarB2x2.value;
//   variableB11 = b11.value;
//   variableB12 = b12.value;
//   variableB21 = b21.value;
//   variableB22 = b22.value;
//
//   ans11.value = Number(variableB11) * Number(scalarB);
//   ans12.value = Number(variableB12) * Number(scalarB);
//   ans21.value = Number(variableB21) * Number(scalarB);
//   ans22.value = Number(variableB22) * Number(scalarB);
// }
//
// //takes in data from table - beware, will need to ensure new data not put in
// //i.e. enter data then press button then replace values in Matrix
// //so will need to consider moving this assignmeant of variable values within a calculating function
//
// // function takevalues()
// // randomB.onclick = function(){
// //
// //   var a11 = document.getElementByID("a11");
// // alert(a11);//help to check
// // }
// //
// //
// // function AplusB2x2() {
// //
// //   var a11 = document.getElementByID("a11");
// //
// // }
// //
// //
// //
// ////Original version of random matrix
// // //creates a random matrix. Should create a random matrix each time as all variables included within the function
// // // //as random numbers each time, have just copied this function and changed name for each matrix
// // randomA.onclick = function() {
// //
// //   var randa11 = math.random();
// //   randa11 = math.floor((randa11 * 10) + 1);
// // alert("works");
// //   //use object literal to update
// //
// //   var randa12 = math.random();
// //   randa12 = math.floor(randa12 * 10) + 1;
// //
// //   var randa1_3 = math.random();
// //   randa1_3 = math.floor(randa1_3 * 10) + 1;
// //
// //   var randa21 = math.random();
// //   randa21 = math.floor(randa21 * 10) + 1;
// //
// //   var randa22 = math.random();
// //   randa22 = math.floor(randa22 * 10) + 1;
// //
// //   var randa2_3 = math.random();
// //   randa2_3 = math.floor(randa2_3 * 10) + 1;
// //
// //   var randa3_1 = math.random();
// //   randa3_1 = math.floor(randa3_1 * 10) + 1;
// //
// //   var randa3_2 = math.random();
// //   randa3_2 = math.floor(randa3_2 * 10) + 1;
// //
// //   var randa3_3 = math.random();
// //   randa3_3 = math.floor(randa3_3 * 10) + 1;
// // }
