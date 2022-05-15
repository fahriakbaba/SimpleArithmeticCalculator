 let n1= document.querySelector("#num1");
 let n2=document.querySelector("#num2");
 let result=document.querySelector("#result");

 document.querySelector("#add").addEventListener("click", function(){
      result.value=parseFloat(n1.value) + parseFloat(n2.value);
 });

 document.querySelector("#sub").addEventListener("click", function(){
    result.value=parseFloat(n1.value) - parseFloat(n2.value);
});

document.querySelector("#mul").addEventListener("click", function(){
    result.value=parseFloat(n1.value) * parseFloat(n2.value);
});

document.querySelector("#div").addEventListener("click", function(){
    result.value=parseFloat(n1.value) / parseFloat(n2.value);
});