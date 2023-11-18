import {
  Box,
  ChakraProvider,
  Checkbox,
  Container,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
function DaftarData() {
  return (
    <ChakraProvider>
      <Heading
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"20px"}
        paddingBottom={"10px"}
      >
        Chores Todo List
      </Heading>
      <Container display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Checkbox border={"green"}>Checkbox 0</Checkbox>{" "}
          <DeleteIcon
            border={"solid red "}
            padding={"10px"}
            fontSize={"40px"}
            borderRadius={"8px"}
            color={"red"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Checkbox border={"green"}> Checkbox 1</Checkbox>{" "}
          <DeleteIcon
            border={"solid red"}
            padding={"10px"}
            fontSize={"40px"}
            borderRadius={"8px"}
            color={"red"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Checkbox border={"green"}>Checkbox 2</Checkbox>{" "}
          <DeleteIcon
            border={"solid red"}
            padding={"10px"}
            fontSize={"40px"}
            borderRadius={"8px"}
            color={"red"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Checkbox border={"green"}>Checkbox 3</Checkbox>{" "}
          <DeleteIcon
            border={"solid red"}
            padding={"10px"}
            fontSize={"40px"}
            borderRadius={"8px"}
            color={"red"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Checkbox border={"green"}>Checkbox 4</Checkbox>{" "}
          <DeleteIcon
            border={"solid red"}
            padding={"10px"}
            fontSize={"40px"}
            borderRadius={"8px"}
            color={"red"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"10px"}
        >
          <Checkbox border={"green"}>Checkbox 5</Checkbox>{" "}
          <DeleteIcon
            border={"solid red"}
            padding={"10px"}
            fontSize={"40px"}
            borderRadius={"8px"}
            color={"red"}
          />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default DaftarData;
