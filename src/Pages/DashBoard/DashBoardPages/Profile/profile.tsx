import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import {
  BsFillTelephoneForwardFill,
  BsCalendar3,
  BsGenderMale,
} from "react-icons/bs";
import { IoIosMailUnread } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineIdentification } from "react-icons/hi";
import Card from "../../../Contact us/cardsFormat";
import Dashboard from "../../dashboard";
import userImg from "../../../../images/user.jpg";

function Profile() {
  return (
    <Box w="100%">
      <Dashboard>
        <Box m={4}>
          <HStack>
            <Text fontFamily="sans-serif" mt={3} fontSize="2xl">
              Profile
            </Text>
            <Text pt={2} fontSize="2xl">
              <BiUser />
            </Text>
          </HStack>

          <Stack>
            <Container maxW="5xl" py={12} pb={{ base: "10%", md: "7%" }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                <Flex py={2}>
                  <Image
                    rounded="lg"
                    alt="Contact Us image"
                    src={userImg}
                    style={{ width: "60%", height: "70%" }}
                    objectFit="cover"
                  />
                </Flex>
                <Stack spacing={4}>
                  <Stack
                    spacing={4}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.100", "gray.700")}
                      />
                    }
                  >
                    <Card
                      icon={
                        <Icon as={AiOutlineUser} color="blue.500" w={5} h={5} />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text="Paballo"
                    />
                    <Card
                      icon={
                        <Icon
                          as={HiOutlineIdentification}
                          color="blue.500"
                          w={5}
                          h={5}
                        />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text="Molati"
                    />
                    <Card
                      icon={
                        <Icon as={BsGenderMale} color="blue.500" w={5} h={5} />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text="Male"
                    />
                    <Card
                      icon={
                        <Icon as={BsCalendar3} color="blue.500" w={5} h={5} />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text="25"
                    />
                    <Card
                      icon={
                        <Icon
                          as={IoIosMailUnread}
                          color="blue.500"
                          w={5}
                          h={5}
                        />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text="Molatipaballo@gmail.com"
                    />
                    <Card
                      icon={
                        <Icon
                          as={BsFillTelephoneForwardFill}
                          color="blue.500"
                          w={5}
                          h={5}
                        />
                      }
                      iconBg={useColorModeValue("green.100", "green.900")}
                      text="+266 59911982"
                    />
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
            <Button
              bg="blue.400"
              alignSelf="center"
              color="white"
              _hover={{
                bg: "green.500",
              }}
              w="40%"
            >
              Update Profile
            </Button>
          </Stack>
        </Box>
      </Dashboard>
    </Box>
  );
}

export default Profile;
