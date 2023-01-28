import { Box, HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import { MdOutlineAssessment } from "react-icons/md";
import Dashboard from "../../dashboard";

function Assessments() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4} mt={{ base: "8%", md: "3%" }}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              DashBoard
            </Text>
            <Text pt={2} fontSize="2xl">
              <MdOutlineAssessment />
            </Text>
          </HStack>
          <Stack py={12} direction="row">
            <Stack spacing="3">
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Text fontFamily="sans-serif" fontSize="lg">
                    Assessment
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Sorry there are no Assessments...
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Dashboard>
    </Box>
  );
}

export default Assessments;
