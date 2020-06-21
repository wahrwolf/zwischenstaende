document.write('<script type="text/javascript" src="../../lib/three.js-r113/build/three.js"></script>');

function main() {

    scene = new THREE.Scene();

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
    
    var kugelDrahtGeruest = new THREE.SphereGeometry(5, 10, 10);
    var kugelMaterial = new THREE.MashBasicMaterial({color: 0x0000ff, wireframe: true});
    var kugel = new THREE.Mesh(kugelDrahtGeruest, kugelMaterial);
    kugel.position.set(10, 5,-5);
    kugel.rotation.set(-90,0,0);
    scene.add(kugel);
    

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(30, 40, 50);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xffffff));

    document.getElementById("3d_content").appendChild(renderer.domElement);

    function mainLoop() {

        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }
    mainLoop();
    
}

window.onload = main;
