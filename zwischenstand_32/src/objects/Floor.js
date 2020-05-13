class Floor extends THREE.Mesh {

    constructor(dimX, dimY, segments) {
        super();

        var floorGeometry = new THREE.PlaneGeometry(dimX, dimY);
        var floorMaterial = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            roughness: 0.4,
            metalness: 0.0
        });

        var floorTexture = new THREE.TextureLoader().load("src/images/checker.png");

        floorTexture.repeat.set(segments / 2, segments / 2);
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;

        floorMaterial.map = floorTexture;

        var floor = new THREE.Mesh(floorGeometry, floorMaterial);

        this.geometry = floorGeometry;

        this.material = floorMaterial;

        this.rotation.x = -90 * DEG_TO_RAD;

        this.receiveShadow = true;
    }
}