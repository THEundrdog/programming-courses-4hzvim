 //###################################################################### 
//###########################           SSTech       ###################  
//###########################  
  
 let mynumber1, mynumber2, result : number;
 mynumber1 = parseInt(prompt("مرجو كتابة العدد الاول"));
 mynumber2 = parseInt(prompt("مرجو كتابة العدد الثاني"));
 if (mynumber1 > mynumber2) {
   result = mynumber1 - mynumber2;
  } else { 
    result = mynumber2 - mynumber1;
  }  
  console.log(result);   