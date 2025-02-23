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
import useRegister from "../hooks/useRegister";

export default function RegisterAuth() {
  const { handleSubmit, onSubmit, errors, isPending, register } = useRegister();
  return (
    <Stack width="md" gap="7" mt="20">
      <Stack>
        <Heading size="5xl" color="#04a41f">
          circle
        </Heading>
        <Heading size="3xl">Create account Circle</Heading>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4">
          <Field.Root invalid={!!errors.fullName?.message}>
            <Input
              placeholder="Full Name"
              size="xl"
              {...register("fullName")}
              rounded="lg"
            />
            <Field.ErrorText>{errors.fullName?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.userName?.message}>
            <Input
              placeholder="Username"
              size="xl"
              {...register("userName")}
              rounded="lg"
            />
            <Field.ErrorText>{errors.userName?.message}</Field.ErrorText>
          </Field.Root>
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
              {...register("password")}
              type="password"
              rounded="lg"
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>
          <Button
            type="submit"
            size="xl"
            colorPalette="green"
            rounded="4xl"
            fontSize="2xl"
            disabled={isPending}
          >
            {isPending ? <Spinner /> : "Create"}
          </Button>
          <Text>
            Already have an account?{" "}
            <Link href="/login" color="green" fontWeight="medium">
              Login
            </Link>
          </Text>
        </Stack>
      </form>
    </Stack>
  );
}
