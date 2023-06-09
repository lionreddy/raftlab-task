
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function Avatar({ user, size = "xl", overrideAvatar = null }) {
  return (
    // <ChakraAvatar
    //   as={Link}
    //   to={`${PROTECTED}/profile/${user.id}`}
    //   name={user.username}
    //   size={size}
    //   src={overrideAvatar || user.avatar}
    //   _hover={{ cursor: "pointer", opacity: "0.8" }}
    // />
    <>
    <Link
  to={`${PROTECTED}/profile/${user.id}`}
  // className="flex items-center justify-center"
>
  <img
    src={overrideAvatar || user.avatar}
    alt={user.username}
    className="rounded-full cursor-pointer hover:opacity-80"
    style={{ width: size, height: size }}
  />
</Link>
</>
  );
}
