/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Stack,
  Flex,
  Text,
  useToast,
  Heading,
  HStack,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../authLayout";

function StudentSignUp() {
  const navigate = useNavigate();
  const toast = useToast();

  const showToast = () => {
    toast({
      position: "top",
      title: "Sign up successful",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const goToLogIn = () => {
    navigate("/sign-in-student");
  };

  const register = () => {
    showToast();
    navigate("/sign-in-student");
  };

  return (
    <Box justifyContent="center" w="100%">
      <AuthLayout>
        <Box w="100%" justifyContent="center">
          <Flex
            w={{ base: "100%", md: "100%" }}
            mt={{ base: "15%", md: "4%" }}
            align="center"
            justify="center"
          >
            <Stack spacing={8} w={{ base: "100%", md: "35%" }} py={12} px={6}>
              <Stack align="center" w="100%">
                <Heading textAlign="center" fontSize="4xl">
                  Sign Up
                </Heading>
              </Stack>
              <Box
                rounded="lg"
                bg={useColorModeValue("white", "gray.700")}
                boxShadow="2xl"
                p={8}
              >
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "row", sm: "row" }}
                      align="start"
                      justify="space-between"
                    >
                      <Text>Already have an account?</Text>
                      <Text
                        onClick={goToLogIn}
                        cursor="pointer"
                        color="blue.500"
                      >
                        Sign In
                      </Text>
                    </Stack>
                    <Button
                      bg="blue.400"
                      onClick={register}
                      color="white"
                      _hover={{
                        bg: "green.500",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </AuthLayout>
    </Box>
  );
}
export default StudentSignUp;
