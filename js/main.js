/**
 * Created by yuihjk003 on 6/27/2015.
 */

var resourcesLoading = 0;

cards = [ ];

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
                                    clips: [{start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 7}],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Spade.wav",
                                            clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                            audio: null,
                                            children: null,
                                            card: 6
                                        },
                                        {
                                            name: "Media/Clubs.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                            audio: null,
                                            children: null,
                                            card: 5
                                        }
                                    ]
                                },
                                {
                                    name: "Media/Queen.wav",
                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 7} ],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Spade.wav",
                                            clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                            audio: null,
                                            children: null,
                                            card: 10
                                        },
                                        {
                                            name: "Media/Clubs.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                            audio: null,
                                            children: null,
                                            card: 9,
                                        }
                                    ]
                                },
                                {
                                    name: "Media/Jack.wav",
                                    clips: [{start: 0, end: 3}, {start: 2, end: 6}, {start: 6, end: 9}],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Spade.wav",
                                            clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                            audio: null,
                                            children: null,
                                            card: 14
                                        },
                                        {
                                            name: "Media/Clubs.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                            audio: null,
                                            children: null,
                                            card: 15
                                        }
                                    ]
                                },
                                {
                                    name: "Media/Ace.wav",
                                    clips: [{start: 0, end: 3}, {start: 3, end: 6}, {start: 6, end: 9}],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Spade.wav",
                                            clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                            audio: null,
                                            children: null,
                                            card: 2
                                        },
                                        {
                                            name: "Media/Clubs.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                            audio: null,
                                            children: null,
                                            card: 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Media/Number Card.wav",
                            clips: [{start: 0, end: 3}, {start: 3, end: 7}, {start: 6, end: 10}],
                            audio: null,
                            children: [
                                {
                                    name: "Media/Low Numbered Card.wav",
                                    clips: [{start: 0, end: 4}, {start: 3, end: 7}, {start: 6, end: 10}, {start: 10, end: 14} ],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Two.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 6} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 50

                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 49
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Three.wav",
                                            clips: [ {start: 0, end: 3}, {start: 2, end: 6} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 46
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 45
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Four.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 6} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 42
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 41
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Five.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 5}, {start: 5, end: 7}],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 38
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 37
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Media/High Numbered Card.wav",
                                    clips: [ {start: 0, end: 6}, {start: 5, end: 8}, {start: 8, end: 11} ],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Six.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 6}, {start: 6, end: 9} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 34

                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 33
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Seven.wav",
                                            clips: [ {start: 0, end: 3}, {start: 3, end: 5} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 30
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 29
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Eight.wav",
                                            clips: [{start: 0, end: 2}, {start: 2, end: 4} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 26
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 25
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Nine.wav",
                                            clips: [{start: 0, end: 4}, {start: 3, end: 7} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 22
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 21
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Ten.wav",
                                            clips: [{start: 0, end: 3}, {start: 2, end: 5} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Spade.wav",
                                                    clips: [{start: 0, end: 2}, {start: 2, end: 5}, {start: 4, end: 7}],
                                                    audio: null,
                                                    children: null,
                                                    card: 18
                                                },
                                                {
                                                    name: "Media/Clubs.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 17
                                                }
                                            ]
                                        }

                                    ]
                                }
                            ]
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
                            children: [
                                {
                                    name: "Media/King.wav",
                                    clips: [{start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 7}],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Diamond.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                            audio: null,
                                            children: null,
                                            card: 8
                                        },
                                        {
                                            name: "Media/Hearts.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                            audio: null,
                                            children: null,
                                            card: 7
                                        }
                                    ]
                                },
                                {
                                    name: "Media/Queen.wav",
                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 7} ],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Diamond.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                            audio: null,
                                            children: null,
                                            card: 12
                                        },
                                        {
                                            name: "Media/Hearts.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                            audio: null,
                                            children: null,
                                            card: 11
                                        }
                                    ]
                                },
                                {
                                    name: "Media/Jack.wav",
                                    clips: [{start: 0, end: 3}, {start: 2, end: 6}, {start: 6, end: 9}],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Diamond.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                            audio: null,
                                            children: null,
                                            card: 16
                                        },
                                        {
                                            name: "Media/Hearts.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                            audio: null,
                                            children: null,
                                            card: 15
                                        }
                                    ]
                                },
                                {
                                    name: "Media/Ace.wav",
                                    clips: [{start: 0, end: 3}, {start: 3, end: 6}, {start: 6, end: 9}],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Diamond.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                            audio: null,
                                            children: null,
                                            card: 4
                                        },
                                        {
                                            name: "Media/Hearts.wav",
                                            clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                            audio: null,
                                            children: null,
                                            card: 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Media/Number Card.wav",
                            clips: [{start: 0, end: 3}, {start: 3, end: 7}, {start: 6, end: 10}],
                            audio: null,
                            children: [
                                {
                                    name: "Media/Low Numbered Card.wav",
                                    clips: [{start: 0, end: 4}, {start: 3, end: 7}, {start: 6, end: 10}, {start: 10, end: 14} ],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Two.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 6} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 52
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 51
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Three.wav",
                                            clips: [ {start: 0, end: 3}, {start: 2, end: 6} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 48
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 47
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Four.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 6} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 44
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 43
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Five.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 5}, {start: 5, end: 7}],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 40
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 39
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Media/High Numbered Card.wav",
                                    clips: [ {start: 0, end: 6}, {start: 5, end: 8}, {start: 8, end: 11} ],
                                    audio: null,
                                    children: [
                                        {
                                            name: "Media/Six.wav",
                                            clips: [{start: 0, end: 3}, {start: 3, end: 6}, {start: 6, end: 9} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 36
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 35
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Seven.wav",
                                            clips: [ {start: 0, end: 3}, {start: 3, end: 5} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 32
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 31
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Eight.wav",
                                            clips: [{start: 0, end: 2}, {start: 2, end: 4} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 28
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 27
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Nine.wav",
                                            clips: [{start: 0, end: 4}, {start: 3, end: 7} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 24
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 23
                                                }
                                            ]
                                        },
                                        {
                                            name: "Media/Ten.wav",
                                            clips: [{start: 0, end: 3}, {start: 2, end: 5} ],
                                            audio: null,
                                            children: [
                                                {
                                                    name: "Media/Diamond.wav",
                                                    clips: [{start: 0, end: 3}, {start: 3, end: 5} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 20
                                                },
                                                {
                                                    name: "Media/Hearts.wav",
                                                    clips: [ {start: 0, end: 2}, {start: 2, end: 4}, {start: 4, end: 6} ],
                                                    audio: null,
                                                    children: null,
                                                    card: 19
                                                }
                                            ]
                                        }

                                    ]
                                }
                            ]
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

function loadImage(imageSrc) {
    resourcesLoading++;

    var loaded = false;

    var img = new Image();
    img.onload = function() {
        resourcesLoading--;
        onResourceLoad();
    }
    img.src = imageSrc;
    return img;
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
    loadCards();
    loadSounds(stateTreeRoot);
}

function loadCards() {
    for( var i = 1; i < 53; i++ ) {
        img = loadImage( "Cards/" + i + ".png");
        cards.push(img);
    }
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

            context.fillStyle = 'antiquewhite';
            context.fillRect(0, controller.height / 3 - 1, controller.width, controller.height / 3 + 1);

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
            console.log("Found the following number of options " + arr.length);
            if (currentSound != null) {
                currentSound.audio.pause();
                currentSound.audio.currentTime = 0;
                currentSound = null;
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
        } else {
            var cardaudio = document.getElementById("cardaudio");
            cardaudio.addEventListener( 'ended', function () {
                var card = document.getElementById("card");
                ctx = card.getContext("2d");
                ctx.drawImage( cards[node.card - 1], 0, 0, card.width, card.height );
            });
            cardaudio.play();
        }
    }
}
