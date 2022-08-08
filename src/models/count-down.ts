import { makeAutoObservable } from "mobx";

type NumRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; 

// Whole number seconds simplifies the implementation as there is no concern with managing millisecond logic.
// Removes the need to  the conversion of milliseconds in the UI.
// Adds range limits contain between 1 and 10.
// Includes run time range limit.

async function Pulse({ seconds }: { seconds: number; }): Promise<number> {
  const cb = () => seconds;
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, 1000);
  });
}

class CountDown {
  // Following 3 are private. Cannot create tests if they are private.
  seconds: NumRange = 5;
  // Added to class to include "topping up" or "pausing" the counter
  // IsFinished is not in sync with isRunning.  Remains false while the timer is runningl
   isRunning: boolean = false;
   isFinished: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Using a yield  provided a less complex solution than async await.
  *decrement() {
    while (this.seconds > 0) {
      this.seconds = yield Pulse({ seconds: this.seconds });
      this.seconds--;
      // if the timer is reset  exit while
      if (this.isRunning === false) {
        break;
      }
    }
    this.isRunning = false;
    // Only change the isFinished flag when the count down is done.
    // Flag enables showing and hiding UI components.
    this.isFinished = true;
  }

  start(seconds?: NumRange) {
    if (typeof seconds === "number") {
      if (seconds > 11) {
        throw new Error("seconds must be between 1 and 10");
      }
      if (seconds < 1) {
        throw new Error("seconds must be between 1 and 10");
      }
    }
    //  IsFinished flag remains false while the timer starts.
    this.isFinished = false;
    this.isRunning = true;
    this.seconds = typeof seconds === "undefined" ? 5 : seconds;
    this.decrement();
  }

  reset() {
    this.seconds = 5;
    this.isRunning = false;
    this.isFinished = false;
  }

  get count() {
    return this.seconds;
  }

  get isrunning() {
    return this.isRunning;
  }

  get isfinished() {
    return this.isFinished;
  }
}

export { CountDown };
