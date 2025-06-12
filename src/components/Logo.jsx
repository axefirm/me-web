'use client'

import meApp from '@/images/banks/me-app.png'
import arvindem from '@/images/banks/arvindem.png'
import Image from "next/image"
import { usePathname } from 'next/navigation'

export function Logomark({ whitelabel }) {
  const pathname = usePathname()
  const isArvindem = pathname?.includes('/policy/arvindem')

  const logoSrc = isArvindem ? arvindem : meApp
  const logoAlt = isArvindem ? 'Arvin Dem' : 'Me App'

  return (
    <Image 
      src={logoSrc} 
      alt={logoAlt} 
      width={50} 
      height={50} 
      className='rounded-full'
    />
  )
}

export function Logo() {
  return (
    <Logomark width="40" height="40"/>
  )
}
