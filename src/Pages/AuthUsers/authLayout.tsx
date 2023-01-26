import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../../Components/Footer/footer";
import Navigation from "../../Components/Navigation/navigation";
import bgImage from "../../images/v2.svg";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box w="100%">
      <Navigation />
      <Box
        w="100%"
        minHeight="100vh"
        display="flex"
        flex-deriction="column"
        backgroundImage={bgImage}
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
      >
        <Box w="100%">{children}</Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default AuthLayout;
