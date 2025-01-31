import {Button, Heading, Input, Stack} from "@chakra-ui/react";
import {Field} from "@/components/ui/field"

export default function ResetPassword() {
    return (
        <Stack width="md" gap="7" mt="20">
            <Stack>
                <Heading size="5xl" color="#04a41f">circle</Heading>
                <Heading size="3xl">Reset Password</Heading>
            </Stack>
            <Stack gap="4">
                <Field>
                    <Input placeholder="New Password" size="xl" rounded="lg"/>
                </Field>
                <Field>
                    <Input placeholder="Confirm New Password" size="xl" rounded="lg"/>
                </Field>
                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='xl'>Create New
                    Password</Button>
            </Stack>
        </Stack>
    );
}