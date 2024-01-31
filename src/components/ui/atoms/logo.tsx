'use client';
import { cn } from '@/lib/utils';
import { animated, useSpring } from '@react-spring/web'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface LogoProps {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  revealBgColor?: 'bg-blue-800' | 'bg-white'
}

const Logo = ({ imgSrc, imgWidth, imgHeight, revealBgColor = 'bg-blue-800' }: LogoProps) => {
  const [key, setKey] = useState(0);

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 200 },
    delay: 0,
    key: key,
  })

  useEffect(() => {
    setKey(key + 1)
  }, [])

  return (
    <div className='relative w-fit overflow-hidden'>
      <animated.div
        style={{ ...springs }}
        className={cn("absolute top-0 left-0 w-full h-full duration-300 transition-all ease-linear", revealBgColor)}
      />
      <Image
        src={imgSrc}
        alt="logomarca da Pontua"
        width={imgWidth}
        height={imgHeight}
        priority
      />
    </div>
  )
}

export default Logo