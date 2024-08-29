import { Logger } from "./Logger";

const logger = new Logger();

for (let i = 0; i < 5; i++) {
  logger.info(`Hello, world! ${i}`);
}
