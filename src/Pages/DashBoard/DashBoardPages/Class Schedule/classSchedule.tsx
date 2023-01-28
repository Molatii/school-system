import { Box, HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { AiOutlineSchedule } from "react-icons/ai";
import Dashboard from "../../dashboard";

const classSchedule = [
  {
    subject: "Arts",
    date: "Monday, 13:00",
    id: "a32",
  },
  {
    subject: "Chemistry",
    date: "Monday, 17:30",
    id: "c55",
  },
  {
    subject: "Education",
    date: "Tuesday, 07:00",
    id: "edu88",
  },
  {
    subject: "History",
    date: "Tuesday, 15:00",
    id: "his754",
  },
  {
    subject: "Law",
    date: "Tuesday, 18:00",
    id: "law322",
  },
  {
    subject: "Religion & Philosophy",
    date: "Friday, 10:00",
    id: "re09",
  },
];

function ClassSchedule() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4} mt={{ base: "8%", md: "3%" }}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              DashBoard
            </Text>
            <Text pt={2} fontSize="2xl">
              <AiOutlineSchedule />
            </Text>
          </HStack>
          <Stack py={12} direction="row">
            <Stack spacing="3" w="100%">
              <Stack divider={<StackDivider />} spacing="4">
                {classSchedule.map((schedule) => (
                  <Box key={schedule.id}>
                    <Text fontFamily="sans-serif" fontSize="lg">
                      {schedule.subject}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      By : {schedule.date}
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

export default ClassSchedule;
