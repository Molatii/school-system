import { Box, HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Dashboard from "../../dashboard";

const academicsList = [
  {
    subject: "Arts",
    lecture: "Molati",
    id: "a32",
  },
  {
    subject: "Chemistry",
    lecture: "Palesa",
    id: "c55",
  },
  {
    subject: "Education",
    lecture: "James",
    id: "edu88",
  },
  {
    subject: "History",
    lecture: "Mike",
    id: "his754",
  },
  {
    subject: "Law",
    lecture: "Lee",
    id: "law322",
  },
  {
    subject: "Religion & Philosophy",
    lecture: "Dr. Molati",
    id: "re08",
  },
];

function Academics() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              Academics
            </Text>
            <Text pt={2} fontSize="2xl">
              <HiOutlineAcademicCap />
            </Text>
          </HStack>
          <Stack py={12} direction="row">
            <Stack spacing="3" w="100%">
              <Stack divider={<StackDivider />} spacing="4">
                {academicsList.map((subject) => (
                  <Box key={subject.id}>
                    <Text fontFamily="sans-serif" fontSize="lg">
                      {subject.subject}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      By : {subject.lecture}
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

export default Academics;
