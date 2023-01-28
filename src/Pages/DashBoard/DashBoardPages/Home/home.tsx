import { Box, Stack, StackDivider, HStack, Text } from "@chakra-ui/react";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Dashboard from "../../dashboard";
import HomeCards from "./homecards";

const eventsList = [
  {
    name: "FootBall Tournament",
    date: "12/07/2023",
    id: "d32",
  },
  {
    name: "NetBall Tournament",
    date: "09/10/2023",
    id: "c55",
  },
  {
    name: "Lesotho 2023 Hackathon",
    date: "12/05/2023",
    id: "edu88",
  },
  {
    name: "Botswana 2023 Hackathon",
    date: "02/06/2023",
    id: "his754",
  },
];

function Home() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4}>
          <Stack
            spacing={5}
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
          >
            <HomeCards title="Class Announcements" />
            <HomeCards title="Lab Announcements" />
            <HomeCards title="SRC Announcements" />
          </Stack>
          <Stack py={12} direction="row">
            <Stack spacing="3" w="100%">
              <HStack mb={2}>
                <Text fontFamily="sans-serif" fontSize="2xl">
                  Upcoming Events
                </Text>
                <Text fontSize="2xl">
                  <MdOutlineEmojiEvents />
                </Text>
              </HStack>
              <Stack divider={<StackDivider />} spacing="4">
                {eventsList.map((event) => (
                  <Box key={event.id} cursor="pointer">
                    <Text fontFamily="sans-serif" fontSize="lg">
                      {event.name}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      {event.date}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Dashboard>
    </Box>
  );
}

export default Home;
