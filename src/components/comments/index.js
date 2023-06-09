
import Post from "components/post";
import { usePost } from "hooks/posts";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";
import CommentList from "./CommentList";

export default function Comments() {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  if (isLoading) return "Loading...";

  return (
    <div className="flex flex-col items-center pt-50">
  <Post post={post} />
  <NewComment post={post} />
  <CommentList post={post} />
</div>
  );
}
