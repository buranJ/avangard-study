import React, { ComponentProps } from 'react';

import classNames from 'classnames';

interface ButtonProps {
  label: string; // Текст кнопки
  size?: 'small' | 'medium' | 'large' | 'block'; // Размер кнопки
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled'; // Стиль кнопки
  onClick?: () => void; // Обработчик клика
  className?: ComponentProps<'div'>['className'];
}

const Button: React.FC<ButtonProps> = ({ label, size = 'medium', variant = 'primary', onClick, className }) => {
  const buttonClasses = classNames('rounded-full font-medium text-center transition-all duration-200 flex items-center justify-center', {
    // Размеры кнопок
    'px-4 py-2 text-sm': size === 'small',
    'px-6 py-3 text-base': size === 'medium',
    'px-8 py-4 text-lg': size === 'large',
    'w-full px-8 py-4 text-lg': size === 'block',

    // Стили кнопок
    'border bg-dark-blue text-white hover:bg-dark-blue': variant === 'primary',
    'bg-dark-black text-white hover:bg-dark-blue': variant === 'secondary',
    'border border-dark-blue text-dark-blue hover:bg-bg': variant === 'outline',
    'bg-no-active text-grey cursor-not-allowed': variant === 'disabled',

    // Дополнительные классы
    [className as string]: className,
  });

  return (
    <button className={buttonClasses} onClick={variant !== 'disabled' ? onClick : undefined} disabled={variant === 'disabled'}>
      {label}
    </button>
  );
};

export default Button;

