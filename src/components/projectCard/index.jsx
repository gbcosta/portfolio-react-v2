import React from "react";
import { Flex, Text, Box, Divider, Image } from "@chakra-ui/react";
export const ProjectCard = (props) => {
  return (
    <Flex
      position={"relative"}
      width={{ base: 350, md: 450, xl: 500 }}
      height={{ base: 350, md: 450, xl: 500 }}
      sx={{
        flexDirection: "column",
      }}
      borderRadius={3}
    >
      <Box height={{ base: 250, md: 350, xl: 400 }}>
        <Box
          sx={{
            backgroundImage: props.img,
            backgroundPosition: "center center",
            width: "100%",
            height: "100%",
            _hover: { backgroundPosition: "center 40%" },
            transition: "all 0.3s ease",
            opacity: 0.8,
          }}
        ></Box>
      </Box>
      <Flex
        flexDirection={"column"}
        backgroundColor={"#1b1b1b"}
        flexGrow={1}
        alignItems={"flex-start"}
        textAlign={"left"}
      >
        <Text
          color="#eee"
          zIndex={3000}
          fontFamily={"Rokkitt"}
          fontSize={"1.5rem"}
          ml={4}
          fontWeight={"bold"}
          mt={3}
        >
          {props.children}
        </Text>
        <Divider orientation="vertical" opacity={0} />
        <Text
          color="#eee"
          zIndex={3000}
          fontFamily={"Rokkitt"}
          sx={{
            _hover: { color: "#24DC20" },
            cursor: "pointer",
            transition: "color 0.2s ease-out",
          }}
          ml={4}
          fontSize={"1.2rem"}
          fontWeight={"semibold"}
          mb={1}
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        >
          see more
        </Text>
      </Flex>
    </Flex>
  );
};
