{
  // Type Assertions 💩
  function jsStrFunc(): any {
    return 'heelo';
  }

  const result = jsStrFunc();
  (result as string).length; //type 장담할때.. 사용
  (<string>result).length;

  const wrong: any = 5;
  (wrong as Array<number>).push(1)

  function findNumber() : number[] | undefined {
    return undefined;
  }
  const numbers = findNumber();
  // numbers.push(2);  // 확신가능하면 아래처럼 ! 을 붙인다.
  numbers!.push(2);
}