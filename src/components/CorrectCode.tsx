import { Box } from "@chakra-ui/react";

const CorrectCode = () => {
  const tinderGoldCode = process.env.REACT_APP_TINDER_GOLD_CODE;

  return (
    <Box width={"4xl"} mb={40}>
      Żart, nie ma następnego poziomu, trzymaj kodzik do Tinder Gold:{" "}
      {tinderGoldCode}
    </Box>
  );
};

export default CorrectCode;
