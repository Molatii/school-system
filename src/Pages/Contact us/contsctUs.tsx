import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { IoIosMailUnread } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import Card from "./cardsFormat";
import ContactUsimg from "../../images/call3.png";

export default function ContactUs() {
  return (
    <Container maxW="5xl" py={12} pb={{ base: "10%", md: "7%" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading textAlign="center">Get In Touch with our Us</Heading>
          <Stack
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            rounded="md"
            direction="row"
            spacing={3}
            w={{ base: "25%", md: "20%" }}
          >
            <Text color="blue.500">
              <BsLinkedin />
            </Text>
            <Text color="blue.500">
              <BsTwitter />
            </Text>
            <Text color="blue.500">
              <BsFacebook />
            </Text>
          </Stack>
          <Text color="gray.500" fontSize="lg">
            Chat with us to find out more about our Courses and how we aim to
            the best in world.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Card
              icon={<Icon as={IoIosMailUnread} color="blue.500" w={5} h={5} />}
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
            <Card
              icon={<Icon as={MdLocationPin} color="blue.500" w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text="Maseru,Lesotho"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="Contact Us image"
            src={ContactUsimg}
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
