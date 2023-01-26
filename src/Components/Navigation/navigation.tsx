/* eslint-disable prefer-const */
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import MobileNav from "./mobileNav";

function Navigation() {
  // download pdf file
  const downloadPdf = () => {
    fetch("molati_resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // new pdf object
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "molati_resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Box
      bg="green.500"
      pos="fixed"
      zIndex={2}
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
          <Link
            to="/"
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <Stack direction="row" cursor="pointer">
              <Text mt={{ base: "6%", md: "1%" }} fontSize="4xl" color="white">
                <MdSchool />
              </Text>
              <Text
                fontSize="3xl"
                color="white"
                fontWeight="bold"
                fontFamily="serif"
                pt={{ base: "3%", md: "0%" }}
              >
                Academy
              </Text>
            </Stack>
          </Link>
        </Stack>
        <Stack w={{ base: "40%", md: "60%" }} mr={{ base: "3%", md: "10%" }}>
          <Button
            display={{ base: "none", md: "flex" }}
            mt="0.5%"
            alignSelf="flex-end"
            color="green.500"
            bg="white"
            onClick={downloadPdf}
            _hover={{ bg: "blue.500", color: "white" }}
          >
            DownLoad Prospectors <BsFileEarmarkPdfFill />
          </Button>
          <MobileNav downloadPdf={downloadPdf} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navigation;
