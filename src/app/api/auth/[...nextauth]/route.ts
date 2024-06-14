// [...nextauth]는 catch all routes이다
// GET /api/auth/a
// GET /api/auth/a/b
// GET /api/auth/a/b/c
// 이렇게 api/auth이후 어떤 것이든 다 올 수 있다
export { GET, POST } from "@/auth";
