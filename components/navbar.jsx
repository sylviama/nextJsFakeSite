import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '50px'  }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
            src="/assets/logo.png" // Route of the image file
            height={30} // Desired size with correct aspect ratio
            width={30} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        </div>
        <div style={{ display: 'flex', justifyContent: 'right', listStyle: 'none', alignItems: 'center' }}>
            <li style={{ margin: '0 10px'}}>
                <Link href="/login" passHref  style={{ color: 'white', textDecoration: 'none' }}>
                    Login
                </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
                <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
                    Help
                </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image src="/assets/profile.jpg" alt="Profile Picture" width={30} height={30} />
                </div>
            </li>
        </div>
    </nav>
  )
}

export default Navbar






