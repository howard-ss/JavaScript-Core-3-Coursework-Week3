let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

/**
 * The following solution does not sort the 'TOTAL of Sausage McMuffin(30)' which is 
 * not in the same column with other TOTAL value , even the output numbers are same.
 */
//Print teh receipt header
// console.log('QTY\tITEM\t\t\tTOTAL');

// // Print each individual item and its total cost
//  let totalCost = 0;
//   for (let i=0; i<order.length;i++){
//     const {itemName,quantity,unitPrice}= order[i];
//     const itemTotal = quantity * unitPrice;
//     console.log(`${quantity}\t${itemName}\t\t${itemTotal.toFixed(2)}`);
//     totalCost +=itemTotal;
//   }
//   // Print the total cost of the order
//   console.log(`\nTotal: ${totalCost.toFixed(2)}`);


/** Final solution: 
 * Using the reduce() function to find the maximum length of the itemName values. 
 * then use the repeat() function to create a string of spaces that we append to 
 * the ITEM label to ensure that it takes up the same amount of space as the longest
 * item name.
 */
// Calculate the maximum length of the item names
const maxNameLength = order.reduce(
  (max, { itemName }) => Math.max(max, itemName.length),0);
// Print each individual item and its total cost
let totalCost = 0;
console.log("QTY\tITEM" + " ".repeat(maxNameLength - 4) + "\tTOTAL");
for (let i = 0; i < order.length; i++) {
  const { itemName, quantity, unitPrice } = order[i];
  const itemTotal = quantity * unitPrice;
  console.log(
    `${quantity}\t${itemName}${" ".repeat(maxNameLength - itemName.length)}\t${itemTotal.toFixed(
      2
    )}`
  );
  totalCost += itemTotal;
}
console.log(`Total: ${totalCost.toFixed(2)}`);

