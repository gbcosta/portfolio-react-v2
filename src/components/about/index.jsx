import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { palette } from "../../util/utils";
import {
  FlexMotion,
  aboutAnimation,
  aboutAnimationItens,
  TextMotion,
} from "../../components/animations";

export const About = () => {
  return (
    <Flex justify={"center"} sx={{ backgroundColor: palette.backgroundColor }}>
      <FlexMotion
        variants={aboutAnimation}
        initial="hidden"
        animate="visible"
        sx={{
          color: "white",
          borderStyle: "solid",
          borderColor: "#24DC20",
          borderWidth: 3,
          backgroundColor: "inherit",
          flexDir: "column",
          textAlign: "left",
          paddingLeft: "1rem",
          pr: "5rem",
          pt: 8,
          pb: 8,
          fontFamily: "Rokkitt",
          justifyContent: "center",
        }}
      >
        <TextMotion
          fontSize={"xl"}
          sx={{ color: "white" }}
          variants={aboutAnimationItens}
        >
          Hi,
        </TextMotion>
        <TextMotion
          fontSize={["5xl", "7xl", "8xl"]}
          fontWeight={"bold"}
          sx={{ color: "white", mt: [-3, -4] }}
          variants={aboutAnimationItens}
        >
          my name is
        </TextMotion>
        <TextMotion
          fontSize={["5xl", "7xl", "8xl"]}
          fontWeight={"bold"}
          sx={{ color: "#24DC20", mt: [-6, -8, -12] }}
          variants={aboutAnimationItens}
        >
          Gabriel
        </TextMotion>
        <TextMotion
          fontSize={["2xl", "3xl"]}
          sx={{ mt: [-4, -6, -8] }}
          variants={aboutAnimationItens}
        >
          Frontend dev
        </TextMotion>
      </FlexMotion>
    </Flex>
  );
};
