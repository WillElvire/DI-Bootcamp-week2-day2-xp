var numberToBeVerified = prompt("Please type a number");
 
if(numberToBeVerified % 2 == 0) {
  console.log( `${numberToBeVerified} is an even number. Where ${numberToBeVerified} is the actual number the user chose.` );
}else{
  console.log( `${numberToBeVerified} is an odd number. Where ${numberToBeVerified} is the actual number the user chose.` );
}