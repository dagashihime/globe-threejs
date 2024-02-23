import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const setGlobe = ({ scene })=> {
    const geometry = new THREE.SphereGeometry(3, 64, 64)
    const matetrial = new THREE.MeshStandardMaterial({
        color: 'grey'
    })
    const mesh = new THREE.Mesh(geometry, matetrial)
    scene.add(mesh)
}

const setOrbitControls = ({ camera, canvas })=> {
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 5

    return { controls }
}

const setPointLight = ({ scene })=> {
    const light = new THREE.PointLight(0xffffff, 100, 100)
    light.position.set(30, 0, 0)
    scene.add(light)
}

const setPerspectiveCamera = ({ scene, width, height })=> {
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 20
    scene.add(camera)

    return { camera }
}

const setWebGLRenderer = ({ scene, camera, width, height })=> {
    const canvas = document.createElement('canvas')
    document.body.append(canvas)

    const renderer = new THREE.WebGLRenderer({ 
    canvas,
    antialias: true
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(2)
    renderer.render(scene, camera)

    return { canvas, renderer }
}

export {
    setGlobe,
    setOrbitControls,
    setPointLight,
    setPerspectiveCamera,
    setWebGLRenderer
}