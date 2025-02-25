import { Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

type FormInputs = {
  content: string;
  imageContent: FileList;
};
export default function InputContent({
  register,
}: {
  register: UseFormRegister<FormInputs>;
}) {
  return (
    <Input
      placeholder="What is Happening?!"
      variant="flushed"
      p="4"
      textStyle="lg"
      minW="xs"
      {...register("content")}
      borderBottom="none"
      _focus={{ borderBottom: "none", boxShadow: "none" }}
    />
  );
}
