import {Flex} from "@chakra-ui/react";
import {ReactNode} from "react";

interface LayoutPagesProps {
    children: ReactNode;
}

export default function LayoutMain({children}: LayoutPagesProps) {
    return (
        <Flex height="100vh" width="100vw" bgColor="black" overflowY="auto">
            {children}
        </Flex>
    )
}