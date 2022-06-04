


clearData = function() { //funtion to clear previous solution information

  document.getElementById("Answer").innerHTML = ""; //clear steps from previous calculations
  document.getElementById("Method").innerHTML = "";
  document.getElementById("Explain").innerHTML = "";
}

hideSteps = function() {
  Answer.style.display = "none";
  Method.style.display = "none";
  Explain.style.display = "none";

  MethodPress.style.display = "none";
  ExplainPress.style.display = "none";


}

//Show Steps Buttons
MethodPress.onclick = function() {

  var x = document.getElementById("Method");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("MethodPress").style.display = "none";
  }
}

ExplainPress.onclick = function() {

  var x = document.getElementById("Explain");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("ExplainPress").style.display = "none";
  }
}


randomA.onclick = function() {
  clearData();
  hideSteps();

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
  clearData();
  hideSteps();

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



transposeA3x3.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  "\\\\" + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";




  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To transpose a 3x3 Matrix you need to switch the rows and columns." +
    "\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix} =  \\begin{bmatrix} a & d & g \\\\ b & e & h \\\\ c & f & i\\end{bmatrix}";

  Explain.innerHTML = "\\begin{bmatrix}" + a11.value + "&" + a12.value + "&" + a13.value + "\\\\" + a21.value + "&" + a22.value + "&" + a23.value + "\\\\"  + a31.value + "& " + a32.value + "&" + a33.value + "\\end{bmatrix} = \\begin{bmatrix}"
   + a11.value + "&" + a21.value + "&" + a31.value + "\\\\" + a12.value + "&" + a22.value + "&" + a32.value + "\\\\"  + a13.value + "& " + a23.value + "&" + a33.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

transposeB3x3.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  "\\\\" + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";




  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To transpose a 3x3 Matrix you need to switch the rows and columns." +
    "\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix} =  \\begin{bmatrix} a & d & g \\\\ b & e & h \\\\ c & f & i\\end{bmatrix}";

  Explain.innerHTML = "\\begin{bmatrix}" + b11.value + "&" + b12.value + "&" + b13.value + "\\\\" + b21.value + "&" + b22.value + "&" + b23.value + "\\\\"  + b31.value + "& " + b32.value + "&" + b33.value + "\\end{bmatrix} = \\begin{bmatrix}"
   + b11.value + "&" + b21.value + "&" + b31.value + "\\\\" + b12.value + "&" + b22.value + "&" + b32.value + "\\\\"  + b13.value + "& " + b23.value + "&" + b33.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

determinantA3x3.onclick = function() {
  clearData();
  hideSteps();
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA13 = a13.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;
  var variableA23 = a23.value;
  var variableA31 = a31.value;
  var variableA32 = a32.value;
  var variableA33 = a33.value;

  determinantA3x3= (Number(variableA11) * Number(variableA22) * Number(variableA33)) +
    (Number(variableA12) * Number(variableA23) * Number(variableA31)) +
    (Number(variableA13) * Number(variableA21) * Number(variableA32)) -
    (Number(variableA31) * Number(variableA22) * Number(variableA13)) -
    (Number(variableA32) * Number(variableA23) * Number(variableA11)) -
    (Number(variableA33) * Number(variableA21) * Number(variableA12));

    document.getElementById("Answer").innerHTML = "The determinant of Matrix A is " + determinantA3x3 + ".";




    //adding HTML for results
    document.getElementById("Answer").style.display = "block";
    document.getElementById("MethodPress").style.display = "block";
    document.getElementById("ExplainPress").style.display = "block";

    Method.innerHTML = "To calculate the determinant of a 3x3 Matrix there are two methods that can be used." + "<br><br>Method One" + "<br> \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix}" + "Det = <br>" +
      "$$a * \\begin{bmatrix} e & f \\\\ h & i\\end{bmatrix} - b * \\begin{bmatrix} d & f \\\\ g & i\\end{bmatrix} + c * \\begin{bmatrix} d & e \\\\ g & h\\end{bmatrix}$$" +
      "<br><br> Method Two" + " <br> Det = ((a * e * i) + (b * f * g) + (c * d * h)) - ((g * e * c ) + (h * f * a) + (i * d * b))" + "<br>Further method explanation can be found in the Determinant Lesson.";

    Explain.innerHTML = "Matrix A" + "\\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
        " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}<br>"
    +  "$$" + a11.value + "\\begin{bmatrix}" + a22.value + "&" + a23.value + "\\\\" + a32.value + "&" + a33.value + "\\end{bmatrix}"+
    "-" + a12.value + "\\begin{bmatrix}" + a21.value + "&" + a23.value + "\\\\" + a31.value + "&" + a33.value + "\\end{bmatrix}" +
      "-" + a13.value + "\\begin{bmatrix}" + a21.value + "&" + a22.value + "\\\\" + a31.value + "&" + a32.value + "\\end{bmatrix}$$" + "The determinant of Matrix A is " + determinantA3x3 + ".";
    //   "&nbsp;+ &nbsp;" + a13.value +
    // "\\begin{bmatrix}" + a21.value + "&" + a22.value + "\\\\" + a31.value + "&" + a32.value + "\\end{bmatrix}"  + determinantA3x3 +;

    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}


determinantB3x3.onclick = function() {
  clearData();
  hideSteps();
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

    document.getElementById("Answer").innerHTML = "The determinant of Matrix B is " + determinantB3x3 + ".";




    //adding HTML for results
    document.getElementById("Answer").style.display = "block";
    document.getElementById("MethodPress").style.display = "block";
    document.getElementById("ExplainPress").style.display = "block";

    Method.innerHTML = "To calculate the determinant of a 3x3 Matrix there are two methods that can be used." + "<br><br>Method One" + "<br> \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix}" + "Det = <br>" +
      "$$a * \\begin{bmatrix} e & f \\\\ h & i\\end{bmatrix} - b * \\begin{bmatrix} d & f \\\\ g & i\\end{bmatrix} + c * \\begin{bmatrix} d & e \\\\ g & h\\end{bmatrix}$$" +
      "<br><br> Method Two" + " <br> Det = ((a * e * i) + (b * f * g) + (c * d * h)) - ((g * e * c ) + (h * f * a) + (i * d * b))" + "<br>Further method explanation can be found in the Determinant Lesson.";

    Explain.innerHTML = "Matrix B" + "\\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
        " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}<br>"
    +  "$$" + b11.value + "\\begin{bmatrix}" + b22.value + "&" + b23.value + "\\\\" + b32.value + "&" + b33.value + "\\end{bmatrix}"+
    "-" + b12.value + "\\begin{bmatrix}" + b21.value + "&" + b23.value + "\\\\" + b31.value + "&" + b33.value + "\\end{bmatrix}" +
      "-" + b13.value + "\\begin{bmatrix}" + b21.value + "&" + b22.value + "\\\\" + b31.value + "&" + b32.value + "\\end{bmatrix}$$" + "The determinant of Matrix B is " + determinantB3x3 + ".";
    //   "&nbsp;+ &nbsp;" + a13.value +
    // "\\begin{bmatrix}" + a21.value + "&" + a22.value + "\\\\" + a31.value + "&" + a32.value + "\\end{bmatrix}"  + determinantA3x3 +;

    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

inverseA.onclick = function() {
  clearData();
  hideSteps();
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

  ans11.value = ans11.long.toFixed(3)
  ans12.value = ans12.long.toFixed(3)
  ans13.value = ans13.long.toFixed(3)
  ans21.value = ans21.long.toFixed(3)
  ans22.value = ans22.long.toFixed(3)
  ans23.value = ans23.long.toFixed(3)
  ans31.value = ans31.long.toFixed(3)
  ans32.value = ans32.long.toFixed(3)
  ans33.value = ans33.long.toFixed(3)



  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To calculate the inverse of a 3x3 Matrix you need to first find the determinant." + " If the determinant is 0, then your work is finished, because the matrix has no inverse." + "<br>To calculate the determinant the following method is used." +
  "<br> \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix}" + "Det = <br>" + "$$a * \\begin{bmatrix} e & f \\\\ h & i\\end{bmatrix} - b * \\begin{bmatrix} d & f \\\\ g & i\\end{bmatrix} + c * \\begin{bmatrix} d & e \\\\ g & h\\end{bmatrix}$$" +
  "<br> Once this is done the matrix needs to be transposed." + "$$\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix} = \\begin{bmatrix} a & d & g \\\\ b & e & h \\\\ c & f & i\\end{bmatrix}$$" +
  "The third step is to find the determinant of each of the 2x2 minor matricies. To find the right minor matrix for each term, first highlight the row and column of the term you begin with. This should include five terms of the matrix. The remaining four terms make up the minor matrix<br>" +
  "Example" + "\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix}" + "$$a = Det" + "\\begin{bmatrix} e & f \\\\ h & i\\end{bmatrix}" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "f = Det" + "\\begin{bmatrix} a & b \\\\ g & h\\end{bmatrix}$$" +
  "Once you have replaced all of the values in this way the matrix needs to be turned into a matrix of cofactors by reversing the signs on alternating terms, like a ceckerboard.  This will give you the Adjoint Matrix" + "\\begin{bmatrix}" + "+" + " & " + "-" +  " & " + "+" + "\\\\ " + "-" +
    " & " + "+" +  " & " + "-" +  " \\\\ " +"+" +  " & " + "-" +  " & " + "+" + "\\" + "end{bmatrix}" +
    "Now for the final step. Take the Adjoint Matrix and divide it by the determinate.<br>  Inverse Matrix = (1/Det(Matrix)) * Adj(Matrix) "

  Explain.innerHTML =  "Matrix A" + "\\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
      " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}<br>" + "Det (A) =" +  "$$" + a11.value + "\\begin{bmatrix}" + a22.value + "&" + a23.value + "\\\\" + a32.value + "&" + a33.value + "\\end{bmatrix}"+
  "-" + a12.value + "\\begin{bmatrix}" + a21.value + "&" + a23.value + "\\\\" + a31.value + "&" + a33.value + "\\end{bmatrix}" +
    "-" + a13.value + "\\begin{bmatrix}" + a21.value + "&" + a22.value + "\\\\" + a31.value + "&" + a32.value + "\\end{bmatrix}$$" + "The determinant of Matrix A is " + determinantA3x3 + ".<br>" +
    "Transpose Matrix A." + "\\begin{bmatrix}" + a11.value + "&" + a12.value + "&" + a13.value + "\\\\" + a21.value + "&" + a22.value + "&" + a23.value + "\\\\"  + a31.value + "& " + a32.value + "&" + a33.value + "\\end{bmatrix} = \\begin{bmatrix}"
     + a11.value + "&" + a21.value + "&" + a31.value + "\\\\" + a12.value + "&" + a22.value + "&" + a32.value + "\\\\"  + a13.value + "& " + a23.value + "&" + a33.value + "\\end{bmatrix}" +
     "Matrix of Determinates" + "\\begin{bmatrix} " + (Number(minorA11)) + " & " +(Number(-minorA12)) +  " & " + (Number(minorA13)) + "\\\\ " + (Number(-minorA21)) + " & " + (Number(minorA22)) +  " & " + (Number(-minorA23)) +  " \\\\ " +(Number(minorA31)) +  " & " + (Number(-minorA32)) +  " & " + (Number(minorA33)) + "\\end{bmatrix}" +
     "Adjoint Matrix" + "\\begin{bmatrix} " + (Number(minorA11)) + " & " +(Number(minorA12)) +  " & " + (Number(minorA13)) + "\\\\ " + (Number(minorA21)) + " & " + (Number(minorA22)) +  " & " + (Number(minorA23)) +  " \\\\ " +(Number(minorA31)) +  " & " + (Number(minorA32)) +  " & " + (Number(minorA33)) + "\\end{bmatrix}" +
     "Inverse of Matrix A = (1/Det(A)) * Adj(A) =" +
     "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
       " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\end{bmatrix}"






    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);



}

inverseB.onclick = function() {
  clearData();
  hideSteps();
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


  ans11.value = ans11.long.toFixed(3)
  ans12.value = ans12.long.toFixed(3)
  ans13.value = ans13.long.toFixed(3)
  ans21.value = ans21.long.toFixed(3)
  ans22.value = ans22.long.toFixed(3)
  ans23.value = ans23.long.toFixed(3)
  ans31.value = ans31.long.toFixed(3)
  ans32.value = ans32.long.toFixed(3)
  ans33.value = ans33.long.toFixed(3)

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To calculate the inverse of a 3x3 Matrix you need to first find the determinant." + " If the determinant is 0, then your work is finished, because the matrix has no inverse." + "<br>To calculate the determinant the following method is used." +
  "<br> \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix}" + "Det = <br>" + "$$a * \\begin{bmatrix} e & f \\\\ h & i\\end{bmatrix} - b * \\begin{bmatrix} d & f \\\\ g & i\\end{bmatrix} + c * \\begin{bmatrix} d & e \\\\ g & h\\end{bmatrix}$$" +
  "<br> Once this is done the matrix needs to be transposed." + "$$\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix} = \\begin{bmatrix} a & d & g \\\\ b & e & h \\\\ c & f & i\\end{bmatrix}$$" +
  "The third step is to find the determinant of each of the 2x2 minor matricies. To find the right minor matrix for each term, first highlight the row and column of the term you begin with. This should include five terms of the matrix. The remaining four terms make up the minor matrix<br>" +
  "Example" + "\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i\\end{bmatrix}" + "$$a = Det" + "\\begin{bmatrix} e & f \\\\ h & i\\end{bmatrix}" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "f = Det" + "\\begin{bmatrix} a & b \\\\ g & h\\end{bmatrix}$$" +
  "Once you have replaced all of the values in this way the matrix needs to be turned into a matrix of cofactors by reversing the signs on alternating terms, like a ceckerboard.  This will give you the Adjoint Matrix" + "\\begin{bmatrix}" + "+" + " & " + "-" +  " & " + "+" + "\\\\ " + "-" +
    " & " + "+" +  " & " + "-" +  " \\\\ " +"+" +  " & " + "-" +  " & " + "+" + "\\" + "end{bmatrix}" +
    "Now for the final step. Take the Adjoint Matrix and divide it by the determinate.<br>  Inverse Matrix = (1/Det(Matrix)) * Adj(Matrix) "

  Explain.innerHTML =  "Matrix B" + "\\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
      " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}<br>" + "Det (B) =" +  "$$" + b11.value + "\\begin{bmatrix}" + b22.value + "&" + b23.value + "\\\\" + b32.value + "&" + b33.value + "\\end{bmatrix}"+
  "-" + b12.value + "\\begin{bmatrix}" + b21.value + "&" + b23.value + "\\\\" + b31.value + "&" + b33.value + "\\end{bmatrix}" +
    "-" + b13.value + "\\begin{bmatrix}" + b21.value + "&" + b22.value + "\\\\" + b31.value + "&" + b32.value + "\\end{bmatrix}$$" + "The determinant of Matrix B is " + determinantB3x3 + ".<br>" +
    "Transpose Matrix B." + "\\begin{bmatrix}" + b11.value + "&" + b12.value + "&" + b13.value + "\\\\" + b21.value + "&" + b22.value + "&" + b23.value + "\\\\"  + b31.value + "& " + b32.value + "&" + b33.value + "\\end{bmatrix} = \\begin{bmatrix}"
     + a11.value + "&" + b21.value + "&" + b31.value + "\\\\" + b12.value + "&" + b22.value + "&" + b32.value + "\\\\"  + b13.value + "& " + b23.value + "&" + b33.value + "\\end{bmatrix}" +
     "Matrix of Determinates" + "\\begin{bmatrix} " + (Number(minorB11)) + " & " +(Number(-minorB12)) +  " & " + (Number(minorB13)) + "\\\\ " + (Number(-minorB21)) + " & " + (Number(minorB22)) +  " & " + (Number(-minorB23)) +  " \\\\ " +(Number(minorB31)) +  " & " + (Number(-minorB32)) +  " & " + (Number(minorB33)) + "\\end{bmatrix}" +
     "Adjoint Matrix" + "\\begin{bmatrix} " + (Number(minorB11)) + " & " +(Number(minorB12)) +  " & " + (Number(minorB13)) + "\\\\ " + (Number(minorB21)) + " & " + (Number(minorB22)) +  " & " + (Number(minorB23)) +  " \\\\ " +(Number(minorB31)) +  " & " + (Number(minorB32)) +  " & " + (Number(minorB33)) + "\\end{bmatrix}" +
     "Inverse of Matrix B = (1/Det(B)) * Adj(B) =" +
     "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
       " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\end{bmatrix}"






    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


}

addAB.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A added to Matrix B" +
    "<br> \\begin{bmatrix} a{_1}{_1} + b{_1}{_1} & a{_1}{_2} + b{_1}{_2} & a{_1}{_3} + b{_1}{_3} \\\\ a{_2}{_1} + b{_2}{_1} & a{_2}{_2} + b{_2}{_2} & a{_2}{_3} + b{_2}{_3} \\\\ a{_3}{_1} + b{_3}{_1} & a{_3}{_2} + b{_3}{_2} & a{_3}{_3} + b{_3}{_3}\\end{bmatrix}";

  Explain.innerHTML = "$$A + B =  \\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
      " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}" + " &nbsp;+ &nbsp;" + "\\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
          " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}$$<br>"
  + "\\begin{bmatrix} " + a11.value + " &nbsp;+ &nbsp;" + b11.value + "&" + a12.value + " &nbsp;+ &nbsp;" + b12.value +  "&" +    a13.value + " &nbsp;+ &nbsp;" + b13.value + "\\\\"
   + a21.value + " &nbsp;+ &nbsp;" + b21.value + "&" + a22.value + " &nbsp;+ &nbsp;" + b22.value + "&" + a23.value + " &nbsp;+ &nbsp;" + b23.value +  "\\\\"
   + a31.value + " &nbsp;+ &nbsp;" + b31.value + "&" + a32.value + " &nbsp;+ &nbsp;" + b32.value + "&" + a33.value + " &nbsp;+ &nbsp;" + b33.value + "\\end{bmatrix}" +
    " A + B =  \\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
      " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

subtractAB.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A added to Matrix B" +
    "<br> \\begin{bmatrix} a{_1}{_1} - b{_1}{_1} & a{_1}{_2} - b{_1}{_2} & a{_1}{_3} - b{_1}{_3} \\\\ a{_2}{_1} - b{_2}{_1} & a{_2}{_2} - b{_2}{_2} & a{_2}{_3} - b{_2}{_3} \\\\ a{_3}{_1} - b{_3}{_1} & a{_3}{_2} - b{_3}{_2} & a{_3}{_3} - b{_3}{_3}\\end{bmatrix}";

  Explain.innerHTML = "$$A - B =  \\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
      " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}" + " &nbsp;- &nbsp;" + "\\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
          " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}$$<br>"
  + "\\begin{bmatrix} " + a11.value + " &nbsp;- &nbsp;" + b11.value + "&" + a12.value + " &nbsp;- &nbsp;" + b12.value +  "&" + a13.value + " &nbsp;- &nbsp;" + b13.value + "\\\\"
   + a21.value + " &nbsp;- &nbsp;" + b21.value + "&" + a22.value + " &nbsp;- &nbsp;" + b22.value + "&" + a23.value + " &nbsp;- &nbsp;" + b23.value +  "\\\\"
   + a31.value + " &nbsp;- &nbsp;" + b31.value + "&" + a32.value + " &nbsp;- &nbsp;" + b32.value + "&" + a33.value + " &nbsp;- &nbsp;" + b33.value + "\\end{bmatrix}" +
    " A - B =  \\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
      " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}


subtractBA.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A added to Matrix B" +
    "<br> \\begin{bmatrix} b{_1}{_1} - a{_1}{_1} & b{_1}{_2} - a{_1}{_2} & b{_1}{_3} - a{_1}{_3} \\\\ b{_2}{_1} - a{_2}{_1} & b{_2}{_2} - a{_2}{_2} & b{_2}{_3} - a{_2}{_3} \\\\ b{_3}{_1} - a{_3}{_1} & b{_3}{_2} - a{_3}{_2} & b{_3}{_3} - a{_3}{_3}\\end{bmatrix}";

  Explain.innerHTML = "$$B - A =  \\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
      " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}" + " &nbsp;- &nbsp;" + "\\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
          " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}$$<br>"
  +  "\\begin{bmatrix} " + b11.value + " &nbsp;- &nbsp;" + a11.value + "&" + b12.value + " &nbsp;- &nbsp;" + a12.value +  "&" + b13.value + " &nbsp;- &nbsp;" + a13.value + "\\\\"
   + b21.value + " &nbsp;- &nbsp;" + a21.value + "&" + b22.value + " &nbsp;- &nbsp;" + a22.value + "&" + b23.value + " &nbsp;- &nbsp;" + a23.value +  "\\\\"
   + b31.value + " &nbsp;- &nbsp;" + a31.value + "&" + b32.value + " &nbsp;- &nbsp;" + a32.value + "&" + b33.value + " &nbsp;- &nbsp;" + a33.value + "\\end{bmatrix}" +
    " B - A =  \\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
      " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}

multiplyAB.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A multiplied with Matrix B" +
    "<br> \\begin{bmatrix} a{_1}{_1}b{_1}{_1} + a{_1}{_2}b{_2}{_1} + a{_1}{_3}b{_3}{_1} & a{_1}{_1}b{_1}{_2} + a{_1}{_2}b{_2}{_2} + a{_1}{_3}b{_3}{_2} & a{_1}{_1}b{_1}{_3} + a{_1}{_2}b{_2}{_3} + a{_1}{_3}b{_3}{_3} \\\\ a{_2}{_1}b{_1}{_1} + a{_2}{_2}b{_2}{_1} + a{_1}{_3}b{_3}{_1} & a{_2}{_1}b{_1}{_2} + a{_2}{_2}b{_2}{_2} + a{_2}{_3}b{_3}{_2} & a{_2}{_1}b{_1}{_3} + a{_2}{_2}b{_2}{_3} + a{_2}{_3}b{_3}{_3} \\\\ a{_3}{_1}b{_1}{_1} + a{_3}{_2}b{_2}{_1} + a{_3}{_3}b{_3}{_1} & a{_3}{_1}b{_1}{_2} + a{_3}{_2}b{_2}{_2} + a{_3}{_3}b{_3}{_2} & a{_3}{_1}b{_1}{_3} + a{_3}{_2}b{_2}{_3} + a{_3}{_3}b{_3}{_3} \\end{bmatrix}";

  Explain.innerHTML =  "$$A * B =  \\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
      " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}" + " &nbsp;* &nbsp;" + "\\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
          " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}$$<br>"
  + "\\begin{bmatrix} " + " &nbsp;( &nbsp;" +  a11.value +  " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a12.value +  " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a13.value +  " &nbsp;* &nbsp;" + b31.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + a11.value +  " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a12.value +  " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" +  a13.value +  " &nbsp;* &nbsp;" + b32.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + a11.value +  " &nbsp;* &nbsp;" + b13.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a12.value +  " &nbsp;* &nbsp;" + b23.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a13.value +  " &nbsp;* &nbsp;" + b33.value + " &nbsp;) &nbsp;" + "\\\\"
+ " &nbsp;( &nbsp;" + a21.value +  " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a22.value +  " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a23.value +  " &nbsp;* &nbsp;" + b31.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + a21.value +  " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a22.value +  " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a23.value +  " &nbsp;* &nbsp;" + b32.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + a21.value +  " &nbsp;* &nbsp;" + b13.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a22.value +  " &nbsp;* &nbsp;" + b23.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a23.value +  " &nbsp;* &nbsp;" + b33.value + " &nbsp;) &nbsp;" + "\\\\"
+ " &nbsp;( &nbsp;" + a31.value +  " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a32.value +  " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a33.value +  " &nbsp;* &nbsp;" + b31.value + " &nbsp;) &nbsp;" +  "&"
+ " &nbsp;( &nbsp;" + a31.value +  " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a32.value +  " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a33.value +  " &nbsp;* &nbsp;" + b32.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + a31.value +  " &nbsp;* &nbsp;" + b13.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a32.value +  " &nbsp;* &nbsp;" + b23.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + a33.value +  " &nbsp;* &nbsp;" + b33.value + " &nbsp;) &nbsp;" + "\\end{bmatrix}" +

    " A * B =  \\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
      " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

multiplyBA.onclick = function() {
  clearData();
  hideSteps();
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

document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
  " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";



//adding HTML for results
document.getElementById("Answer").style.display = "block";
document.getElementById("MethodPress").style.display = "block";
document.getElementById("ExplainPress").style.display = "block";

Method.innerHTML = "Function of Matrix B multiplied with Matrix A" +
  "<br> \\begin{bmatrix} b{_1}{_1}a{_1}{_1} + b{_1}{_2}a{_2}{_1} + b{_1}{_3}a{_3}{_1} & b{_1}{_1}a{_1}{_2} + b{_1}{_2}a{_2}{_2} + b{_1}{_3}a{_3}{_2} & b{_1}{_1}a{_1}{_3} + b{_1}{_2}a{_2}{_3} + b{_1}{_3}a{_3}{_3} \\\\ b{_2}{_1}a{_1}{_1} + b{_2}{_2}a{_2}{_1} + b{_1}{_3}a{_3}{_1} & b{_2}{_1}a{_1}{_2} + b{_2}{_2}a{_2}{_2} + b{_2}{_3}a{_3}{_2} & b{_2}{_1}a{_1}{_3} + b{_2}{_2}a{_2}{_3} + b{_2}{_3}a{_3}{_3} \\\\ b{_3}{_1}a{_1}{_1} + b{_3}{_2}a{_2}{_1} + b{_3}{_3}a{_3}{_1} & b{_3}{_1}a{_1}{_2} + b{_3}{_2}a{_2}{_2} + b{_3}{_3}a{_3}{_2} & b{_3}{_1}a{_1}{_3} + b{_3}{_2}a{_2}{_3} + b{_3}{_3}a{_3}{_3} \\end{bmatrix}";

Explain.innerHTML = "$$B * A =  \\begin{bmatrix} " + b11.value + " & " + b12.value +  " & " + b13.value + "\\\\ " + b21.value +
    " & " + b22.value +  " & " + b23.value +  " \\\\ " + b31.value +  " & " + b32.value +  " & " + b33.value + "\\" + "end{bmatrix}" + " &nbsp;* &nbsp;" + "\\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
        " & " + a22.value +  " & " + a23.value +  " \\\\ " + a31.value +  " & " + a32.value +  " & " + a33.value + "\\" + "end{bmatrix}$$<br>"
+ "\\begin{bmatrix} " + " &nbsp;( &nbsp;" +  b11.value +  " &nbsp;* &nbsp;" + a11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b12.value +  " &nbsp;* &nbsp;" + a21.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b13.value +  " &nbsp;* &nbsp;" + a31.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + b11.value +  " &nbsp;* &nbsp;" + a12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b12.value +  " &nbsp;* &nbsp;" + a22.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b13.value +  " &nbsp;* &nbsp;" + a32.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + b11.value +  " &nbsp;* &nbsp;" + a13.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b12.value +  " &nbsp;* &nbsp;" + a23.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b13.value +  " &nbsp;* &nbsp;" + a33.value + " &nbsp;) &nbsp;" + "\\\\"
+ " &nbsp;( &nbsp;" + b21.value +  " &nbsp;* &nbsp;" + a11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b22.value +  " &nbsp;* &nbsp;" + a21.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b23.value +  " &nbsp;* &nbsp;" + a31.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + b21.value +  " &nbsp;* &nbsp;" + a12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b22.value +  " &nbsp;* &nbsp;" + a22.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b23.value +  " &nbsp;* &nbsp;" + a32.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + b21.value +  " &nbsp;* &nbsp;" + a13.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b22.value +  " &nbsp;* &nbsp;" + a23.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b23.value +  " &nbsp;* &nbsp;" + a33.value + " &nbsp;) &nbsp;" + "\\\\"
+ " &nbsp;( &nbsp;" + b31.value +  " &nbsp;* &nbsp;" + a11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b32.value +  " &nbsp;* &nbsp;" + a21.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b33.value +  " &nbsp;* &nbsp;" + a31.value + " &nbsp;) &nbsp;" +  "&"
+ " &nbsp;( &nbsp;" + b31.value +  " &nbsp;* &nbsp;" + a12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b32.value +  " &nbsp;* &nbsp;" + a22.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b33.value +  " &nbsp;* &nbsp;" + a32.value + " &nbsp;) &nbsp;" + "&"
+ " &nbsp;( &nbsp;" + b31.value +  " &nbsp;* &nbsp;" + a13.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b32.value +  " &nbsp;* &nbsp;" + a23.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;"  + " &nbsp;( &nbsp;" + b33.value +  " &nbsp;* &nbsp;" + a33.value + " &nbsp;) &nbsp;" + "\\end{bmatrix}" +

  " B * A =  \\begin{bmatrix} " + ans11.value + " & " + ans12.value +  " & " + ans13.value + "\\\\ " + ans21.value +
    " & " + ans22.value +  " & " + ans23.value +  " \\\\ " + ans31.value +  " & " + ans32.value +  " & " + ans33.value + "\\" + "end{bmatrix}";

MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}
