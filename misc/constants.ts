import { Variants } from "framer-motion";

const slideX: Variants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100vw",
  },
};

const zoomIn: Variants = {
  initial: {
    scale: 10,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};

const zoomOut: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 10,
    opacity: 0,
  },
};

const hop: Variants = {
  initial: {
    x: "-50vw",
    y: "-50vh",
  },
  animate: {
    x: ["-50vw", "-25vw", "-12.5vw", "0vw"],
    y: ["-50vh", "-37.5vh", "-25vh", "0vh"],
    transition: {
      ease: "linear",
      duration: 0.3,
    },
  },
  exit: {
    x: ["0vw", "12.5vw", "25vw", "100vw"],
    y: ["0vh", "-25vh", "-37.5vh", "-100vh"],
    transition: {
      ease: "linear",
      duration: 0.3,
    },
  },
};

const slideY: Variants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
  },
  exit: {
    y: "100vh",
  },
};

const obliqueToBottomRight: Variants = {
  initial: {
    x: "-100vw",
    y: "-100vh",
  },
  animate: {
    x: 0,
    y: 0,
  },
  exit: {
    x: "100vw",
    y: "100vh",
  },
};

const obliqueToBottomLeft: Variants = {
  initial: {
    x: "100vw",
    y: "-100vh",
  },
  animate: {
    x: 0,
    y: 0,
  },
  exit: {
    x: "-100vw",
    y: "100vh",
  },
};

export const animations = [
  slideX,
  zoomIn,
  hop,
  slideY,
  obliqueToBottomRight,
  obliqueToBottomLeft,
  zoomOut,
] as const;
