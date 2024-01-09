import dynamic from "next/dynamic"
import Image from "next/image";

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

export default function Home() {
  return (
    <div>
      <header className="header">
        <Image 
          src={'/images/SVG/Skytrain.svg'}
          alt="skytrain logo"
          height={60}
          width={60}
        />
        <h1 className="text">Millennium Line and Expo Line Stytrain Stations</h1>
      </header>
      <DynamicMap />
    </div>
  )
}
