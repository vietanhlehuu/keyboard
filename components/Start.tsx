import * as React from "react";

const Start: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    btnRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen grid place-content-center">
      <h1 className="text-center text-[100px] uppercase">Just Type It</h1>
      <button
        ref={btnRef}
        className="mt-10 focus:ring-4 px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-3xl leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none transition duration-150 ease-in-out"
        onClick={onStart}
      >
        Let&apos;s go
      </button>
    </div>
  );
};

export default Start;
