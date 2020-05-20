class BowlFromFile extends THREE.Group {

    constructor() {
        super();

        this.fbxLoader = new THREE.FBXLoader();

        this.load(this);
    }

    load(thisBowl) {

        this.fbxLoader.load("src/models/Bowl/Bowl.fbx", function (fbx) {

            fbx.traverse(function (child) {
                //console.log(child.name);
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                    child.castShadow = true;
                }
            });

            thisBowl.add(fbx);
        });
    }
}