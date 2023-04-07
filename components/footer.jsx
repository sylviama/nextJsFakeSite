import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src="/assets/logo.png" 
                height={30} 
                width={30} 
                alt="Your Name"
            />
        </div>
        <div style={{ display: 'flex', justifyContent: 'right', listStyle: 'none' }}>
            <li style={{ margin: '0 10px' }}>
                <Link href="/" passHref style={{textDecoration:'none', color:'grey'}}>
                    Term
                </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
                <Link href="/about" passHref  style={{textDecoration:'none', color:'grey'}}>
                    Privacy
                </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
                <Link href="/contact" passHref  style={{textDecoration:'none', color:'grey'}}>
                    Site Map
                </Link>
            </li>
        </div>
    </nav>
  )
}

export default Footer