// Coding Challenge 02b
//Vincent Crooks

let itemName = "USB-C Cable"
let itemCost = 3.25
let currentStock =120
let reorderLevel = 80
let targetStock = 200
let weeklyDemand = 60
let supplierLeadTimeWeeks = 2

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log("Item Name:", itemName)
console.log("Weeks Of Cover:", Number.isFinite(weeksOfCover) ? weeksOfCover.toFixed(2) : "Infinity")
console.log("Reorder Now?"), reorderNow
console.log("Recommended Reorder Quantity:", reorderQuantity)
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2))