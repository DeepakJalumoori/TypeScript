//Example-1
function makeCoffee(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}!`);
}

makeCoffee("cappucino", 2);

//Example-2:Declaring return types
function chaiPrice(): number {
  return 100;
}

//Example-3:Logger functions
function printData(): void {
  console.log("Logger function!");
}

//Example-4:OPTIONAL AND DEFAULT PARAMETERS -> usually written as last parameter
function optionalParam(type?: string) {
  console.log("optional parameter");
}

function defaultParam(type: string = "FIlter") {
  console.log(`${type} coffee ordered!`);
}
