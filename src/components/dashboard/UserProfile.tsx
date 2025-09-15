import React from 'react'
import Image from 'next/image'

const UserProfile = () => {
  return (
    <div className="flex items-center mb-10">
    <Image
      src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604688/ravatar_zs1bzd.svg"
      alt="User ravatar"
      width={60}
      height={60}
    />
    <p className="text-[12px] ml-3">
      Jo Edor <br />
      <span className="text-white/60">0xe12ewas.......</span>
    </p>
  </div>
  )
}

export default UserProfile