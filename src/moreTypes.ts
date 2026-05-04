let response: any = "100";

//FORCEFUL TYPE ASSERTION
let numericLength: number = (response as string).length;

//Example-2
type Book = {
  name: string;
};

let bookString = '{"Tuesdays with Moorie"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

//Example-3 : Type checking in try-catch block
try {
} catch (error) {
  //Before logging the error message, we should check the Error type.
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error: ", error);
}

//Example-4
type Role = "admin" | "user" | "superAdmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Admin");
    return;
  }
  if (role === "user") {
    console.log("User");
    return;
  }
  role;
  // "superAdmin" case is not handled
  // So if role = "superAdmin", the function will do nothing
  // TypeScript does NOT assign it automatically — it must be passed explicitly
  //Whenever you use union types, you must handle every possible case
}

//Example-5 : using never
//Function never returns anything and runs on infinite loop

function neverReturn(): never {
  while (true) {}
}
