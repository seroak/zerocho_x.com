import Home from "@/app/(afterLogin)/home/page";
type Props = {
  params: { username: string; id: string; photoId: string };
};

// params를 사용해서 주소창에 있는 정보인 params를 받아올 수 있다
// [username], [id] 등과 같은 다이나믹 라우팅의 값을 슬러그라고 부르는데
///elonmusk/status/1/photo/1 같은 주소가 있다면
// params.username // elonmusk
// params.id // 1
// params.photoId // 1
// 이렇게 params로 값을 가져올 수 있다
export default function Page({ params }: Props) {
  return <Home />;
}
