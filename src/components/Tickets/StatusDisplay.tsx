import React from 'react';

type StatusDisplayProps = {
  status: string;
};

export const StatusDisplay: React.FC<StatusDisplayProps> = ({ status }: StatusDisplayProps) => {
  const getColor = () => {
    let color;
    switch (status) {
      case 'done':
        return (color = 'rgb(186,255,201)');
      case 'working on it':
        return (color = 'rgb(255,223,186)');
      case 'stuck':
        return (color = 'rgb(186,255,255)');
      default:
        return (color = 'rgb(186,255,255)');
    }
  };
  return <div className='text-center' style={{ background: getColor() }}>{status}</div>;
};
