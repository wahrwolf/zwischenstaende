class RadioFromFile extends THREE.Group {

    constructor() {
        super();

        this.fbxLoader = new THREE.FBXLoader();

        this.load(this);
    }

    load(thisRadio) {

        this.fbxLoader.load("src/models/Radio/Radio.fbx", function (fbx) {

            fbx.traverse(function (child) {
                console.log(child.name);
            });

            thisRadio.add(fbx);
        });
    }
}