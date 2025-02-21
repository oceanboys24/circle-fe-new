import {Button, Field, Heading, Input, Stack} from "@chakra-ui/react";
import {resetPasswordDTO, resetPasswordSchema} from "@/utils/schema/auth-schema.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export default function ResetPassword() {
    const {register, formState: {errors}} = useForm<resetPasswordDTO>({
        resolver: zodResolver(resetPasswordSchema),
        mode: "onChange"
    })
    return (
        <Stack width="md" gap="7" mt="20">
            <Stack>
                <Heading size="5xl" color="#04a41f">circle</Heading>
                <Heading size="3xl">Reset Password</Heading>
            </Stack>
            <Stack gap="4">
                <Field.Root invalid={!!errors.password?.message}>
                    <Input placeholder="Password" size="xl" {...register('password')} type="password" rounded="lg"/>
                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                </Field.Root>
                <Field.Root invalid={!!errors.confirmPassword?.message}>
                    <Input placeholder="Retype Password" size="xl" {...register('confirmPassword')} type="password"
                           rounded="lg"/>
                    <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
                </Field.Root>
                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='xl'>Create New
                    Password</Button>
            </Stack>
        </Stack>
    );
}