import {
  Box,
  HStack,
  Stack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function TopNavigation() {
  const userImage = "";
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/user-roles");
  };
  const profile = () => {
    navigate("/user-profile");
  };
  const support = () => {
    navigate("/support");
  };
  const UserAlert = () => {
    navigate("/user-alerts");
  };

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      w="100%"
      bg="green.500"
      mt="0%"
      ml="0%"
      display={{ base: "none", md: "block" }}
    >
      <HStack pt="1%" pb="1%" w="100%">
        <Stack w="52%" direction="row" ml="2.5%">
          <Link
            to="/home"
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <Stack direction="row" cursor="pointer">
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
          </Link>
        </Stack>
        <Stack
          mr="2%"
          w={{ base: "41%", md: "42.4%" }}
          direction="row"
          justifyContent="flex-end"
        >
          <Stack
            p={2}
            alignSelf="flex-end"
            cursor="pointer"
            borderRadius={15}
            bg={useColorModeValue("green.50", "white")}
            _hover={{
              bg: "white",
            }}
            onClick={UserAlert}
          >
            <Text pl={1} pr={1} fontSize="1xl" color="green.500">
              <BsBell />
            </Text>
          </Stack>
          <Stack
            _hover={{
              bg: "white",
            }}
            bg={useColorModeValue("green.50", "white")}
            borderRadius={15}
          >
            <Menu>
              <MenuButton>
                <HStack alignSelf="flex-end" p={1} borderRadius={15}>
                  {userImage === "" ? (
                    <Text pl={1} fontSize="2xl" color="green.500">
                      <BiUser />
                    </Text>
                  ) : (
                    <img
                      width="30px"
                      height="30px"
                      alt="User_Image"
                      src={userImage}
                      style={{ borderRadius: "4px" }}
                    />
                  )}
                  <Box display={{ base: "none", md: "flex" }}>
                    <Text
                      pr={1}
                      fontSize="lg"
                      color="green.500"
                      fontWeight="bold"
                      ml="-1"
                    >
                      <FiChevronDown />
                    </Text>
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList mt={3}>
                <MenuItem onClick={profile}>Profile</MenuItem>
                <MenuItem onClick={support}>Support</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logOut}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </HStack>
    </Box>
  );
}

export default TopNavigation;
