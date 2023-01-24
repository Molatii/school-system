import { Box } from "@chakra-ui/react";
import Footer from "../Components/Footer/footer";
import Navigation from "../Components/Navigation/navigation";

function Layout() {
  return (
    <Box w="100%">
      <Navigation />
      <Footer />
    </Box>
  );
}

export default Layout;
