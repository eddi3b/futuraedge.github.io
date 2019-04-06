/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Braket_Lanimation',
                            symbolName: 'Braket_Lanimation',
                            type: 'rect',
                            rect: ['52', '0', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '200px', '287px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Braket_Lanimation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'P2R2WEB_Bracket-07',
                            type: 'image',
                            rect: ['0px', '0px', '148px', '287px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/P2R2WEB_Bracket-07.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '148px', '287px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            300,
                            "swing",
                            "${P2R2WEB_Bracket-07}",
                            '0px',
                            '-51px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LeftBracket_edgeActions.js");
})("EDGE-338548447");
