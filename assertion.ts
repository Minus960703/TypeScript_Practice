{
  // Type Assertions π©
  function jsStrFunc(): any {
    return 'heelo';
  }

  const result = jsStrFunc();
  (result as string).length; //type μ₯λ΄ν λ.. μ¬μ©
  (<string>result).length;

  const wrong: any = 5;
  (wrong as Array<number>).push(1)

  function findNumber() : number[] | undefined {
    return undefined;
  }
  const numbers = findNumber();
  // numbers.push(2);  // νμ κ°λ₯νλ©΄ μλμ²λΌ ! μ λΆμΈλ€.
  numbers!.push(2);
}