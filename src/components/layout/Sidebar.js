
import { useAuth } from "hooks/auth";
import { PROTECTED, USERS } from "lib/routes";
import { Link } from "react-router-dom";
import Avatar from "components/profile/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading...";

  return (
    // <Stack align="center" spacing="5" my="8">
    //   <Avatar user={user} />
    //   <Code>@{user.username}</Code>
    //   <Button
    //     colorScheme="teal"
    //     w="full"
    //     as={Link}
    //     to={`${PROTECTED}/profile/${user.id}`}
    //   >
    //     Edit Profile
    //   </Button>
    // </Stack>
    <>
     <div className="flex flex-col items-center space-y-5 my-8">
      <Avatar user={user} />
      <code className="text-teal-500">@{user.username}</code>
      <Link
        to={`${PROTECTED}/profile/${user.id}`}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
      >
        Edit Profile
      </Link>
    </div>
    </>
  );
}

export default function Sidebar() {
  return (
    // <Box
    //   px="6"
    //   height="100vh"
    //   w="100%"
    //   maxW="300px"
    //   borderLeft="1px solid"
    //   borderLeftColor="teal.100"
    //   position="sticky"
    //   top="16"
    //   display={{ base: "none", md: "block" }}
    // >
    //   <ActiveUser />
    //   <Box align="center">
    //     <Box as="ul" borderBottom="2px solid" borderColor="teal.200" />
    //     <Button
    //       variant="outline"
    //       colorScheme="teal"
    //       as={Link}
    //       to={USERS}
    //       mt="4"
    //       size="sm"
    //     >
    //       ALL USERS
    //     </Button>
    //   </Box>
    // </Box>
    <>
     <div className="px-6 h-screen w-full max-w-300 border-l border-teal-100 sticky top-16 hidden md:block">
      <ActiveUser />
      <div className="flex flex-col items-center">
        <ul className="border-b-2 border-teal-200" />
        <Link
          to={USERS}
          className="mt-4 text-teal-500 hover:text-teal-600 border border-teal-500 hover:bg-teal-500 hover:text-white py-2 px-4 rounded-sm text-sm"
        >
          ALL USERS
        </Link>
      </div>
    </div>
    </>
  );
}
