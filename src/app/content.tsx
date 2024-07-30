import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Dancing_Script, Poppins } from "next/font/google";
import React from "react";

const dancing_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Contents = () => {
  return (
    <Box bgColor="#6A0D91" className={dancing_script.className}>
    <Flex justifyContent="space-between">
      <Text fontWeight="700" fontSize="2rem">
        Mojisola
      </Text>
      </Flex>
    </Box>
  );
};
