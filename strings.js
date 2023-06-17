
let names = 'noshi,laraib.subhan,ibrahim.mansoor';
console.log("names: " + names+ " , data type is : " + typeof names);

console.log(names.length)

names.toUpperCase()
console.log("Names in Uppercase: " + names)

let contactNames = [
    "John",
    "George",
    "Kia",
    "Ana",
    "Shawn"   
 ]

 let searchKeyword = 'a'

 for (let idx=0; idx<contactNames.length; idx++){
    if (contactNames[idx].endsWith(searchKeyword)){
       console.log(contactNames[idx]);
    }
 }
 names = 'John, Jennie, Jim, Jack Joe'
//       01234567

result = names.substring(0,7)
console.log(result)

//split method

let splittedNames = names.split(",")
console.log(splittedNames)

for (let idx=0; idx<splittedNames.length; idx++){
    console.log(splittedNames[idx]);
}
for (let idx=0; idx<splittedNames.length; idx++){
    console.log(splittedNames[idx].trim());
 }