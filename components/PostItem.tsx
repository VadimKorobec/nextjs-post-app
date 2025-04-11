import { Post } from "@/types/post";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const handleDeletePost = () => {
    console.log("delete");
  };

  const handleEditPost = () => {
    console.log("edit");
  };

  const handleViewPost = () => {
    console.log("view");
  };

  return (
    <li className="w-2xl mx-auto rounded-lg border-2 border-slate-500 p-2 mb-3">
      <p className="text-base font-medium mb-2">
        {post.createdAt.slice(0, 10)}
      </p>
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{post.title}</h2>
      <p>{post.content}</p>
      <div className="flex gap-2 justify-end">
        <button
          className="rounded-sm px-2 py-0.5 bg-blue-500"
          type="button"
          onClick={handleViewPost}
        >
          VIEW
        </button>
        <button
          className="rounded-sm px-2 py-0.5 bg-cyan-500"
          type="button"
          onClick={handleEditPost}
        >
          EDIT
        </button>
        <button
          className="rounded-sm px-2 py-0.5 bg-pink-500"
          type="button"
          onClick={handleDeletePost}
        >
          DELETE
        </button>
      </div>
    </li>
  );
};

export default PostItem;
