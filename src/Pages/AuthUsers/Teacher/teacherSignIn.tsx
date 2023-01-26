import {
  Box,
  Button,
  Stack,
  Flex,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../authLayout";

function TeacherSignIn() {
  const navigate = useNavigate();
  const toast = useToast();

  const showToast = () => {
    toast({
      position: "top",
      title: "Sign in successful",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const goToRegister = () => {
    navigate("/sign-up-teacher");
  };
  const signIn = () => {
    showToast();
    navigate("/dashboard");
  };
  return (
    <Box justifyContent="center" w="100%">
      <AuthLayout>
        <Box w="100%" justifyContent="center">
          <Flex
            w={{ base: "100%", md: "100%" }}
            mt={{ base: "15%", md: "6%" }}
            align="center"
            justify="center"
          >
            <Stack spacing={8} w={{ base: "100%", md: "35%" }} py={12} px={6}>
              <Stack align="center">
                <Heading textAlign="center" fontSize="4xl">
                  Sign in
                </Heading>
              </Stack>
              <Box
                rounded="lg"
                bg={useColorModeValue("white", "gray.700")}
                boxShadow="2xl"
                p={8}
              >
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
                      <Text>Don`t have an account?</Text>
                      <Text
                        onClick={goToRegister}
                        cursor="pointer"
                        color="blue.500"
                      >
                        Sign Up
                      </Text>
                    </Stack>
                    <Button
                      bg="blue.400"
                      color="white"
                      onClick={signIn}
                      _hover={{
                        bg: "green.500",
                      }}
                    >
                      Sign in
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
export default TeacherSignIn;
