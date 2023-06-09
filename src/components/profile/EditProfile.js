
import { useAuth } from "hooks/auth";
import { useUpdateAvatar } from "hooks/users";
import Avatar from "./Avatar";

export default function EditProfile({ isOpen, onClose }) {
  const { user, isLoading: authLoading } = useAuth();
  const {
    setFile,
    updateAvatar,
    isLoading: fileLoading,
    fileURL,
  } = useUpdateAvatar(user?.id);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  if (authLoading) return "Loading...";

  return (
    <>
 
  <div className="fixed inset-0 bg-black opacity-75"></div>
  <div className="bg-white rounded-lg max-w-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Edit profile</h2>
    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" style={{background:'red'}}>
      close
    </button>
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
</>
  );
}
