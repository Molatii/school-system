import { Box, Heading, Text, HStack, Stack } from "@chakra-ui/react";
import { MdOutlineAnnouncement } from "react-icons/md";

interface CardData {
  title: string;
}

function HomeCards(props: CardData) {
  const { title, ...rest } = props;
  return (
    <Box
      bg="gray.50"
      borderWidth="0px"
      borderRadius="15px"
      w={{ base: "100%", md: "33%" }}
      height="112px"
      boxShadow={16}
      cursor="pointer"
      gap="4px"
      {...rest}
    >
      <HStack mt={{ base: "28px", md: "10%" }} mb="28px" ml="14.5px" mr="5px">
        <Stack w={{ base: "90%", md: "80%" }}>
          <Heading
            color="gray.600"
            fontSize="sm"
            fontStyle="normal"
            lineHeight="20px"
            fontFamily="sans-serif"
          >
            {title}
          </Heading>
        </Stack>
        <Stack pr="2">
          <Text fontSize="lg">
            <MdOutlineAnnouncement />
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
}
export default HomeCards;
