import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Modal: React.FC<ModalProps> = () => {

  return (
    <>
    </>
  );
};
