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
  b22.value = rndmNum4;}


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
  + "\\begin{bmatrix} " + " &nbsp;( &nbsp;" + a11.value + " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a12.value + " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + a11.value + " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a12.value + " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" +
  "\\\\" + " &nbsp;( &nbsp;" + a21.value + " &nbsp;* &nbsp;" + b11.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a22.value + " &nbsp;* &nbsp;" + b21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + a21.value + " &nbsp;* &nbsp;" + b12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + a22.value + " &nbsp;* &nbsp;" + b22.value + " &nbsp;) &nbsp;" + "\\end{bmatrix}" +
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
  "\\\\" + " &nbsp;( &nbsp;" + b21.value + " &nbsp;* &nbsp;" + a11.value + " &nbsp;) &nbsp;" +  " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + b22.value + " &nbsp;* &nbsp;" + a21.value + " &nbsp;) &nbsp;" + "&" + " &nbsp;( &nbsp;" + b21.value + " &nbsp;* &nbsp;" + a12.value + " &nbsp;) &nbsp;" + " &nbsp;+ &nbsp;" + " &nbsp;( &nbsp;" + b22.value + " &nbsp;* &nbsp;" + a22.value + " &nbsp;) &nbsp;" + "\\end{bmatrix}" +
   " B * A = \\begin{bmatrix} " + ans11.value + " & " + ans12.value + "\\\\ " + ans21.value + " & " + ans22.value + "\\" + "end{bmatrix}";

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
