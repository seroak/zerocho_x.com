"use client";
import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data, error, isLoading } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    // gcTime은 staleTime보다 길어야한다
    staleTime: 5 * 1000, // 새로 가져온 데이터를 몇 초 후에 fresh에서 stale로 바꿀 것인지
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
