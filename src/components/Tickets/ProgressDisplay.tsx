import React from 'react'

type ProgressDisplayProps = {
  progress: number;
}

export const ProgressDisplay: React.FC<ProgressDisplayProps> = ({progress}: ProgressDisplayProps) => {
  return (
    <div className='bg-slate-600 h-8 w-full rounded-3xl overflow-hidden'>
      <div style={{width: progress + '%'}} className='bg-orange-600 h-8'></div>
    </div>
  )
}