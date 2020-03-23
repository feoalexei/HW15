const scene = new THREE.Scene(); //eslint-disable-line

const fov = 70;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far); //eslint-disable-line

const loader = new THREE.TextureLoader(); //eslint-disable-line

const renderer = new THREE.WebGLRenderer({antialias: true}); //eslint-disable-line
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('midnightblue');
document.body.prepend(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement); //eslint-disable-line

const geometry = new THREE.TorusBufferGeometry( 5, 2, 32, 200); //eslint-disable-line
const material = new THREE.MeshBasicMaterial({  //eslint-disable-line
    // {color: 'lightskyblue'}
    map: loader.load('https://media-exp1.licdn.com/dms/image/C4D1BAQEOxpPzwAFP0Q/company-background_10000/0?e=2159024400&v=beta&t=E2mvPECFIQRxU2rEUNEe8Wto3QdSasTesToTIT8ZBRU'), //eslint-disable-line
});
const tor = new THREE.Mesh(geometry, material); //eslint-disable-line
tor.scale.set(8, 8, 8); //eslint-disable-line
tor.rotation.x = 3;
tor.rotation.z = 5;
scene.add(tor);

controls.update();

camera.position.z = 150;

const color = '#fff';
const intensity = 0.5;

const light = new THREE.DirectionalLight(color, intensity); //eslint-disable-line

light.position.set(-1, 2, 4); //eslint-disable-line

scene.add(light);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    tor.rotation.x += 0.01;
    tor.rotation.y += 0.01;
}

animate();