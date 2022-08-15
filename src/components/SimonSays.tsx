import * as React from "react";
import { observer } from "mobx-react";
import { MarcoPoloStore } from "../models/marco-polo";
import clsx from "clsx";

const configAnimation = [
  {
    key: "oihex1",
    color: "lime",
    id: 1,
    styles: {
      defaults:
        "relative fill-lime-500 stroke-1 focus:stroke-[7] h-auto w-auto top-0 left-0  bg-transparent drop-shadow-lg stroke-lime-500 transition",
      active:
        "active:stroke-lime-500 active:fill-lime-300 sm:active:fill-lime-300 active:top-2 ative:left-2 md:active:top-1 md:ative:left-1",
      animate: "fill-lime-300 stroke-lime-500 stroke-[7]",
    },
    viewBox: "0 0 241 241",
    svgPath:
      "M232 111.824V11.1529C232 9.99039 231.012 9.07211 229.853 9.1679C122.74 18.0232 22.5138 98.0253 10.1932 231.813C10.0858 232.979 11.0052 234 12.1763 234H112.338C113.301 234 114.13 233.298 114.313 232.352C127.816 162.432 166.074 125.717 230.338 113.802C231.292 113.625 232 112.794 232 111.824Z",
  },
  {
    key: "skxe29",
    color: "rose",
    id: 2,
    styles: {
      defaults:
        "relative  fill-rose-600 stroke-1 focus:stroke-[7]  h-auto w-auto top-0 left-0  bg-transparent drop-shadow-lg stroke-rose-600 transition",
      active:
        "active:stroke-rose-600 active:fill-rose-400 sm:active:fill-rose-400 active:top-2 ative:left-2 md:active:top-1 md:ative:left-1",
      animate: "fill-rose-400 stroke-rose-600 stroke-[7]",
    },
    viewBox: "260 0 241 241",
    svgPath:
      "M387.175 233.4L487.846 233.731C489.008 233.735 489.93 232.75 489.838 231.591C481.335 124.45 401.662 23.9607 267.916 11.2004C266.75 11.0891 265.726 12.0052 265.723 13.1762L265.393 113.337C265.39 114.301 266.09 115.132 267.035 115.317C336.91 129.05 373.499 167.43 385.203 231.732C385.377 232.686 386.206 233.397 387.175 233.4Z",
  },
  {
    key: "amcue74",
    color: "yellow",
    id: 4,
    styles: {
      defaults:
        "relative fill-amber-400  focus:stroke-[7] stroke-1  h-auto w-auto top-0 left-0 bg-transparent drop-shadow-lg transition",
      active:
        "active:stroke-amber-400 active:fill-amber-200 sm:active:fill-amber-200 active:-top-2 ative:-left-2 md:active:-top-1 md:ative:-left-1",
      animate: "fill-amber-200 stroke-amber-600 stroke-[7]",
    },
    viewBox: "0 260 241 241",
    svgPath:
      "M112.887 267.493L12.2167 267.01C11.0542 267.005 10.1312 267.989 10.2215 269.148C18.5634 376.302 98.0843 476.91 231.811 489.872C232.977 489.985 234.002 489.07 234.008 487.899L234.488 387.739C234.492 386.775 233.794 385.944 232.849 385.756C162.994 371.918 126.464 333.484 114.856 269.164C114.684 268.209 113.856 267.497 112.887 267.493Z",
  },
  {
    key: "jkdh38",
    color: "violet",
    id: 3,
    styles: {
      defaults:
        "relative fill-violet-800  focus:stroke-[7] stroke-1  h-auto w-auto top-0 left-0 bg-transparent drop-shadow-lg transition",
      active:
        "active:stroke-violet-800 active:fill-violet-500 sm:active:fill-violet-500 active:-top-2 ative:-left-2 md:active:-top-1 md:ative:-left-1",
      animate: "fill-violet-500 stroke-violet-800 stroke-[7]",
    },
    viewBox: "260 260 241 241",
    svgPath:
      "M265.708 386.159L264.036 486.816C264.016 487.979 264.989 488.913 266.149 488.837C373.395 481.762 474.936 403.436 489.478 269.872C489.605 268.708 488.702 267.671 487.531 267.652L387.383 265.988C386.42 265.972 385.58 266.66 385.382 267.603C370.719 337.289 331.856 373.363 267.402 384.209C266.446 384.37 265.724 385.19 265.708 386.159Z",
  },
];

interface ButtonConfig {
  key: string;
  color: string;
  id: number;
  styles: { defaults: string; active: string; animate: string };
  viewBox: string;
  svgPath: string;
}

const ButtonObserved = observer(function SVGButtons(options: ButtonConfig) {
  const store = MarcoPoloStore;
  const isPlayersTurn = store.whoseTurn() === "player" ? true : false;
  // reset css transition state
  const isWrong = () => (store.isWrong() ? "animate-shake" : "animate-none");
  const ariaLabel = `color is ${options.color} and select when your turn`;
  const activate = store.filterActive(options.id);

  return (
    <button
      onClick={() => store.playersTurn(options.id)}
      type="button"
      aria-label={ariaLabel}
      disabled={!isPlayersTurn}
      className={clsx(
        options.styles.defaults,
        {
          [options.styles.active]: isPlayersTurn,
          [options.styles.animate]: activate,
        },
        isWrong()
      )}
    >
      <svg viewBox={`${options.viewBox}`} xmlns="http://www.w3.org/2000/svg">
        <path d={`${options.svgPath}`} />
      </svg>
    </button>
  );
});

const SimonSays = observer(function SimonSays() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-72 landscape:w-40  sm:landscape:w-64 landscape:lg:w-96 lg:w-96 landscape:md:w-64 md:w-96 xl:w-[600px] drop-shadow-lg shadow-neutral-900 rounded-full z-10">
      {configAnimation.map((config: ButtonConfig) => (
        <ButtonObserved {...config} />
      ))}
    </div>
  );
});

export { SimonSays };
