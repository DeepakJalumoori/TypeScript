//Interface defines the structure of the code
//It does not generate any additional javascript code

import { Interface } from "node:readline";

//Example-1
interface Info {
  name: string;
  age: number;
  phoneNum?: number;
}

const personInfo: Info = {
  name: "Akhil",
  age: 20,
};

//Example-2:Interface with functions
interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (price) => price * 0.5;

//Example-3:we should use all the methods in the interface.
interface Timer {
  start(): void;
  end(): void;
}

const stopwatch: Timer = {
  start() {
    console.log("Timer started!");
  },
  end() {
    console.log("Timer ended...");
  },
};

//Example-4:Intefaces can be merged.
//Type-1
interface User {
  name: string;
}

interface User {
  age: number;
}

interface User {
  address?: string;
}

//All the above User interfaces merged and can be used on the same object.
const user1: User = {
  name: "Shashank",
  age: 20,
};

//Type-2:By using "extends" keyword
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
