import { observer } from "mobx-react";
import * as React from "react";
import hatOn from "../assets/97489507.png"

export  const Avatar = observer(function Avatar() {
  return (
    <div className="shadow-lg rounded-full absolute inline-flex justfiy-center content-center bottom-0">
      <img
        className="h9 w-9 sm:h-12 sm:w-12 object-cover rounded-full"
        src={hatOn}
        alt="A.Hillsie Github  Profile and Hillsie Github Profile"
      />
    </div>
  );
});
