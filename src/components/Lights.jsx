import { Environment, Lightformer } from '@react-three/drei'

const Lights = () => {
  return (
    <group name="Lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={'#495057'} //Seared Gre
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // penumbra is a doft edge shadow cast by a point source light
        decay={0}
        intensity={Math.PI * 0.2}
        color={'#f8f9fa'} //white
      />
      <spotLight
        position={[10, -25, 10]}
        angle={0.15}
        penumbra={1} // penumbra is a doft edge shadow cast by a point source light
        decay={0}
        intensity={Math.PI * 0.2}
        color={'#f8f9fa'} //white
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1} // penumbra is a doft edge shadow cast by a point source light
        decay={0}
        intensity={Math.PI * 3}
      />
    </group>
  )
}
export default Lights
