import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "./SideBar/sidebar";
import MobileNav from "./TopNavigation/mobileNav";
import TopNavigation from "./TopNavigation/topNavigation";

export default function Dashboard({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("green.50", "white")}>
      <TopNavigation />
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box
        bg="white"
        ml={{ base: 0, md: 64 }}
        p="4"
        m="6"
        mt={{ base: "13%", md: "5%" }}
        borderTopRadius={15}
      >
        {children}
      </Box>
    </Box>
  );
}
