import React from 'react';
import WhatsApp from '../../assets/images/WhatInteresting/whatsApp.svg'

import './styles.scss'; // Styles for the widget


interface WhatsAppWidgetProps {
  phoneNumber: string; 
  message?: string; 
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = () => {

  return (
    <div className="whatsapp-icon">
    <a href="https://wa.me/11234567890" target="_blank">
      <img src={WhatsApp} alt="whatsapp" />
    </a>
  </div>  
  );
};

export default WhatsAppWidget;

