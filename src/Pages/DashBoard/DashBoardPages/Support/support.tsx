import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import ContactUs from "../../../Contact us/contsctUs";
import Dashboard from "../../dashboard";

function Support() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4} mt={{ base: "8%", md: "3%" }}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              Support
            </Text>
            <Text pt={2} fontSize="2xl">
              <BiSupport />
            </Text>
          </HStack>
          <Stack>
            <ContactUs />
          </Stack>
        </Box>
      </Dashboard>
    </Box>
  );
}

export default Support;
