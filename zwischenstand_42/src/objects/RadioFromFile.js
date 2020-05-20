class RadioFromFile extends THREE.Group {

    constructor() {
        super();

        this.fbxLoader = new THREE.FBXLoader();
        this.animationMixer = null;
        this.animations = new Map();

        this.sounds = new Map();

        this.state = {
            powerOn: false,
            antennaOut: false,
            markerRight: false,
            volumeHigh: false
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

            thisRadio.animationMixer.addEventListener("finished", setRadioSound);

            thisRadio.add(fbx);
        });
    }

    loadSounds(soundscape) {

        var white_noise = soundscape.createSound("src/sound/files/white_noise.mp3", 10, true);
        this.sounds.set("white_noise", white_noise);
        this.add(white_noise);

        var sound_01 = soundscape.createSound("src/sound/files/sound_01.mp3", 10, true);
        this.sounds.set("low_frequency", sound_01);
        this.add(sound_01);

        var sound_02 = soundscape.createSound("src/sound/files/sound_02.mp3", 10, true);
        this.sounds.set("high_frequency", sound_02);
        this.add(sound_02);
    }
}