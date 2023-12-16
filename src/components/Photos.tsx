import {
  VStack,
  Box,
  Image,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const Photos = () => {
  const photos = Array.from({ length: 22 }, (_, i) => i + 1);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <VStack spacing={4} width={"full"}>
      {photos.map((photo, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true, // Trigger the animation once
        });

        return isLargerThan1000 ? (
          <Flex
            key={photo}
            justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
            width={"full"}
            ref={ref}
            position="relative"
          >
            <MotionBox
              boxSize="md"
              variants={variants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              position="relative"
              zIndex="2"
            >
              <Image src={`/${photo}.jpg`} alt={`Photo ${photo}`} />
            </MotionBox>
            {photo === 6 && (
              <Text fontSize="lg" position="absolute" zIndex="1">
                5
              </Text>
            )}
          </Flex>
        ) : (
          <VStack key={photo} width={"full"} ref={ref} position="relative">
            <MotionBox
              boxSize="md"
              variants={variants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              position="relative"
              zIndex="2"
            >
              <Image src={`/${photo}.jpg`} alt={`Photo ${photo}`} />
            </MotionBox>
            {photo === 6 && (
              <Text fontSize="lg" position="absolute" zIndex="1">
                5
              </Text>
            )}
          </VStack>
        );
      })}
    </VStack>
  );
};

export default Photos;
