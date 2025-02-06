import {Input, Textarea} from "@chakra-ui/react";

export default function InputPostArea() {
    return (
        <Input placeholder="What is Happening?!" variant="flushed" p="4" textStyle="lg" minW="xs" 
                  borderBottom="none"
                  _focus={{borderBottom: "none", boxShadow: "none"}} 
        />
    )
}