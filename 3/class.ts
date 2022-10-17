{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    BEANS_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    constructor() {

    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough coffee beans');
      }
      this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }
    }
  }
  const maker = new CoffeeMaker();
}