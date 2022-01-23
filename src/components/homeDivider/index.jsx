import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { palette } from "../../util/utils";
import { FlexMotion } from "../animations";
export const HomeDivider = (props) => {
  return (
    <FlexMotion
      justifyContent={"center"}
      backgroundColor={palette.backgroundColor}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: props.delay,
          },
        },
      }}
      initial={"hidden"}
      animate={"visible"}
    >
      <Box
        borderRadius="md"
        height={"0.5rem"}
        mt="4rem"
        width={{ base: "100px", lg: "200px" }}
        backgroundColor={"#24DC20"}
        sx={props.sx}
      ></Box>
    </FlexMotion>
  );
};
