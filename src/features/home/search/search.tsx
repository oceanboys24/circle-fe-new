import { Flex, GridItem, Image, Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group.tsx";
import SearchLogoOutine from "@/assets/user-search-outline.svg";
import { useDebounce } from "use-debounce";
import SearchCard from "./search-card";
import MenuSearch from "./menu";
import { useState } from "react";
import { searchUserDatas } from "@/utils/dummy-data/userSearch";
import NotFoundSearch from "./not-found-search";

export default function SearchPages() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchTextDebounce] = useDebounce(searchText, 1000);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  const filteredUser = searchUserDatas.filter((searchUserData) => 
    searchUserData.fullName
    .toLowerCase()
    .trim()
    .includes(searchTextDebounce!.toLowerCase().trim())
  )
  console.log(filteredUser)
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
          { filteredUser.length > 0 ? (
            filteredUser.map((searchUserData) => (
              <SearchCard
                searchUserData={searchUserData}
                key={searchUserData.id}
              />
            ))
          ) : (
            <NotFoundSearch text={searchText as string} />
          )}
        </Flex>
      </Flex>
    </GridItem>
  );
}
