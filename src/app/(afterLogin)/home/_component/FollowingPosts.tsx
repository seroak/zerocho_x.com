"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "@/app/(afterLogin)/home/_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import styles from "@/app/(afterLogin)/home/home.module.css";

export default function FollowingPosts() {
  const { data, error, isLoading } = useQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale, 1분이라는 기준
    gcTime: 300 * 1000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load posts</div>;
  }

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
