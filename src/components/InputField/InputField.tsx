import React, { ComponentProps, useState } from 'react';

import classNames from 'classnames';

interface InputFieldProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'tel'; // Тип ввода
  error?: boolean; // Ошибка
  disabled?: boolean; // Отключено
  className?: ComponentProps<'div'>['className'];
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value = '',
  onChange,
  type = 'text',
  error = false,
  disabled = false,
  className
}) => {
  const [isFocused, setIsFocused] = useState(false); // Состояние фокуса

  const inputClasses = classNames(
    'rounded-full border px-4 py-2 text-base w-full transition-all duration-200 focus:outline-none text-grey',
    {
      // Состояния поля
      'border-gray-300 bg-white hover:border-blue-500': !isFocused && !value && !error && !disabled, // Default
      'border-blue-700 bg-white': isFocused && !error && !disabled, // Focused
      'border-green-500 bg-white': !isFocused && value && !error && !disabled, // Filled
      'border-custom-red bg-white': error && !disabled, // Error
      'bg-gray-100 text-no-active cursor-not-allowed': disabled // Disabled
    },
    className
  );

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={inputClasses}
      disabled={disabled}
      onFocus={() => setIsFocused(true)} // Установка фокуса
      onBlur={() => setIsFocused(false)} // Снятие фокуса
    />
  );
};

export default InputField;

