function setRadioSound(event) {

    if (radioFromFile.state.powerOn) {

        console.log("\nRadio is on.");

        if (radioFromFile.state.volumeHigh) {
            console.log("Volume is high.");
        } else {
            console.log("Volume is low.");
        }

        if (radioFromFile.state.antennaOut) {

            if (radioFromFile.state.markerRight) {
                console.log("Playing high frequency sound.");
            } else {
                console.log("Playing low frequency sound.");
            }

        } else {
            console.log("Playing white noise.");
        }

    } else {
        console.log("\nRadio is off.");
    }
}