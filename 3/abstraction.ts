{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
    private static BEANS_GRAM_PER_SHOT: number = 7;   //class level
    private coffeeBeans: number = 0;  // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;

    }
    
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log(`cleaning the machine`);
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enouth coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() : void {
      console.log(`heating up...`);
    }

    private extract(shots: number): CoffeeCup {
      
      return {shots, hasMilk: false}
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
      //   throw new Error('Not Enough coffee beans');
      // }
      // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      // return {
      //   shots,
      //   hasMilk: false
      // }
    }
  }

  const maker:CoffeeMachine = CoffeeMachine.makeMachine(34);
  maker.fillCoffeeBeans(34);
  maker.makeCoffee(2);

  const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(34);
  maker2.fillCoffeeBeans(34);
  maker2.makeCoffee(2);
  maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {

    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker){

    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(34);
      this.machine.clean();
    }
  }

  const amatuer = new AmateurUser(maker);
  amatuer.makeCoffee();
  const pro = new ProBarista(maker);
  pro.makeCoffee();
  

  // const maker = new CoffeeMaker(34);
  // console.log(maker)
  // const maker2 = new CoffeeMaker(50);
  // console.log(maker2)
}