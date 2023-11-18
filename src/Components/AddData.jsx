import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

function AddData() {
  return (
    <ChakraProvider>
      <Heading paddingTop={"10px"} display={"flex"} justifyContent={"center"}>
        Done:0
      </Heading>
      <FormControl padding={"100px"}>
        <FormLabel>Add todo</FormLabel>
        <Input type="text" />
        <Button marginTop={"20px"} backgroundColor={"lightblue"}>
          ADD TASK
        </Button>
      </FormControl>
    </ChakraProvider>
  );
}

export default AddData;
