document.getElementById("sub").onclick= function(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1-num2;
}
document.getElementById("div").onclick= function(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1/num2;
}
document.getElementById("mul").onclick= function(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1*num2;
}
document.getElementById("add").onclick= function(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    document.getElementById("result").innerHTML =parseInt (num1)+parseInt(num2);
}