{
  // Type Inference

  let text = 'hello';
  text = 'hi';
  // text = 1; // Error

  function print(message = 'hello') { // 기본값 할당, string 타입
    console.log(message);
  }

  function add(x: number,y: number): number {
    return x + y;
  }
  const result = add(1, 2);
}