//Access Modifiers
class IceCream {
  public flavor: string = "choco-chips";
  private secretIngredient: string = "special chocolate sauce";

  //Giving indirect access to secretIngredient
  reveal() {
    return this.secretIngredient;
  }
}

const icecream = new IceCream();
icecream.reveal();

//Example-1:Using "protected" means it can be accessed inside of its own class and inherited calsses.
class Shop {
  protected shopName = "cold stone creamery";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

//Example-2: '#' is used to create a private class field.
class Account {
  #balance = 10000;

  getBalance() {
    return this.#balance;
  }
}

//Example-3:Using of getter and setter methods.
class Coffee {
  private _sugar = 2;

  //getter method
  get sugar() {
    return this._sugar;
  }

  //setter method
  set sugar(value) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

//Example-4:using of static keyword
// static methods/variable can be accessed directly with class,they do not belong to instances/objects.
class Zomato {
  static shopname = "cold stone creamery";

  constructor(public flavour: string) {}
}

console.log(Zomato.shopname);

//Example-5:using of abstract keyword
//abstract class is a special class that cannot be used to create objects directly.
//It is mainly used as a blueprint of other classes
abstract class Drink {
  abstract make(): void;
}

//we should implement all the methods in the abstract class when we are extending them.
class MyCoffee extends Drink {
  make() {
    console.log("Making Cappucino!!");
  }
}
