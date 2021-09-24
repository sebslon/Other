// Facade provides simple inteface - to more complex logic of one or several subsystems.
// Facade delegates client requests to appropriate objects within the subsystem.

class Facade {
  protected subsystemOne: SubsystemOne;
  protected subsystemTwo: SubsystemTwo;

  constructor(subsystemOne: SubsystemOne, subsystemTwo: SubsystemTwo) {
    this.subsystemOne = subsystemOne || new SubsystemOne();
    this.subsystemTwo = subsystemTwo || new SubsystemTwo();
  }

  performOperation(data: string) {
    const firstOp = this.subsystemOne.doSomething(data);
    const secondOp = this.subsystemTwo.doSomethingElse(firstOp);

    return secondOp;
  }
}

class SubsystemOne {
  doSomething(data: string) {
    return `Do some operations on input... ${data}`;
  }
}

class SubsystemTwo {
  doSomethingElse(data: string) {
    return data.toUpperCase();
  }
}

/*
Client doesn't have to know about existing subsystems - facade approach lets you keep the complexity under control.
It could be more complex logic - the point is in hiding eventual complexity or many different operations behind a simple interface;
*/
const subsystem1 = new SubsystemOne();
const subsystem2 = new SubsystemTwo();

const facade = new Facade(subsystem1, subsystem2);

function clientCode(facade: Facade) {
  console.log(facade.performOperation("capitalize"));
}

clientCode(facade);
