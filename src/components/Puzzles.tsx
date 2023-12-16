import React from "react";
import { Box, Center, Heading, List, ListItem, Text } from "@chakra-ui/react";

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
        <ListItem>
          2. Rozwiąż całkę: <br />
          <Center>
            &#8747;&#8747;&#8747;(xy) dV <br />
            V=&#123;(x,y,z)&#x2223; z &#x2264; 36 &#x2212; 9x &#x2212; 4y, z
            &#x2265; 0, x&#x2265;0, y&#x2265;0&#125;
          </Center>
        </ListItem>
        <ListItem>3. Sprawdź pod łóżkiem (w Bełchatowie).</ListItem>
        <ListItem>4. Wypadałoby się pouczyć angielskiego.</ListItem>
      </List>
    </Box>
  );
};

export default Puzzles;
