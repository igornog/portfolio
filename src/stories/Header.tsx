import React from 'react';
import { Button } from './Button';
import Image from 'next/image';
import ProfilePic from '../../public/profile-pic.png';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <header className='h-[20vh]'>
    <div className="flex items-start justify-between px-12 py-8">
      <div className='flex items-center gap-[10px]'>
        <Image className='rounded-[100px]' width={90} height={90} src={ProfilePic} alt={'profile-pic'} />
      </div>
    </div>
  </header>
);
