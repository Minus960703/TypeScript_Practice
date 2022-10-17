{
  // enum이란 여러가지에 관련된 상수값을 한곳에 모아서 정의
  // Type 스크립트에서 자체적으로 
  const MAX_NUM = 6;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"Monday": 0, "Tuesday": 1});
  const dayOfToday = DAYS_ENUM.Monday;

  // enum을 사용하면 타입이 정확하게 보장 되지 않는다.
  // 타입스크립트는 enum을 사용하지않는다
  
  type DaysTypes = 'Monday' | 'Tuesday' | 'Wendsday';

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
  }
  console.log(Days.Thursday);
  const day = Days.Monday;

  let daysofweek: DaysTypes = 'Monday';
  // daysofweek = '123'; //불가능
}