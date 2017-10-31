var num = prompt("Ingresa tu número de tarjeta");
if(num.length<16){ alert("Invalid number"); }else{

  var digit1=parseInt(num.charAt(0));
  var digit2=parseInt(num.charAt(1));
  var digit3=parseInt(num.charAt(2));
  var digit4=parseInt(num.charAt(3));
  var digit5=parseInt(num.charAt(4));
  var digit6=parseInt(num.charAt(5));
  var digit7=parseInt(num.charAt(6));
  var digit8=parseInt(num.charAt(7));
  var digit9=parseInt(num.charAt(8));
  var digit10=parseInt(num.charAt(9));
  var digit11=parseInt(num.charAt(10));
  var digit12=parseInt(num.charAt(11));
  var digit13=parseInt(num.charAt(12));
  var digit14=parseInt(num.charAt(13));
  var digit15=parseInt(num.charAt(14));
  var digit16=parseInt(num.charAt(15));

  var check1= digit1*2;
  if(check1>9){
    uno=check1.toString(10).split("").map(function(t){return parseInt(t)});
    check1=uno[0]+uno[1];
   }
  var check3= digit3*2;
  if(check3>9){
   uno=check3.toString(10).split("").map(function(t){return parseInt(t)});
   check3=uno[0]+uno[1];
  }
  var check5= digit5*2;
  if(check5>9){
    uno=check5.toString(10).split("").map(function(t){return parseInt(t)});
    check5=uno[0]+uno[1];
   }
   var check7= digit7*2;
   if(check7>9){
     uno=check7.toString(10).split("").map(function(t){return parseInt(t)});
     check7=uno[0]+uno[1];
    }
  var check9= digit9*2;
  if(check9>9){
    uno=check9.toString(10).split("").map(function(t){return parseInt(t)});
    check9=uno[0]+uno[1];
   }
   var check11= digit11*2;
   if(check11>9){
     uno=check11.toString(10).split("").map(function(t){return parseInt(t)});
     check11=uno[0]+uno[1];
    }
  var check13= digit13*2;
  if(check13>9){
    uno=check13.toString(10).split("").map(function(t){return parseInt(t)});
    check13=uno[0]+uno[1];
   }
   var check15= digit15*2;
   if(check15>9){
     uno=check15.toString(10).split("").map(function(t){return parseInt(t)});
     check15=uno[0]+uno[1];
    }

  var sumVer=check1+digit2+check3+digit4+check5+digit6+check7+digit8+check9+digit10+check11+digit12+check13+digit14+check15+digit16;
  if((sumVer % 10)==0){
    document.write("Valid Card!!");
  }else{
    document.write("Invalid Card");
  }


}
