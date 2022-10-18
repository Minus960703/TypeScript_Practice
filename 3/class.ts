{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7;   //class level
    coffeeBeans: number = 0;  // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;

    }
    
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(34);
  console.log(maker)
  const maker2 = new CoffeeMaker(50);
  console.log(maker2)
}