import {
  Button,
  Field,
  Heading,
  Input,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import useLoginAuth from "../hooks/useLogin";

export default function LoginAuth() {
  const { handleSubmit, triggerLogin, errors, register, isPending } =
    useLoginAuth();

  return (
    <Stack width="md" gap="7" mt="20">
      <Stack>
        <Heading size="5xl" color="#04a41f">
          circle
        </Heading>
        <Heading size="3xl">Login to Circle</Heading>
      </Stack>
      <form onSubmit={handleSubmit(triggerLogin)}>
        <Stack>
          <Field.Root invalid={!!errors.email?.message}>
            <Input
              placeholder="Email"
              size="xl"
              {...register("email")}
              rounded="lg"
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.password?.message}>
            <Input
              placeholder="Password"
              size="xl"
              type="password"
              {...register("password")}
              rounded="lg"
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>
          <Link
            href="/forgot-password"
            color="green"
            fontWeight="medium"
            alignSelf="end"
          >
            Forgot Password?
          </Link>
          <Button
            type="submit"
            size="xl"
            colorPalette="green"
            rounded="4xl"
            fontSize="2xl"
            disabled={isPending}
          >
            {isPending ? <Spinner /> : "Login"}
          </Button>
          <Text>
            Don't have an account yet?{" "}
            <Link href="/register" color="green" fontWeight="medium">
              Create Account
            </Link>
          </Text>
        </Stack>
      </form>
    </Stack>
  );
}
