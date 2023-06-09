
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import Avatar from "components/profile/Avatar";

export default function User({ user }) {
  const { id, username } = user;

  return (
    // <VStack
    //   bg="gray.100"
    //   shadow="sm"
    //   rounded="md"
    //   textAlign="center"
    //   p="4"
    //   spacing="3"
    // >
    //   <Avatar user={user} />
    //   <Code>@{username}</Code>
    //   <Link>
    //     <Button
    //       as={Link}
    //       to={`${PROTECTED}/profile/${id}`}
    //       size="sm"
    //       variant="link"
    //       colorScheme="teal"
    //     >
    //       View Profile
    //     </Button>
    //   </Link>
    // </VStack>
    <>
    <div className="bg-gray-100 shadow-sm rounded-md text-center p-4 space-y-3">
  <Avatar user={user} />
  <code className="text-lg font-mono">@{username}</code>
  <Link to={`${PROTECTED}/profile/${id}`}>
    <a className="inline-block py-2 px-4 text-sm font-medium text-teal-500 hover:text-teal-600">
      View Profile
    </a>
  </Link>
</div>
</>
  );
}
