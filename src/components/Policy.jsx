'use client'

import { Container } from '@/components/Container'
import { CirclesBackground } from './CirclesBackground'


export function Policy(props) {

  return (

    <section
      id="privacy"
      className="relative overflow-show bg-transparent py-5 overflow-hidden"
    >
      <CirclesBackground color="#d62976" className="absolute left-1/2 top-1/2 z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />

      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
      </div>
      <Container className="relative font-sans">
        <div className='bg-black'>
          <h1 className="text-4xl font-bold text-white tracking-tight text-white text-center item-center justify-center">
            Privacy Policy
          </h1>
          <hr />
          <div className="mt-6 text-lg text-white px-8">
            Developer/Company Name: Fiba LLC
          </div>
          <div className="text-lg text-white px-8">
            Effective Date: {props.whitelabel == 'solongo' ? '2024/05/03' : '2025/06/09'}
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold'>Introduction</p> This Privacy Policy describes how <b>{props.whitelabel} app</b> collects, uses, and protects your information. Your privacy is important to us, and we are committed to handling your personal data with care and in compliance with applicable data protection laws.</div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Information We Collect</p>
            <p className='mb-4'>This Privacy Policy describes how <b>{props.whitelabel} app</b> collects, uses, and protects your information. Your privacy is important to us, and we are committed to handling your personal data with care and in compliance with applicable data protection laws.</p>
            
            <p className='mb-4'>We may collect the following types of personal data when you use our app:</p>

            <div className='mb-6'>
              <p className='font-semibold mb-2'>a. Personally Identifiable Information (PII)</p>
              <ul className='list-disc pl-6 space-y-1'>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>National ID or government-issued ID</li>
                {/* <li>Employment details</li> */}
                {/* <li>Income documentation</li> */}
                {/* <li>Uploaded files (e.g., salary slips, ID images)</li> */}
              </ul>
            </div>

            <div>
              <p className='font-semibold mb-2'>b. Device & Usage Data</p>
              <ul className='list-disc pl-6 space-y-1'>
                <li>IP address</li>
                <li>Device model and OS version</li>
                {/* <li>App usage statistics</li> */}
                <li>Crash logs and diagnostic data</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>How We Use Your Data</p>
            <p className='mb-4'>We use your personal data for the following purposes:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Evaluate and process loan applications</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Communicate with you regarding your loan status</li>
              <li>Improve app performance and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Data Sharing</p>
            <p className='mb-4'>We do not sell your personal information. Your data may be shared:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>With third-party services for identity verification or credit scoring</li>
              <li>With financial institutions to process your loan</li>
              <li>With legal or regulatory bodies as required by law</li>
            </ul>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Third-Party Services Used in This App</p>
            <p className='mb-4'>Our app may include third-party services such as:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Firebase (Crashlytics, Analytics)</li>
              <li>Google Cloud / AWS (Data storage)</li>
              <li>Payment gateway providers</li>
              <li>Document scanning and verification services</li>
            </ul>
            <p className='mt-4'>Each of these services may collect limited information necessary for their function. Please review their privacy policies separately.</p>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Data Security</p>
            <p className='mb-4'>We apply strong security measures to protect your information:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication mechanisms</li>
              <li>Regular audits and vulnerability checks</li>
            </ul>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Your Privacy Rights</p>
            <p className='mb-4'>Depending on your location, you may have the right to:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Access the data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className='mt-4'>You can make requests by contacting us at the email below.</p>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Children's Privacy</p>
            <p>Our app is not intended for children under the age of 18. We do not knowingly collect personal data from children.</p>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Changes to This Privacy Policy</p>
            <p>We may update this policy from time to time. Updates will be reflected by an updated "Effective Date" and posted within the app or our website.</p>
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold text-xl mb-4'>Contact Us</p>
            <p className='mb-4'>If you have any questions or concerns, feel free to reach out:</p>
            <div className='space-y-2'>
              <p>📧 Email: {props.email}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
