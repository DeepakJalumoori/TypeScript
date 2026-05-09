//Generics:One function design works with many datatypes.

//Example-1:Returning array
function wrapInArray<T>(item: T): T[] {
  return [item];
}

//We can pass any type of data inside the function and it returns the array.
wrapInArray("Deepak");
wrapInArray({ age: 21 });
wrapInArray(1);

//Example-2:Returning pair
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("Akhil", 20);
pair("Karthikeya", {});
pair("coffeee", { price: 60 });

//Example-3:we can make interfaces generic.
interface Data<T> {
  content: T;
}

const favColor: Data<string> = { content: "Black" };
const pincode: Data<number> = { content: 530001 };
