/**
 * Created by yuihjk003 on 6/27/2015.
 */

var resourcesLoading = 0;

stateTreeRoot = {
    name: null,
    clips: [],
    audio: null,
    children: [
        {
            name: "Media/Introduction.wav",
            clips: [{start: 0, end: 0}],
            audio: null,
            children: [
                {
                    name: "Media/Black Card.wav",
                    clips: [{start: 0, end: 1}, {start: 1, end: 3}, {start: 3, end: 5}, {start: 5, end: 7}],
                    audio: null,
                    children: [
                        {
                            name: "Media/Face Card.wav",
                            clips: [{start: 0, end: 3}, {start: 2, end: 5}, {start: 5, end: 8}],
                            audio: null,
                            children: [
                                {
                                    name: "Media/King.wav",
                                    clips: [{start: 0, end: 3}, {start: 2, end: 5}, {start: 5, end: 8}],
                                    audio: null,
                                    children: null
                                },
                                {
                                    name: "Media/Queen.wav",
                                    clips: [{start: 0, end: 3}, {start: 3, end: 7}, {start: 6, end: 10}],
                                    audio: null,
                                    children: null
                                },
                                {
                                    name: "Media/Jack.wav",
                                    clips: [{start: 0, end: 3}, {start: 2, end: 5}, {start: 5, end: 8}],
                                    audio: null,
                                    children: null
                                },
                                {
                                    name: "Media/Ace.wav",
                                    clips: [{start: 0, end: 3}, {start: 3, end: 7}, {start: 6, end: 10}],
                                    audio: null,
                                    children: null
                                }
                            ]
                        },
                        {
                            name: "Media/Number Card.wav",
                            clips: [{start: 0, end: 3}, {start: 3, end: 7}, {start: 6, end: 10}],
                            audio: null,
                            children: null
                        }
                    ]
                }, // Sounds must have full second resolution for start and duration
                {
                    name: "Media/Red Card.wav",
                    clips: [{start: 0, end: 1}, {start: 1, end: 3}, {start: 3, end: 5}, {start: 5, end: 7}],
                    audio: null,
                    children: [
                        {
                            name: "Media/Face Card.wav",
                            clips: [{start: 0, end: 3}, {start: 2, end: 5}, {start: 5, end: 8}],
                            audio: null,
                            children: null
                        },
                        {
                            name: "Media/Number Card.wav",
                            clips: [{start: 0, end: 3}, {start: 3, end: 7}, {start: 6, end: 10}],
                            audio: null,
                            children: null
                        }
                    ]
                }
            ]
        }
    ]
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

    function onError(/* e */) {
        retrys--;

        if (retrys > 0) {
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
    if (resourcesLoading == 0) {
        writeMessage(controller, "The robot will ask you questions about your card.\nYou can say Yes or No,\nyou can tell the truth or lie,\nor you can be quiet.\nJust make sure that you look at the robot.");
        playGame();
    }
}

function loadSounds(node) {
    if (( node != null ) && ( node.name != null )) {
        node.audio = loadSound(node.name);
    }

    if (node.children != null) {
        var length = node.children.length;
        for (var i = 0; i < length; i++) {
            loadSounds(node.children[i]);
        }
    }
}

function playGame() {
    currentNode = stateTreeRoot;
    playRandomSound();
}

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var mousePos;
var prevMousePos;
var gestureDown = false;
var gestureUp = false;

function onDocumentLoaded() {
    var controller = document.getElementById('controller');
    console.log("controller " + controller);
    prevMousePos = {x: controller.width / 2, y: controller.height / 2};
    mousePos = prevMousePos;

    controller.addEventListener('mousemove', function (evt) {
        prevMousePos = mousePos;
        mousePos = getMousePos(controller, evt);
        if (( prevMousePos.y < 2 * controller.height / 3 ) && ( mousePos.y > 2 * controller.height / 3)) {
            gestureUp = false;
            gestureDown = true;
        } else if (( prevMousePos.y >= controller.height / 3 ) && ( mousePos.y < controller.height / 3)) {
            gestureDown = false;
            gestureUp = true;
        }
    }, false);

    var context = controller.getContext('2d');
    context.fillStyle = 'antiquewhite';
    context.fillRect(0, 0, controller.width, controller.height);

    loadSounds(stateTreeRoot);
}

var currentSound = null;

var currentNode = null;

function FindParent( tree, node ) {
    parent = null;
    if ( tree.children != null ) {
        for( var i = 0; i < tree.children.length; i++ ) {
            if ( node == tree.children[i] ) {
                parent = tree;
                return parent;
            }
        }

        var pchild;
        for( var i = 0; i < tree.children.length; i++ ) {
            pchild = FindParent( tree.children[i], node );
            if ( pchild != null ) {
                parent = pchild;
                return parent;
            }
        }
    }
    return null;
}

function playRandomSound() {
    if (currentNode == null) {
        currentNode = stateTreeRoot;
    }
    var node = currentNode;

    if (node != null) {
        console.log("Working on node " + node.name);
        var arr = [];
        var numBlocks = 1;

        if (node.children != null) {
            var incr;
            if (node.children.length == 1) {
                incr = 0;
            } else if (node.children.length % 2 == 0) {
                incr = 1;
            } else {
                incr = 2;
            }
            numBlocks = node.children.length + incr;

            var bwidth = controller.width / numBlocks;
            var index = Math.floor(mousePos.x / bwidth);
            var nextNode = currentNode;

            // numBlocks is odd
            var canvas = document.getElementById('controller');
            var context = canvas.getContext('2d');
            var skip = numBlocks - node.children.length;
            console.log('skip ' + skip);
            var lower = Math.floor(numBlocks / 2);
            var upper = Math.floor(numBlocks / 2) + skip;
            for (var i = 0; i < numBlocks; i++) {
                if (( i >= lower ) && ( i < upper )) {
                    if (i == lower) {
                        context.strokeStyle = 'green';
                        context.strokeRect(i * bwidth, controller.height / 3, skip * bwidth, controller.height / 3);
                    }
                } else {
                    context.strokeStyle = 'red';
                    context.strokeRect(i * bwidth, controller.height / 3, bwidth, controller.height / 3);
                }
            }

            console.log("limits " + index + " " + lower + " " + upper);
            if (( index >= lower ) && ( index < upper )) {
                for (var i = 0; i < node.children.length; i++) {
                    for (var j = 0; j < node.children[i].clips.length; j++) {
                        if (node.children[i].clips[j].end != 0) {
                            length = ( node.children[i].clips[j].end - node.children[i].clips[j].start ) * 1000;
                        } else {
                            length = ( node.children[i].audio.duration - node.children[i].clips[j].start ) * 1000;
                        }
                        arr.push({
                            audio: node.children[i].audio,
                            start: node.children[i].clips[j].start,
                            timeout: length
                        })
                    }
                }
                if (gestureUp) {
                    parent = FindParent(stateTreeRoot, node, stateTreeRoot);
                    nextNode = parent;
                    gestureUp = false;
                }
            } else {
                if (index >= upper) {
                    index = index - skip;
                }
                for (var j = 0; j < node.children[index].clips.length; j++) {
                    if (node.children[index].clips[j].end > 0) {
                        length = ( node.children[index].clips[j].end - node.children[index].clips[j].start ) * 1000;
                    } else {
                        length = ( node.children[index].audio.duration - node.children[index].clips[j].start ) * 1000;
                    }
                    arr.push({
                        audio: node.children[index].audio,
                        start: node.children[index].clips[j].start,
                        timeout: length
                    })
                }
                if (gestureDown) {
                    nextNode = node.children[index];
                    gestureDown = false;
                } else {
                    nextNode = currentNode;
                }
            }
        }
        console.log("Found the following number of options " + arr.length);
        if (currentSound != null) {
            currentSound.audio.pause();
            currentSound.audio.currentTime = 0;
        }

        currentSound = arr[Math.floor(Math.random() * arr.length)];
        if (currentSound != null) {
            if (currentNode == nextNode) {
                console.log("Playing this sound " + currentSound.audio.currentSrc + " from time " + currentSound.start + " for " + currentSound.timeout)

                currentSound.audio.currentTime = currentSound.start;
                currentSound.audio.play();
                setTimeout(playRandomSound, currentSound.timeout);
            } else {
                console.log("Moving to next node " + nextNode.name);
                currentNode = nextNode;
                setTimeout(playRandomSound, 10);
            }
        }
    }
}
