import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="mx-auto mt-2 border-t p-5 md:p-10">
      <div className="flex w-full flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
        <Image src={'/assets/footer-logo.png'} width={300} height={200} />
        <Image src={'/assets/awards.png'} width={400} height={300} />
      </div>
    </footer>
  )
}
