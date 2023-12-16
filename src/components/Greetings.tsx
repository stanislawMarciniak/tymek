import { Text, VStack } from "@chakra-ui/react";

const Greetings = () => {
  return (
    <VStack h={"100vh"} justify={"center"}>
      <Text fontSize={"6xl"}>Wszystkiego najlepszego Tymek!</Text>
      <Text mt={4}>
        Życzymy Ci zdrowia, szczęścia i spełnienia wszystkich marzeń!
      </Text>
    </VStack>
  );
};

export default Greetings;
