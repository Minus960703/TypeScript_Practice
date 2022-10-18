{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }  

  abstract class CoffeeMachine implements CoffeeMaker{  //abstract 는 자체 생성자 불가능.(부모 클래스로서 정의)
    private static BEANS_GRAM_PER_SHOT: number = 7;   //class level
    private coffeeBeans: number = 0;  // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;

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

    protected abstract extract(shots: number): CoffeeCup; //추상 함수라 내부 함수 작성 X

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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('steaming');
    }

    protected extract(shots: number): CoffeeCup{
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); //super은 부모에서 만든걸 이용. 상속하는 부모에 있는걸.
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup{
      return {
        shots,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, 'SS'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, 'DD'),
    new SweetCoffeeMaker(16)
  ];
  machines.map(machine => {
    machine.makeCoffee(1);
  })
}