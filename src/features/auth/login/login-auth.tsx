import {Button, Field, Heading, Input, Link, Stack, Text} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {loginSchema, loginSchemaDTO} from "@/utils/schema/auth-schema.ts"
import {zodResolver} from "@hookform/resolvers/zod"
import {useNavigate} from "react-router-dom";
import dummyUser from "@/features/auth/utils/dummy/user.json"
import {toaster} from "@/components/ui/toaster.tsx";

export default function LoginAuth() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm<loginSchemaDTO>({
        mode: "onChange",
        resolver: zodResolver(loginSchema)
    })
    const navigate = useNavigate();

    function onSubmit(data: loginSchemaDTO) {
        const userEmail = dummyUser.email === watch('email')

        if (!userEmail) {
            return toaster.create({
                title: "Email Not Found",
                type: "error"
            })
        }
        const userPassword = dummyUser.password === watch('password')
        if (!userPassword) {
            return toaster.create({
                title: "Password Wrong",
                type: "error"
            })
        }
        toaster.create({
            title: "Login Success",
            type: "success"
        })
        setTimeout(() => {
            navigate({pathname: "/"})
        }, 1000)
        console.log(data)
    }

    return (
        <Stack width="md" gap="7" mt="20">
            <Stack>
                <Heading size="5xl" color="#04a41f">circle</Heading>
                <Heading size="3xl">Login to Circle</Heading>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <Field.Root invalid={!!errors.email?.message}>
                        <Input placeholder="Email" size="xl" {...register('email')} rounded="lg"/>
                        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={!!errors.password?.message}>
                        <Input placeholder="Password" size="xl" type="password" {...register('password')}
                               rounded="lg"/>
                        <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                    </Field.Root>
                    <Link href="/forgot-password" color="green" fontWeight="medium" alignSelf="end">
                        Forgot Password?
                    </Link>
                    <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='2xl'>Login</Button>
                    <Text>
                        Don't have an account yet? <Link href="#" color="green" fontWeight="medium">Create
                        Account</Link>
                    </Text>
                </Stack>
            </form>
        </Stack>

    )
        ;
}