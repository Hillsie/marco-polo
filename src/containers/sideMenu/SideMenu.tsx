import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./SideMenu.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onBlur={() => isOpen && toggleOpen()}
      custom={height}
      ref={containerRef}
    >
      <motion.div variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
