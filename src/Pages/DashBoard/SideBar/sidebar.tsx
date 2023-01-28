import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  Heading,
  Stack,
  StackDivider,
  HStack,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { IconType } from "react-icons";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineAssessment, MdSchool } from "react-icons/md";
import { AiOutlineRead, AiOutlineSchedule } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { BiSupport, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SideBarItems from "./sideBarItems";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Courses", icon: AiOutlineRead, link: "/courses" },
  { name: "My Marks", icon: BsFileEarmarkCheck, link: "/marks" },
  { name: "Academics", icon: HiOutlineAcademicCap, link: "/academics" },
  { name: "Assessments", icon: MdOutlineAssessment, link: "/assessments" },
  { name: "Class Schedule", icon: AiOutlineSchedule, link: "/class-schedule" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function Sidebar({ onClose, ...rest }: SidebarProps) {
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
  const home = () => {
    navigate("/home");
  };

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        display={{ base: "flex", md: "none" }}
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Text fontSize="4xl" color="green.500">
          <MdSchool />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Stack divider={<StackDivider />} spacing="4">
        <Box p="4" mx="4">
          <Heading
            size="xs"
            color="gray.600"
            mb="5"
            mt="2"
            ml={1}
            fontFamily="sans-serif"
          >
            DashBoard
          </Heading>
          <HStack
            borderRadius="lg"
            p="4"
            mx="-4"
            cursor="pointer"
            display={{ base: "none", md: "flex" }}
            _hover={{
              bg: "green.500",
              color: "white",
            }}
            onClick={home}
          >
            <Text ml="4">
              <FiHome fontSize="18" />
            </Text>
            <Text fontSize="sm">DashBoard</Text>
          </HStack>
          <Stack display={{ base: "block", md: "none" }}>
            <Stack cursor="pointer" direction="row" onClick={profile}>
              <Text ml="4" fontSize="2xl">
                <BiUser />
              </Text>
              <Text fontSize="md">Profile</Text>
            </Stack>
            <Stack cursor="pointer" direction="row" onClick={support}>
              <Text ml="4" fontSize="2xl">
                <BiSupport />
              </Text>
              <Text fontSize="md">Support</Text>
            </Stack>
            <Stack cursor="pointer" direction="row" onClick={logOut}>
              <Text ml="4" fontSize="2xl">
                <CgLogOut />
              </Text>
              <Text fontSize="md">Log Out</Text>
            </Stack>
          </Stack>
        </Box>
        <Box p="4" mx="4">
          <Heading
            ml={1}
            size="xs"
            mt={{ base: "-5", md: "0" }}
            mb={{ base: "-5", md: "3" }}
            color="gray.600"
            fontFamily="sans-serif"
          >
            Pages
          </Heading>
        </Box>
      </Stack>
      {LinkItems.map((link) => (
        <SideBarItems key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </SideBarItems>
      ))}
    </Box>
  );
}
