"use strict";
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?)\s*(e[-+]?\d+(?:\.\d+)?)?\s*([fc]|(far)|(fa)|(ce)|(cel)|(celsius)|(fahrenheit))\s*$/i;

  var m = temp.match(regexp);

if (m) {
    var num = m[1];

    if(m[2]){
      console.log("soy exponencial");

        var f = m[2];
        var type = m[3];
        console.log("el type: " + type);
        num= num.toString()+f.toString();
        num = parseFloat(num);

        if (type=='c' || type=='C' || type=='ce' || type=='Ce' || type=='cE' || type=='CE' || type=='cel' || type=='Cel' || type=='CEl' || type=='CeL' || type=='cEl' || type=='ceL' || type=='cEL' || type=='CEL') {
          result = (num * 9/5)+32;
          result = result.toFixed(2)+" Farenheit"
        }
        else {
          result = (num - 32)*5/9;
          result = result.toFixed(2)+" Celsius"
        }
        converted.innerHTML = result;

    }else{
      console.log("no soy exponencial");

    num = parseFloat(num);
    var type = m[3];
    console.log("el type: " + type);

    if (type == 'c' || type == 'C' || type=='ce' || type=='Ce' || type=='cE' || type=='CE' || type=='cel' || type=='Cel' || type=='CEl' || type=='CeL' || type=='cEl' || type=='ceL' || type=='cEL' || type=='CEL') {
      result = (num * 9/5)+32;
      result = result.toFixed(2)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(2)+" Celsius"
    }
    converted.innerHTML = result;
  }
  }else {
    converted.innerHTML = "¡ERROR! Pruebe algo como '-4.2C' o '37f'";
  }

}//cierre funcion
