"use client";

import { addPost } from "@/redux/operations";
import { AppDispatch } from "@/redux/store";
import { NewPostData } from "@/types/newPostData";
import { Post } from "@/types/post";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const content = contentRef.current?.value;

    if (!title || !content) {
      return;
    }

    const newPost: NewPostData = {
      title,
      content,
    };

    console.log(newPost);

    dispatch(addPost(newPost));

    handleResetForm();
  };

  const handleResetForm = () => {
    if (titleRef.current && contentRef.current) {
      titleRef.current.value = "";
      contentRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  max-w-md mx-auto p-4"
    >
      <label>Title</label>
      <input ref={titleRef} type="text" className="border p-1 rounded mb-2" />

      <label>Content</label>
      <textarea
        ref={contentRef}
        className="border p-2 rounded h-40 resize-none mb-2"
      ></textarea>
      <div className="flex m-auto gap-3.5">
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
          onClick={handleResetForm}
        >
          DELETE
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          ACCEPT
        </button>
      </div>
    </form>
  );
};

export default PostForm;
