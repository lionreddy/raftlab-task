
import { useAuth } from "hooks/auth";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComments } from "hooks/comments";

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const config = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <>
    <div className="flex p-2">
      <div className="flex items-center">
        <button
          onClick={toggleLike}
          disabled={likeLoading || userLoading}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          {isLiked ? (
            <FaHeart className="w-6 h-6" />
          ) : (
            <FaRegHeart className="w-6 h-6" />
          )}
        </button>
        <span className="ml-1">{likes.length}</span>
      </div>
      <div className="flex items-center ml-2">
        <Link
          to={`${PROTECTED}/comments/${id}`}
          className="text-teal-500 hover:text-teal-600 focus:outline-none"
        >
          {comments?.length === 0 ? (
            <FaRegComment className="w-6 h-6" />
          ) : (
            <FaComment className="w-6 h-6" />
          )}
        </Link>
        <span className="ml-1">{comments?.length}</span>
      </div>
      {!userLoading && user.id === uid && (
        <button
          onClick={deletePost}
          disabled={deleteLoading}
          className="ml-auto text-red-500 hover:text-red-600 focus:outline-none"
        >
          <FaTrash className="w-6 h-6" />
        </button>
      )}
    </div>
    </>
  );
}
