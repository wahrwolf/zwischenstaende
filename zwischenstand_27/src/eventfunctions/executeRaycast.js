raycaster = new THREE.Raycaster();

function executeRaycast(event) {

    raycaster.setFromCamera(mousePosition, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {

        var firstHit = intersects[0].object;

        if (firstHit.name === "Einschalter" || firstHit.name === "Antenne") {
            firstHit.userData.toggleEndPosition();
        } else if (firstHit.name === "Tuner") {
            firstHit.userData.forward = !firstHit.userData.forward;
            if (firstHit.userData.forward) {
                firstHit.userData.backwardTween.stop();
                firstHit.userData.forwardTween.start();
            } else {
                firstHit.userData.forwardTween.stop();
                firstHit.userData.backwardTween.start();
            }
        }

        if (firstHit.name === "EinschalterFBX") {
            if (!radioFromFile.state.powerOn && !radioFromFile.animations.get("Einschalter_Action_aus").isRunning()) {
                radioFromFile.state.powerOn = true;
                radioFromFile.animations.get("Einschalter_Action_aus").stop();
                radioFromFile.animations.get("Einschalter_Action_ein").play();
            } else if (radioFromFile.state.powerOn && !radioFromFile.animations.get("Einschalter_Action_ein").isRunning()) {
                radioFromFile.state.powerOn = false;
                radioFromFile.animations.get("Einschalter_Action_ein").stop();
                radioFromFile.animations.get("Einschalter_Action_aus").play();
            }
        }
    }
}