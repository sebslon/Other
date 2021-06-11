class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance() {
    if(!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  };

  public log() {
    console.log("I'm a logger");
  }
};

const logger = Logger.getInstance();