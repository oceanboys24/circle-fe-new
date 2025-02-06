import {Heading} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

export default function HeadingSideBarLeft() {
    return (
        <NavLink to="/">
            <Heading size="7xl" color="#04a41f" textAlign="center">circle</Heading>
        </NavLink>

    )
}
