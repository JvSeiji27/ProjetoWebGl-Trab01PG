import * as THREE from 'three';

// Aqui criamos a cena e o renderizador
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#webgl-canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Colocamos um fundo com estrelas (textura)
const starfieldTexture = new THREE.TextureLoader().load('./textures/8k_stars_milky_way.jpg');
const starfieldGeometry = new THREE.SphereGeometry(500, 64, 64);
const starfieldMaterial = new THREE.MeshBasicMaterial({ map: starfieldTexture, side: THREE.BackSide, depthWrite: false });
const starfield = new THREE.Mesh(starfieldGeometry, starfieldMaterial);
scene.add(starfield);

// Melhora na iluminação
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x404040, 0.4);
scene.add(hemisphereLight);

const pointLight = new THREE.PointLight(0xFFFFFF, 3, 500);
pointLight.position.set(0, 0, 0);
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
scene.add(pointLight);

// Diferentes câmeras, uma mais ampla e uma focando mais na terra/lua
const mainCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
mainCamera.position.set(0, 20, 50);
mainCamera.lookAt(0, 0, 0);

const earthFollowCamera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
let activeCamera = mainCamera;

// SOL COM SHADER PERSONALIZADO
const sunMaterial = new THREE.ShaderMaterial({
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        precision mediump float;
        uniform float uTime;
        varying vec2 vUv;
        float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
        void main() {
            vec2 uv = vUv; float noise = 0.0;
            noise += 0.5 * random(uv * 5.0 + uTime * 0.1);
            noise += 0.25 * random(uv * 10.0 + uTime * 0.2);
            noise += 0.125 * random(uv * 20.0 + uTime * 0.3);
            vec3 baseColor = vec3(1.0, 0.7, 0.0); vec3 spotColor = vec3(1.0, 0.2, 0.0);
            vec3 finalColor = mix(baseColor, spotColor, noise);
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `,
    uniforms: { uTime: { value: 0.0 } }
});
const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(0, 0, 0);
scene.add(sun);
