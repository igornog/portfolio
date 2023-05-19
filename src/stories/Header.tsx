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
  <header>
    <div className="flex items-center justify-between px-6 py-6">
      <div className='flex items-center gap-[10px]'>
        <Image className='rounded-[100px]' width={60} height={60} src={ProfilePic} alt={'profile-pic'} />
        <h1 className='font-heading text-2xl'>{user?.name}</h1>
      </div>
      <div className='flex gap-[10px]'>
        <Button size="large" primary={false} label="My Linkedin" />
        <Button size="large" label="My Github" />
      </div>
    </div>
  </header>
);
