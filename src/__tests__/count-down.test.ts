import { CountDown } from "../models/count-down";
// Minimal test suite for CountDown class
describe("CountDown", () => {
  describe("constructor", () => {
    it("should create a new instance of CountDown", () => {
      const countDown = new CountDown();
      expect(countDown).toBeInstanceOf(CountDown);
    }),
      it("should default seconds to 3", () => {
        const countDown = new CountDown();
        expect(countDown.seconds).toBe(3);
      }),
      it("should set the isRunning flag to false", () => {
        const countDown = new CountDown();
        expect(countDown.isRunning).toBe(false);
      }),
      it("should set the isFinished flag to false", () => {
        const countDown = new CountDown();
        expect(countDown.isFinished).toBe(false);
      })
  });
});
