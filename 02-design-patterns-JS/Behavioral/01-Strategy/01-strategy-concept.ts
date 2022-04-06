// Lets you define a family of different algorithms, each in separate class - which you can use interchangeable (in context) to solve a problem in a different ways.

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

// Context has reference to one of Strategies, it should work with all strategies by Strategy interface
class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  // Allow context to change it's strategy at runtime.
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  // sorting a string array - for example
  doBusinessLogic(): string[] {
    const result = this.strategy.doAlgorithm(["a", "e", "d", "c", "b", "f"]);

    return result;
  }
}

// Concrete Strategies
class NormalSortStrategy implements Strategy {
  doAlgorithm(data: string[]): string[] {
    console.log("Normal sorting");

    return data.sort();
  }
}

class ReverseSortStrategy implements Strategy {
  doAlgorithm(data: string[]): string[] {
    console.log("Reverse sorting");

    return data.reverse();
  }
}

/*
Creating a context with default strategy, then changing strategy if needed.
*/

const contextInstance = new Context(new NormalSortStrategy());
console.log(contextInstance.doBusinessLogic());

contextInstance.setStrategy(new ReverseSortStrategy());
console.log(contextInstance.doBusinessLogic());
