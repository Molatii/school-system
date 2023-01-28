import { Box, HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { AiOutlineRead } from "react-icons/ai";
import Dashboard from "../../dashboard";

const courseList = [
  {
    course: "computing",
    lecture: "Molati",
    id: "a32",
  },
  {
    course: "Chemistry",
    lecture: "Palesa",
    id: "c55",
  },
  {
    course: "Accounting",
    lecture: "James",
    id: "edu88",
  },
  {
    course: "Bussiness Management",
    lecture: "Mike",
    id: "his754",
  },
  {
    course: "Him",
    lecture: "James",
    id: "edu818",
  },
];

function Courses() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              Courses
            </Text>
            <Text pt={2} fontSize="2xl">
              <AiOutlineRead />
            </Text>
          </HStack>
          <Stack py={12} direction="row">
            <Stack spacing="3" w="100%">
              <Stack divider={<StackDivider />} spacing="4">
                {courseList.map((course) => (
                  <Box key={course.id}>
                    <Text fontFamily="sans-serif" fontSize="lg">
                      {course.course}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      By : {course.lecture}
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

export default Courses;
