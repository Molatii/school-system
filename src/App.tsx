import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import StudentSignIn from "./Pages/AuthUsers/Student/studentSignIn";
import StudentSignUp from "./Pages/AuthUsers/Student/studentSignUp";
import TeacherSignIn from "./Pages/AuthUsers/Teacher/teacherSignIn";
import TeacherSignUp from "./Pages/AuthUsers/Teacher/teacherSignUp";
import UserRoles from "./Pages/AuthUsers/userRoles";
import Academics from "./Pages/DashBoard/DashBoardPages/Academics/academics";
import UserAlerts from "./Pages/DashBoard/DashBoardPages/Alerts/alerts";
import Assessments from "./Pages/DashBoard/DashBoardPages/Assessments/assessments";
import ClassSchedule from "./Pages/DashBoard/DashBoardPages/Class Schedule/classSchedule";
import Courses from "./Pages/DashBoard/DashBoardPages/Courses/courses";
import Home from "./Pages/DashBoard/DashBoardPages/Home/home";
import Marks from "./Pages/DashBoard/DashBoardPages/Marks/marks";
import Profile from "./Pages/DashBoard/DashBoardPages/Profile/profile";
import Support from "./Pages/DashBoard/DashBoardPages/Support/support";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/user-alerts" element={<UserAlerts />} />
        <Route path="/user-roles" element={<UserRoles />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/sign-in-student" element={<StudentSignIn />} />
        <Route path="/sign-up-student" element={<StudentSignUp />} />
        <Route path="/sign-in-teacher" element={<TeacherSignIn />} />
        <Route path="/sign-up-teacher" element={<TeacherSignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
      </Routes>
    </Box>
  );
}
export default App;
