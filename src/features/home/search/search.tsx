import { Flex, GridItem, Image, Input, Spinner, Text } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group.tsx";
import SearchLogoOutine from "@/assets/user-search-outline.svg";
import SearchCard from "./search-card";
import MenuSearch from "./menu";
import useSearch from "./hooks/useSearch";

export default function SearchPages() {
  const { isLoading, filteredUsers, handleChange, searchText } = useSearch();

  return (
    <GridItem colSpan={{ base: 4, md: 2 }}>
      <Flex direction="column">
        <Flex p="5" gap="2">
          <InputGroup
            flex="1"
            startElement={<Image src={SearchLogoOutine} width={"20px"} />}
          >
            <Input
              bgColor="#3F3F3F"
              rounded="2xl"
              placeholder="Search Your Friend"
              _focus={{
                borderColor: "green",
              }}
              onChange={handleChange}
            />
          </InputGroup>
          <Flex>
            <MenuSearch />
          </Flex>
        </Flex>
        <Flex gap={"5"} direction={"column"}>
          {isLoading ? (
            <Spinner />
          ) : searchText.length === 0 ? (
            <Text color="gray.500" textAlign="center">
              Search People
            </Text>
          ) : filteredUsers.length === 0 ? (
            <Text color="gray.500" textAlign="center">
              Not Found {searchText}
            </Text>
          ) : (
            <>
              {filteredUsers.map((user) => (
                <SearchCard searchUserData={user} key={user.id} />
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </GridItem>
  );
}
