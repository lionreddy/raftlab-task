
import PostsLists from "components/post/PostsList";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <>
       <div className="max-w-600px mx-auto py-10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">New Post</h2>
          <button
            className={`bg-teal-500 text-white px-4 py-2 ${
              authLoading || addingPost ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={authLoading || addingPost}
          >
            {authLoading || addingPost ? 'Loading' : 'Post'}
          </button>
        </div>
        <TextareaAutosize
          className="mt-5 p-2 w-full resize-none border border-gray-300 rounded"
          placeholder="Create a new post..."
          minRows={3}
          {...register('text', { required: true })}
        />
      </form>
    </div>
    </>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <PostsLists posts={posts} />
    </>
  );
}
