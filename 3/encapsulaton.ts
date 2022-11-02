{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;   //class level
    private coffeeBeans: number = 0;  // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;

    }
    
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }
    }
  }

  const maker = CoffeeMaker.makeMachine(34);

  // const maker = new CoffeeMaker(34);
  // console.log(maker)
  // const maker2 = new CoffeeMaker(50);
  // console.log(maker2)

  class User {
    // firstName: string;
    // lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if(num < 0) {  
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
    }
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
  console.log(user.fullName);


}