
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink, Link } from "react-router-dom";
import { useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    // <Flex
    //   shadow="sm"
    //   pos="fixed"
    //   width="full"
    //   borderTop="6px solid"
    //   borderTopColor="teal.400"
    //   height="16"
    //   zIndex="3"
    //   justify="center"
    //   bg="white"
    // >
    //   <Flex px="4" w="full" align="center" maxW="1200px">
    //     <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
    //       Home
    //     </Link>
    //     <Button
    //       ml="auto"
    //       colorScheme="teal"
    //       size="sm"
    //       onClick={logout}
    //       isLoading={isLoading}
    //     >
    //       Logout
    //     </Button>
    //   </Flex>
    // </Flex>
    <>
     <div className="shadow-sm fixed w-full border-t-4 border-teal-400 h-16 z-3 bg-white">
      <div className="px-4 w-full flex items-center max-w-7xl mx-auto">
        <Link
          className="text-teal-500 font-bold"
          as={RouterLink}
          to={DASHBOARD}
        >
          Home
        </Link>
        <button
          className="ml-auto text-teal-500 bg-teal-200 px-4 py-2 rounded text-sm"
          onClick={logout}
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : 'Logout'}
        </button>
      </div>
    </div>
    </>
  );
}
