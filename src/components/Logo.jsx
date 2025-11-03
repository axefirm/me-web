'use client'

import meApp from '@/images/banks/me-app.png'
import arvindem from '@/images/banks/arvindem.png'
import bullCapital from '@/images/banks/bullcapital.png'
import Image from "next/image"
import { usePathname } from 'next/navigation'

export function Logomark({ whitelabel }) {
  const pathname = usePathname()
  const label = whitelabel || pathname?.match(/\/policy\/(\w+)/)?.[1]?.toLowerCase()
  const isArvindem = label === 'arvindem'
  const isBullCapital = label === 'bullcapital'

  const logoSrc = isArvindem ? arvindem : isBullCapital ? bullCapital : meApp
  const logoAlt = isArvindem ? 'Arvin Dem' : isBullCapital ? 'Bull Capital' : 'Me App'

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
