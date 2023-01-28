import {
  IconButton,
  Box,
  useColorModeValue,
  Text,
  Menu,
  FlexProps,
  HStack,
  Stack,
  MenuButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { MdSchool } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export default function MobileNav({ onOpen, ...rest }: MobileProps) {
  const navigate = useNavigate();

  const UserAlert = () => {
    navigate("/user-alerts");
  };
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="green.500"
      borderBottomWidth="1px"
      w="100%"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <HStack w="100%">
        <Stack w="60%">
          <Link
            to="/home"
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <Stack direction="row" cursor="pointer">
              <Text mt="3%" fontSize="4xl" color="white">
                <MdSchool />
              </Text>
              <Text
                fontSize="3xl"
                color="white"
                fontWeight="bold"
                fontFamily="serif"
                pt={{ base: "2%", md: "0%" }}
              >
                Academy
              </Text>
            </Stack>
          </Link>
        </Stack>
        <Stack w="40%" direction="row" justifyContent="flex-end">
          <Stack
            p={2}
            alignSelf="flex-end"
            cursor="pointer"
            borderRadius={15}
            bg="green.500"
            color="white"
            _hover={{
              bg: "white",
              color: "green.500",
            }}
            onClick={UserAlert}
          >
            <Text pl={1} pr={1} fontWeight="bold" fontSize="2xl">
              <BsBell />
            </Text>
          </Stack>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FiMenu />}
              alignSelf="flex-end"
              color="green.800"
              bg="white"
              onClick={onOpen}
              _hover={{ bg: "blue.400", color: "white" }}
              display={{ base: "flex", md: "none" }}
            />
          </Menu>
        </Stack>
      </HStack>
    </Box>
  );
}
