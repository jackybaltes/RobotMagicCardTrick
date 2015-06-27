/**
 * Created by yuihjk003 on 6/27/2015.
 */

var resourcesLoading = 0;

sounds = [
    [ "Media/Black Card.wav", [ [0,1] ], null ],
    [ "Media/Red Card.wav", [ [0,1] ], null ]
];

function loadSound(soundSrc) {
    //alert("Starting to load a sound");
    resourcesLoading++;

    var loaded = false;

    var soundFile = document.createElement("audio");
    console.log(soundFile);
    soundFile.autoplay = false;
    soundFile.preload = true;

    var src = document.createElement("source");
    src.src = soundSrc; // + ".wav";
    soundFile.appendChild(src);

    function onLoad() {
        loaded = true;

        soundFile.removeEventListener("canplaythrough", onLoad, true);
        soundFile.removeEventListener("error", onError, true);

        //CODE GOES HERE
        //alert("A sound has been loaded");
        resourcesLoading--;
        onResourceLoad();
    }

    //Attempt to reload the resource 5 times
    var retrys = 4;

    function onError( /* e */) {
        retrys--;

        if(retrys > 0) {
            soundFile.load();
        } else {
            loaded = true;

            soundFile.removeEventListener("canplaythrough", onLoad, true);
            soundFile.removeEventListener("error", onError, true);

            alert("A sound has failed to loaded");
            resourcesLoading--;
            onResourceLoad();
        }
    }

    soundFile.addEventListener("canplaythrough", onLoad, true);
    soundFile.addEventListener("error", onError, true);

    return soundFile;
}

function onResourceLoad() {
    if(resourcesLoading == 0)
        onLoaded();
}

function loadSounds() {
    var length = sounds.length;
    for( var i = 0; i < length; i++ ) {
        console.log("Loading sound " + sounds[i][0]);
        sounds[i][2] = loadSound(sounds[i][0])
    }
}

function onLoaded() {
    sounds[0][2].play()
}