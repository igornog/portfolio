// ./src/stories/Button.js

import React, { useMemo } from 'react';

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-pink-600 border-pink-600'
    : 'text-slate-700 bg-white border-white-700';

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
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
  );
};