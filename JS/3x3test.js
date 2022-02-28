
randomA.onclick = function() {

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a11.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a12.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a13.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a21.value = rndmNum4;

  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a22.value = rndmNum5;

  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a23.value = rndmNum6;

  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a31.value = rndmNum7;

  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a32.value = rndmNum8;

  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  a33.value = rndmNum9;

}

randomB.onclick = function() { //function to create random matrix B.

  rndmNum1 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b11.value = rndmNum1;

  rndmNum2 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b12.value = rndmNum2;

  rndmNum3 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b13.value = rndmNum3;

  rndmNum4 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b21.value = rndmNum4;

  rndmNum5 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b22.value = rndmNum5;

  rndmNum6 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b23.value = rndmNum6;

  rndmNum7 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b31.value = rndmNum7;

  rndmNum8 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b32.value = rndmNum8;

  rndmNum9 = Math.floor(((Math.random()) * 2 - 1) * 10); //creates random integer up to +/-10
  b33.value = rndmNum9;

}

inverseA.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  determinantA3x3 = (Number(variableA11) * Number(variableA22) * Number(variableA33)) +
    (Number(variableA12) * Number(variableA23) * Number(variableA31)) +
    (Number(variableA13) * Number(variableA21) * Number(variableA32)) -
    (Number(variableA31) * Number(variableA22) * Number(variableA13)) -
    (Number(variableA32) * Number(variableA23) * Number(variableA11)) -
    (Number(variableA33) * Number(variableA21) * Number(variableA12));



  var minorA11 = (Number(variableA22)*Number(variableA33)) - (Number(variableA32)*Number(variableA23))
  var minorA12 = -(Number(variableA21)*Number(variableA33)) - (Number(variableA23)*Number(variableA31))
  var minorA13 = (Number(variableA21)*Number(variableA32)) - (Number(variableA22)*Number(variableA31))
  var minorA21 = -(Number(variableA12)*Number(variableA33)) - (Number(variableA13)*Number(variableA32))
  var minorA22 = (Number(variableA11)*Number(variableA33)) - (Number(variableA13)*Number(variableA31))
  var minorA23 = -(Number(variableA11)*Number(variableA32)) - (Number(variableA12)*Number(variableA31))
  var minorA31 = (Number(variableA12)*Number(variableA23)) - (Number(variableA13)*Number(variableA22))
  var minorA32 = -(Number(variableA11)*Number(variableA23)) - (Number(variableA13)*Number(variableA21))
  var minorA33 = (Number(variableA11)*Number(variableA22)) - (Number(variableA12)*Number(variableA21))



  inverseA3x3 = 1 / determinantA3x3;

  ans11.long = minorA11 * inverseA3x3;
  ans12.long = minorA21 * inverseA3x3;
  ans13.long = minorA31 * inverseA3x3;
  ans21.long = minorA12 * inverseA3x3;
  ans22.long = minorA22 * inverseA3x3;
  ans23.long = minorA32 * inverseA3x3;
  ans31.long = minorA13 * inverseA3x3;
  ans32.long = minorA23 * inverseA3x3;
  ans33.long = minorA33 * inverseA3x3;

  ans11.value = ans11.long.toFixed(4)
  ans12.value = ans12.long.toFixed(4)
  ans13.value = ans13.long.toFixed(4)
  ans21.value = ans21.long.toFixed(4)
  ans22.value = ans22.long.toFixed(4)
  ans23.value = ans23.long.toFixed(4)
  ans31.value = ans31.long.toFixed(4)
  ans32.value = ans32.long.toFixed(4)
  ans33.value = ans33.long.toFixed(4)
}

inverseB.onclick = function() {
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  determinantB3x3 = (Number(variableB11) * Number(variableB22) * Number(variableB33)) +
  (Number(variableB12) * Number(variableB23) * Number(variableB31)) +
  (Number(variableB13) * Number(variableB21) * Number(variableB32)) -
  (Number(variableB31) * Number(variableB22) * Number(variableB13)) -
  (Number(variableB32) * Number(variableB23) * Number(variableB11)) -
  (Number(variableB33) * Number(variableB21) * Number(variableB12));

  var minorB11 = (Number(variableB22)*Number(variableB33)) - (Number(variableB32)*Number(variableB23))
  var minorB12 = -(Number(variableB21)*Number(variableB33)) - (Number(variableB23)*Number(variableB31))
  var minorB13 = (Number(variableB21)*Number(variableB32)) - (Number(variableB22)*Number(variableB31))
  var minorB21 = -(Number(variableB12)*Number(variableB33)) - (Number(variableB13)*Number(variableB32))
  var minorB22 = (Number(variableB11)*Number(variableB33)) - (Number(variableB13)*Number(variableB31))
  var minorB23 = -(Number(variableB11)*Number(variableB32)) - (Number(variableB12)*Number(variableB31))
  var minorB31 = (Number(variableB12)*Number(variableB23)) - (Number(variableB13)*Number(variableB22))
  var minorB32 = -(Number(variableB11)*Number(variableB23)) - (Number(variableB13)*Number(variableB21))
  var minorB33 = (Number(variableB11)*Number(variableB22)) - (Number(variableB12)*Number(variableB21))



  inverseB3x3 = 1 / determinantB3x3;

  ans11.long = minorB11 * inverseB3x3;
  ans12.long = minorB21 * inverseB3x3;
  ans13.long = minorB31 * inverseB3x3;
  ans21.long = minorB12 * inverseB3x3;
  ans22.long = minorB22 * inverseB3x3;
  ans23.long = minorB32 * inverseB3x3;
  ans31.long = minorB13 * inverseB3x3;
  ans32.long = minorB23 * inverseB3x3;
  ans33.long = minorB33 * inverseB3x3;


  ans11.value = ans11.long.toFixed(4)
  ans12.value = ans12.long.toFixed(4)
  ans13.value = ans13.long.toFixed(4)
  ans21.value = ans21.long.toFixed(4)
  ans22.value = ans22.long.toFixed(4)
  ans23.value = ans23.long.toFixed(4)
  ans31.value = ans31.long.toFixed(4)
  ans32.value = ans32.long.toFixed(4)
  ans33.value = ans33.long.toFixed(4)


}

transposeA3x3.onclick = function() {
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;


  ans11.value = variableA11;
  ans12.value = variableA21;
  ans13.value = variableA31;
  ans21.value = variableA12;
  ans22.value = variableA22;
  ans23.value = variableA32;
  ans31.value = variableA13;
  ans32.value = variableA23;
  ans33.value = variableA33;
}

transposeB3x3.onclick = function() {
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;


  ans11.value = variableB11;
  ans12.value = variableB21;
  ans13.value = variableB31;
  ans21.value = variableB12;
  ans22.value = variableB22;
  ans23.value = variableB32;
  ans31.value = variableB13;
  ans32.value = variableB23;
  ans33.value = variableB33;
}

determinantA3x3.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  determinantA3x3 = (Number(variableA11) * Number(variableA22) * Number(variableA33)) +
    (Number(variableA12) * Number(variableA23) * Number(variableA31)) +
    (Number(variableA13) * Number(variableA21) * Number(variableA32)) -
    (Number(variableA31) * Number(variableA22) * Number(variableA13)) -
    (Number(variableA32) * Number(variableA23) * Number(variableA11)) -
    (Number(variableA33) * Number(variableA21) * Number(variableA12));

  determinantAns.innerHTML = "The determinant of Matrix A is " + determinantA3x3 + "." ;

}
//jQuery
//$("determinantAns").text("The determinant of Matrix A is " + determinantA3x3);
//$("determinantAns").html("The determinant of Matrix A is " + determinantA3x3);

determinantB3x3.onclick = function() {
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  determinantB3x3 = (Number(variableB11) * Number(variableB22) * Number(variableB33)) +
    (Number(variableB12) * Number(variableB23) * Number(variableB31)) +
    (Number(variableB13) * Number(variableB21) * Number(variableB32)) -
    (Number(variableB31) * Number(variableB22) * Number(variableB13)) -
    (Number(variableB32) * Number(variableB23) * Number(variableB11)) -
    (Number(variableB33) * Number(variableB21) * Number(variableB12));

  determinantAns.innerHTML = "The determinant of Matrix B is " + determinantB3x3 + "." ;
}

addAB.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  ans11.value = Number(variableA11) + Number(variableB11);
  ans12.value = Number(variableA12) + Number(variableB12);
  ans13.value = Number(variableA13) + Number(variableB13);
  ans21.value = Number(variableA21) + Number(variableB21);
  ans22.value = Number(variableA22) + Number(variableB22);
  ans23.value = Number(variableA23) + Number(variableB23);
  ans31.value = Number(variableA31) + Number(variableB31);
  ans32.value = Number(variableA32) + Number(variableB32);
  ans33.value = Number(variableA33) + Number(variableB33);
}

subtractAB.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  ans11.value = Number(variableA11) - Number(variableB11);
  ans12.value = Number(variableA12) - Number(variableB12);
  ans13.value = Number(variableA13) - Number(variableB13);
  ans21.value = Number(variableA21) - Number(variableB21);
  ans22.value = Number(variableA22) - Number(variableB22);
  ans23.value = Number(variableA23) - Number(variableB23);
  ans31.value = Number(variableA31) - Number(variableB31);
  ans32.value = Number(variableA32) - Number(variableB32);
  ans33.value = Number(variableA33) - Number(variableB33);
}


subtractBA.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  ans11.value = Number(variableB11) - Number(variableA11);
  ans12.value = Number(variableB12) - Number(variableA12);
  ans13.value = Number(variableB13) - Number(variableA13);
  ans21.value = Number(variableB21) - Number(variableA21);
  ans22.value = Number(variableB22) - Number(variableA22);
  ans23.value = Number(variableB23) - Number(variableA23);
  ans31.value = Number(variableB31) - Number(variableA31);
  ans32.value = Number(variableB32) - Number(variableA32);
  ans33.value = Number(variableB33) - Number(variableA33);

}

multiplyAB.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  ans11.value = ((Number(variableB11) * Number(variableA11)) + ((Number(variableB21) * Number(variableA12)) + ((Number(variableB31) * Number(variableA13)))));
  ans12.value = ((Number(variableB12) * Number(variableA11)) + ((Number(variableB22) * Number(variableA12)) + ((Number(variableB32) * Number(variableA13)))));
  ans13.value = ((Number(variableB13) * Number(variableA11)) + ((Number(variableB23) * Number(variableA12)) + ((Number(variableB33) * Number(variableA13)))));
  ans21.value = ((Number(variableB11) * Number(variableA21)) + ((Number(variableB21) * Number(variableA22)) + ((Number(variableB31) * Number(variableA23)))));
  ans22.value = ((Number(variableB12) * Number(variableA21)) + ((Number(variableB22) * Number(variableA22)) + ((Number(variableB32) * Number(variableA23)))));
  ans23.value = ((Number(variableB13) * Number(variableA21)) + ((Number(variableB23) * Number(variableA22)) + ((Number(variableB33) * Number(variableA23)))));
  ans31.value = ((Number(variableB11) * Number(variableA31)) + ((Number(variableB21) * Number(variableA32)) + ((Number(variableB31) * Number(variableA33)))));
  ans32.value = ((Number(variableB12) * Number(variableA31)) + ((Number(variableB22) * Number(variableA32)) + ((Number(variableB32) * Number(variableA33)))));
  ans33.value = ((Number(variableB13) * Number(variableA31)) + ((Number(variableB23) * Number(variableA32)) + ((Number(variableB33) * Number(variableA33)))));
}

multiplyBA.onclick = function() {
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

ans11.value = ((Number(variableA11) * Number(variableB11)) + ((Number(variableA21) * Number(variableB12)) + ((Number(variableA31) * Number(variableB13)))));
ans12.value = ((Number(variableA12) * Number(variableB11)) + ((Number(variableA22) * Number(variableB12)) + ((Number(variableA32) * Number(variableB13)))));
ans13.value = ((Number(variableA13) * Number(variableB11)) + ((Number(variableA23) * Number(variableB12)) + ((Number(variableA33) * Number(variableB13)))));
ans21.value = ((Number(variableA11) * Number(variableB21)) + ((Number(variableA21) * Number(variableB22)) + ((Number(variableA31) * Number(variableB23)))));
ans22.value = ((Number(variableA12) * Number(variableB21)) + ((Number(variableA22) * Number(variableB22)) + ((Number(variableA32) * Number(variableB23)))));
ans23.value = ((Number(variableA13) * Number(variableB21)) + ((Number(variableA23) * Number(variableB22)) + ((Number(variableA33) * Number(variableB23)))));
ans31.value = ((Number(variableA11) * Number(variableB31)) + ((Number(variableA21) * Number(variableB32)) + ((Number(variableA31) * Number(variableB33)))));
ans32.value = ((Number(variableA12) * Number(variableB31)) + ((Number(variableA22) * Number(variableB32)) + ((Number(variableA32) * Number(variableB33)))));
ans33.value = ((Number(variableA13) * Number(variableB31)) + ((Number(variableA23) * Number(variableB32)) + ((Number(variableA33) * Number(variableB33)))));

}


scalarA.onclick = function() {
  scalarA = scalarA3x3.value;
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;


  ans11.value = Number(variableA11) * Number(scalarA);
  ans12.value = Number(variableA12) * Number(scalarA);
  ans13.value = Number(variableA13) * Number(scalarA);
  ans21.value = Number(variableA21) * Number(scalarA);
  ans22.value = Number(variableA22) * Number(scalarA);
  ans23.value = Number(variableA23) * Number(scalarA);
  ans31.value = Number(variableA31) * Number(scalarA);
  ans32.value = Number(variableA32) * Number(scalarA);
  ans33.value = Number(variableA33) * Number(scalarA);
}


scalarB.onclick = function() {
  scalarB = scalarB3x3.value;
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB13 = b13.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;
  var variableB23 = b23.value;
  var variableB31 = b31.value;
  var variableB32 = b32.value;
  var variableB33 = b33.value;

  ans11.value = Number(variableB11) * Number(scalarB);
  ans12.value = Number(variableB12) * Number(scalarB);
  ans13.value = Number(variableB13) * Number(scalarB);
  ans21.value = Number(variableB21) * Number(scalarB);
  ans22.value = Number(variableB22) * Number(scalarB);
  ans23.value = Number(variableB23) * Number(scalarB);
  ans31.value = Number(variableB31) * Number(scalarB);
  ans32.value = Number(variableB32) * Number(scalarB);
  ans33.value = Number(variableB33) * Number(scalarB);
}
