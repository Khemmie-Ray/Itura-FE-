"use client"

import React from 'react'
import Image from 'next/image'
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
    const { user, logout, userDetails } = useAuth();

    const formatWalletAddress:any = (address: string): string => {
      if (!address) return "";
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }

  return (
    <div className="lg:flex md:flex hidden items-center mb-10">
    <Image
      src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604688/ravatar_zs1bzd.svg"
      alt="User ravatar"
      width={50}
      height={50}
    />
    <p className="text-[12px] ml-3">
      {userDetails?.userName}<br />
      <span className="text-white/60">
        {user ? formatWalletAddress(user) : ""}
      </span>
    </p>
    <button className="rounded-xl ml-3 px-4 border border-white/20 p-2 font-[300] shadow-lg bg-darkBg/70" onClick={logout}>Disconnect</button>
  </div>
  )
}

export default Profile