import { Logger } from "./Logger";

describe("Logger class", () => {
  it("should log a message", () => {
    const logger = new Logger();
    const consoleSpy = jest.spyOn(console, "log");
    logger.info("Hello, world!");
    expect(consoleSpy).toHaveBeenCalledWith("Hello, world!");
  });
});
