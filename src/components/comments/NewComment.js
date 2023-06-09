
import Avatar from "components/profile/Avatar";
import { useAuth } from "hooks/auth";
import { useAddComment } from "hooks/comments";
import { useForm } from "react-hook-form";

export default function NewComment({ post }) {
  const { id: postID } = post;
  const { user, isLoading: authLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: user?.id,
  });

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return "Loading...";

  return (
    // <Box maxW="600px" mx="auto" py="6">
    //   <Flex padding="4">
    //     <Avatar user={user} size="sm" />
    //     <Box flex="1" ml="4">
    //       <form onSubmit={handleSubmit(handleAddComment)}>
    //         <Box>
    //           <Input
    //             size="sm"
    //             variant="flushed"
    //             placeholder="Write comment..."
    //             autoComplete="off"
                // {...register("text", { required: true })}
    //           />
    //         </Box>
    //         <Flex pt="2">
    //           <Button
    //             isLoading={commentLoading || authLoading}
    //             type="submit"
    //             colorScheme="teal"
    //             size="xs"
    //             ml="auto"
    //           >
    //             Add Comment
    //           </Button>
    //         </Flex>
    //       </form>
    //     </Box>
    //   </Flex>
    // </Box>
    <>
      <div className="max-w-600px mx-auto py-6">
      <div className="p-4 flex">
        <div className="bg-gray-200 rounded-full w-8 h-8"></div>
        <div className="flex-1 ml-4">
          <form onSubmit={handleSubmit(handleAddComment)}>
            <div>
              <input
                className="w-full px-2 py-1 text-sm bg-transparent border-b border-gray-300 focus:outline-none"
                type="text"
                placeholder="Write comment..."
                autoComplete="off"
                {...register("text", { required: true })}
              />
            </div>
            <div className="pt-2">
              <button
                className={`bg-teal-500 text-white px-4 py-2 text-xs ml-auto ${
                  commentLoading || authLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                type="submit"
                disabled={commentLoading || authLoading}
              >
                {commentLoading || authLoading ? 'Adding Comment' : 'Add Comment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
