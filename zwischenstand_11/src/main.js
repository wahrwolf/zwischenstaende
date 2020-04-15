// External libraries
document.write('<script type="text/javascript" src="../../lib/three.js-r113/build/three.js"></script>');
document.write('<script type="text/javascript" src="../../lib/three.js-r113/examples/js/controls/OrbitControls.js"></script>');
document.write('<script type="text/javascript" src="../../lib/dat.gui-0.7.7/build/dat.gui.js"></script>');

// Own modules
document.write('<script type="text/javascript" src="src/objects/Primitives.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Lights.js"></script>');

const DEG_TO_RAD = Math.PI / 180;

function main() {

    scene = new THREE.Scene();

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    var primitives = new Primitives();
    var cubeSphereGroup = new THREE.Group();
    cubeSphereGroup.add(primitives.createCube(5, 5, 5, -5, 3, 5, true, false));
    cubeSphereGroup.add(primitives.createSphere(5, 10, 10, 10, 5, -5, true, false));
    scene.add(cubeSphereGroup);
    scene.add(primitives.createPlane(40, 40, 0, 0, 0, false, true));

    var lights = new Lights();
    scene.add(lights.createAmbientLight(0.5));
    var spotLight = lights.createSpotLight(15, 20, 20, 0.8);
    scene.add(spotLight);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(30, 40, 50);
    camera.lookAt(0, 0, 0);

    var gui = new dat.GUI();
    gui.add(cubeSphereGroup.position, "x", -50, 50);
    gui.add(cubeSphereGroup.position, "y", -50, 50);
    gui.add(cubeSphereGroup.position, "z", -50, 50);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.shadowMap.enabled = true;

    document.getElementById("3d_content").appendChild(renderer.domElement);

    var orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControls.target = new THREE.Vector3(0, 0, 0);

    function mainLoop() {

        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }

    mainLoop();
}

window.onload = main;