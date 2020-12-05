const fs = require("fs");
var readline = require('readline');
var myinterface = readline.createInterface({
  input: fs.createReadStream('day3input.txt')
});

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueof();
    }
    return this.substring(1, index) + replacement + this.substring(index + 1);
} 
let linexposition = 1
var lineno = 1;
amountoftrees = 0  
myinterface.on('line', function (line) {
  if(line[linexposition] === '.' ){
      if (linexposition != 1){
      line = line.replaceAt(linexposition, 'O')
  }
  linexposition += 3
  }else if(line[linexposition] === '#'){
      if (linexposition != 1){
      line = line.replaceAt(linexposition, 'X')
      amountoftrees += 1       
  }
      linexposition += 3}

  console.log(lineno)
  lineno+=1
  console.log(line, amountoftrees) 
  if(linexposition== (line.length)+1){
      linexposition = 1 
  console.log('end',line.length)}

  }
);


