import {
  makeObservable,
  observable,
  action,
  flow,
} from "mobx";
import Queue from "./queue";


type Turn = "marco" | "player" | "idle";
type SequenceState = "success" | "failed" | "idle";

// toggles the turn between marco and player
// toggles  UI  styles
// TODO:  debounce sequence selection
async function Timeout(options: boolean, ms: number): Promise<boolean> {
  const cb = () => options;
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, ms);
  });
}

// Heart of Game Logic
// TODO: Logic is  getting messy, refactor candidate
class MarcoPolo {
  score: number = 0;
  gamesPlayed: number = 0;
  activate: boolean;
  activeTile: number[];
  queue: Queue;
  sequencer: Queue;
  turn: Turn;
  sequenceSelected: SequenceState;

  constructor() {
    this.queue = new Queue(); // Player uses
    this.sequencer = new Queue(); // Random sequence uses
    this.seed(); // seed the game
    this.activate = false; // Activate UI animated style
    this.activeTile = []; // Tile that is animated
    this.turn = "idle";
    this.sequenceSelected = "idle";

    makeObservable(this, {
      animate: flow,
      delayedRestart: flow,
      playersTurn: action,
      score: observable,
      turn: observable,
      gamesPlayed: observable,
      addNo: action,
      generateRandTile: action,
      reset: action,
      activate: observable,
      play: observable,
      activeTile: observable,
      filterActive: observable,
      queue: observable,
      sequencer: observable,
      whoseTurn: observable,
      sequenceSelected: observable,
      isWrong: observable,
    });
  }

  seed() {
    if (this.queue.length > 0) {
      this.queue.clear();
    }
    if (this.sequencer.length > 0) {
      this.sequencer.clear();
    }
    const randomNum = this.generateRandTile(5);  // random tile between 1 and 4
    this.queue.enqueue(randomNum);
  }

  generateRandTile(max: number) {
    // tiles are between 1 and 4
    return Math.floor(Math.random() * (max - 1) + 1);
  }


  reset() {
    this.activate = false;
    this.turn = "idle";
    this.sequenceSelected = "idle";
    this.seed();
  }

  // When failed, reset the game
  *delayedRestart() {
    yield Timeout(false, 1600);
    this.reset();
  }

  *animate() {
    const speed1 = 500;
    const speed2 = 300;
    this.turn = "marco";
    if (this.queue.length > 0) {
      while (this.queue.length > 0) {
        const tile = this.queue.peek();
        if (typeof tile === "number") {
          this.activeTile.push(tile);
          this.sequencer.enqueue(tile); 
        }
        // Toggle the UI on and off
        this.activate = yield Timeout(true, speed1);
        this.activate = yield Timeout(false, speed2);
        // clear the active tile after the animation is complete
        this.activeTile = [];
       // remove the  tile from the queue
        this.queue.dequeue();
      }
      // delay before the players turn
      yield Timeout(false, 500);
      this.activate = false;
      this.turn = "player";
    }
  }

  // Check the players selection matches the random sequence
  playersTurn(num: number) {
    // TODO: Add a debouncer if connecting to  an API endpoint
    const compare = this.sequencer.peek();
    if (num === compare) {
      this.sequenceSelected = "success"; // not used
      this.queue.enqueue(num);
      // entire sequence is correct
      if (this.sequencer.length > this.score) {
        this.score = this.sequencer.length;
      }
      this.sequencer.dequeue();
      // TODO: check logic
      if (this.sequencer.length === 0) {
        this.turn = "marco";
        const randomNum = this.generateRandTile(5);
        this.queue.enqueue(randomNum);
        this.animate();
      }
    } else {
       this.turn = "idle";
      this.sequenceSelected = "failed";
      this.gamesPlayed = this.gamesPlayed + 1;
      this.delayedRestart();
    }
  }

  addNo(num?: number) {
    this.gamesPlayed = this.gamesPlayed + 1;
    if (typeof num === "number") {
      this.queue.enqueue(num);
    } else {
      const randomNum = this.generateRandTile(5);
      this.queue.enqueue(randomNum);
    }
  }

  play() {
    if (this.turn === "idle") {
      this.turn = "marco";
      this.animate();
    }
  }

  whoseTurn() {
    return this.turn;
  }

  isWrong() {
    return this.sequenceSelected === "failed"? true : false;
  }

  filterActive(num: number) {
    const activated =
      this.activeTile.filter((active) => num === active).length > 0
        ? true
        : false;
    return activated && this.activate;
  }
}

const MarcoPoloStore = new MarcoPolo();
export { MarcoPoloStore };
