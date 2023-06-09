
import { useUsers } from "hooks/users";
import User from "./User";

export default function Users() {
  const { users, isLoading } = useUsers();

  if (isLoading) return "Loading...";

  return (
    // <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
    //   {users?.map((user) => (
    //     <User key={user.id} user={user} />
    //   ))}
    // </SimpleGrid>
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 px-10 py-6">
  {users?.map((user) => (
    <User key={user.id} user={user} />
  ))}
</div>

    </>
  );
}
