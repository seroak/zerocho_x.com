export async function getPostRecommends() {
  const res = await fetch(`http://localhost:9090/api/postRecommends`, {
    next: {
      tags: ["posts", "recommends"],
    },
    //캐시를 저장하라고 지정하는 태그
    // 너무 강력하게 캐싱을 하면 새로운 데이터가 안불러와 질 수 있다
    // 이런 일을 방지하기위해 새로고침을 해야하는 이때 tags를 사용한다
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // 이렇게 하면 recommends를 키로 가지고 있는 서버에 있는 캐시가 날아감
  // revalidateTag("recommends")
  // home으로 온 요청이 왔을때 페이지 전체의 캐시를 새로고침한다
  // revalidatePath('/home')
  return res.json();
}
