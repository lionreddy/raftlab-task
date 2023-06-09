
import { useComments } from "hooks/comments";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const { id } = post;
  const { comments, isLoading } = useComments(id);

  if (isLoading) return "Loading...";

  return (
    // <Box>
    //   {comments.map((comment) => (
    //     <Comment key={comment.id} comment={comment} />
    //   ))}
    // </Box>
    <div className="flex flex-col">
  {/* Iterate over comments array */}
  {comments.map((comment) => (
    <div key={comment.id} className="mb-4">
      <div className="bg-white rounded-lg shadow-md px-4 py-2">
        {/* Render the Comment component */}
        <Comment comment={comment} />
      </div>
    </div>
  ))}
</div>
  );
}
