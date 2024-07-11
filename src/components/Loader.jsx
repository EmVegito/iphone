import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <div className="absolute flex w-full h-full justify-center items-center top-0 left-0 ">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  )
}

export default Loader
