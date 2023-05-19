import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <h1>Igor Nogueira</h1>
      </div>
      <div>
        <Button size="small" primary={false} label="My Linkedin" />
        <Button size="small" label="My Github" />
      </div>
    </div>
  </header>
);
