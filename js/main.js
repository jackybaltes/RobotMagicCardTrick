/**
 * Created by yuihjk003 on 6/27/2015.
 */

var resourcesLoading = 0;

sounds = {
    root :{ name: null,
            clips: [],
            audio: null,
            children:{ name: "Media/Introduction.wav", clips: [ { start: 0, end: 0} ], audio: null,
                children: [
                    { name: "Media/Black Card.wav",
                        clips: [ { start: 0, end: 1}, { start: 1, end: 3}, { start: 3, end: 5}, { start: 5, end: 7} ],
                        audio: null,
                        children: null }, // Sounds must have full second resolution for start and duration
                    { name: "Media/Red Card.wav",
                        clips: [ { start: 0, end: 1}, { start: 1, end: 3}, { start: 3, end: 5}, { start: 5, end: 7} ],
                        audio: null,
                        children: null }
            }
        }
};

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
        writeMessage(controller, "The robot will ask you questions about your card.\nYou can say Yes or No,\nyou can tell the truth or lie,\nor you can be quiet.\nJust make sure that you look at the robot." )
        playGame();
}

function loadSounds( node ) {
    if ( ( node != null ) && ( node.name != null ) ) {
        node.audio = loadSound( node.name );
    }

    if ( children != null ) {
        var length = node.children.length;
        for (var i = 0; i < length; i++) {
            loadSounds( node.children[i]);
        }
    }
}

function playGame() {
    playRandomSound(sounds.root);
}

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.font = '18pt Calibri';
    context.fillStyle = 'antiquewhite';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}

function getMousePos( canvas, evt ) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var mousePos = {x: 400, y: 100};

function onDocumentLoaded() {
    var controller = document.getElementById('controller');
    console.log("controller " + controller);

    controller.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(controller, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(controller, message);
    }, false);

    loadSounds(sounds.root);
}

var currentSound = null;

function playRandomSound( node ) {
    var arr = [];
    var numChildren = 2;

    if ( node.children != null ) {
        numChildren = node.children.length + 2;
    }

    var bwidth = controller.width / numChildren;
    var index = Math.floor( mousePos.x / bwidth )

    for( var i = 0; i < node.children.length; i++ ) {
        if ( (sounds[i].state >= state + min ) && ( sounds[i].state < state + max ) ) {
            console.log("Found sound file " + sounds[i].name );
            for( var j = 0; j < sounds[i].clips.length; j++ ) {
                if ( sounds[i].clips[j].end != 0 ) {
                    length = ( sounds[i].clips[j].end - sounds[i].clips[j].start ) * 1000;
                }  else {
                    length = ( sounds[i].audio.duration - sounds[i].clips[j].start ) * 1000;
                }
                arr.push( { audio: sounds[i].audio, start: sounds[i].clips[j].start, timeout: length } )
            }
        }
    }



    console.log("Found the following number of options " + arr.length )
    if ( currentSound != null ) {
        currentSound.audio.pause();
    }

    currentSound = arr[Math.floor(Math.random() * arr.length)];
    if ( currentSound != null ) {
        console.log("Playing this sound " + currentSound.audio.src)

        currentSound.audio.currentTime = currentSound.start;
        currentSound.audio.play();
        setTimeout(playRandomSound(), currentSound.duration);
    }
}