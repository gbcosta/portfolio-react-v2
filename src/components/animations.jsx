import { motion } from "framer-motion";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { ProjectCard } from "./projectCard";
export const meAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.7,
      delay: 1.3,
    },
  },
};

export const aboutAnimationItens = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const aboutAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
      duration: 0.5,
      delay: 0,
    },
  },
};

export const skillsAnimation = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2.2,
      staggerChildren: 0.3,
      duration: 0.0,
      delay: 0,
    },
  },
};

export const skillsAnimationItens = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const projectAnimation = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 4.4,
      staggerChildren: 0.3,
      duration: 0.0,
      delay: 0,
    },
  },
};

export const projectAnimationItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const textSkillAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};

export const textProjectAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 4,
    },
  },
};

export const homeDividerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
      duration: 0.5,
      delay: 0,
    },
  },
};

export const FlexMotion = motion(Flex);
export const TextMotion = motion(Text);
export const GridMotion = motion(Grid);
export const ProjectCardMotion = motion(ProjectCard);
