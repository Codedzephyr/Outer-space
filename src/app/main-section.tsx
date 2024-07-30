import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Dancing_Script } from "next/font/google";



const dancing_script = Dancing_Script({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
  });

export const MainSection = () => {
  return (
    <Box bgColor=" #FF69B4" h="40vh" className={dancing_script.className}>
    <Text fontWeight="600" fontSize="5rem">
      Mojisola
    </Text>
    <Text textAlign="center" mt="10rem" fontSize="4rem">
      AntiSocial Butterfly
    </Text>
  </Box>
  )
}

