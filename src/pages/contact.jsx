import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const ContactForm = () => {
  return (
    <form>
      <div className="grid gap-10 pb-10 md:grid-cols-2">
        <div className="flex flex-col">
          <input className="rounded-none border border-black p-2 focus:border-magenta focus:outline-none" />
          <label>First Name</label>
        </div>
        <div className="flex flex-col">
          <input className="rounded-none border border-black p-2 focus:border-magenta focus:outline-none" />
          <label>Last Name</label>
        </div>
        <div className="flex flex-col">
          <input className="rounded-none border border-black p-2 focus:border-magenta focus:outline-none" />
          <label>Email</label>
        </div>
        <div className="flex flex-col">
          <input className="rounded-none border border-black p-2 focus:border-magenta focus:outline-none" />
          <label>Phone Number</label>
        </div>
        <div className="flex flex-col md:col-span-2">
          <textarea
            className="rounded-none border border-black p-2 focus:border-magenta focus:outline-none"
            placeholder="Let us know how we can help"
          />
          <label>Message</label>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="text-2xl hover:text-magenta">Submit</button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Digital Grooves</title>
        <meta name="description" content="Digital Grooves DJ Service" />
      </Head>

      <div className="flex min-h-screen w-screen flex-row">
        <div className="relative hidden h-screen w-1/2 overflow-hidden lg:block">
          <Image
            src={'/assets/contact-photo.png'}
            fill
            style={{ objectFit: 'cover' }}
            className="h-full w-full"
          />
        </div>
        <div className="w-full bg-white p-5 font-sans md:p-10 lg:w-1/2">
          <div className="flex flex-row items-center justify-between">
            <Image src="/assets/logo-black.svg" width={250} height={50} />

            <Link
              href="/"
              className="block text-2xl font-medium hover:text-magenta"
            >
              Close
            </Link>
          </div>
          <div className="pt-20">
            <ContactForm />
          </div>
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
