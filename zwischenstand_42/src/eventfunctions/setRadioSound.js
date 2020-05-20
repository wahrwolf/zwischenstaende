function setRadioSound(event) {

    radioFromFile.sounds.get("white_noise").pause();
    radioFromFile.sounds.get("low_frequency").pause();
    radioFromFile.sounds.get("high_frequency").pause();

    if (radioFromFile.state.powerOn) {

        var volume = 0.3;
        if (radioFromFile.state.volumeHigh) {
            volume = 1.0;
        }

        if (radioFromFile.state.antennaOut) {

            if (radioFromFile.state.markerRight) {
                radioFromFile.sounds.get("high_frequency").setVolume(volume);
                radioFromFile.sounds.get("high_frequency").play();
            } else {
                radioFromFile.sounds.get("low_frequency").setVolume(volume);
                radioFromFile.sounds.get("low_frequency").play();
            }

        } else {
            radioFromFile.sounds.get("white_noise").setVolume(volume);
            radioFromFile.sounds.get("white_noise").play();
        }

    } else {

        // Do nothing
    }
}