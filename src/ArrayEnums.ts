//Declaring Arrays
const coolDrinks: string[] = ["Sprite", "coco cola", "Thumbs", "Pepsi"];
const prices: number[] = [20, 40, 50, 90];

const ratings: Array<number> = [4.5, 4.8, 4.0, 4.2];

//Array of objects
type Biryani = {
  name: string;
  price: number;
};

const menu: Biryani[] = [
  { name: "Chicken Dum", price: 210 },
  { name: "Chicken Boneless", price: 250 },
];

//Readonly arrays
const cities: readonly string[] = ["Vizag", "Bangalore", "Hyderabad"];

//Multi-Dimensional Arrays
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Tuples in TypeScript
let DosaPrice: [string, number];
DosaPrice = ["Masala Dosa", 80];

let userInfo: [string, number, boolean?];
userInfo = ["Akhil", 21];
userInfo = ["Sameer", 20, true];

// ENUMS in typescript
enum Directions {
  UP,
  DOWN,
  RIGHT,
  LEFT,
}

const route = Directions.RIGHT;

//Example-1:Enums will give default indexing
