import * as React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }: { isOpen: boolean }) => (
  <motion.ul
    variants={variants}
    className={clsx(
      isOpen &&
        "border-2 rounded-md border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 pt-5 px-3"
    )}
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
