import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Goodbye = () => {
  return (
    <Box className={dancing_script.className} bgColor="#E6E6FA" p="1rem"> {/* Light Lavender background */}
      <Text
        fontSize={{ base: "3rem", md: "6rem" }}
        pt="2rem"
        color="#6A0D91"
        textAlign="center"
        className={dancing_script.className}
      >
        Farewell for Now
      </Text>
      <Text
        fontSize="2rem"
        pb="2rem"
        color="#6A0D91"
        textAlign="center"
        className={dancing_script.className}
      >
        Hope you enjoyed the journey with a cameo from Hamid. Nobody invited him but oh well
      </Text>
      <Flex mt="3rem" flexWrap="wrap" gap="1rem" justifyContent="center" alignItems="center">
        <Box
          pos="relative"
          w="12rem"
          h="12rem"
          border="4px solid #AF69EF"
          p="1rem"
          fontSize="2rem"
          mb="1rem"
          textAlign="center"
          bgColor="#D8BFD8" // Thistle
          color="#4B0082" // Indigo
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Text color="#4B0082">
            I adore you
          </Text>
        </Box>
        <Box
          pos="relative"
          w="12rem"
          fontSize="2rem"
          h="12rem"
          border="4px solid #8A2BE2"
          p="1rem"
          mb="1rem"
          textAlign="center"
          bgColor="#E6E6FA" // Lavender
          color="#8A2BE2" // BlueViolet
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Text color="#8A2BE2">
            I love you
          </Text>
        </Box>
        <Box
          pos="relative"
          w="12rem"
          h="12rem"
          border="4px solid #483D8B"
          p="1rem"
          mb="1rem"  
           fontSize="2rem"
          textAlign="center"
          bgColor="#B0C4DE" // LightSteelBlue
          color="#483D8B" // DarkSlateBlue
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Text color="#483D8B">
            Crazy about you
          </Text>
        </Box>
        <Box
          pos="relative"
          w="12rem"
          h="12rem"
          fontSize="2rem"
          border="4px solid #9932CC"
          p="1rem"
          mb="1rem"
          textAlign="center"
          bgColor="#F8F8FF" // GhostWhite
          color="#9932CC" // DarkOrchid
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Text color="#9932CC">
            Love you so much
          </Text>
        </Box>
      </Flex>
      <Text mt = "2rem" fontSize="2rem">Side note: He got creatively bankrupt towards the end.Hence, the circles again</Text>
    </Box>
  );
};

export default Goodbye;
