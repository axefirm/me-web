import { Policy } from '@/components/Policy'

export const metadata = {
  title: 'Privacy policy',
}
// export const dynamic = 'force-dynamic';
export const dynamic = "error"; // keep this to force static

export async function generateStaticParams() {
  return [
    { whitelabel: 'arvindem' },
    { whitelabel: 'solongo' },
    { whitelabel: 'meapp' },
  ]
}

export default function PolicyPage({ params }) {
  const { whitelabel } = params;

  // Determine email based on whitelabel
  const email = (() => {
  
    switch (whitelabel) {
      case 'arvindem':
        return 'arvindem2021@gmail.com'
      case 'solongo':
        return 'contact@scm.mn'
      default:
        return 'contact@fiba.mn'
    }
  })()



  return (
    <>
      <Policy whitelabel={whitelabel} email={email} />
    </>
  )
}
