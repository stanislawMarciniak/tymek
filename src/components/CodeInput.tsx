import React, { useState } from "react";
import {
  Button,
  useToast,
  HStack,
  PinInput,
  PinInputField,
  Box,
} from "@chakra-ui/react";
import Puzzles from "./Puzzles";

interface CodeInputProps {
  onCodeSubmit: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onCodeSubmit }) => {
  const [inputCode, setInputCode] = useState("");
  const toast = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputCode === import.meta.env.VITE_CORRECT_CODE) {
      onCodeSubmit(inputCode);
    } else {
      toast({
        title: "Źle XDD",
        description: "No niestety Tymeczku, nie tym razem.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box width={"4xl"} mb={40}>
      <Puzzles />
      <form onSubmit={handleSubmit}>
        <HStack justify={"space-evenly"} mt={20}>
          <Box />
          <HStack>
            <PinInput size={"lg"} onChange={setInputCode}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button type="submit" colorScheme="blue" mt={2}>
            Submit
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default CodeInput;
