let funcSelect = 0;



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





//
randomA.onclick = function() {
  clearData();
  hideSteps();

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
  clearData();
  hideSteps();

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
  clearData();
  hideSteps();
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  determinantA2x2 = (Number(variableA11) * Number(variableA22)) - (Number(variableA12) * Number(variableA21));

  inverseA2x2multiplier = 1 / determinantA2x2;

  inverseAFactor = inverseA2x2multiplier.toFixed(3)

  ans11.long = variableA22 * inverseA2x2multiplier;
  ans12.long = -(variableA21 * inverseA2x2multiplier);
  ans21.long = -(variableA12 * inverseA2x2multiplier);
  ans22.long = variableA11 * inverseA2x2multiplier;

  ans11.value = ans11.long.toFixed(3)
  ans12.value = ans12.long.toFixed(3)
  ans21.value = ans21.long.toFixed(3)
  ans22.value = ans22.long.toFixed(3)

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix}" + ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To calculate the inverse of a 2x2 Matrix you need to first find the determinant." + "<br>To calculate the determinant the following method is used." +
    "<br> \\begin{bmatrix} a & b \\\\ c & d\\end{bmatrix}" + "(a * d) - (b * c)" + "<br> Once this is done the adjoint matrix needs to be found." + "\\begin{bmatrix}a & b\\\\c & d\\end{bmatrix} = \\begin{bmatrix}d & -b\\\\-c & a\\" +
    "end{bmatrix}" + "To complete the process the adjoint matrix is then divided by the determinate." + "<br>A<sup>{-1}</sup> = 1/(ad - cb) * Adj(A)";

  Explain.innerHTML = "Matrix A" + "\\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
      " & " + a22.value +  "\\" + "end{bmatrix}<br>"
  + "Determinant =" + "&nbsp;( &nbsp;" + variableA11 + " &nbsp;* &nbsp;" + variableA22 + " &nbsp;) &nbsp;" + " &nbsp;- &nbsp;" + "&nbsp;( &nbsp;" +
    variableA12 + " &nbsp;* &nbsp;" + variableA21 + " &nbsp;) &nbsp" + "&nbsp;= &nbsp" + determinantA2x2 + "<br><br>Adjoint Matrix =" + "\\begin{bmatrix}" + variableA22 + "&" + -variableA21 + "\\\\" + -variableA12 + "& " + variableA11 + "\\end{bmatrix}" +
    "(1 / Determinate) * Adjoint = " + inverseAFactor + " &nbsp;* &nbsp;" + "\\begin{bmatrix}" + variableA22 + "&" + -variableA21 + "\\\\" + -variableA12 + "& " + variableA11 + "\\end{bmatrix}" + "&nbsp;= &nbsp;" +
    "\\begin{bmatrix}" + ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

inverseB.onclick = function() {
  clearData();
  hideSteps();
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  determinantB2x2 = (Number(variableB11) * Number(variableB22)) - (Number(variableB12) * Number(variableB21));

  inverseB2x2multiplier = 1 / determinantB2x2;

  inverseBFactor = inverseB2x2multiplier.toFixed(3)

  ans11.long = variableB22 * inverseB2x2multiplier;
  ans12.long = -(variableB21 * inverseB2x2multiplier);
  ans21.long = -(variableB12 * inverseB2x2multiplier);
  ans22.long = variableB11 * inverseB2x2multiplier;

  ans11.value = ans11.long.toFixed(3)
  ans12.value = ans12.long.toFixed(3)
  ans21.value = ans21.long.toFixed(3)
  ans22.value = ans22.long.toFixed(3)

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix}" + ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To calculate the inverse of a 2x2 Matrix you need to first find the determinant." + "<br>To calculate the determinant the following method is used." +
    "<br> \\begin{bmatrix} a & b \\\\ c & d\\end{bmatrix}" + "(a * d) - (b * c)" + "<br> Once this is done the adjoint matrix needs to be found." + "\\begin{bmatrix}a & b\\\\c & d\\end{bmatrix} = \\begin{bmatrix}d & -b\\\\-c & a\\" +
    "end{bmatrix}" + "To complete the process the adjoint matrix is then divided by the determinate." + "<br>B<sup>{-1}</sup> = 1/(ad - cb) * Adj(B)";

  Explain.innerHTML = "Matrix B" + "\\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
      " & " + b22.value + "\\" + "end{bmatrix}<br>"
  + "Determinant =" + "&nbsp;( &nbsp;" + variableB11 + " &nbsp;* &nbsp;" + variableB22 + " &nbsp;) &nbsp;" + " &nbsp;- &nbsp;" + "&nbsp;( &nbsp;" +
    variableB12 + " &nbsp;* &nbsp;" + variableB21 + " &nbsp;) &nbsp" + "&nbsp;= &nbsp" + determinantB2x2 + "<br><br>Adjoint Matrix =" + "\\begin{bmatrix}" + variableB22 + "&" + -variableB21 + "\\\\" + -variableB12 + "& " + variableB11 + "\\end{bmatrix}" +
    "(1 / Determinate) * Adjoint = " + inverseBFactor + " &nbsp;* &nbsp;" + "\\begin{bmatrix}" + variableB22 + "&" + -variableB21 + "\\\\" + -variableB12 + "& " + variableB11 + "\\end{bmatrix}" + "&nbsp;= &nbsp;" +
    "\\begin{bmatrix}" + ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}




transposeA2x2.onclick = function() {
  clearData();
  hideSteps();
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;


  ans11.value = variableA11;
  ans12.value = variableA21;
  ans21.value = variableA12;
  ans22.value = variableA22;

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix}" + ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To transpose a 2x2 Matrix you need to switch the rows and columns." +
    "\\begin{bmatrix} a & b \\\\ c & d\\end{bmatrix} =  \\begin{bmatrix} a & c \\\\ b & d\\end{bmatrix}";

  Explain.innerHTML = "\\begin{bmatrix}" + a11.value + "&" + a12.value + "\\\\" + a21.value + "& " + a22.value + "\\end{bmatrix} = \\begin{bmatrix}" +
    ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}



transposeB2x2.onclick = function() {
  clearData();
  hideSteps();
  //could make each constant but shouldn't need to, works ok as is - not broke don't fix
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;


  ans11.value = variableB11;
  ans12.value = variableB21;
  ans21.value = variableB12;
  ans22.value = variableB22;

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix}" + ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To transpose a 2x2 Matrix you need to switch the rows and columns." +
    "\\begin{bmatrix} a & b \\\\ c & d\\end{bmatrix} =  \\begin{bmatrix} a & c \\\\ b & d\\end{bmatrix}";

  Explain.innerHTML = "\\begin{bmatrix}" + b11.value + "&" + b12.value + "\\\\" + b21.value + "& " + b22.value + "\\end{bmatrix} = \\begin{bmatrix}" +
    ans11.value + "&" + ans12.value + "\\\\" + ans21.value + "& " + ans22.value + "\\end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


}

determinantA2x2.onclick = function() {
  clearData();
  hideSteps();
  var variableA11 = a11.value;
  var variableA12 = a12.value;
  var variableA21 = a21.value;
  var variableA22 = a22.value;

  determinantA2x2 = (Number(variableA11) * Number(variableA22)) - (Number(variableA12) * Number(variableA21));



  document.getElementById("Answer").innerHTML = "The determinant of Matrix A is " + determinantA2x2 + ".";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To calculate the determinant the following method is used." +
    "<br> \\begin{bmatrix} a{_1}{_1} & a{_1}{_2} \\\\ a{_2}{_1} & a{_2}{_2}\\end{bmatrix}" +
    "(a11 * a22) - (a12 * a21)";

  Explain.innerHTML =  "Matrix A" + "\\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
      " & " + a22.value +  "\\" + "end{bmatrix}<br>"
  + " &nbsp;( &nbsp;" + variableA11 + " &nbsp;* &nbsp;" + variableA22 + " &nbsp;) &nbsp;" + " &nbsp;- &nbsp;" + " &nbsp;( &nbsp;" +
    variableA12 + " &nbsp;* &nbsp;" + variableA21 + " &nbsp;) &nbsp;"

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

determinantB2x2.onclick = function() {
  clearData();
  hideSteps();
  var variableB11 = b11.value;
  var variableB12 = b12.value;
  var variableB21 = b21.value;
  var variableB22 = b22.value;

  determinantB2x2 = (Number(variableB11) * Number(variableB22)) - (Number(variableB12) * Number(variableB21));



  document.getElementById("Answer").innerHTML = "The determinant of Matrix B is " + determinantB2x2 + ".";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "To calculate the determinant the following method is used." +
    "<br> \\begin{bmatrix} b{_1}{_1} & b{_1}{_2} \\\\ b{_2}{_1} & b{_2}{_2}\\end{bmatrix}" +
    "(b11 * b22) - (b12 * b21)";

  Explain.innerHTML = "Matrix B" + "\\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
      " & " + b22.value + "\\" + "end{bmatrix}<br>"
  + " &nbsp;( &nbsp;" + variableB11 + " &nbsp;* &nbsp;" + variableB22 + " &nbsp;) &nbsp;" + " &nbsp;- &nbsp;" + " &nbsp;( &nbsp;" +
    variableB12 + " &nbsp;* &nbsp;" + variableB22 + " &nbsp;) &nbsp;"

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

addition2x2.onclick = function() {
  clearData();
  hideSteps();
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


  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A added to Matrix B" +
    "<br> \\begin{bmatrix} a{_1}{_1} + b{_1}{_1} & a{_1}{_2} + b{_1}{_2} \\\\ a{_2}{_1} + b{_2}{_1} & a{_2}{_2}" +
    " + b{_2}{_2}\\end{bmatrix}";

  Explain.innerHTML =  "$$A + B =  \\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
      " & " + a22.value + "\\" + "end{bmatrix}" + " &nbsp;+ &nbsp;" + "\\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
          " & " + b22.value + "\\" + "end{bmatrix}$$<br>"
  + "\\begin{bmatrix} " + a11.value + " &nbsp;+ &nbsp;" + b11.value + "&" +
    a12.value + " &nbsp;+ &nbsp;" + b12.value + "\\\\" + a21.value + " &nbsp;+ &nbsp;" + b21.value + "&" + a22.value + " &nbsp;+ &nbsp;" +
    b22.value + "\\end{bmatrix}" + " A + B = \\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}

subtraction2x2AminusB.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";

  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";





  Method.innerHTML = "Function of Matrix A minus Matrix B" +
    "<br> \\begin{bmatrix} a{_1}{_1} - b{_1}{_1} & a{_1}{_2} - b{_1}{_2} \\\\ a{_2}{_1} - b{_2}{_1} & a{_2}{_2}" +
    " - b{_2}{_2}\\end{bmatrix}";

  Explain.innerHTML =  "$$A - B =  \\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
      " & " + a22.value + "\\" + "end{bmatrix}" + " &nbsp;- &nbsp;" + "\\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
          " & " + b22.value + "\\" + "end{bmatrix}$$<br>"
  +  "\\begin{bmatrix} " + a11.value + " &nbsp;- &nbsp;" + b11.value + "&" +
    a12.value + " &nbsp;- &nbsp;" + b12.value + "\\\\" + a21.value + " &nbsp;- &nbsp;" + b21.value + "&" + a22.value + " &nbsp;- &nbsp;" +
    b22.value + "\\end{bmatrix}" + " A - B = \\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);



}


subtraction2x2BminusA.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";

  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";





  Method.innerHTML = "Function of Matrix B minus Matrix A" +
    "<br> \\begin{bmatrix} b{_1}{_1} - a{_1}{_1} & b{_1}{_2} - a{_1}{_2} \\\\ b{_2}{_1} - a{_2}{_1} & b{_2}{_2}" +
    " - a{_2}{_2}\\end{bmatrix}";

  Explain.innerHTML = "$$B - A =  \\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
      " & " + b22.value + "\\" + "end{bmatrix}" + " &nbsp;- &nbsp;" + "\\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
          " & " + a22.value + "\\" + "end{bmatrix}$$<br>"
  + "\\begin{bmatrix} " + b11.value + " &nbsp;- &nbsp;" + a11.value + "&" +
    b12.value + " &nbsp;- &nbsp;" + a12.value + "\\\\" + b21.value + " &nbsp;- &nbsp;" + a21.value + "&" + b22.value + " &nbsp;- &nbsp;" +
    a22.value + "\\end{bmatrix}" + " B - A = \\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}


multiplyAB2x2.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";



  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A multiplied by Matrix B" +
    "<br> \\begin{bmatrix} a{_1}{_1} b{_1}{_1} + a{_1}{_2} b{_2}{_1} & a{_1}{_1} b{_1}{_2} + a{_1}{_2} b{_2}{_2} \\\\ a{_2}{_1} b{_1}{_1} + a{_2}{_2} b{_2}{_1} & a{_2}{_1} b{_1}{_2} + a{_2}{_2} b{_2}{_2}\\end{bmatrix}";

  Explain.innerHTML = "$$A * B =  \\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
      " & " + a22.value + "\\" + "end{bmatrix}" + " &nbsp;* &nbsp;" + "\\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
          " & " + b22.value + "\\" + "end{bmatrix}$$<br>"
  +  "\\begin{bmatrix} " + " &nbsp;( &nbsp;" + a11.value + " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a12.value + " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + a11.value + " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a12.value + " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" +
    "\\\\" + " &nbsp;( &nbsp;" + a21.value + " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a22.value + " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + a21.value + " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a22.value + " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" + "\\end{bmatrix}" +
    " A * B = \\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value + " & " + ans22.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

multiplyBA2x2.onclick = function() {
  clearData();
  hideSteps();
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

  document.getElementById("Answer").innerHTML = "\\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value +
    " & " + ans22.value + "\\" + "end{bmatrix}";


  //adding HTML for results
  document.getElementById("Answer").style.display = "block";
  document.getElementById("MethodPress").style.display = "block";
  document.getElementById("ExplainPress").style.display = "block";

  Method.innerHTML = "Function of Matrix A multiplied by Matrix B" +
    "<br> \\begin{bmatrix} b{_1}{_1} a{_1}{_1} + b{_1}{_2} a{_2}{_1} & b{_1}{_1} a{_1}{_2} + b{_1}{_2} a{_2}{_2} \\\\ b{_2}{_1} a{_1}{_1} + b{_2}{_2} a{_2}{_1} & b{_2}{_1} a{_1}{_2} + b{_2}{_2} a{_2}{_2}\\end{bmatrix}";

  Explain.innerHTML = "$$B * A =  \\begin{bmatrix} " + b11.value + " & " + b12.value + "\\\\ " + b21.value +
      " & " + b22.value + "\\" + "end{bmatrix}" + " &nbsp;* &nbsp;" + "\\begin{bmatrix} " + a11.value + " & " + a12.value + "\\\\ " + a21.value +
          " & " + a22.value + "\\" + "end{bmatrix}$$<br>"
  + "\\begin{bmatrix} " + " &nbsp;( &nbsp;" + b11.value + " &nbsp;* &nbsp;" + a11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + b12.value + " &nbsp;* &nbsp;" + a21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + b11.value + " &nbsp;* &nbsp;" + a12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + b12.value + " &nbsp;* &nbsp;" + a22.value + " &nbsp;) &nbsp;" +
    "\\\\" + " &nbsp;( &nbsp;" + b21.value + " &nbsp;* &nbsp;" + a11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + b22.value + " &nbsp;* &nbsp;" + a21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + b21.value + " &nbsp;* &nbsp;" + a12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + b22.value + " &nbsp;* &nbsp;" + a22.value + " &nbsp;) &nbsp;" + "\\end{bmatrix}" +
    " B * A = \\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value + " & " + ans22.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
