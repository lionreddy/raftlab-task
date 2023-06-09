
import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "components/profile/UsernameButton";

export default function Header({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <>
<div className="flex border-b-2 border-teal-100 p-3 bg-gray-50">
  <div className="w-20">
    <div className="rounded-full overflow-hidden">
      <Avatar user={user} size="sm" />
    </div>
  </div>

  <div className="flex-grow ml-4">
    <UsernameButton user={user} />
    <p className="text-sm text-gray-500">
      {formatDistanceToNow(date)} ago
    </p>
  </div>
</div>

</>
  );
}
