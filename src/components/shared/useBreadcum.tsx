'use client'
import React, {useState, useEffect} from 'react'


type Props = {
    pathname: string
}

export default function useBreadcum({pathname}: Props) {

    const [pathName, setPathName] = useState<Array<string>>([]);

    useEffect(() =>{
        let path = pathname.split("/");
        path[0] ='/';
        setPathName(path)
    }, [pathname])
  return { pathName }
}