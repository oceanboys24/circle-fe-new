import {Button, Heading, Input, Link, Stack, Text} from "@chakra-ui/react";
import {Field} from "@/components/ui/field"

export default function ForgotPassword() {
    return (
        <Stack width="md" gap="7" mt="20">
            <Stack>
                <Heading size="5xl" color="#04a41f">circle</Heading>
                <Heading size="3xl">Forgot Password</Heading>
            </Stack>
            <Stack gap="7">
                <Field>
                    <Input placeholder="Email" size="xl" rounded="lg"/>
                </Field>
                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='xl'>Send
                    Instruction</Button>
                <Text>
                    Already have account? <Link href="#" color="green" fontWeight="medium">Login</Link>
                </Text>
            </Stack>
        </Stack>
    );
}