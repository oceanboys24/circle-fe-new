import {Flex} from "@chakra-ui/react";
import {ReactNode} from "react";

interface LayoutPagesProps {
    children: ReactNode;
}

export default function LayoutPages({children}: LayoutPagesProps) {
    return (
        <Flex height="100vh" width="100vw" bgColor="black" justify="center">
            {children}
        </Flex>
    )
}