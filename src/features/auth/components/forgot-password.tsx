import {
  Button,
  Field,
  Heading,
  Input,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import useForgotPassword from "../hooks/useForgotPassword";

export default function ForgotPassword() {
  const { errors, register, onSubmit, handleSubmit, isPending } =
    useForgotPassword();
  console.log(register('email'));
  return (
    <Stack width="md" gap="7" mt="20">
      <Stack>
        <Heading size="5xl" color="#04a41f">
          circle
        </Heading>
        <Heading size="3xl">Forgot Password</Heading>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="7">
          <Field.Root invalid={!!errors.email?.message}>
            <Input
              placeholder="Email"
              size="xl"
              {...register("email")}
              rounded="lg"
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>
          <Button
            type="submit"
            size="xl"
            colorPalette="green"
            rounded="4xl"
            fontSize="xl"
            disabled={isPending}
          >
            {isPending ? <Spinner /> : "Send Intructions"}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
