class RadioFromFile extends THREE.Group {

    constructor() {
        super();

        this.fbxLoader = new THREE.FBXLoader();
        this.animationMixer = null;
        this.animations = new Map();

        this.state = {
            powerOn: false,
            antennaOut: false,
            markerRight: false
        };

        this.load(this);
    }

    load(thisRadio) {

        this.fbxLoader.load("src/models/Radio/Radio.fbx", function (fbx) {

            fbx.traverse(function (child) {
                //console.log(child.name);
                if (child.name === "KorpusFBX" || child.name === "AntenneFBX" || child.name === "GriffFBX") {
                    child.castShadow = true;
                }
            });

            thisRadio.animationMixer = new THREE.AnimationMixer(fbx);
            for (var i = 0; i < fbx.animations.length; i++) {
                var action = thisRadio.animationMixer.clipAction(fbx.animations[i]);
                action.clampWhenFinished = true;
                action.setLoop(THREE.LoopOnce);
                thisRadio.animations.set(fbx.animations[i].name, action);
                //console.log(fbx.animations[i].name);
            }

            thisRadio.add(fbx);
        });
    }
}