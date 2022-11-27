import Image from 'next/image'
import legoLogo from '@/assets/lego_logo.png'
export const ImageComponent = () => {
  return (
    <div>
      <Image src={legoLogo} alt="LEGO" />
    </div>
  )
}
