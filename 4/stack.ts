interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode; // next: StackNode | undefined;
}// 불변성 유지

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  
  push(value: string) {
    if(this.size === this.capacity) {
      throw new Error(`Stack is Full`);
    }
    const node: StackNode = {value, next: this.head}; 
    this.head = node;
    this._size++;
  }
  pop(): string { // null == undefined, null !== undefined
    if(this.head == null) {
      throw new Error(`Stack is Empty`);
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push(`jinwoo 1`);
stack.push(`jinwoo 2`);
stack.push(`jinwoo 3`);
stack.push(`jinwoo 4`);
stack.push(`jinwoo 5`);
stack.push(`jinwoo 6`);
stack.push(`jinwoo 7`);
stack.push(`jinwoo 8`);
stack.push(`jinwoo 9`);
stack.push(`jinwoo 10`);
// stack.push(`jinwoo 11`);
while ( stack.size !== 0) {
  console.log(stack.pop());
}
