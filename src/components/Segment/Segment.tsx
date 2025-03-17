import React, { ComponentProps } from 'react';

import './styles.scss';

import classNames from 'classnames';

type Option = {
  label: string;
  value: string;
};

interface SegmentedControlProps {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
  containerClassName?: ComponentProps<'div'>['className']; // Стили для всего контейнера
  activeClassName?: ComponentProps<'div'>['className']; // Стили для активного индикатора
  buttonClassName?: ComponentProps<'div'>['className']; // Стили для каждой кнопки
  selectedButtonClassName?: ComponentProps<'div'>['className']; // Стили для выбранной кнопки
  wrapperClassName?: ComponentProps<'div'>['className']; // Стили для обертки кнопок
}

/**
 * SegmentedControl - компонент для создания переключателя (segmented control).
 *
 * @param {object} props - Пропсы компонента.
 * @param {Option[]} props.options - Массив опций для выбора. Каждая опция содержит `label` (текст) и `value` (значение).
 * @param {string} props.selected - Текущее выбранное значение.
 * @param {Function} props.onChange - Функция, вызываемая при изменении выбранного значения. Принимает новое значение `value` как аргумент.
 * @param {string} [props.containerClassName] - Дополнительные классы для контейнера.
 * @param {string} [props.buttonClassName] - Базовые классы для каждой кнопки.
 * @param {string} [props.selectedButtonClassName='text-white'] - Классы для выбранной кнопки.
 * @param {string} [props.wrapperClassName] - Классы для обертки кнопок.
 *
 * @example
 * <SegmentedControl
 *   options={[
 *     { label: 'Option 1', value: 'option1' },
 *     { label: 'Option 2', value: 'option2' },
 *   ]}
 *   selected="option1"
 *   onChange={(value) => console.log('Selected:', value)}
 *   containerClassName="my-container"
 *   buttonClassName="my-button"
 *   selectedButtonClassName="my-selected-button"
 *   wrapperClassName="my-wrapper"
 * />
 */

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selected,
  onChange,
  containerClassName,
  buttonClassName,
  selectedButtonClassName = 'text-white',
  wrapperClassName
}) => {
  return (
    <div className={classNames(containerClassName, 'segment')}>
      <div className={classNames('segment__wrapper scrollbar-hide', wrapperClassName)}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={classNames(
              'segment__button',
              buttonClassName,
              selected === option.value ? `${selectedButtonClassName} active` : 'text-dark-blue'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SegmentedControl;

