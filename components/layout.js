import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '100vh'}}>
        <Image
            src="/assets/hero-image.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ zIndex: -1 }}
        />
        <div>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
            {children}
            </div>
            <Footer />
        </div>
      </div>
    </>
  )
}