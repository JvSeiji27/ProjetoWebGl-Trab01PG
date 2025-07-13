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
