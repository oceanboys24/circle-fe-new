import { Flex, GridItem, Image, Input, Spinner } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group.tsx";
import SearchLogoOutine from "@/assets/user-search-outline.svg";
import { useDebounce } from "use-debounce";
import SearchCard from "./search-card";
import MenuSearch from "./menu";
import { useEffect, useState } from "react";
import { searchUserDatas } from "@/utils/dummy-data/userSearch";
import NotFoundSearch from "./not-found-search";
import { useQuery } from "@tanstack/react-query";
import { SearchUser } from "./types/user-search";
import { axiosInstance } from "@/config/axios";

export default function SearchPages() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchTextDebounce] = useDebounce(searchText, 500);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery<SearchUser[]>({
    queryKey: ["Search-Users"],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/v1/auth/users?q=${searchTextDebounce}`
      );
      return response.data;
    },
    enabled: !!searchTextDebounce,
  });

  useEffect(() => {
    refetch();
  }, [searchTextDebounce, refetch]);

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
          ) : (
            <>
              {users?.map((user) => (
                <SearchCard searchUserData={user} key={user.id} />
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </GridItem>
  );
}
