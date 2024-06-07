import PROFLELIST from '@/constants/userProfileImage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  const randomIndex = Math.floor(Math.random() * PROFLELIST.length);
  const randomProfile = PROFLELIST[randomIndex];

  return (
    <div className="flex flex-col h-dvh w-dvw justify-center items-center scrollbar-hide">
      <h1 className="text-athens-sub text-9xl mt-12 flex justify-center items-center">
        4
        <div className="w-110 h-110 rounded-full bg-white flex justify-center items-center ml-10 mr-10">
          <Image className="rounded-full object-contain" src={`/img/${randomProfile.file}`} alt={`${randomProfile.name} 프로필`} width={90} height={90} />
        </div>
        4
      </h1>
      <h3 className="text-xl dark:text-white mt-70 font-bold">Page Not Found</h3>
      <p className="text-base dark:text-white mt-12">
        페이지를 찾을 수 없습니다.
      </p>
      <button type="button" aria-label="홈으로 돌아가기" className="bg-athens-main text-white rounded-full px-16 py-7 mt-50 text-sm">
        <Link href="/home">홈으로 돌아가기</Link>
      </button>
    </div>
  );
}