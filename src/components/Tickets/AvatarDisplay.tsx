import React from 'react'


type AvatarDisplayProps = {
  avatar: string | null;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({avatar}: AvatarDisplayProps) => {
  return (
    <div className='w-12 h-12 rounded-full overflow-hidden'>
      <img src={avatar ? avatar : ''} alt="pofile pic" />
    </div>
  )
}
