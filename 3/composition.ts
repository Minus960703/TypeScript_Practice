{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
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

    constructor(coffeeBeans: number, 
      private milk: MilkFrother, 
      private sugar:SugarProvider) {
      this.coffeeBeans = coffeeBeans;

    }
    
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const sugarAdd = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdd);
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

  // const maker:CoffeeMachine = CoffeeMachine.makeMachine(34);
  // maker.fillCoffeeBeans(34);
  // maker.makeCoffee(2);

  // const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(34);
  // maker2.fillCoffeeBeans(34);
  // maker2.makeCoffee(2);
  // maker2.clean();

  class CheapMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('steaming');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  class FancyMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Fancy steaming');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Fancy steaming');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }
  
  class AutomaticSugarMixer implements SugarProvider {
    private getSugar() {
      console.log(`getting some sugar`);
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log(`getting some sugar`);
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // class CaffeLatteMachine extends CoffeeMachine {
  //   constructor(beans: number, private milk: MilkFrother){
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots); //super은 부모에서 만든걸 이용. 상속하는 부모에 있는걸.
  //     return this.milk.makeMilk(coffee);
  //   }
  // }
  // class SweetCoffeeMaker extends CoffeeMachine {
  //   constructor(beans: number, private sugar: SugarProvider) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(coffee);
  //   }
  // }
  // class SweetCafeLatteMachine extends CoffeeMachine {
  //   constructor(beans: number, private milk: MilkFrother, private sugar:SugarProvider) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milk.makeMilk(this.sugar.addSugar(coffee));
  //   }
  // }

  //
  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  
  //machine
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(23, cheapMilkSteamer, noSugar);
  const coldLatteMachine = new CoffeeMachine(23, coldMilkSteamer, noSugar);

  const sweetLatteMachine = new SweetCafeLatteMachine(12, cheapMilkSteamer, candySugar);
}