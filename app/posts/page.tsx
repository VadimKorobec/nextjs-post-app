"use client";

import PostItem from "@/components/PostItem";
import { fetchPosts } from "@/redux/operations";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostsPage = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (posts.length === 0) {
    return <p className="text-center mt-4">Loading ...</p>;
  }

  return (
    <div className="mt-4">
      <ul>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
