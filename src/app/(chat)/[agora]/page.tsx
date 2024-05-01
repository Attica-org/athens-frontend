"use client";

import Header from "@/app/(chat)/_components/molecules/Header";
import MessageInput from "@/app/(chat)/_components/molecules/MessageInput";
import Message from "@/app/(chat)/_components/molecules/Message";
import AgoraUserSide from "@/app/(chat)/_components/organisms/AgoraUserSide";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // TODO: 전역 상태로 메뉴를 열고 닫도록 수정
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  // TODO: 전역 상태로 투표 종료 확인, 결과 모달 열기
  const onClick = () => {
    router.push("/agora/flow/result-agora");
  };

  return (
    <section className="flex flex-1 h-dvh max-lg:pb-3rem min-w-270 flex-grow max-width-screen relative">
      <section className="flex flex-1 h-dvh flex-col">
        <main className="justify-center items-stretch flex flex-col w-full h-full flex-1 relative">
          <section className="flex sticky w-full top-0 bg-white justify-between items-center pt-10 pb-5 min-w-270 border-b-1 border-gray-200">
            <Header toggleMenu={toggleMenu} />
          </section>
          <section className="flex flex-1 flex-col justify-between">
            <Message />
            <div className="flex p-0.5rem pl-1rem pr-1rem" onClick={onClick}>
              <div className="rounded-lg text-center flex justify-center items-center text-sm under-mobile:text-xs text-athens-gray-thick p-11 bg-athens-gray w-full break-keep">
                사용자들간의 쾌적한 토론 환경을 위해 바른말을 사용해주세요.
              </div>
            </div>
          </section>
          <MessageInput />
        </main>
      </section>
      <AgoraUserSide toggleMenu={toggleMenu} toggle={toggle} />
    </section>
  );
}
