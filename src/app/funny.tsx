import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Funny = () => {
  return (
    <Box bgColor="#E8F9F4" p="1rem">
      <Text
        fontSize={{ base: "3rem", md: "6rem" }}
        pt="2rem"
        color="#AF69EF"
        textAlign="center"
        className={dancing_script.className}
      >
        The Story Continues
      </Text>
      <Text
        fontSize="2rem"
        pb="2rem"
        fontWeight="600"
        color="#AF69EF"
        textAlign="center"
        className={dancing_script.className}
      >
        Fond Memories from Hamid. There was no budget for pictures and videos
        sadly.
      </Text>
      <Flex mt="3rem" flexWrap="wrap" justify="center" gap="1rem" align="center">
        {data.map((item, index) => (
          <Box
            key={index}
            pos="relative"
            w="20rem"
            h="20rem"
            border={item.border}
            p="1rem"
            mb="1rem"
            textAlign="center"
            bgColor={item.bgColor}
            color={item.textColor}
            borderRadius="50%" // Makes the box circular
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Text color={item.textColor}>{item.message}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Funny;

const data = [
  {
    border: "1px solid #FF5E9C", // Medium Pink
    bgColor: "#FFB6C1", // Light Pink
    textColor: "#FF5E9C", // Medium Pink
    message:
      "We started talking on Monday, 8th April 2024. Her Headset was broken and she was so frustrated and needed to let it out.",
  },
  {
    border: "1px solid #6A0D91", // Deep Purple
    bgColor: "#EAD1E1", // Pale Pink
    textColor: "#6A0D91", // Deep Purple
    message:
      "When her H factor jumped out. Nah, this one was so funny cause i didn't expect it. Waiting on the next one.",
  },
  {
    border: "1px solid #003300", // Very Dark Green
    bgColor: "#E0F2E9", // Pale Green
    textColor: "#003300", // Very Dark Green
    message:
      "Calling me to show off her outfit and water bottle. When she called me to show off her outfit, i was so excited, i felt honored and was so happy. You should have seen me that day",
  },
  {
    border: "1px solid #FF5E9C", // Medium Pink
    bgColor: "#FFE0E6", // Very Light Pink
    textColor: "#FF5E9C", // Medium Pink
    message: "Staying up for a while when I was on my way to Abuja. This was so wholesome. She kept checking up on me every hr and asking where am i?. I felt really safe just cause she was there sorta",
  },
  {
    border: "1px solid #6A0D91", // Deep Purple
    bgColor: "#F3E5F5", // Light Lavender
    textColor: "#6A0D91", // Deep Purple
    message: "The excitement from her when I got her banana bread. Wish someone was there to take a picture of her face so that i can frame it causw she was o happy and grateful. I was blushing",
  },
  {
    border: "1px solid #003300", // Very Dark Green
    bgColor: "#E8F5E9", // Very Light Green
    textColor: "#003300", // Very Dark Green
    message: "Beating her in iMessage games. Hahaha, she was actually surprised. Still waiting for the rematch tho",
  },
  {
    border: "1px solid #B3B3B3", // Light Gray
    bgColor: "#F0F0F0", // Light Gray
    textColor: "#B3B3B3", // Light Gray
    message: "Anytime she sends pictures, videos or VN. Best Believe, when any of this happens. I am going to be elated for a while",
  },
];
