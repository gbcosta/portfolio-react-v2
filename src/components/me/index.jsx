import React from "react";
import id from "../../images/id.png";
import { Flex, Box, Image } from "@chakra-ui/react";
import { palette } from "../../util/utils";
import { FlexMotion, meAnimation } from "../../components/animations";
export const Me = () => {
  return (
    <FlexMotion
      sx={{
        justifyContent: "center",
      }}
      variants={meAnimation}
      initial="hidden"
      animate="visible"
    >
      <Box
        sx={{
          maxWidth: { base: "300px", xl: "400px" },
          maxHeight: { base: "300px", xl: "400px" },
        }}
      >
        <Image backgroundColor={"#3BB738"} borderRadius="full" src={id}></Image>
      </Box>
    </FlexMotion>
  );
};
