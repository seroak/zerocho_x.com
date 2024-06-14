"use client";
import style from "@/app/(afterLogin)/_component/trendSection.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Hashtag } from "@/model/Hashtag";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
export default function TrendSection() {
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
    // 로그인한 사용자가 있으면 true 없으면 false
  });

  const pathname = usePathname();

  if (session?.user) {
    return (
      <>
        {data?.map((trend) => (
          <Trend trend={trend} key={trend.tagId} />
        ))}
      </>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다</div>
    </div>
  );
}
