import { Center, VStack } from "@chakra-ui/react";
import Greetings from "./components/Greetings";
import Photos from "./components/Photos";
import CodeInput from "./components/CodeInput";
import React from "react";
import CorrectCode from "./components/CorrectCode";

function App() {
  const [isCodeCorrect, setIsCodeCorrect] = React.useState(false);

  const checkCode = (inputCode: string) => {
    if (inputCode === import.meta.env.VITE_CORRECT_CODE) {
      setIsCodeCorrect(true);
    } else {
      alert("Wrong code, please try again");
    }
  };

  return (
    <Center fontSize={"2xl"}>
      <VStack width={"70%"}>
        <Greetings />
        <Photos />
        {isCodeCorrect ? (
          <CorrectCode />
        ) : (
          <CodeInput onCodeSubmit={checkCode} />
        )}
      </VStack>
    </Center>
  );
}

export default App;
