
import Post from "./index";

export default function PostsList({ posts }) {
  return (
    <>
    <div className="px-4 text-center">
      {posts?.length === 0 ? (
        <p className="text-center text-xl">
          There are No posts yet....
        </p>
      ) : (
        posts?.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
    </>
  );
}
