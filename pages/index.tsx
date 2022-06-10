import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

const randomAChar = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
};

const getNewCharArr = () => {
  const char = randomAChar();
  const length = Math.floor(Math.random() * 11) + 10; // 10 -> 20

  return new Array(length).fill(char);
};

const Home: React.FC = () => {
  const [charArr, setCharArr] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isWrong, setIsWrong] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    btnRef.current?.focus();
  }, []);

  const startNew = useCallback(() => {
    setCharArr(getNewCharArr());
    setCurrentIdx(0);
  }, []);

  useEffect(() => {
    if (!charArr.length) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== charArr[currentIdx]) {
        setIsWrong(true);
        return;
      }
      setIsWrong(false);
      if (currentIdx === charArr.length - 1) {
        startNew();
        return;
      }
      setCurrentIdx(currentIdx + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [startNew, charArr, currentIdx]);

  return (
    <div
      className={clsx(
        "transition duration-300 h-screen flex justify-center items-center relative",
        {
          "bg-red-500": isWrong,
        }
      )}
    >
      {!charArr.length ? (
        <button
          ref={btnRef}
          className="inline-block focus:ring-4 px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-3xl leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none transition duration-150 ease-in-out"
          onClick={startNew}
        >
          Start
        </button>
      ) : (
        charArr.map((char, idx) => (
          <div
            key={idx + char}
            className={clsx(
              "transition-all uppercase duration-200 absolute top-1/2 -translate-y-1/2 text-[400px]",
              {
                "left-1/2 -translate-x-1/2": idx === currentIdx,
                "left-full translate-x-0": idx < currentIdx,
                "left-0 -translate-x-full": idx > currentIdx,
              }
            )}
          >
            {char}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
