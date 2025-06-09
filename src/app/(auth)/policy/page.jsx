import { Policy } from '@/components/Policy'

export const metadata = {
  title: 'Privacy policy',
}
export const dynamic = 'force-dynamic';

export default function PolicyPage({ searchParams }) {
  const whitelabelParam = searchParams?.whitelabel
  
  // Determine email based on whitelabel
  const email = (() => {
    switch (whitelabelParam) {
      case 'arvindem':
        return 'arvindem2021@gmail.com'
      case 'solongo':
        return 'contact@scm.mn'
      default:
        return 'contact@fiba.mn'
    }
  })()
  
  // Check if whitelabel is arvindem or solongo, otherwise use 'Me app'
  const whitelabel = (whitelabelParam === 'arvindem' || whitelabelParam === 'solongo')
    ? whitelabelParam
    : 'Me app'
  
  return (
    <>
      <Policy whitelabel={whitelabel} email={email} />
    </>
  )
}
