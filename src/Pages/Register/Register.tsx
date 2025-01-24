import {Button, Flex, Heading, Input, Link, Stack, Text} from "@chakra-ui/react";
import {Field} from "@/components/ui/field"

export default function RegisterAuth() {
    return (
        <Flex height="100vh" bg="#1c1c1d" justify="center">
            <Stack width="md" gap="7" mt="20">
                <Stack>
                    <Heading size="5xl" color="#04a41f">circle</Heading>
                    <Heading size="3xl">Create account Circle</Heading>
                </Stack>
                <Stack>
                    <Field>
                        <Input placeholder="Full Name" required size="xl" rounded="lg"/>
                    </Field>
                    <Field>
                        <Input placeholder="Email" size="xl" rounded="lg"/>
                    </Field>
                    <Field>
                        <Input placeholder="Password" size="xl" rounded="lg"/>
                    </Field>
                    <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='2xl'>Create</Button>
                    <Text>
                        Already have an account? <Link href="#" color="green" fontWeight="medium">Login</Link>

                    </Text>
                </Stack>
            </Stack>
        </Flex>
    );
}