import { Box, Center, Text, VStack } from "@chakra-ui/react";

const CorrectCode = () => {
  const tinderGoldCode = import.meta.env.VITE_TINDER_CODE;

  return (
    <Box width={{ base: "full", md: "80%", xl: "4xl" }} marginX="auto" mb={40}>
      <Center>
        <VStack spacing={5} align="center">
          <Text textAlign="center">
            Żart, nie ma następnego poziomu. Trzymaj kodzik do Tinder Gold:{" "}
          </Text>
          <Text
            as="span"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="gold"
            fontWeight="bold"
          >
            {tinderGoldCode}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default CorrectCode;
