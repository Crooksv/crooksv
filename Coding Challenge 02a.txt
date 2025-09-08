// Coding Challenge 002a

// Code goes here
let productname = "Product 1"
let costPerUnit = 12.50
let basePrice = 19.99
let discountRate = 0.15
let salesTaxRate = 0.07
let fixedMonthlyCosts = 2000

let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

console.log ("Product Name:", productname)
console.log ("Discounted Price (before tax): $" + discountedPrice.toFixed(2))
console.log ("Final Price (with tax): $" + finalPriceWithTax.toFixed(2))
console.log ("Profit Per Unit: $" + profitPerUnit.toFixed(2))
console.log ("Break-even Units: ", breakEvenUnits)
console.log ("Profitability?", isProfitablePerUnit)
