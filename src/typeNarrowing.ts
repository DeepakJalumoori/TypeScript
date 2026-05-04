//Example-1 : typeof Narrowing
function getSnack(snackType: string | number) {
  if (typeof snackType === "string") {
    return `ordered item is ${snackType}`;
  }
  return `order number is ${snackType}`;
}

//Example-2 : Truthy Narrowing
function getFood(orderedfood?: string) {
  if (orderedfood) {
    return `serving ${orderedfood}`;
  }
  return `serving default food item!`;
}

//Example-3 : Custom Type Guard

//Defining custom type
type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

// "obj is chaiOrder" means:
// if this function returns true,
// then TypeScript treats obj as chaiOrder outside the function
