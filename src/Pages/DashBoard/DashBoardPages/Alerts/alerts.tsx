import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { TbBellRinging } from "react-icons/tb";
import { FiBellOff } from "react-icons/fi";
import Dashboard from "../../dashboard";

function UserAlerts() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              Alerts
            </Text>
            <Text pt={2} fontSize="2xl">
              <TbBellRinging />
            </Text>
          </HStack>
          <Stack py={12} direction="row">
            <Text fontSize="2xl">
              <FiBellOff />
            </Text>
            <Stack spacing="3">
              <Text fontFamily="sans-serif" fontSize="2xl">
                Sorry there are no alerts...
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Dashboard>
    </Box>
  );
}

export default UserAlerts;
