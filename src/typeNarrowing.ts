//Example-1
function getSnack(snackType: string | number) {
  if (typeof snackType === "string") {
    return `ordered item is ${snackType}`;
  }
  return `order number is ${snackType}`;
}

//Example-2
function getFood(orderedfood?: string) {
  if (orderedfood) {
    return `serving ${orderedfood}`;
  }
  return `serving default food item!`;
}

//Example
