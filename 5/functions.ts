{
  function checkNotNullBad(arg: number | null): number {
    if(arg == null) {
      throw new Error(`Not valid number`);
    }
    return arg;
  }
  function checkNotNullAnyBad(arg: any | null): any {
    if(arg == null) {
      throw new Error(`Not valid number`);
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if(arg == null) {
      throw new Error(`Not valid number`);
    }
    return arg;
  }
  const number = checkNotNull(123);
  const string = checkNotNull('123123123');
  const boal: boolean = checkNotNull(true);
}