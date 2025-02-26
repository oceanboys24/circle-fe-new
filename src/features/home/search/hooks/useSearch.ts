import { axiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { SearchUser } from "../types/user-search";

export default function useSearch() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchTextDebounce] = useDebounce(searchText, 500);
  const { user } = useAuthStore();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery<SearchUser[]>({
    queryKey: ["Search-Users", searchTextDebounce],
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

  const filteredUsers = users?.filter((u) => u.userName !== user.userName);
  return { isLoading, filteredUsers, handleChange, searchText };
}
