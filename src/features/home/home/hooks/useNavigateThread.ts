import { useAuthStore } from "@/store/useAuth";
import { useNavigate } from "react-router-dom";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";

export default function useNavigateThread(thread: ThreadDetails) {
  const userLogin = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  function onClickCard() {
    navigate(`/detail-status/${thread.id}`);
  }

  function onClickAvatar() {
    if (thread.user.id === userLogin.id) {
      return navigate("/profile");
    }
    navigate(`/profile-user/${thread.user.id}`);
  }
  return { onClickAvatar, onClickCard };
}
