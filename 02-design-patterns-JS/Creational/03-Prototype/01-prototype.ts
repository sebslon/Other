interface ExamplePrototype {
  greeting: string;
  greet: () => void;
  clone: () => ExamplePrototype;
}

class Example implements ExamplePrototype {
  public greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  public greet() {
    console.log(this.greeting);
  }

  public clone() {
    return new Example(this.greeting);
  }
}
