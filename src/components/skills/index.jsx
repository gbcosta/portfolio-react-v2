import React from "react";
import { Flex, Text, Grid, Box, ChakraProvider } from "@chakra-ui/react";
import { palette } from "../../util/utils";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiCplusplus,
  SiMongodb,
} from "react-icons/si";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import {
  GridMotion,
  skillsAnimation,
  skillsAnimationItens,
  FlexMotion,
  TextMotion,
  textSkillAnimation,
} from "../animations";
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "45em",
  lg: "62em",
  xl: "110em",
});
const theme = extendTheme({ breakpoints });

const iconSx = {
  color: "#24dc20",
  fontSize: { base: "8rem", md: "12rem" },
  justifyContent: "center",
};
export const Skills = () => {
  return (
    <Flex
      backgroundColor={palette.backgroundColor}
      flexDir={"column"}
      alignItems={"center"}
      mt={12}
    >
      <TextMotion
        color={"#ddd"}
        fontSize={"6xl"}
        fontFamily={"Rokkitt"}
        fontWeight={"bold"}
        id="skills"
        variants={textSkillAnimation}
        initial={"hidden"}
        animate={"visible"}
      >
        Skills
      </TextMotion>
      <ChakraProvider theme={theme}>
        <GridMotion
          templateRows={{
            base: "repeat(3,1fr)",
            lg: "repeat(2, 1fr)",
            xl: "1fr",
          }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={20}
          mt={{ base: 8, md: 20 }}
          variants={skillsAnimation}
          initial="hidden"
          animate="visible"
        >
          <FlexMotion sx={iconSx} variants={skillsAnimationItens}>
            <SiJavascript />
          </FlexMotion>
          <FlexMotion sx={iconSx} variants={skillsAnimationItens}>
            <SiTypescript />
          </FlexMotion>
          <FlexMotion sx={iconSx} variants={skillsAnimationItens}>
            <SiNodedotjs />
          </FlexMotion>
          <FlexMotion sx={iconSx} variants={skillsAnimationItens}>
            <SiReact />
          </FlexMotion>
          <FlexMotion sx={iconSx} variants={skillsAnimationItens}>
            <SiCplusplus />
          </FlexMotion>
          <FlexMotion sx={iconSx} variants={skillsAnimationItens}>
            <SiMongodb />
          </FlexMotion>
        </GridMotion>
      </ChakraProvider>
    </Flex>
  );
};
