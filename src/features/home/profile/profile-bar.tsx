import {Flex, GridItem} from "@chakra-ui/react";
import TabsUserProfile from "@/features/home/profile/components/tabs";
import Profile from "@/features/home/profile/components/profile.tsx";


export default function ProfileBar() {
    return (
        <GridItem colSpan={{base : 4, md:2}} overflow={"hidden"}>
            <Profile/>
            <TabsUserProfile/>
        </GridItem>
    )
}
