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
    <Box width={{ base: "100%", md: "80%", xl: "4xl" }} marginX="auto" mb={40}>
      <Puzzles />
      <form onSubmit={handleSubmit}>
        <HStack
          justify={{ base: "center", md: "space-between" }}
          mt={{ base: 8, md: 20 }}
        >
          <Box />
          <HStack spacing={4}>
            <PinInput size={{ base: "md", md: "lg" }} onChange={setInputCode}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default CodeInput;
