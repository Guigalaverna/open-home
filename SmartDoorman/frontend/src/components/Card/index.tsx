import React from 'react';

interface CardProps {
  title: string;
  icon?: string;
}

function Card({ title, icon }: CardProps) {
  return (
    <div className="app-card">
      <img src={icon} alt={title} />
      <strong>{title}</strong>
    </div>
  )
}

export default Card