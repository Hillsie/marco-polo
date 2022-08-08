import * as React from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
//React.MutableRefObject<undefined>
//TODO: Type the ref
export const useDimensions = (ref: any) => {
  const dimensions = React.useRef({ width: 0, height: 0 });
  React.useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth ;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};
