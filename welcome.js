console.log("Welcome to JS Session" );
let x=10;
var y=20.22;
const z= "george"
console.log("x is " +x+ " and datatype is " +typeof x);
console.log("y is " +y+ " and datatype is " +typeof y);
console.log("z is " +z+ " and datatype is " +typeof z);

let day = 5
switch(day){
    case 1: console.log("Monday")
            break
    case 2: console.log("Tuesday")
            break
    case 3: console.log("Wednesday")
            break
    case 4: console.log("Thursday")
            break
    case 5: console.log("Friday")
            break
    case 6: console.log("Saturday")
            break
    case 7: console.log("Sunday")
            break
    default: console.log("Invalid Day")
}
if (day==1){
    console.log("Monday")
}
else if (day==2) {
    console.log("Tuesday")
} 
else if (day==3) {
    console.log("Wednesday")
} 
else if (day==4) {
    console.log("Thursday")
} 
else if (day==5) {
    console.log("Friday")
} 
else if (day==6) {
    console.log("Saturday")
} 
else if (day==7) {
    console.log("Sunday")
} 
else {
    console.log("Invalid Day")
}