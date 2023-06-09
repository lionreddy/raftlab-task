
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function UsernameButton({ user }) {
  return (
    // <Button
    //   as={Link}
    //   to={`${PROTECTED}/profile/${user.id}`}
    //   colorScheme="teal"
    //   variant="link"
    // >
    //   {user.username}
    // </Button>
    <>
    <Link
  to={`${PROTECTED}/profile/${user.id}`}
  className="text-teal-500 hover:text-teal-600 underline"
>
  {user.username}
</Link>
    </>
  );
}
