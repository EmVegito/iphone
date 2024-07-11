import { yellowImg } from '../utils'
import { models, sizes } from '../constants'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { animateWithGsapTimeline } from '../utils/animation'
import * as THREE from 'three'
import ModelView from './ModelView'
import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Model = () => {
  const [size, setSize] = useState('small')

  const [model, setModel] = useState({
    id: 1,
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  })

  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()

  const small = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())

  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  const t1 = gsap.timeline()

  useEffect(() => {
    if (size === large) {
      animateWithGsapTimeline(t1, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2,
      })
    }
    if (size === small) {
      animateWithGsapTimeline(t1, large, largeRotation, '#view1', '#view2', {
        transform: 'translateX(0)',
        duration: 2,
      })
    }
  }, [size])

  gsap.to('#heading', {
    y: 0,
    opacity: 1,
  })

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              Style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm mb-5 text-center">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container mx-2">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="size-btn-container w-[30]">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Model
