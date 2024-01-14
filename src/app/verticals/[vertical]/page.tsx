'use client'

import React, {useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import CommonHeroSection from '@src/components/shared/CommonHeroSection'

type Props = {}

export default function Page({}: Props) {
    const pathname = usePathname()
    const [loading, setLoading] = useState<boolean>(true)
    const [pathName, setPathName] = useState<Array<string>>([]);
    const [heading, setHeading] = useState<string>('')

    useEffect(() =>{
        setLoading(true)
        let path = pathname.split("/");
        path[0] ='/';
        setHeading(path[-1])
        setPathName(path)
        setLoading(false)
    }, [pathname]);
  return (
    <div>
        {/* <CommonHeroSection /> */}
        <p className='text-red-500'>{heading}</p>
    </div>
  )
}