import React from "react";
import { Flex, Spacer, Text, useDisclosure, Box } from "@chakra-ui/react";
import Logo from "../../logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarItem, IconButton } from "./styles";
import { palette } from "../../util/utils";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const MobileMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display={{ base: "block", md: "none" }} mr={6}>
      <Box
        backgroundColor={palette.backgroundColor}
        sx={{
          cursor: "pointer",
        }}
      >
        <GiHamburgerMenu
          color="white"
          fontSize={"1.75rem"}
          onClick={onOpen}
        ></GiHamburgerMenu>
      </Box>

      <Drawer
        placement="right"
        isOpen={isOpen}
        onClose={onClose}
        size={"xs"}
        sx={{ backgroundColor: "black" }}
      >
        <DrawerContent>
          <DrawerCloseButton
            sx={{ _focus: { backgroundColor: "none" }, color: "white" }}
          />
          <DrawerBody>
            <Text
              color="white"
              fontFamily={"Rokkitt"}
              fontSize={"1.5rem"}
              mt={8}
              onClick={onClose}
            >
              <a href="#skills">Skils</a>
            </Text>
            <Text
              color="white"
              fontFamily={"Rokkitt"}
              fontSize={"1.5rem"}
              onClick={onClose}
            >
              <a href="#projects">Projects</a>
            </Text>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Box width={30} height={1} backgroundColor={"white"} mt={4}></Box>
            </Flex>
            <Flex pt={4} justifyContent={"center"}>
              <IconButton link={"https://github.com/gbcosta"} mr={0}>
                <BsGithub fontSize={"1.5rem"} color={"white"} />
              </IconButton>
              <IconButton
                sx={{ mr: 0 }}
                link={"https://www.linkedin.com/in/gbcostasantos/"}
              >
                <BsLinkedin fontSize={"1.5rem"} color={"white"} />
              </IconButton>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export const Navbar = () => {
  return (
    <Flex
      sx={{
        backgroundColor: palette.backgroundColor,
        fontFamily: "rokkitt",
        color: "white",
        alignItems: "center",
        pt: 4,
      }}
    >
      <img src={Logo} alt="" style={{ marginLeft: "1rem" }} />
      <Spacer></Spacer>
      <MobileMenu />
      <NavbarItem href="#skills" display={{ base: "none", md: "block" }}>
        Skills
      </NavbarItem>
      <NavbarItem href="#projects" display={{ base: "none", md: "block" }}>
        Projects
      </NavbarItem>
      <IconButton
        display={{ base: "none", md: "block" }}
        link={"https://github.com/gbcosta"}
      >
        <BsGithub fontSize={"1.5rem"} mr={6} />
      </IconButton>
      <IconButton
        sx={{ mr: 6 }}
        display={{ base: "none", md: "block" }}
        link={"https://www.linkedin.com/in/gbcostasantos/"}
      >
        <BsLinkedin fontSize={"1.5rem"} />
      </IconButton>
    </Flex>
  );
};
