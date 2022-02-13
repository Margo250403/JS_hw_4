var text = prompt("Введите строку: My <b>name</b> is <i>Alex</i>")

var result = "";
var isChar = true;

for(var char of text) {
     if(char === "<"){
          isChar = false;
          continue
     }
     if(char === ">"){
          isChar = true;
          continue
     }
     if(isChar){
          result += char
     }
}

alert(result)