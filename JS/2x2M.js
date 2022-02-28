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
  b22.value = rndmNum4;}


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
