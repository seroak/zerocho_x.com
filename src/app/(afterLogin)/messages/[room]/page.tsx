import { faker } from "@faker-js/faker";
import style from "./chatRoom.module.css";
import Link from "next/link";
import BackButton from "../../_component/BackButton";
export default function chatRoom() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "zeroch0",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
  ];
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
          <div>@{user.id}</div>
        </div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === "zeroch0") {
            return <div key={m.messageId} className={style.myMessage}></div>;
          }
        })}
      </div>
      <div className={style.list} />
    </main>
  );
}
