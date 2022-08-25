import * as React from "react";
import { GameController } from "../components/GameController";
import { SimonSays } from "../components/SimonSays";
import { observer } from "mobx-react";
import { MarcoPoloStore } from "../models/marco-polo";

const MainContent = observer(function MainContent(): JSX.Element {
  // Apply context sparingly > https://reactjs.org/docs/context.html#before-you-use-context
  // Additionally, I wanted to challenge my understanding of MobX;
  const store = MarcoPoloStore;
  return (
    <div className="relative flex flex-col items-center z-0">
      <SimonSays />
      <GameController store={store} />
    </div>
  );
});

export default MainContent;
