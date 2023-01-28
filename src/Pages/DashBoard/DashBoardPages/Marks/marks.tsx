import { Box, HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { BsFileEarmarkCheck } from "react-icons/bs";
import Dashboard from "../../dashboard";

const marksList = [
  {
    subject: "Arts",
    marks: "90%",
    id: "a32",
  },
  {
    subject: "Chemistry",
    marks: "45%",
    id: "c55",
  },
  {
    subject: "Education",
    marks: "83%",
    id: "edu88",
  },
  {
    subject: "Religion & Philosophy",
    marks: "99%",
    id: "re00",
  },
  {
    subject: "IT",
    marks: "76%",
    id: "re10",
  },
];
function Marks() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4} mt={{ base: "8%", md: "3%" }}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              Courses
            </Text>
            <Text pt={2} fontSize="2xl">
              <BsFileEarmarkCheck />
            </Text>
          </HStack>
          <Stack py={12} direction="row">
            <Stack spacing="3" w="100%">
              <Stack divider={<StackDivider />} spacing="4">
                {marksList.map((subjectMarks) => (
                  <Box key={subjectMarks.id}>
                    <Text fontFamily="sans-serif" fontSize="lg">
                      {subjectMarks.subject}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      By : {subjectMarks.marks}
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

export default Marks;
