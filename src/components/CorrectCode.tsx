import { Box, Center, Text, VStack } from "@chakra-ui/react";

const CorrectCode = () => {
  const tinderGoldCode = import.meta.env.VITE_TINDER_CODE;

  return (
    <Box width={"4xl"} mb={40}>
      <Center>
        <VStack gap={5}>
          <Text>
            Żart, nie ma następnego poziomu. Trzymaj kodzik do Tinder Gold:{" "}
          </Text>
          <Text as="span" fontSize={"5xl"} color="gold" fontWeight="bold">
            {tinderGoldCode}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default CorrectCode;
