import React from "react";
import { Flex } from "@chakra-ui/react";
import { ProjectCard } from "../projectCard";
import portfolioImg from "../../images/portfolio.png";
import pokemon from "../../images/pokemon.png";
import {
  FlexMotion,
  GridMotion,
  projectAnimationItem,
  projectAnimation,
  TextMotion,
  textProjectAnimation,
} from "../animations";
export const Projects = () => {
  return (
    <Flex flexDirection={"column"} mt={12} pb={20} textAlign={"center"}>
      <TextMotion
        color={"#ddd"}
        fontSize={"6xl"}
        fontFamily={"Rokkitt"}
        fontWeight={"bold"}
        id="projects"
        variants={textProjectAnimation}
        initial={"hidden"}
        animate={"visible"}
      >
        Projects
      </TextMotion>

      <GridMotion
        templateColumns={{ lg: "repeat(2, 1fr)" }}
        gap={8}
        mt={{ base: 8, md: 20 }}
        variants={projectAnimation}
        initial="hidden"
        animate="visible"
      >
        <FlexMotion
          variants={projectAnimationItem}
          justifyContent={{ base: "center", lg: "right" }}
        >
          <ProjectCard
            side={"right"}
            img={portfolioImg}
            link="https://github.com/gbcosta/react-portfolio"
          >
            Portfolio v1 made with React
          </ProjectCard>
        </FlexMotion>
        <FlexMotion
          variants={projectAnimationItem}
          justifyContent={{ base: "center", lg: "left" }}
        >
          <ProjectCard
            side={"left"}
            img={pokemon}
            link="https://github.com/gbcosta/react-pokeApi"
          >
            Pokedex made width React and PokeAPI
          </ProjectCard>
        </FlexMotion>
      </GridMotion>
    </Flex>
  );
};
