import { Flex, Spacer, Text, Box } from "@chakra-ui/react";

export const NavbarItem = (props) => {
  return (
    <Text
      fontSize={"1.37rem"}
      sx={{
        color: "#DEDEDE",
        mr: 6,
        cursor: "pointer",
        _hover: { color: "#24DC20" },
        transition: "color 0.2s ease-out",
      }}
      display={props.display}
    >
      <a href={props.href}>{props.children}</a>
    </Text>
  );
};

export const IconButton = (props) => {
  const sx = { mr: 3, cursor: "pointer", ...props.sx };
  return (
    <Box
      display={props.display}
      sx={sx}
      onClick={() => {
        window.open(props.link);
      }}
    >
      {props.children}
    </Box>
  );
};
