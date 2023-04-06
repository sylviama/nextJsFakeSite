import Image from 'next/image'

const Background = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image
        src="/assets/hero-image.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  )
}

export default Background