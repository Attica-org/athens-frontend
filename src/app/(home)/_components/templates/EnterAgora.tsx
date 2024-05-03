'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PROFLELIST } from '@/constants/userProfileImage';
import UserImage from '@/app/_components/atoms/UserImage';
import ModalPosSelectBtn from '../atoms/ModalPosSelectBtn';
import ModalBase from '../../../_components/molecules/ModalBase';

type ProfileImageName = {
  id: number;
  name: string;
};

type Position = 'con' | 'pro' | 'watcher';

export default function EnterAgora() {
  const [selectedProfileImage, setSelectedProfileImage] = useState<ProfileImageName>({ id: 1, name: '도끼 든 회색 곰' });
  const [selectedPosition, setSelectedPosition] = useState<Position>('watcher');
  const router = useRouter();

  const selectProfile = (profile: ProfileImageName) => {
    setSelectedProfileImage(profile);
  };

  const selectPosition = (position: Position) => {
    setSelectedPosition(position);
  };

  const enterAgora = () => {
    router.push('/agora');
  };

  return (
    <ModalBase title="아고라 입장" removeIcon animation={false}>
      <p className="text-base p-1rem pt-0.5rem pb-1.5rem flex justify-center items-cener text-center break-keep font-medium">
        국가 발전에 유능한 독재자가 필요한 시기가 있다.
      </p>
      <div className="flex flex-col justiy-start items-center">
        <div className="flex justify-start items-center mb-10">
          <UserImage className="w-65 h-65 bg-white" name={selectedProfileImage.name} w={65} h={65} />
          <div aria-hidden className="text-sm p-0.5rem w-fit ml-12">
            {selectedProfileImage.name}
          </div>
        </div>
        <ul aria-label="사용할 프로필 이미지 선택" className="grid grid-cols-5 under-mobile:grid-cols-4 mobile:grid-cols-4 foldable:grid-cols-5 gap-y-5  pl-1rem">
          {PROFLELIST.map((profileImageName) => (
            <li
              onClick={() => selectProfile(profileImageName)}
              key={profileImageName.id}
              className="cursor-pointer mr-5 w-fit flex justify-center items-center border-1 border-gray-300 rounded-full"
            >
              <button type="button" aria-label={profileImageName.name}>
                <UserImage className="rounded-full w-45 h-45 bg-white" name={profileImageName.name} w={45} h={45} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2rem flex justify-center items-center text-sm under-mobile:text-xs min-w-200">
        <ModalPosSelectBtn selectedPosition={selectedPosition} selectPosition={selectPosition} position="pro" color="blue">
          찬성
        </ModalPosSelectBtn>
        <ModalPosSelectBtn selectedPosition={selectedPosition} selectPosition={selectPosition} position="con" color="red">
          반대
        </ModalPosSelectBtn>
        <ModalPosSelectBtn selectedPosition={selectedPosition} selectPosition={selectPosition} position="watcher" color="athens-main">
          관찰자
        </ModalPosSelectBtn>
        <span className="pl-6 text-xs">로 입장</span>
      </div>
      <button
        type="button"
        aria-label="아고라 입장하기"
        onClick={enterAgora}
        className="mt-2rem text-sm bg-athens-main p-0.5rem w-full text-white rounded-lg"
      >
        입장하기
      </button>
    </ModalBase>
  );
}
