import React, { useEffect, useReducer, useRef, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { randomAChar, randomRange } from "../misc/utils";
import { animations } from "../misc/constants";

type State = {
  char: string;
  count: number;
  animationIndex: number;
};

const getNewState = (currentState?: State): State => {
  let char: string;
  let animationIndex: number;
  do {
    char = randomAChar();
  } while (currentState && char === currentState.char);

  do {
    animationIndex = randomRange(0, animations.length - 1);
  } while (currentState && animationIndex === currentState.animationIndex);

  return {
    char,
    count: randomRange(10, 20),
    animationIndex,
  };
};

const initialState = getNewState();

const KeyPractice: React.FC = () => {
  const [isError, setIsError] = useState(false);
  const [key, increase] = useReducer((key) => key + 1, 0);
  const [{ char, animationIndex, count }, generateChar] = useReducer<
    React.Reducer<State, void>
  >((state) => {
    if (state.count === 1) {
      return getNewState(state);
    }
    return {
      char: state.char,
      count: state.count - 1,
      animationIndex: state.animationIndex,
    };
  }, initialState);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === char.toLowerCase()) {
        generateChar();
        increase();
        setIsError(false);
      } else {
        setIsError(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [char, isError]);

  return (
    <div
      className={clsx(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        {
          "bg-red-500": isError,
        }
      )}
    >
      <p className="absolute top-10 left-10">{count}</p>
      <AnimatePresence>
        <motion.h1
          variants={animations[animationIndex]}
          key={key}
          initial="initial"
          animate="animate"
          exit="exit"
          className="font-serif absolute m-auto text-[200px] uppercase"
        >
          {char}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default KeyPractice;
