import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";

const KeyPractice = dynamic(() => import("../components/KeyPractice"));
import Start from "../components/Start";

const Home: React.FC = () => {
  const [starting, setStarting] = useState(false);

  if (starting) {
    return (
      <Suspense>
        <KeyPractice />
      </Suspense>
    );
  }
  return <Start onStart={() => setStarting(true)} />;
};

export default Home;
