'use client';
import { animated, useSpring } from '@react-spring/web'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Logo = () => {
  const [key, setKey] = useState(0);

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 200 },
    duration: 2000,
    delay: 0,
    key: key,
  })

  useEffect(() => {
    setKey(key + 1)
  }, [])

  return (
    <div className='relative w-fit'>
      <animated.div
        style={{ ...springs }}
        className="absolute top-0 left-0 w-full h-full bg-blue-800 duration-1000 transition-all"
      />
      <Image
        src="/assets/images/logo_pontua_white.svg"
        alt="logomarca da Pontua"
        width={169}
        height={50}
        priority
      />
    </div>
  )
}

export default Logo