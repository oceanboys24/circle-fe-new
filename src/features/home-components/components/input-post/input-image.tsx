import {Textarea} from "@chakra-ui/react";

export default function InputPostArea() {
    return (
        <Textarea placeholder="What is Happening?!" variant="flushed" p="4" textStyle="lg" minW="xs" flex="1 1 auto"
                  borderBottom="none" autoresize maxH="200px"
                  _focus={{borderBottom: "none", boxShadow: "none"}} overflow="hidden"
        />
    )
}