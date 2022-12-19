import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Digital Grooves</title>
        <meta name="description" content="Digital Grooves DJ Service" />
      </Head>

      <div className="flex h-screen w-screen flex-row">
        <div className="hidden w-1/2 overflow-hidden lg:relative">
          <Image
            src={'/assets/contact-photo.png'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="w-1/2 bg-white">
          <h1>Form</h1>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
