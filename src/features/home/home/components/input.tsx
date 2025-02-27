import { Input } from "@chakra-ui/react";


export default function InputContent() {
  return (
    <Input
      placeholder="What is Happening?!"
      variant="flushed"
      p="4"
      textStyle="lg"
      minW="xs"
      
      borderBottom="none"
      _focus={{ borderBottom: "none", boxShadow: "none" }}
    />
  );
}
