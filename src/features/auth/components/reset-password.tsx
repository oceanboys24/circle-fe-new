import {
  Button,
  Field,
  Heading,
  Input,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import useResetPassword from "../hooks/useResetPassword";

export default function ResetPassword() {
  const { handleSubmit, onSubmit, errors, isPending, register } =
    useResetPassword();
  return (
    <Stack width="md" gap="7" mt="20">
      <Stack>
        <Heading size="5xl" color="#04a41f">
          circle
        </Heading>
        <Heading size="3xl">Reset Password</Heading>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4">
          <Field.Root invalid={!!errors.newPassword?.message}>
            <Input
              placeholder="Password"
              size="xl"
              {...register("newPassword")}
              type="password"
              rounded="lg"
            />
            <Field.ErrorText>{errors.newPassword?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.confirmPassword?.message}>
            <Input
              placeholder="Retype Password"
              size="xl"
              {...register("confirmPassword")}
              type="password"
              rounded="lg"
            />
            <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
          </Field.Root>
          <Button
            type="submit"
            size="xl"
            colorPalette="green"
            rounded="4xl"
            fontSize="xl"
          >
            {isPending ? <Spinner /> : "Create New Password"}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
