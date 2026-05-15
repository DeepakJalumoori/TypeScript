//Declaring object types
let coffee: {
  name: string;
  price: number;
  isHot: Boolean;
};

coffee = {
  name: "cappucino",
  price: 120,
  isHot: true,
};

//Example-2:A LIST TYPE OBJECT
type Maggi = {
  name: string;
  price: number;
  ingredients: string[];
};

const eggMaggi: Maggi = {
  name: "Egg Maggi",
  price: 70,
  ingredients: ["Egg", "Masala", "Maggi"],
};

//Example-3
type Item = { name: string; quantity: number };
type Address = { street: string; pincode: number };

type Order = {
  id: string;
  items: Item[];
  address: Address[];
};

//Example-4 : USING OF "PARTIAL" -> It will make all properties in the data type optional.
type Pizza = {
  name: string;
  price: number;
  isHot: Boolean;
};

const updatePizza = (updates: Partial<Pizza>) => {
  console.log("Updating pizza with", updates);
};

updatePizza({ name: "Pepper Barbeque" });
updatePizza({ price: 250 });
updatePizza({}); // we can pass empty which leads to issues

//Example-5 : USING OF "REQUIRED" -> It will make all properties in the data type must required even though the properties are optional.
type Burger = {
  name?: string;
  price?: number;
};

const orderBurger = (order: Required<Burger>) => {
  console.log(order);
};

orderBurger({
  name: "chicken fillet burger",
  price: 220,
});

//Example-6 :USING OF "PICK" -> It will make the picked(selected) properties required.
type Info = {
  name: string;
  phoneNum: number;
  age: number;
  gender: number;
  address: string;
};

type BasicInfo = Pick<Info, "name" | "age">;

const personInfo: BasicInfo = {
  name: "Deepak",
  age: 21,
};
