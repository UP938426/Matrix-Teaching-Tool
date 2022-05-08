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

  Explain.innerHTML = "$$A * B =  \\begin{bmatrix} " + a11.value + " & " + a12.value +  " & " + a13.value + "\\\\ " + a21.value +
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
