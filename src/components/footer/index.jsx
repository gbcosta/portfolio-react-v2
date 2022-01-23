import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Flex
      position={"absolute"}
      sx={{
        width: "100%",
        height: "2.5rem",
        bottom: 0,
        left: 0,
        backgroundColor: "#292929",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text color={"white"} fontFamily={"Rokkitt"} fontSize={"1.2rem"}>
        @ ©2021 G.C. Santos. All rights reserved.
      </Text>
    </Flex>
  );
};
