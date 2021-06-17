//Lets you ensure that a class has only one instance, while providing a global access point to this instance.

class Logger {
  private static instance: Logger;
  private name: string;

  private constructor(name) {
    this.name = name;
  }

  static getInstance(name) {
    if(!Logger.instance) {
      Logger.instance = new Logger(name);
    }
    return Logger.instance;
  };

  public log() {
    console.log("I'm a logger");
  }
};

const logger = Logger.getInstance('name');
const logger2 = Logger.getInstance('name2');

console.log(logger, logger2);
console.log(logger === logger);