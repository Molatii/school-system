import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function MobileNav({ downloadPdf }: any) {
  const navigate = useNavigate();

  const studentLogIn = () => {
    navigate("/sign-in-student");
  };
  const teacherLogIn = () => {
    navigate("/sign-in-teacher");
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMenu />}
        alignSelf="flex-end"
        color="green.800"
        bg="white"
        _hover={{ bg: "blue.400", color: "white" }}
        display={{ base: "flex", md: "none" }}
      />
      <MenuList>
        <MenuItem onClick={studentLogIn} icon={<AiOutlineLogin />}>
          Student Sign In
        </MenuItem>

        <MenuItem onClick={teacherLogIn} icon={<MdOutlineLogin />}>
          Teacher Sign In
        </MenuItem>

        <Link
          to="/"
          onClick={() => {
            scroll.scrollTo(700);
          }}
        >
          <MenuItem icon={<FiPhoneCall />}>Contact Us</MenuItem>
        </Link>
        <MenuItem onClick={downloadPdf} icon={<BsFileEarmarkPdfFill />}>
          DownLoad Prospectors
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MobileNav;
