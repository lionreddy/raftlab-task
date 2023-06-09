import { Link } from "react-router-dom";
import PostsList from "components/post/PostsList";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { format } from "date-fns";
import EditProfile from "./EditProfile";
import { useAuth } from "hooks/auth";
import React, {useState} from "react";
import { useUpdateAvatar } from "hooks/users";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";


export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const {
    setFile,
    updateAvatar,
    isLoading: fileLoading,
    fileURL,
  } = useUpdateAvatar(user?.id);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  if (userLoading) return "Loading...";

  return (
    <>
    <div className="space-y-5">
      <div className="p-4 md:p-6 relative flex items-center">
        <div className="w-24 h-24 md:w-32 md:h-32">
          <img
            src={user.avatar}
            alt={user.username}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {!authLoading && authUser.id === user.id && (
          <button
            className="absolute mb-2 top-6 right-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
            onClick={handleOpenModal} 
          >
            Change avatar
          </button>
        )}

        <div className="ml-10">
          <h2 className="text-2xl">{user.username}</h2>
          <div className="flex space-x-10">
            <p className="text-gray-700 text-sm md:text-lg">
              Posts: {posts.length}
            </p>
            <p className="text-gray-700 text-sm md:text-lg">Likes: todo!</p>
            <p className="text-gray-700 text-sm md:text-lg">
              Joined: {format(user.date, "MMMM yyyy")}
            </p>
          </div>
        </div>
      </div>
      <hr />

      {postsLoading ? (
        <p>Posts are loading...</p>
      ) : (
        <PostsList posts={posts} />
      )}
    </div>

    {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
  className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
>
  <div className="bg-white rounded-lg max-w-lg p-6">
  <div className="flex justify-between items-center">
  <h2 className="text-2xl font-bold mb-4">Edit profile</h2>
  <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
  <FaTrash className="w-6 h-6" />
  </button>
</div>
    <div className="flex space-x-5">
      <Avatar user={user} overrideAvatar={fileURL} size="10" />
      <div className="py-4">
        <label htmlFor="picture" className="font-semibold">Change avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="mt-1"
        />
      </div>
    </div>
    <button
      className="w-full my-6 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded"
      onClick={updateAvatar}
      isLoading={fileLoading}
    >
      {fileLoading ? 'Uploading' : 'Save'}
    </button>
  </div>
</div>
        </div>
      )}

    </>
  );
}
