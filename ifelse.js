
/*    
   promocode1: JUMBO
   30% off on amounts greater than 150

   promocode2: BINGO
   50% discount on amount greater than 300 but upto 200
*/
/*
let amount = 1000;
let promoCode = "JUMBO";


if ( promoCode=="JUMBO" && amount > 150){
    amount = amount - 0.3 * amount;
    //amount = 0.7 * amount;
    console.log("Amount to pay is: " + amount);
    console.log(`Amount to pay is: ${amount}`);
} 
else {
    console.log("Invalid Promocode or Insufficient Amount")
}
*/
let amount = 360;
let promoCode = "BINGO";

if ( promoCode=="JUMBO" && amount > 150) {
    amount = amount - 0.3 * amount;
    //amount = 0.7 * amount;
    console.log("Amount to pay is: " + amount);
    console.log(`Amount to pay is: ${amount}`);
}
else if (promoCode=="BINGO" && amount > 300){
    discount = 0.5 * amount
    if (discount<200){
        //amount = amount - discount;
        amount -= discount;
    } 
    else {
        //amount = amount - 200;
        amount -= 200;
    }
    console.log(`Amount to pay is: ${amount}`);
} 
else {
    console.log("Invalid Promocode or Insufficient Amount")
}