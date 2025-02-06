import {Flex, GridItem, Input, Text} from "@chakra-ui/react";
import {InputGroup} from "@/components/ui/input-group.tsx";


import { LuSearch } from "react-icons/lu";

export default function SearchPages() {
    return (
        <GridItem colSpan={2}>
           <Flex direction="column" h="full">
            <Flex w="full" p="5" >
            <InputGroup flex="1" startElement={<LuSearch />}>
            <Input bgColor="#3F3F3F" rounded="2xl" placeholder="Search Your Friend"/>
            </InputGroup>
            </Flex>
            <Flex flexGrow="1" justifyContent="center" alignItems="center" direction="column">
                <Text fontWeight="semibold" fontSize="2xl">
                    No results for "ambatukam"
                </Text>
                <Text maxW="300px" color='#909090' textAlign="center">
                    Try searching for something else or check the spelling of what you typed
                </Text>
            </Flex>
           </Flex>
        </GridItem>
    )
}