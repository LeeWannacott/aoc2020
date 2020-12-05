// --- Day 4: Passport Processing ---

const fs = require("fs");
var readline = require('readline');
var myinterface = readline.createInterface({
  input: fs.createReadStream('day4input.txt')
});
let valid_passport = 0 
let passport_fields = {}
let field = ''
function is_valid_passport(passport){
    
        passport = passport
        console.log(passport)
        if(passport.hasOwnProperty('byr') && passport.hasOwnProperty('iyr') && passport.hasOwnProperty('eyr') && passport.hasOwnProperty('hgt') && passport.hasOwnProperty('hcl') && passport.hasOwnProperty('ecl') && passport.hasOwnProperty('pid')){
        valid_passport += 1
        console.log(valid_passport)
        }}
myinterface.on('line', function (line) {
    let split_line = line.split(' ')  
    if (line != ''){
        // console.log(line.split(' '))
        for (const [i, fields] of split_line.entries()){

        passport_fields[fields.split(':')[0]] = fields.split(':')[1]
        //passport_fields.push(fields.split(':'))
        }
    }
                            
    if (line == ''){
        is_valid_passport(passport_fields)
        passport_fields = {}
        console.log('lollipops')}
    
})
