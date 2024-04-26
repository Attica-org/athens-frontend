"use client";

import ModalBase from "@/app/_components/molecules/ModalBase";
import { useEffect, useRef, useState } from "react";

type ResultPosition = "pro" | "con" | "abs";

export default function Page() {
  const [selectedResultPosition, setSelectedResultPosition] =
    useState<ResultPosition>("abs");
  const [sec, setSec] = useState<number>(15);
  const timerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (sec <= 0) {
      // TODO: 투표 결과를 서버로 전송
      clearInterval(timerId.current);
      console.log("투표 종료!!");
    }
  });

  const selectResultPosition = (position: ResultPosition) => {
    setSelectedResultPosition(position);
  };

  // TODO: 사용자가 선택하지 않고 화면을 이탈할 경우 abs로 처리

  return (
    <ModalBase title="토론 종료" removeIcon={false}>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xs text-gray-400">최종 투표를 진행해주세요.</h2>
        <div className={`pt-0.5rem ${sec <= 5 && "text-red-500"}`}>{sec}</div>
        <p className="p-1rem pt-1rem text-base break-keep text-center">
          국가 발전에 유능한 독재자가 필요한 시기가 있다.
        </p>
        <div className="pt-0.5rem pb-0.5rem">
          <button
            onClick={() => selectResultPosition("pro")}
            className="bg-blue-400 mr-1rem text-white text-sm p-6 pl-1.5rem pr-1.5rem rounded-xl hover:opacity-80"
          >
            찬성
          </button>
          <button
            onClick={() => selectResultPosition("con")}
            className="bg-red-400 text-white text-sm p-6 pl-1.5rem pr-1.5rem rounded-xl hover:opacity-80"
          >
            반대
          </button>
        </div>
      </div>
    </ModalBase>
  );
}