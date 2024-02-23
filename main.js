import './style.css'
import * as THREE from 'three'
import { setGlobe, setOrbitControls, setPerspectiveCamera, setPointLight, setWebGLRenderer } from './helpers/scene.js'

let { innerWidth: width, innerHeight: height } = window

const scene = new THREE.Scene()

setGlobe({ scene })
setPointLight({ scene })
const { camera } = setPerspectiveCamera({ scene, width, height })
const { canvas, renderer } = setWebGLRenderer({ scene, camera, width, height })
const { controls } = setOrbitControls({ camera, canvas })

// Resize
window.addEventListener('resize', ()=> {
  width = window.innerWidth
  height = window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
})

const loop = ()=> {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()