import React from 'react';
import Icon from '../utils/icons/Icon';
import uniqueId from 'lodash/uniqueId';

interface Icon {
  url: string;
  imageUrl: string;
}

interface IProps {
  icons: Icon[]
}

export default function IconList({ icons: icons }: IProps): JSX.Element {
  return (
    <div className="flex gap-[10px] flex-wrap w-full max-w-[50%]">
      {icons.map(icon => (
        <Icon
          key={uniqueId()}
          url={icon.url}
          imageUrl={icon.imageUrl}
        />
      ))}
    </div>
  );
}
