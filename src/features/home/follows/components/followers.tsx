import { Avatar } from "@/components/ui/avatar";
import { axiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/useAuth";
import { Button, Flex, Spinner,Text} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function FollowersTab() {
    const userLogin = useAuthStore((set) => set.user);
    const { data: dataFollowers, isLoading } = useQuery({
      queryKey: ["FollowersTab"],
      queryFn: async () => {
        const response = await axiosInstance.get(
          `/v1/follows/followers/${userLogin.id}`
        );
        return response.data.data;
      },
    });
  
    {
      isLoading ?? <Spinner />;
    }

    console.log(dataFollowers)
  
    return (
     
      <Flex direction="column" p="4" gap="4">
        {dataFollowers?.map((followers : any, index : number) => (
          <Flex key={index} direction="column" gap="3">
            <Flex gap="3" justifyContent="space-between">
              <Avatar src={followers.avatarUrl || ""} size="xl" />
              <Flex direction="column" marginEnd="auto">
              <Text>{followers.fullName} </Text>
                <Text textStyle="xs" color="#5a5a5b">
                  @{followers.userName}
                </Text>
              </Flex>
             
            </Flex>
          </Flex>
        ))}
      </Flex>
    );
  }
  