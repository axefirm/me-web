import Image from 'next/image'
import Link from 'next/link'
import facebook from '@/images/facebook.svg'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import at from '@/images/Link.svg'
import phone from '@/images/Call.svg'
import point from '@/images/location.svg'


function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold text-white">Me App</p>
                <p className="mt-1 text-sm text-white">Бид хэрэглэгчиддээ 24/7 цагийн хуваариар туслах болно.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-5">
              <NavLinks />
            </nav>
          </div>
          <div className='p-3'>
            <p className="text-base font-semibold text-white ">Холбоо</p>
            <li className='flex text-white p-2 opacity-100 transition ease-in-out hover:opacity-75'><Image src={at} alt='Email' height={20} /><a className='px-2' href='mailto:contact@fiba.mn' > contact@fiba.mn</a></li>
            <li className='flex text-white p-2 opacity-100 transition ease-in-out hover:opacity-75'><Image src={phone} alt='Phone' height={20} />  <p className='px-2' >+976-99110013</p></li>
            <li className='flex text-white p-2 opacity-100 transition ease-in-out hover:opacity-75'><Image src={point} alt='Map point' className='align-start jutify-start' height={20} /><a className='px-2' href='https://maps.app.goo.gl/RXdveL2VzE94nGKN8'>Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, 15-р хороо, Үйлдвэр, Богд жавзан дамба гудамж 12 байр, 1 тоот</a></li>
          </div>
          <div className="bg-white group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="/">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Програмыг татаж авна уу
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                App Store-оос програмыг татаж авахын тулд QR кодыг уншина уу.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between sm:py-3 md:pt-6">
          <Link href="https://www.facebook.com/me.app.Mongolia" aria-label="FaceBook">
            <Image width={30} src={facebook} alt="FaceBook" color='white' />
          </Link>
          <Link href="/policy/meapp" className='text-white opacity-100 transition xm:py-3 ease-in-out sm:py-3 hover:opacity-75'>
            Privacy Policy
          </Link>
          <Link href="/FAQs" className='text-white opacity-100 transition xm:py-3 ease-in-out hover:opacity-75'>
          Түгээмэл асуултууд
          </Link>
          <p className="mt-6 text-sm text-gray-500 md:mt-0 sm:py-10 text-white">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
