
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
