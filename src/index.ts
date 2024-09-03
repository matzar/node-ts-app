import { Logger } from "./Logger.js";

const run = async () => {
  try {
    // run your code here
    const logger = new Logger();
    logger.info("Hello");
  } catch (e) {
    console.log(e);
  }
};

run();
