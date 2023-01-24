import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { ReactNode } from "react";

function SocialButton({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function Footer() {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();
  return (
    <Box
      bg="green.100"
      color={useColorModeValue("gray.700", "gray.200")}
      pb={{ base: "3%", md: "0%" }}
    >
      <Container
        as={Stack}
        maxW={{ base: "6xl", md: "81.5%" }}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          fontSize="2xl"
          display="inline-flex"
          color={useColorModeValue("gray.700", "gray.200")}
          fontWeight="bold"
          fontFamily="serif"
        >
          <MdSchool size="30px" />
          Academy
        </Text>
        <Text>
          {" "}
          &copy;{" "}
          <a
            href="https://ls.linkedin.com/in/paballo-molati-075313220"
            color="white"
          >
            Paballo Molati
          </a>{" "}
          {currentYear} | All rights reserved
        </Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="#">
            <BsTwitter />
          </SocialButton>
          <SocialButton label="YouTube" href="#">
            <BsFacebook />
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
