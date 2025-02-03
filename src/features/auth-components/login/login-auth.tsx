import {Button, Heading, Input, Link, Stack, Text} from "@chakra-ui/react";
import {Field} from "@/components/ui/field"

export default function LoginAuth() {
    return (

        <Stack width="md" gap="7" mt="20">
            <Stack>
                <Heading size="5xl" color="#04a41f">circle</Heading>
                <Heading size="3xl">Login to Circle</Heading>
            </Stack>
            <Stack>
                <Field>
                    <Input placeholder="Email/Username" size="xl" rounded="lg"/>
                </Field>
                <Field>
                    <Input placeholder="Password" size="xl" rounded="lg"/>
                </Field>
                <Link href="#" color="green" fontWeight="medium" alignSelf="end">
                    Forgot Password?
                </Link>
                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='2xl'>Login</Button>
                <Text>
                    Don't have an account yet? <Link href="#" color="green" fontWeight="medium">Create
                    Account</Link>
                </Text>
            </Stack>
        </Stack>
    );
}