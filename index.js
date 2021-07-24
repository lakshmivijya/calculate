function display(val)
{
document.onkeydown = function (e) { return false; }
document.getElementById("disp").value =  document.getElementById("disp").value + val;
}

function solve()
{
  let x= document.getElementById("disp").value;
  let y= eval(x);
  document.getElementById("disp").value = y;
}

function cleartext()
{
  document.getElementById("disp").value="";
}

function squar()
{
  let a= document.getElementById("disp").value;
  let b= eval(a*a);
  document.getElementById("disp").value = b;
}
