import { observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";

const NoMatch = observer(function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">{">>"} Go to main game page {"<<"}</Link>
      </p>
    </div>
  );
});

export default NoMatch;