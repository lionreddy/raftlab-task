
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function Avatar({ user, size = "xl", overrideAvatar = null }) {
  return (
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
