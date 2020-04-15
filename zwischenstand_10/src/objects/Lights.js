class Lights {

    constructor() {

    }

    createAmbientLight(intensity) {
        var ambientLight = new THREE.AmbientLight(0xffffff);
        ambientLight.intensity = intensity;
        return ambientLight;
    }

    createSpotLight(posX, posY, posZ, intensity) {
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(posX, posY, posZ);
        spotLight.intensity = intensity;
        spotLight.target = scene;
        spotLight.angle = 60 * DEG_TO_RAD;
        spotLight.penumbra = 1;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        //spotLight.shadow.camera.aspect = 1;
        //spotLight.shadow.camera.near = 10;
        //spotLight.shadow.camera.far = 40;
        //scene.add(new THREE.CameraHelper(spotLight.shadow.camera));
        return spotLight;
    }
}