import SpeakerIcon from '@/assets/icons/SpeakerIcon';
import React from 'react';

type Props = {
  title: string;
  pros?: number;
  cons?: number;
};

export default function AgoraTitle({ title, pros, cons }: Props) {
  return (
    <section className="flex flex-col justify-center items-center w-full dark:bg-dark-light-300 pb-5">
      <h1
        aria-label="토론 주제"
        className="dark:text-white dark:text-opacity-85 text-sm lg:text-base under-mobile:text-xs break-keep text-center font-semibold flex justify-center items-center p-5"
      >
        <SpeakerIcon
          className="w-16 mr-0.5rem under-mobile:w-14"
          fill="#10AE5D"
        />
        {title}
      </h1>
      <div
        role="status"
        aria-label="현재 참여 인원"
        className="flex justify-around items-center w-full text-xs lg:text-sm under-mobile:text-xxs p-6 pt-0"
      >
        <div className="text-blue-600 dark:text-dark-pro-color">
          찬성
          {' '}
          {pros}
        </div>
        <div className="text-red-600 dark:text-dark-con-color">
          반대
          {' '}
          {cons}
        </div>
      </div>
    </section>
  );
}
