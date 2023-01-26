import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import StudentSignIn from "./Pages/AuthUsers/Student/studentSignIn";
import StudentSignUp from "./Pages/AuthUsers/Student/studentSignUp";
import TeacherSignIn from "./Pages/AuthUsers/Teacher/teacherSignIn";
import TeacherSignUp from "./Pages/AuthUsers/Teacher/teacherSignUp";
import UserRoles from "./Pages/AuthUsers/userRoles";
import DashBoard from "./Pages/DashBoard/dashboard";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/user-roles" element={<UserRoles />} />
        <Route path="/sign-in-student" element={<StudentSignIn />} />
        <Route path="/sign-up-student" element={<StudentSignUp />} />
        <Route path="/sign-in-teacher" element={<TeacherSignIn />} />
        <Route path="/sign-up-teacher" element={<TeacherSignUp />} />
      </Routes>
    </Box>
  );
}
export default App;
