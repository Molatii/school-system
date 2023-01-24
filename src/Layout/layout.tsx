import { Box } from "@chakra-ui/react";
import Footer from "../Components/Footer/footer";
import Navigation from "../Components/Navigation/navigation";
import LandingPage from "../Pages/LandingPage/landingPage";

function Layout() {
  return (
    <Box w="100%">
      <Navigation />
      <LandingPage />
      <Footer />
    </Box>
  );
}

export default Layout;
