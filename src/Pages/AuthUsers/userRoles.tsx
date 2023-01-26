import { Box, Button, Stack, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { useEffect } from "react";
import AuthLayout from "./authLayout";

function UserRoles() {
  const navigate = useNavigate();

  const studentLogIn = () => {
    navigate("/sign-in-student");
  };

  const teacherLogIn = () => {
    navigate("/sign-in-teacher");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <Box justifyContent="center" w="100%">
      <AuthLayout>
        <Box w="100%" justifyContent="center">
          <Flex
            align="center"
            justify="center"
            w={{ base: "100%", md: "100%" }}
            mt={{ base: "30%", md: "10%" }}
          >
            <Stack
              spacing={4}
              w={{ base: "90%", md: "full" }}
              maxW="md"
              rounded="xl"
              boxShadow="2xl"
              p={6}
              my={12}
            >
              <Heading
                textAlign="center"
                lineHeight={1.1}
                mb="4%"
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                User Roles
              </Heading>
              <Stack spacing={6}>
                <Button
                  bg="blue.400"
                  color="white"
                  alignSelf="center"
                  w="70%"
                  onClick={studentLogIn}
                  leftIcon={<FaUserTie />}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Student
                </Button>
                <Button
                  bg="blue.400"
                  color="white"
                  alignSelf="center"
                  w="70%"
                  onClick={teacherLogIn}
                  leftIcon={<GiTeacher />}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Teacher
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </AuthLayout>
    </Box>
  );
}
export default UserRoles;
