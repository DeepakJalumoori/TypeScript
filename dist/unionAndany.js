"use strict";
// Union → restricts variable to specific values (safe)
let apiRequest = "pending";
apiRequest = "success";
console.log(apiRequest);
// If type is not defined → TypeScript may assign 'any'
// 'any' allows any type → unsafe and should be avoided
const orders = ["100", "150", "200", "250"];
//using any
let currentOrder;
for (let order of orders) {
    if (order === "150") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
