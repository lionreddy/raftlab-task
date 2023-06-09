
import Header from "./Header";
import Actions from "./Actions";

export default function Post({ post }) {
  const { text } = post;

  return (
    <>
     <div className="p-2 max-w-600px text-left">
      <div className="border-2 border-gray-100 rounded-md">
        <Header post={post} />

        <div className="p-2 min-h-100px">
          <p className="break-word text-md">
            {text}
          </p>
        </div>

        <Actions post={post} />
      </div>
    </div>
    </>
  );
}
