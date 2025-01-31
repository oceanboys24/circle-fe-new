import {Flex, Input} from "@chakra-ui/react";
import {InputGroup} from "@/components/ui/input-group.tsx";

import {CloseButton} from "@/components/ui/close-button.tsx";
import {TbUserSearch} from "react-icons/tb";

export default function SearchPages() {
    return (
        <Flex direction="column" p="4" gap="4" w="full">
            <InputGroup
                startElement={<TbUserSearch size="25"/>}
                endElement={<CloseButton size={"xs"}/>}
            >
                <Input placeholder="Search your friends" p="5" fontSize="md" rounded="full"/>
            </InputGroup>
        </Flex>
    )
}