import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Header = () => {
  return (
    <Box
      h={{base: "100%", md: '100vh', lg: '100vh'}}
      className={dancing_script.className}
      bgColor="#3A1F5D"
      p="1rem"
    >
      <Box
        pos="relative"
        w="8rem"
        h="8rem"
        borderRadius="50%"
        px="1.5rem"
        position="relative"
        border="4px solid #AF69EF"
      >
        <Text
          pos="absolute"
          left="1rem"
          bottom="3rem"
          color="#A45EE5"
          fontSize="1rem"
        >
          M
        </Text>
        <Text
          pos="absolute"
          bottom="1rem"
          left="3.5rem"
          fontSize="1rem"
          color="#A45EE5"
        >
          J
        </Text>
      </Box>
      <Text
        mt="5rem"
        fontSize={{base: '4rem', md: '6rem'}}
        color="#AF69EF"
        textAlign="center"
        fontWeight="700"
      >
        Woman from Outer Space
      </Text>
      <Text
        mt="1rem"
        fontSize={{base: '3rem', md: '4rem'}}
        color="#9867C5"
        textAlign="center"
        fontWeight="600"
      >
        AntiSocial Butterfly
      </Text>
      <Text
        mt="1rem"
        fontSize={{base: '1.5rem', md: '2rem'}}
        color="#A45EE5"
        textAlign="center"
        fontWeight="600"
      >
        Explore this journey with us
      </Text>
    </Box>
  );
};
