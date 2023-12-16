import React from "react";
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";

const Puzzles: React.FC = () => {
  return (
    <Box>
      <Text mb={20}>
        No Tymeczku nie możemy Ci tak po prostu dać prezentu, musisz się trochę
        pomęczyć. Obiecujemy, że warto! Rozwiąż 4 zagadki, w których odpowiedzią
        jest zawsze cyfra. Wprowadź odpowiedzi w odpowiedniej kolejności, aby
        odblokować następny poziom. Powodzenia!
      </Text>

      <Heading mt={6} mb={4}>
        Zagadki
      </Heading>
      <List spacing={3}>
        <ListItem>1. Cyfra ukryta pod Tobą.</ListItem>
        <ListItem>2. Rozwiąż całkę:</ListItem>
        <ListItem>3. Sprawdź pod łóżkiem (w Bełchatowie).</ListItem>
        <ListItem>4. Wypadałoby się pouczyć angielskiego.</ListItem>
      </List>
    </Box>
  );
};

export default Puzzles;
