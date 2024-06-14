"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          // 다른 텝갔다가 다시 돌아올 경우 데이터를 새로 가져올 것인지 아닌지
          refetchOnWindowFocus: false,
          // 페이지를 이동했던지 컴포넌트가 다른 이유로 다시 마운트 됐을때 데이터를 다시 가져올 것인지
          retryOnMount: true,
          // 인터넷 연결이 끊겼다가 다시 연결될 때 데이터 다시 가져올 것인지
          refetchOnReconnect: false,
          // 데이터를 가져올때 실패하면 몇번정도 데이터를 다시 가져오는 시도를 할 것인지
          retry: false,
          // 가비지 컬렉트 타임
          // 데이터는 현재 페이지에서 사용하지 않을 때 inactive로 바꾼다 즉 캐싱을 한다
          // 이 캐싱을 언제까지 할지 정하는 옵션
          // 기본 옵션은 5분
          // gcTime은 staleTime보다 길어야한다
          gcTime: 60 * 3000,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
}

export default RQProvider;
