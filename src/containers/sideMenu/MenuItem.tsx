import * as React from "react";
import { motion } from "framer-motion";
import { GradientStyleWrap, IconStyleWrap } from "../../components/Wrappers";

const text = [
  "Play With Friends",
  "Trash Scores",
  "Email ",
  "Call",
  "Keep Lights On",
];

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuProps = {
  style: { border: string };
  name?: string;
  stroke?: string;
};

function MenuAction({ style, name }: MenuProps): React.ReactElement {
  return (
    <div
      className="text-placeholder flex  flex-col justify-center  align pl-2 font-extrabold text-sm leading-6"
      style={style}
    >
      <GradientStyleWrap>{name}</GradientStyleWrap>
    </div>
  );
}

function PaperPlane({ style, stroke }: MenuProps) {
  return (
    <IconStyleWrap style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={stroke}
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </IconStyleWrap>
  );
}

function Phone({ style, stroke }: MenuProps) {
  // Mobile
  return (
    <IconStyleWrap style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={stroke}
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    </IconStyleWrap>
  );
}

function Trash({ style, stroke }: MenuProps) {
  return (
    <IconStyleWrap style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={stroke}
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </IconStyleWrap>
  );
}

function PlayOnline({ style, stroke }: MenuProps) {
  // Flame Icon
  return (
    <IconStyleWrap style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    </IconStyleWrap>
  );
}

function ShowTheLove({ style, stroke }: MenuProps) {
  // Heart Icon
  return (
    <IconStyleWrap style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={stroke}
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </IconStyleWrap>
  );
}

function DefaultIcon({ style, stroke }: MenuProps) {
  // Exclamation Icon
  return (
    <IconStyleWrap style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        stroke={stroke}
      >
        <path d="M11 11h2V5h-2Zm1 4q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15ZM2 22V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Zm2-4.825L5.175 16H20V4H4ZM4 4v13.175Z" />
      </svg>
    </IconStyleWrap>
  );
}

function menuOptions(option: number) {
  switch (option) {
    case 0:
      return [PlayOnline, MenuAction];
    case 1:
      return [Trash, MenuAction];
    case 2:
      return [PaperPlane, MenuAction];
    case 3:
      return [Phone, MenuAction];
    case 4:
      return [ShowTheLove, MenuAction];
    default:
      return [DefaultIcon, MenuAction];
  }
}

export const MenuItem = ({ i }: { i: number }) => {
  const style = { border: `2px solid ${colors[i]}`, fill: `${colors[i]}` };
  const name = text[i];
  const stroke = colors[i];
  //  Switching up components with i
  const [Icon, Menu] = menuOptions(i);
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon style={style} stroke={stroke} />
      <Menu style={style} name={name} />
    </motion.li>
  );
};
