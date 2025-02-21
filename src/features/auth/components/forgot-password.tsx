import {Button, Field, Heading, Input, Stack} from "@chakra-ui/react";
import {zodResolver} from "@hookform/resolvers/zod";
import {forgotPasswordDTO, forgotPasswordSchema} from "@/utils/schema/auth-schema.ts";
import {useForm} from "react-hook-form";

export default function ForgotPassword() {
    const {register, formState: {errors}} = useForm<forgotPasswordDTO>({
        mode: "onChange",
        resolver: zodResolver(forgotPasswordSchema)
    })

    return (
        <Stack width="md" gap="7" mt="20">
            <Stack>
                <Heading size="5xl" color="#04a41f">circle</Heading>
                <Heading size="3xl">Forgot Password</Heading>
            </Stack>
            <Stack gap="7">
                <Field.Root invalid={!!errors.email?.message}>
                    <Input placeholder="Email" size="xl" {...register('email')} rounded="lg"/>
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>
                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='xl'>Send
                    Instruction</Button>
            </Stack>
        </Stack>
    );
}