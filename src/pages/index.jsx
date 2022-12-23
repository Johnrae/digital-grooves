import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

const Testimonial = ({ name, body, rating }) => {
  return (
    <div className="space-y-2 font-sans">
      <h2 className="text-lg font-medium">{name}</h2>
      <div className="flex flex-row space-x-2">
        {new Array(rating).fill(null).map((_, i) => {
          return (
            <div key={i} className="h-[30px] w-[30px]">
              <Image src="/assets/star.svg" alt="star" height={30} width={30} />
            </div>
          )
        })}
      </div>
      <p>{body}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Grooves</title>
        <meta name="description" content="Digital Grooves DJ Service" />
      </Head>

      {/* Header */}
      <div className="-mb-56 flex flex-col-reverse justify-between p-5 md:flex-row md:p-10">
        <p className="font-regular mx-auto mt-20 w-full max-w-md font-sans leading-5 md:mx-0 md:mt-0">
          <span className="cursor-crosshair hover:text-magenta hover:underline">
            Bill Bowen
          </span>{' '}
          is a seasoned DJ and entertainment professional that breaks the mold.
          His goal is not to simply provide music, but to create soundtracks and
          build upon the spontaneity of the moment. Bowen takes events to
          another level, putting his heart and soul into making your celebration
          a success.
        </p>
        <Link href="/contact">
          <button className="self-end font-sans text-2xl font-medium hover:text-magenta md:self-start">
            Contact
          </button>
        </Link>
      </div>

      {/* Logo */}
      <div className="relative z-10  hidden translate-y-[52%] p-10 md:block ">
        <div className="relative z-10 h-80 w-full">
          <Image
            src="/assets/MainLogo.svg"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="relative z-10  block translate-y-[52%] p-10 md:hidden">
        <div className="relative z-10 h-80 w-full">
          <Image
            src="/assets/logo-mobile.svg"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Main image */}
      <div className="relative h-[50rem]">
        <Image
          src="/assets/HeaderPhoto.png"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
        <span className="absolute bottom-10 w-full text-center font-sans text-6xl italic text-white [text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)] md:text-8xl">
          443 690 7983
        </span>
      </div>

      {/* Info Section */}
      <div className="mx-auto mt-2 max-w-screen-xl p-5 md:p-20">
        <div className="float-left mr-8 mb-2">
          <Image
            src={'/assets/80sphoto.png'}
            width={300}
            height={300}
            className=""
          />
          <span className="w-full text-center font-sans text-sm">
            Bill Bowen commanding the room, 1982
          </span>
        </div>
        <p className="mb-6 font-sans text-xl md:text-3xl">
          Planning the perfect wedding day and reception certainly includes
          picking the right DJ and entertainment. That's where I come in,
          bringing with me over 20 years of DJ experience as well as customer
          service.
        </p>
        <p className="font-sans text-xl md:text-3xl">
          Digital Grooves is one of the most requested and highest rated DJ
          services in the Maryland, Pennsylvania, Washington D.C., and Virginia
          areas. You'll find that I place as much emphasis on facilitating your
          event as well as the music choices for your first dance, parent
          dances, etc. making sure you get the approach and the soundtrack that
          fits perfectly with what you want. I bring no agenda except yours.
          From low key receptions with jazz to big celebrations with plenty of
          dancing, we'll create the right mix for you.
        </p>
      </div>

      <div className="py-10 font-sans text-6xl font-bold">
        <div className="marquee">
          <div className="track">
            <div className="content">
              WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS
              WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS
              WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS WEDDINGS
            </div>
          </div>
        </div>
        <div className="marquee">
          <div className="track-2">
            <div className="content">
              CELEBRATIONS CELEBRATIONS CELEBRATIONS CELEBRATIONS CELEBRATIONS
              CELEBRATIONS CELEBRATIONS CELEBRATIONS CELEBRATIONS CELEBRATIONS
              CELEBRATIONS CELEBRATIONS CELEBRATIONS CELEBRATIONS CELEBRATIONS
              CELEBRATIONS CELEBRATIONS CELEBRATIONS
            </div>
          </div>
        </div>
        <div className="marquee">
          <div className="track">
            <div className="content">
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid gap-10 p-5 md:grid-cols-2 md:p-10">
        <div>
          <h3 className="relative z-10 -mb-12 text-center text-8xl text-magenta">
            weddings
          </h3>
          <Image
            src={'/assets/wedding.png'}
            width={900}
            height={900}
            className="mx-auto mb-10"
          />
          <p className="mb-10 w-full font-sans text-lg">
            <b>STAY IN THE MIX.</b> You want the music at your wedding and
            reception to reflect your personality. It's that simple. With
            Digital Grooves behind the professional computerized DJ software on
            two laptops, musician grade microphones and mixers, let us know your
            favorites and style of music you prefer and we'll handle the rest. I
            am fully insured and background verified.
          </p>
          <p className="w-full font-sans text-lg">
            You won't have to worry about a no show or late arrival. What we do
            is create the mood, enhance the day, and build upon the spontaneity
            of the your celebration.
          </p>
        </div>

        <div>
          <h3 className="relative z-10 -mb-12 text-center text-8xl text-magenta">
            events
          </h3>
          <Image
            src={'/assets/events.png'}
            width={900}
            height={900}
            className="mx-auto mb-10"
          />
          <p className="mb-10 w-full font-sans text-lg">
            <b>A SIMPLE CHOICE.</b> Instead of offering a bunch of package
            rates, we make things simple and include everything for you. The
            only thing you need to decide on is how long you want us around.
            Along with the music and sound system, we provide the dance floor,
            intelligent lighting package. Also a discreet pro audio set up for
            playing pre-ceremony and ceremony song choices for your ceremony
            with lapel microphone for your officiant.
          </p>
          <p className="w-full font-sans text-lg">
            We figure there are a lot of other decisions you have to make, so
            there is no need to burden you with another.
          </p>
        </div>
      </div>

      <div className="px-5 py-20 sm:px-10">
        <h2 className="mb-10 font-display text-8xl text-magenta md:text-center">
          Testimonials
        </h2>
        <div className="grid gap-10  sm:grid-cols-2 md:grid-cols-3">
          <Testimonial
            name="Natasha L."
            body="We hired Digital Grooves for our backyard wedding July 2015. The whole experience from start to end was excellent. He is a very patient, professional and calming person. The sound system was impressive and all the transitions flowed perfectly. He was very attentive and flexible when we were unorganized and indecisive during the reception. On top of that the price was right....very impressed and would definitely hire him again"
            rating={5}
          />
          <Testimonial
            name="John S."
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis, orci non bibendum lacinia, dui nunc congue turpis, nec sagittis augue libero nec leo. Duis ut pharetra mauris. Ut suscipit convallis risus. "
            rating={4}
          />
          <Testimonial
            name="Jim J."
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis, orci non bibendum lacinia, dui nunc congue turpis, nec sagittis augue libero nec leo. Duis ut pharetra mauris. Ut suscipit convallis risus. "
            rating={5}
          />
        </div>
      </div>

      {/* Contact button */}
      <div className="mx-auto mt-2 flex max-w-screen-xl justify-center p-20 uppercase">
        <Link href="/contact">
          <button className="rounded-full border border-black px-10 py-2 font-sans text-2xl font-bold uppercase hover:border-magenta hover:bg-magenta hover:text-white">
            Contact
          </button>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
