import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

function Navigation() {
  return (
    <Box
      bg="green.500"
      w="100%"
      mt="0%"
      ml="0%"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction="row"
        pt="1%"
        pb="1%"
        w={{ base: "93%", md: "80%" }}
        ml={{ base: "3%", md: "10%" }}
      >
        <Stack w={{ base: "60%", md: "40%" }} direction="row">
          <Text mt="1%" fontSize="4xl" color="white">
            <MdSchool />
          </Text>
          <Text
            fontSize="3xl"
            color="white"
            fontWeight="bold"
            fontFamily="serif"
          >
            Academy
          </Text>
        </Stack>
        <Stack w={{ base: "40%", md: "60%" }} mr={{ base: "3%", md: "10%" }}>
          <Button
            display={{ base: "none", md: "flex" }}
            mt="0.5%"
            alignSelf="flex-end"
            color="green.500"
            bg="white"
            _hover={{ bg: "blue.500", color: "white" }}
          >
            DownLoad Prospectors <BsFileEarmarkPdfFill />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navigation;
