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
        } else if (firstHit.name === "AntenneFBX") {
            if (!radioFromFile.state.antennaOut && !radioFromFile.animations.get("Antenne_Action_einfahren").isRunning()) {
                radioFromFile.state.antennaOut = true;
                radioFromFile.animations.get("Antenne_Action_einfahren").stop();
                radioFromFile.animations.get("Antenne_Action_ausfahren").play();
            } else if (radioFromFile.state.antennaOut && !radioFromFile.animations.get("Antenne_Action_ausfahren").isRunning()) {
                radioFromFile.state.antennaOut = false;
                radioFromFile.animations.get("Antenne_Action_ausfahren").stop();
                radioFromFile.animations.get("Antenne_Action_einfahren").play();
            }
        } else if (firstHit.name === "TunerFBX") {
            if (!radioFromFile.state.markerRight && !radioFromFile.animations.get("Marker_Action_zurueck").isRunning()) {
                radioFromFile.state.markerRight = true;
                radioFromFile.animations.get("Marker_Action_zurueck").stop();
                radioFromFile.animations.get("Marker_Action_vor").play();
            } else if (radioFromFile.state.markerRight && !radioFromFile.animations.get("Marker_Action_vor").isRunning()) {
                radioFromFile.state.markerRight = false;
                radioFromFile.animations.get("Marker_Action_vor").stop();
                radioFromFile.animations.get("Marker_Action_zurueck").play();
            }
        }
    }
}