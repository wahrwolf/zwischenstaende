class TableFromFile extends THREE.Group {

    constructor() {
        super();

        this.fbxLoader = new THREE.FBXLoader();

        this.load(this);
    }

    load(thisTable) {

        this.fbxLoader.load("src/models/Old_Table/Old_Table.fbx", function (fbx) {

            fbx.traverse(function (child) {
                //console.log(child.name);
            });

            thisTable.add(fbx);
        });
    }
}