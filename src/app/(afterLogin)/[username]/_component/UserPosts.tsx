"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";

type Props = {
  username: string;
};
export default function UserPosts({ username }: Props) {
  // 타입스크립트에서 대문자Object는 모든 값이다 진짜 객체를 하고싶으면 소문자로 object라고 해야한다
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);
  console.log("user", user);
  if (user) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
  return null;
}
