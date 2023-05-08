import { Inter } from 'next/font/google'
import { Canvas } from "@react-three/fiber"
import {Cloud, OrbitControls, Sky} from "@react-three/drei";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between ${inter.className} bg-zinc-200`}>
      <div className={`flex min-h-screen p-7`}>

        <div className={`flex grow border border-zinc-500`}>
            <div className={`grow`}>
               <div className={`h-full`}>
                   <Canvas>
                       <Cloud
                          opacity={0.3}
                          speed={0.3} // Rotation speed
                          width={10} // Width of the full cloud
                          depth={2.5} // Z-dir depth
                          segments={30} // Number of particles
                        />
                   </Canvas>
               </div>
            </div>
            <div className={`absolute`}>
                <p className={`text-5xl font-thin pl-7 pt-7`}>
                    Dauren Tursynbek
                </p>
                <p className={`text font-light px-7`}>
                    Math student
                </p>
                <div className={`grid grid-cols-1 justify-items-start gap-2 pl-7 pt-7`}>
                    <button className={``}>
                        <p className={`text-xs font-bold`}>
                            About me
                        </p>
                    </button>
                    <button className={``}>
                        <p className={`text-xs font-bold`}>
                            Projects
                        </p>
                    </button>
                    <button className={``}>
                        <p className={`text-xs font-bold`}>
                            Contact
                        </p>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </main>

  )
}

function Box(props){
    return(
        <mesh {...props}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshLambertMaterial attach="material" color="hotpink"/>
        </mesh>
    )
}
