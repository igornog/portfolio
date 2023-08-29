// ./src/stories/Button.js
import Image from 'next/image';
import React, { useMemo } from 'react';

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-12 py-4';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-blue-600 border-none hover:bg-blue-700 anumation duration-200'
    : 'text-black bg-white border-none hover:bg-gray-200 anumation duration-200';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-body font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = true, size = '', label = '', ...props }) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses} flex items-center gap-[5px]`} {...props}>
      {props.icon &&
        <Image src={props.icon} alt={`${props.label}`} width={24} height={24} />}
      {label}
    </button>
  );
};