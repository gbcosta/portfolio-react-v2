import React from "react";
import { Navbar } from "./navbar";
import { About } from "./about";
import { Me } from "./me";
import { HomeDivider } from "./homeDivider";
import { Flex, Spacer, Text, Box, Grid } from "@chakra-ui/react";
import { palette } from "../util/utils";
import { Skills } from "./skills";
import { ProjectCard } from "./projectCard";
import { Projects } from "./projects";
import { Footer } from "./footer";
export const Home = () => {
  return (
    <Box sx={{ bakcgroundColor: palette.backgroundColor }}>
      <Navbar></Navbar>
      <Grid
        mt={12}
        templateRows={{ xl: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{ xl: "repeat(2, 1fr)", md: "repeat(1, 1fr )" }}
        backgroundColor={palette.backgroundColor}
        gap={8}
      >
        <About></About>
        <Me></Me>
      </Grid>
      <HomeDivider delay={1.8} />
      <Skills />
      <HomeDivider delay={3.8} />
      <Projects />
      <Footer />
    </Box>
  );
};
