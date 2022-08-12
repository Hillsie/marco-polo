import { type MarcoPoloStore } from "../models/marco-polo";
import { CountDown } from "../models/count-down";
import clsx from "clsx";
import { observer } from "mobx-react";
import * as React from "react";
import { Button } from "./Buttons";
import { GradientStyleWrap } from "./Wrappers";

const GameController = observer(function GameController({
  store,
}: {
  store: typeof MarcoPoloStore;
}) {
  const countdown = React.useMemo(() => new CountDown(), []);

  React.useEffect(() => {
    if (countdown.isfinished === true) {
      store.play();
    }
  }, [countdown.isfinished]);

  const onClick = () => {
    // Start the game if it is idle
    if (store.turn === "idle") {
      countdown.start();
    } else {
      store.reset();
    }
  };

  const deriveVisiblity = () => {
    return !countdown.isfinished || store.whoseTurn() === "idle";
  };

  return (
    <div
      className={clsx(
        "absolute flex items-center justify-center transition-all duration-500 rounded-full  w-80  h-80 landscape:w-40 landscape:h-40 sm:w-64 sm:h-60 sm:landscape:w-64 sm:landscape:h-64 landscape:lg:w-96 landscape:lg:h-96 lg:w-96 landscape:md:w-64 md:w-96 xl:w-[600px] lg:h-96 landscape:md:h-64 md:h-96 xl:h-[600px]",
        { "bg-clip-border backdrop-blur-sm z-20": deriveVisiblity() }
      )}
    >
      <div className="z-20 flex flex-col align-middle rounded-full">
        <div
          className={clsx(
            "z-20 absolute -top-20 landscape:md-top-20 md:top-0 border-slate-300 border-2 p-4 self-center rounded-md bg-slate-100 tabular-nums space-between",
            { "hidden -z-10": !deriveVisiblity() }
          )}
        >
          <h1>
            <GradientStyleWrap> Shall we play a game?</GradientStyleWrap>
          </h1>
          <div className="flex justify-between tabular-nums">
            <GradientStyleWrap className="text-sm leading-6 font-medium transition-all duration-500">
              Played:
            </GradientStyleWrap>
            <span className="self-end  font-medium  text-md leading-6 text-slate-500 transition-all duration-500">
              {store.gamesPlayed}
            </span>
          </div>
          <div className="flex flex-row justify-between tabular-nums">
            <GradientStyleWrap className="text-sm leading-6 font-medium transition-all duration-500">
              Max Sequence:
            </GradientStyleWrap>
            <span className="leading-6 font-medium text-md text-slate-500 transition-all duration-500">
              {store.score}
            </span>
          </div>
        </div>
        <div className="relative transition-all duration-500 rounded-b-xl">
          <Button
            onClick={onClick}
            type="button"
            className=" absolute hover:bg-slate-50 ease-out active:ease-in-out  transition-all duration-150 flex-none mx-auto w-20 h-20 rounded-full  shadow-md flex items-center justify-center rouned-full backdrop-blur"
            aria-label="start playing"
          >
            <svg
              className="pt-[1.5px] pl-[1.5px] w-14 h-14  transition-all duration-500 hover:w-16 hover:h-16 active:w-14 active:h-14 active:ease-in active:duration-150"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0301 28.8483L4.70541 28.8037C4.50289 28.8027 4.34198 28.9741 4.35917 29.176C5.22277 39.3125 12.7486 48.794 25.3619 50.0949C25.5647 50.1159 25.7427 49.9564 25.7438 49.7525L25.7882 40.4771C25.7891 40.3093 25.668 40.1647 25.5037 40.1311C18.9549 38.796 15.5022 35.1712 14.374 29.1387C14.343 28.9727 14.199 28.8492 14.0301 28.8483Z"
                fill="#FBBF24"
                stroke="#FBBF24"
                strokeWidth="7"
              />
              <path
                d="M28.7719 40.3273L28.617 49.6507C28.6135 49.8531 28.783 50.0162 28.9851 50.0014C39.1312 49.2577 48.7009 41.8445 50.1509 29.2475C50.1742 29.0447 50.0169 28.8649 49.8129 28.8614L40.5388 28.7074C40.371 28.7046 40.2248 28.8238 40.1895 28.9879C38.777 35.5203 35.1117 38.9299 29.0661 39.9867C28.8997 40.0158 28.7747 40.1583 28.7719 40.3273Z"
                fill="#5B21B6"
                stroke="#5B21B6"
                strokeWidth="7"
              />
              <path
                d="M40.52 25.5898L49.8448 25.6204C50.0472 25.621 50.208 25.4494 50.1904 25.2476C49.3115 15.1123 41.7715 5.64227 29.1564 4.36026C28.9534 4.33963 28.7755 4.49934 28.7748 4.70336L28.7444 13.9787C28.7438 14.1466 28.8651 14.291 29.0295 14.3243C35.5801 15.6496 39.0385 19.269 40.1757 25.2999C40.2069 25.4659 40.3511 25.5891 40.52 25.5898Z"
                fill="#E11D48"
                stroke="#E11D48"
                strokeWidth="7"
              />
              <path
                d="M25.5509 13.8329V4.50805C25.5509 4.30553 25.3788 4.14545 25.1771 4.16361C15.0448 5.07578 5.59956 12.647 4.35901 25.2663C4.33906 25.4694 4.49937 25.6466 4.70337 25.6466H13.9788C14.1466 25.6466 14.2907 25.525 14.3234 25.3603C15.6272 18.8054 19.2352 15.3352 25.2625 14.1782C25.4283 14.1463 25.5509 14.0018 25.5509 13.8329Z"
                fill="#84CC16"
                stroke="#84CC16"
                strokeWidth="7"
              />
              <path
                d="M45.7168 30.6902L20.0172 46.0353C18.3199 47.0487 16.1734 45.7844 16.2369 43.8086L17.2742 11.5014C17.3376 9.52561 19.5608 8.40158 21.1896 9.52182L45.8519 26.4839C47.3531 27.5164 47.2811 29.7562 45.7168 30.6902Z"
                fill="#D9D9D9"
                stroke="#9F9C9C"
              />
            </svg>
            <span
              className={clsx(
                { hidden: !countdown.isrunning },
                "absolute left-4 text-slate-600",
                { "animate-ping": countdown.isrunning }
              )}
            >
              {countdown.count}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
});

export { GameController };
