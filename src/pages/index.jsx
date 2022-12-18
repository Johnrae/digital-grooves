import Head from 'next/head'

import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Grooves</title>
        <meta name="description" content="Digital Grooves Dj service" />
      </Head>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="max-w-2xl">
          <h1 className="text-center font-display text-9xl tracking-tight text-cyan-600 dark:text-cyan-300">
            Digital Grooves
          </h1>
          <p className="mt-6 text-center font-sans text-base uppercase tracking-[1em] text-slate-600 dark:text-slate-100">
            Bill Bowen
          </p>
        </div>
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="prose">
          <h2 className="mb-10 font-display text-4xl text-cyan-300">
            About me
          </h2>
          <p className="text-white">
            Planning the perfect wedding day and reception certainly includes
            picking the right DJ and entertainment. That's where I come in,
            bringing with me with over 20 years of DJ experience as well as
            customer service. Digital Grooves DJ Entertainment is one of the
            most requested and highest rated DJ services in the Maryland,
            Pennsylvania, Washington D.C. Virginia area. You'll find that I
            place as much emphasis on facilitating your event as well as the
            music choices for your first dance, parent dances, etc. making sure
            you get the approach and the soundtrack that fits perfectly with
            what you want. I bring no agenda except yours. From low-key
            receptions with jazz to big celebrations with plenty of dancing,
            we'll create the right mix for you.
          </p>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
