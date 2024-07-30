import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Bio = () => {
  return (
    <Box bgColor="#E6E6FA" p="1rem">
      <Text
        fontSize={{ base: "3rem", md: "4rem" }}
        pt="2rem"
        color="#AF69EF"
        textAlign="center"
        className={dancing_script.className}
      >
        Get To Know Her
      </Text>
      <Text
        mb="2rem"
        color="#9867C5"
        fontSize="2rem"
        textAlign="center"
        className={dancing_script.className}
      >
        She will only be referred to as the woman from Outer Space
      </Text>
      <Flex
        w="90%"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        py="2rem"
        gap="1rem"
      >
        <Flex flexDir="column" flex="6" gap="1rem">
          <Flex gap="1rem" flexDirection={{ base: "column", md: "row" }}>
            <Box flex="2" bgColor="#AF69EF" p="2rem" rounded="0.5rem">
              She loves Banana bread and is a huge fan of horror movies
              specifically movies from the 90`&apos;`. She loves anime and her
              favorite so far is JJK and you can guess her favorite character.
              Yes, it is Gojo. That boy should hurry up in getting her a gojo
              plushie. Her favorite genre of movies are comedy, drama, Romance/
              Rom Com
            </Box>
            <Box
              flex="1"
              bgColor="#9867C5"
              p="2rem"
              rounded="0.5rem"
              color="white"
            >
              She sounds British most times. Guess i would have to fight the
              Angel that sent her here cause that accent. Whew, take all my
              money, dear. She does have a H factor tho but it is so cute.
              Waiting for when i get to hear it again
            </Box>
          </Flex>
          <Flex gap="1rem" flexDirection={{ base: "column", md: "row" }}>
            <Box
              flex="1"
              bgColor="#3A1F5D"
              p="2rem"
              rounded="0.5rem"
              color="white"
            >
              Her favorite book is Americanah. She has read it twice and even
              has a physical copy. She can also write plus she `&apos;`s so good
              with words and she `&apos;` good at listening.
            </Box>
            <Box
              flex="2"
              bgColor="#A45EE5"
              p="2rem"
              rounded="0.5rem"
              color="white"
            >
              She has an amazing sense of humor and also comes with an amazing
              voice and beautiful set of eyes. Like God carried his tools and
              took his time perfecting her cause he felt like she would be one
              in a million and mind you she is one in a million.
            </Box>
          </Flex>
        </Flex>
        <Box flex="1" p="2rem" bgColor="#3A1F5D" color="white" rounded="0.5rem">
          Favorite genre of books would be Romance and Histroical fiction.
          That`&apos;`s sadly the amount of info i can give about her. I am
          greedy
        </Box>
      </Flex>
    </Box>
  );
};

export default Bio;
