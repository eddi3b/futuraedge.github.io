/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'futura-pt, sans-serif': '<script>  (function(d) {    var config = {      kitId: \'tce4gpu\',      scriptTimeout: 3000,      async: true    },    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/wf-loading/g,\"\")+\" wf-inactive\";},config.scriptTimeout),tk=d.createElement(\"script\"),f=false,s=d.getElementsByTagName(\"script\")[0],a;h.className+=\" wf-loading\";tk.src=\'https://use.typekit.net/\'+config.kitId+\'.js\';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!=\"complete\"&&a!=\"loaded\")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)  })(document);</script>'        },
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
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RightStart',
                            display: 'block',
                            type: 'image',
                            rect: ['668px', '12px', '148px', '287px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"P2R2WEBver1-LR-06.png",'0px','0px']
                        },
                        {
                            id: 'LStart',
                            display: 'block',
                            type: 'image',
                            rect: ['532px', '12px', '30px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"P2R2WEBver1-LR-07.png",'0px','0px']
                        },
                        {
                            id: 'OpeningBrackets',
                            symbolName: 'OpeningBrackets',
                            display: 'none',
                            type: 'rect',
                            rect: ['363px', '42', '495', '287', 'auto', 'auto'],
                            cursor: 'default'
                        },
                        {
                            id: 'NumbersPLACEHOLDER',
                            display: 'none',
                            type: 'image',
                            rect: ['-2px', '-221px', '1229px', '796px', 'auto', 'auto'],
                            clip: 'rect(220px 1229px 591px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Numbers.png",'0px','0px']
                        },
                        {
                            id: 'LettersPLACEHOLDER',
                            type: 'image',
                            rect: ['0px', '-220px', '1228px', '796px', 'auto', 'auto'],
                            clip: 'rect(220px 1228px 591px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Letters.png",'0px','0px']
                        },
                        {
                            id: 'StylePLACEHOLDER',
                            type: 'image',
                            rect: ['-2px', '-220px', '1228px', '796px', 'auto', 'auto'],
                            clip: 'rect(220px 1228px 591px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Style.png",'0px','0px']
                        },
                        {
                            id: 'HoverLeft_HOME',
                            symbolName: 'HoverLeft',
                            display: 'none',
                            type: 'rect',
                            rect: ['71px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverRight_HOME',
                            symbolName: 'HoverRight',
                            display: 'none',
                            type: 'rect',
                            rect: ['1006px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverLeft_ABOUT',
                            symbolName: 'HoverLeft',
                            display: 'none',
                            type: 'rect',
                            rect: ['71px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverRight_ABOUT',
                            symbolName: 'HoverRight',
                            display: 'none',
                            type: 'rect',
                            rect: ['1006px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverLeft_NUMBERS',
                            symbolName: 'HoverLeft',
                            display: 'none',
                            type: 'rect',
                            rect: ['71px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverRight_NUMBERS',
                            symbolName: 'HoverRight',
                            display: 'none',
                            type: 'rect',
                            rect: ['1006px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverLeft_LETTERS',
                            symbolName: 'HoverLeft',
                            display: 'none',
                            type: 'rect',
                            rect: ['71px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverRight_LETTERS',
                            symbolName: 'HoverRight',
                            display: 'none',
                            type: 'rect',
                            rect: ['1006px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverLeft_STYLE',
                            symbolName: 'HoverLeft',
                            display: 'none',
                            type: 'rect',
                            rect: ['71px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'HoverRight_STYLE',
                            symbolName: 'HoverRight',
                            display: 'none',
                            type: 'rect',
                            rect: ['1006px', '42px', '148', '287', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Forward',
                            display: 'block',
                            type: 'image',
                            rect: ['498px', '163px', '231px', '44px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Forward.png",'0px','0px']
                        },
                        {
                            id: 'HitRegion',
                            display: 'block',
                            type: 'rect',
                            rect: ['471px', '162px', '278px', '50px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'IamEMB_ForwardnessNefficiency_GrOFW',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['160px', '71px', '901px', '230px', 'auto', 'auto'],
                            source: [vid+"IamEMB_ForwardnessNefficiency_GrOFW.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'HomeBTN',
                            symbolName: 'HomeBTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['518px', '76px', '28', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            transform: [[],[],[],['0.85714']]
                        },
                        {
                            id: 'HomeBTN_ABOUT',
                            symbolName: 'HomeBTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['518px', '76px', '28', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            transform: [[],[],[],['0.85714']]
                        },
                        {
                            id: 'AboutBTN_HOME',
                            symbolName: 'About_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['554px', '76px', '28', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'AboutBTN_ABOUT',
                            symbolName: 'About_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['554px', '76px', '28', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'About_BTNRESET',
                            symbolName: 'About_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['554px', '76px', '28', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'Number_BTN',
                            symbolName: 'Number_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['593px', '76px', '41', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'NumberBTN_NUMBER',
                            symbolName: 'Number_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['593px', '76px', '41', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'Letters_BTN',
                            symbolName: 'Letters_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['645px', '76px', '31', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'Style_BTN',
                            symbolName: 'Style_BTN',
                            display: 'none',
                            type: 'rect',
                            rect: ['686px', '76px', '24', '13', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'TURA2',
                            display: 'none',
                            type: 'image',
                            rect: ['395px', '-40px', '402px', '402px', 'auto', 'auto'],
                            clip: 'rect(138px 359px 319px 45px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"TURA2.png",'0px','0px']
                        },
                        {
                            id: 'TURA22',
                            display: 'none',
                            type: 'image',
                            rect: ['579px', '-1px', '70px', '70px', 'auto', 'auto'],
                            clip: 'rect(23px 70px 58px 0px)',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"TURA2.png",'0px','0px'],
                            transform: [[],[],[],['1.49523','1.49523']]
                        },
                        {
                            id: 'About_Content',
                            symbolName: 'About_Content',
                            display: 'block',
                            type: 'rect',
                            rect: ['182', '371px', '864', '271', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1225px', '371px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(53,55,52,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 63500,
                    autoPlay: true,
                    labels: {
                        "Wait": 0,
                        "O": 1001,
                        "GO_HOME": 12250,
                        "HOME": 12250,
                        "HOME_END": 12750,
                        "About": 14000,
                        "About_End": 18877,
                        "Numbers": 19000,
                        "Number_End": 23877,
                        "Letters": 24000,
                        "Style": 29000,
                        "About_Reset": 60000,
                        "Home_Reset": 63000
                    },
                    data: [
                        [
                            "eid330",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${AboutBTN_ABOUT}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid331",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${AboutBTN_ABOUT}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid374",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${AboutBTN_ABOUT}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid332",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${AboutBTN_ABOUT}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid314",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid315",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid392",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid316",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid194",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${Number_BTN}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid271",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${Number_BTN}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid371",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${Number_BTN}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid291",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${Number_BTN}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid453",
                            "left",
                            5750,
                            0,
                            "swing",
                            "${StylePLACEHOLDER}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid474",
                            "opacity",
                            1001,
                            798,
                            "linear",
                            "${Forward}",
                            '1',
                            '0'
                        ],
                        [
                            "eid235",
                            "height",
                            14000,
                            500,
                            "swing",
                            "${RightStart}",
                            '287px',
                            '59px'
                        ],
                        [
                            "eid258",
                            "height",
                            19000,
                            500,
                            "swing",
                            "${RightStart}",
                            '59px',
                            '287px'
                        ],
                        [
                            "eid401",
                            "height",
                            60000,
                            500,
                            "swing",
                            "${RightStart}",
                            '287px',
                            '59px'
                        ],
                        [
                            "eid306",
                            "height",
                            63000,
                            500,
                            "swing",
                            "${RightStart}",
                            '59px',
                            '287px'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverLeft_NUMBERS}",
                            'none',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${HoverLeft_NUMBERS}",
                            'none',
                            'none'
                        ],
                        [
                            "eid262",
                            "display",
                            19500,
                            0,
                            "swing",
                            "${HoverLeft_NUMBERS}",
                            'none',
                            'block'
                        ],
                        [
                            "eid168",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${HoverLeft_NUMBERS}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "opacity",
                            12250,
                            500,
                            "swing",
                            "${TURA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            14000,
                            500,
                            "swing",
                            "${TURA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid324",
                            "opacity",
                            63000,
                            500,
                            "swing",
                            "${TURA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "opacity",
                            14000,
                            500,
                            "swing",
                            "${TURA22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid265",
                            "opacity",
                            19000,
                            500,
                            "swing",
                            "${TURA22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid385",
                            "opacity",
                            60000,
                            500,
                            "swing",
                            "${TURA22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "opacity",
                            63000,
                            500,
                            "swing",
                            "${TURA22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid427",
                            "display",
                            0,
                            0,
                            "swing",
                            "${About_BTNRESET}",
                            'none',
                            'none'
                        ],
                        [
                            "eid416",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${About_BTNRESET}",
                            'none',
                            'block'
                        ],
                        [
                            "eid417",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${About_BTNRESET}",
                            'block',
                            'none'
                        ],
                        [
                            "eid310",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${HomeBTN_ABOUT}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverLeft_LETTERS}",
                            'none',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${HoverLeft_LETTERS}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${HoverLeft_LETTERS}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "left",
                            0,
                            0,
                            "linear",
                            "${LStart}",
                            '363px',
                            '363px'
                        ],
                        [
                            "eid237",
                            "left",
                            14000,
                            500,
                            "swing",
                            "${LStart}",
                            '71px',
                            '532px'
                        ],
                        [
                            "eid251",
                            "left",
                            19000,
                            500,
                            "swing",
                            "${LStart}",
                            '532px',
                            '71px'
                        ],
                        [
                            "eid397",
                            "left",
                            60000,
                            500,
                            "swing",
                            "${LStart}",
                            '71px',
                            '532px'
                        ],
                        [
                            "eid301",
                            "left",
                            63000,
                            500,
                            "swing",
                            "${LStart}",
                            '532px',
                            '71px'
                        ],
                        [
                            "eid80",
                            "display",
                            11375,
                            0,
                            "linear",
                            "${Style_BTN}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid334",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid390",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid335",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid239",
                            "height",
                            14000,
                            500,
                            "swing",
                            "${LStart}",
                            '287px',
                            '59px'
                        ],
                        [
                            "eid254",
                            "height",
                            19000,
                            500,
                            "swing",
                            "${LStart}",
                            '59px',
                            '287px'
                        ],
                        [
                            "eid396",
                            "height",
                            60000,
                            500,
                            "swing",
                            "${LStart}",
                            '287px',
                            '59px'
                        ],
                        [
                            "eid300",
                            "height",
                            63000,
                            500,
                            "swing",
                            "${LStart}",
                            '59px',
                            '287px'
                        ],
                        [
                            "eid236",
                            "width",
                            14000,
                            500,
                            "swing",
                            "${RightStart}",
                            '148px',
                            '30px'
                        ],
                        [
                            "eid257",
                            "width",
                            19000,
                            500,
                            "swing",
                            "${RightStart}",
                            '30px',
                            '148px'
                        ],
                        [
                            "eid403",
                            "width",
                            60000,
                            500,
                            "swing",
                            "${RightStart}",
                            '148px',
                            '30px'
                        ],
                        [
                            "eid308",
                            "width",
                            63000,
                            500,
                            "swing",
                            "${RightStart}",
                            '30px',
                            '148px'
                        ],
                        [
                            "eid78",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${HomeBTN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${About_Content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid409",
                            "display",
                            14124,
                            0,
                            "swing",
                            "${About_Content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            19376,
                            0,
                            "swing",
                            "${About_Content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid412",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${About_Content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid413",
                            "display",
                            60500,
                            0,
                            "swing",
                            "${About_Content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            11375,
                            0,
                            "linear",
                            "${Letters_BTN}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverLeft_STYLE}",
                            'none',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${HoverLeft_STYLE}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${HoverLeft_STYLE}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${AboutBTN_HOME}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid273",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${AboutBTN_HOME}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid377",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${AboutBTN_HOME}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid294",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${AboutBTN_HOME}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid418",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${About_BTNRESET}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RightStart}",
                            '710px',
                            '710px'
                        ],
                        [
                            "eid233",
                            "left",
                            14000,
                            500,
                            "swing",
                            "${RightStart}",
                            '1006px',
                            '668px'
                        ],
                        [
                            "eid255",
                            "left",
                            19000,
                            500,
                            "swing",
                            "${RightStart}",
                            '668px',
                            '1006px'
                        ],
                        [
                            "eid402",
                            "left",
                            60000,
                            500,
                            "swing",
                            "${RightStart}",
                            '1006px',
                            '668px'
                        ],
                        [
                            "eid307",
                            "left",
                            63000,
                            500,
                            "swing",
                            "${RightStart}",
                            '668px',
                            '1006px'
                        ],
                        [
                            "eid76",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${Letters_BTN}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid206",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${HomeBTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid282",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${HomeBTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid456",
                            "top",
                            29000,
                            0,
                            "swing",
                            "${HomeBTN}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid393",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${HomeBTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid296",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${HomeBTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid74",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${Style_BTN}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid311",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${HomeBTN_ABOUT}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid312",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${HomeBTN_ABOUT}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid380",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${HomeBTN_ABOUT}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid313",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${HomeBTN_ABOUT}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid202",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${Style_BTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid283",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${Style_BTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid386",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${Style_BTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid288",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${Style_BTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid196",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${HomeBTN}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid275",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${HomeBTN}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid383",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${HomeBTN}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid295",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${HomeBTN}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid204",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${Letters_BTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid279",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${Letters_BTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid387",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${Letters_BTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid290",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${Letters_BTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid352",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${NumberBTN_NUMBER}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid353",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${NumberBTN_NUMBER}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid368",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${NumberBTN_NUMBER}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid354",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${NumberBTN_NUMBER}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid435",
                            "display",
                            24000,
                            0,
                            "swing",
                            "${LettersPLACEHOLDER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid436",
                            "display",
                            24500,
                            0,
                            "swing",
                            "${LettersPLACEHOLDER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid440",
                            "display",
                            29000,
                            0,
                            "swing",
                            "${LettersPLACEHOLDER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid441",
                            "display",
                            29500,
                            0,
                            "swing",
                            "${LettersPLACEHOLDER}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${AboutBTN_HOME}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid281",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${AboutBTN_HOME}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid391",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${AboutBTN_HOME}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid293",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${AboutBTN_HOME}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid405",
                            "top",
                            14124,
                            376,
                            "swing",
                            "${About_Content}",
                            '371px',
                            '100px'
                        ],
                        [
                            "eid407",
                            "top",
                            19000,
                            376,
                            "swing",
                            "${About_Content}",
                            '100px',
                            '371px'
                        ],
                        [
                            "eid411",
                            "top",
                            60000,
                            376,
                            "swing",
                            "${About_Content}",
                            '371px',
                            '100px'
                        ],
                        [
                            "eid193",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${Letters_BTN}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid269",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${Letters_BTN}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid366",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${Letters_BTN}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid289",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${Letters_BTN}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${HoverLeft_HOME}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            1799,
                            0,
                            "linear",
                            "${HoverLeft_HOME}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${HoverLeft_HOME}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${LStart}",
                            '42px',
                            '12px'
                        ],
                        [
                            "eid252",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${LStart}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid394",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${LStart}",
                            '42px',
                            '12px'
                        ],
                        [
                            "eid297",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${LStart}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverRight_STYLE}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${HoverRight_STYLE}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${HoverRight_STYLE}",
                            'block',
                            'none'
                        ],
                        [
                            "eid234",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${RightStart}",
                            '42px',
                            '12px'
                        ],
                        [
                            "eid256",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${RightStart}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid399",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${RightStart}",
                            '42px',
                            '12px'
                        ],
                        [
                            "eid303",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${RightStart}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${HoverRight_HOME}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            1799,
                            0,
                            "linear",
                            "${HoverRight_HOME}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${HoverRight_HOME}",
                            'block',
                            'none'
                        ],
                        [
                            "eid475",
                            "display",
                            1799,
                            0,
                            "linear",
                            "${Forward}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverRight_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${HoverRight_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${TURA2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            14500,
                            0,
                            "swing",
                            "${TURA2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid325",
                            "display",
                            63000,
                            0,
                            "swing",
                            "${TURA2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            1001,
                            0,
                            "easeInOutQuad",
                            "${HitRegion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid449",
                            "display",
                            29000,
                            0,
                            "swing",
                            "${StylePLACEHOLDER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid450",
                            "display",
                            29500,
                            0,
                            "swing",
                            "${StylePLACEHOLDER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid452",
                            "display",
                            33877,
                            0,
                            "swing",
                            "${StylePLACEHOLDER}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1001,
                            0,
                            "easeInOutQuad",
                            "${LStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${LStart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${LStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid259",
                            "display",
                            19500,
                            0,
                            "swing",
                            "${LStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid395",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${LStart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            63000,
                            0,
                            "linear",
                            "${LStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            63500,
                            0,
                            "swing",
                            "${LStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            11375,
                            0,
                            "linear",
                            "${AboutBTN_HOME}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${AboutBTN_HOME}",
                            'block',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${AboutBTN_HOME}",
                            'block',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverLeft_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${HoverLeft_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${Number_BTN}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid358",
                            "display",
                            0,
                            0,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            'none',
                            'none'
                        ],
                        [
                            "eid357",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            'none',
                            'block'
                        ],
                        [
                            "eid369",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid359",
                            "display",
                            0,
                            0,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            'block',
                            'none'
                        ],
                        [
                            "eid375",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${AboutBTN_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid423",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${About_BTNRESET}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid424",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${About_BTNRESET}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid425",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${About_BTNRESET}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid426",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${About_BTNRESET}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid430",
                            "display",
                            19376,
                            0,
                            "swing",
                            "${NumbersPLACEHOLDER}",
                            'none',
                            'block'
                        ],
                        [
                            "eid431",
                            "display",
                            24000,
                            0,
                            "swing",
                            "${NumbersPLACEHOLDER}",
                            'block',
                            'block'
                        ],
                        [
                            "eid434",
                            "display",
                            24500,
                            0,
                            "swing",
                            "${NumbersPLACEHOLDER}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            1001,
                            0,
                            "easeInOutQuad",
                            "${RightStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${RightStart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${RightStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            19500,
                            0,
                            "swing",
                            "${RightStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid400",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${RightStart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid304",
                            "display",
                            63000,
                            0,
                            "linear",
                            "${RightStart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            63500,
                            0,
                            "swing",
                            "${RightStart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${OpeningBrackets}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            1001,
                            0,
                            "easeInOutQuad",
                            "${OpeningBrackets}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            1799,
                            0,
                            "linear",
                            "${OpeningBrackets}",
                            'block',
                            'none'
                        ],
                        [
                            "eid327",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            'block',
                            'none'
                        ],
                        [
                            "eid379",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            'none',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            63000,
                            0,
                            "swing",
                            "${HomeBTN_ABOUT}",
                            'none',
                            'block'
                        ],
                        [
                            "eid348",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid349",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid388",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid350",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${NumberBTN_NUMBER}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid82",
                            "display",
                            11375,
                            0,
                            "linear",
                            "${Number_BTN}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${Number_BTN}",
                            'block',
                            'none'
                        ],
                        [
                            "eid372",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${Number_BTN}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            1799,
                            0,
                            "swing",
                            "${IamEMB_ForwardnessNefficiency_GrOFW}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${IamEMB_ForwardnessNefficiency_GrOFW}",
                            'block',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${TURA22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${TURA22}",
                            'block',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            19500,
                            0,
                            "swing",
                            "${TURA22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid360",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${TURA22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid361",
                            "display",
                            60500,
                            0,
                            "swing",
                            "${TURA22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "display",
                            63000,
                            0,
                            "swing",
                            "${TURA22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            63500,
                            0,
                            "swing",
                            "${TURA22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "top",
                            14000,
                            500,
                            "swing",
                            "${Number_BTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid280",
                            "top",
                            19000,
                            500,
                            "swing",
                            "${Number_BTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid389",
                            "top",
                            60000,
                            500,
                            "swing",
                            "${Number_BTN}",
                            '26px',
                            '76px'
                        ],
                        [
                            "eid292",
                            "top",
                            63000,
                            500,
                            "swing",
                            "${Number_BTN}",
                            '76px',
                            '26px'
                        ],
                        [
                            "eid240",
                            "width",
                            14000,
                            500,
                            "swing",
                            "${LStart}",
                            '148px',
                            '30px'
                        ],
                        [
                            "eid253",
                            "width",
                            19000,
                            500,
                            "swing",
                            "${LStart}",
                            '30px',
                            '148px'
                        ],
                        [
                            "eid398",
                            "width",
                            60000,
                            500,
                            "swing",
                            "${LStart}",
                            '148px',
                            '30px'
                        ],
                        [
                            "eid302",
                            "width",
                            63000,
                            500,
                            "swing",
                            "${LStart}",
                            '30px',
                            '148px'
                        ],
                        [
                            "eid192",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${Style_BTN}",
                            '686px',
                            '686px'
                        ],
                        [
                            "eid267",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${Style_BTN}",
                            '686px',
                            '686px'
                        ],
                        [
                            "eid363",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${Style_BTN}",
                            '686px',
                            '686px'
                        ],
                        [
                            "eid287",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${Style_BTN}",
                            '686px',
                            '686px'
                        ],
                        [
                            "eid451",
                            "opacity",
                            29000,
                            500,
                            "swing",
                            "${StylePLACEHOLDER}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "opacity",
                            19376,
                            500,
                            "swing",
                            "${NumbersPLACEHOLDER}",
                            '0',
                            '1'
                        ],
                        [
                            "eid433",
                            "opacity",
                            24000,
                            500,
                            "swing",
                            "${NumbersPLACEHOLDER}",
                            '1',
                            '0'
                        ],
                        [
                            "eid419",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${About_BTNRESET}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid420",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${About_BTNRESET}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid421",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${About_BTNRESET}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid422",
                            "left",
                            63000,
                            0,
                            "linear",
                            "${About_BTNRESET}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid351",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${NumberBTN_NUMBER}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverRight_NUMBERS}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${HoverRight_NUMBERS}",
                            'none',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            19500,
                            0,
                            "swing",
                            "${HoverRight_NUMBERS}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${HoverRight_NUMBERS}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${AboutBTN_ABOUT}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid79",
                            "display",
                            11375,
                            0,
                            "linear",
                            "${HomeBTN}",
                            'none',
                            'block'
                        ],
                        [
                            "eid317",
                            "display",
                            14000,
                            0,
                            "swing",
                            "${HomeBTN}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            19000,
                            0,
                            "swing",
                            "${HomeBTN}",
                            'none',
                            'block'
                        ],
                        [
                            "eid382",
                            "display",
                            60000,
                            0,
                            "swing",
                            "${HomeBTN}",
                            'block',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            63000,
                            0,
                            "swing",
                            "${HomeBTN}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${HoverRight_LETTERS}",
                            'none',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${HoverRight_LETTERS}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${HoverRight_LETTERS}",
                            'block',
                            'none'
                        ],
                        [
                            "eid438",
                            "opacity",
                            24000,
                            500,
                            "swing",
                            "${LettersPLACEHOLDER}",
                            '0',
                            '1'
                        ],
                        [
                            "eid442",
                            "opacity",
                            29000,
                            500,
                            "swing",
                            "${LettersPLACEHOLDER}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "opacity",
                            11375,
                            494,
                            "linear",
                            "${AboutBTN_HOME}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid11", "trigger", 1001, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${OpeningBrackets}', [] ] ],
                            [ "eid50", "trigger", 1800, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${IamEMB_ForwardnessNefficiency_GrOFW}', [] ] ]
                    ]
                }
            },
            "OpeningBrackets": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['643px', '0px', '148px', '287px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'P2R2WEBver1-LR-06',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/P2R2WEBver1-LR-06.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '148px', '287px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'P2R2WEBver1-LR-07',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/P2R2WEBver1-LR-07.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '495px', '287px']
                        }
                    }
                },
                timeline: {
                    duration: 799,
                    autoPlay: false,
                    data: [
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${P2R2WEBver1-LR-07}",
                            'block',
                            'block'
                        ],
                        [
                            "eid9",
                            "display",
                            799,
                            0,
                            "easeInOutQuad",
                            "${P2R2WEBver1-LR-07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${P2R2WEBver1-LR-06}",
                            'block',
                            'block'
                        ],
                        [
                            "eid8",
                            "display",
                            799,
                            0,
                            "easeInOutQuad",
                            "${P2R2WEBver1-LR-06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            798,
                            "easeInOutQuad",
                            "${P2R2WEBver1-LR-07}",
                            '0px',
                            '-292px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            798,
                            "easeInOutQuad",
                            "${P2R2WEBver1-LR-06}",
                            '347px',
                            '643px'
                        ]
                    ]
                }
            },
            "HoverRight": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '148px', '287px', 'auto', 'auto'],
                            id: 'P2R2WEBver1-LR-063',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/P2R2WEBver1-LR-06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '287px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid44",
                            "left",
                            0,
                            300,
                            "swing",
                            "${P2R2WEBver1-LR-063}",
                            '0px',
                            '50px'
                        ]
                    ]
                }
            },
            "HoverLeft": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'P2R2WEBver1-LR-073',
                            rect: ['0px', '0px', '148px', '287px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/P2R2WEBver1-LR-07.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '287px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    data: [
                        [
                            "eid45",
                            "left",
                            0,
                            300,
                            "swing",
                            "${P2R2WEBver1-LR-073}",
                            '0px',
                            '-50px'
                        ]
                    ]
                }
            },
            "HomeBTN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Tahoma, Geneva, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Hom<span style=\"font-family: futura-pt, sans-serif;\">​</span>e</p>',
                            id: 'Text2',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '28px', '13px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "UP": 0,
                        "OVER": 1000,
                        "Down": 2011,
                        "ACTIVE": 3000
                    },
                    data: [
                        [
                            "eid60",
                            "color",
                            0,
                            0,
                            "swing",
                            "${Text2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid57",
                            "color",
                            989,
                            0,
                            "swing",
                            "${Text2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid63",
                            "color",
                            2000,
                            0,
                            "swing",
                            "${Text2}",
                            'rgba(0,173,238,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid59",
                            "color",
                            3000,
                            0,
                            "swing",
                            "${Text2}",
                            'rgba(0,173,238,1.00)',
                            'rgba(238,0,0,1.00)'
                        ]
                    ]
                }
            },
            "About_BTN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['futura-pt, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">About</p>',
                            id: 'About',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '28px', '13px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "UP": 0,
                        "OVER": 1000,
                        "Down": 2011,
                        "ACTIVE": 3000
                    },
                    data: [
                        [
                            "eid457",
                            "color",
                            0,
                            0,
                            "swing",
                            "${About}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid458",
                            "color",
                            989,
                            0,
                            "swing",
                            "${About}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid459",
                            "color",
                            2000,
                            0,
                            "swing",
                            "${About}",
                            'rgba(0,173,238,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid460",
                            "color",
                            3000,
                            0,
                            "swing",
                            "${About}",
                            'rgba(0,173,238,1.00)',
                            'rgba(238,0,0,1.00)'
                        ]
                    ]
                }
            },
            "Number_BTN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['futura-pt, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">Numbers</p>',
                            id: 'Text2Copy2',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '13px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "UP": 0,
                        "OVER": 1000,
                        "Down": 2011,
                        "ACTIVE": 3000
                    },
                    data: [
                        [
                            "eid461",
                            "color",
                            0,
                            0,
                            "swing",
                            "${Text2Copy2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid462",
                            "color",
                            989,
                            0,
                            "swing",
                            "${Text2Copy2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid463",
                            "color",
                            2000,
                            0,
                            "swing",
                            "${Text2Copy2}",
                            'rgba(0,173,238,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid464",
                            "color",
                            3000,
                            0,
                            "swing",
                            "${Text2Copy2}",
                            'rgba(0,173,238,1.00)',
                            'rgba(238,0,0,1.00)'
                        ]
                    ]
                }
            },
            "Letters_BTN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['futura-pt, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">Letters</p>',
                            id: 'Text2Copy3',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '31px', '13px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "UP": 0,
                        "OVER": 1000,
                        "Down": 2011,
                        "ACTIVE": 3000
                    },
                    data: [
                        [
                            "eid465",
                            "color",
                            0,
                            0,
                            "swing",
                            "${Text2Copy3}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid466",
                            "color",
                            989,
                            0,
                            "swing",
                            "${Text2Copy3}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid467",
                            "color",
                            2000,
                            0,
                            "swing",
                            "${Text2Copy3}",
                            'rgba(0,173,238,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid468",
                            "color",
                            3000,
                            0,
                            "swing",
                            "${Text2Copy3}",
                            'rgba(0,173,238,1.00)',
                            'rgba(238,0,0,1.00)'
                        ]
                    ]
                }
            },
            "Style_BTN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['futura-pt, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">Style</p>',
                            id: 'Text2Copy4',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '13px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "UP": 0,
                        "OVER": 1000,
                        "Down": 2011,
                        "ACTIVE": 3000
                    },
                    data: [
                        [
                            "eid469",
                            "color",
                            0,
                            0,
                            "swing",
                            "${Text2Copy4}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid470",
                            "color",
                            989,
                            0,
                            "swing",
                            "${Text2Copy4}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid471",
                            "color",
                            2000,
                            0,
                            "swing",
                            "${Text2Copy4}",
                            'rgba(0,173,238,1.00)',
                            'rgba(0,173,238,1.00)'
                        ],
                        [
                            "eid472",
                            "color",
                            3000,
                            0,
                            "swing",
                            "${Text2Copy4}",
                            'rgba(0,173,238,1.00)',
                            'rgba(238,0,0,1.00)'
                        ]
                    ]
                }
            },
            "About_Content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Tahoma, Geneva, sans-serif', [10, 'px'], 'rgba(238,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            overflow: 'auto',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">Futura defined many icons of media from magazines to fashion brands. It has overcome a lot before it became one of the most widely used fonts of our time, one of the biggest obstacles was the Nazis. Having originated from Germany, Paul Renner was the designer of Futura and he came to it from book design where it was key to communicate clearly. It was the 1920’s and the Bauhaus School of Design was becoming popular. Although not part of the school, but like Bauhaus designers, he wanted function and beauty. In the 1920’s when people thought of German typography, people thought of fraktur style typography, and Renner thought it didn’t work. He said, “…fraktur was like leaderhosen.. it was outdated and quaint.”&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">With a couple of years of development, Futura went on the market in 1927. It was sold as “the typeface of our time.” The typeface is modern and way ahead of its time. Some early adaptations were extreme however, there were heavy geometric figures like in the original lowercase “g” or “a” for instance. The look was liberal and in the air with other typefaces, like Johnston and Akzidenz Grotesk, but Renner thought Futura was unique. He states that Futura is an “eminently German typeface” and the type foundry, Bauer, sold it as “the type of the future.” Futura gained broad international distribution, showing up on charts or being overlaid on pictures.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">It became a symbol of the future – and for the Nazis, it was a problem. Fraktur – the Gothic style Renner rejected was the font of the Nazis used in the 1930’s. The Nazis started neglecting modern fonts in favor of ornate decorative styles. With this, Renner became an outcast after writing his famous anti-Nazi essay. He was arrested, and along with sans-serif type, was casted out of Germany. Interestingly, Renner was allowed back to Germany, and the Nazis occasionally utilized Futura. In addition, the Nazis also decided the Fraktur font they commonly used was a “Jewish” style font, so they banned it.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">The Nazis came around to Renner’s idea, that the German typeface of the future had to be more readable. By that time, Futura ended up being established as an international typeface, and perhaps is what saved the font from disappearing from history. During World War II, a lot of different, modern-looking sans-serif fonts were kicking around NASA’s predecessor, NACA, and the rest of the American military.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">At the time, people chose fonts based on the availability of physical pieces of type. Futura was available and made it an obvious choice since the typeface was very clear and concise. When NASA needed a plaque for Apollo 11, they chosen one font; they pulled form a typeface that would become beloved by Stanley Kubrick and Wes Anderson. They used the uniquely German design that through a talented and idealistic creator, traveled beyond the Nazis, beyond the 1940s, beyond Germany, and beyond Earth.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: futura-pt, sans-serif;\">​</span></p>',
                            rect: ['432px', '11px', '305px', '260px', 'auto', 'auto'],
                            id: 'Text2'
                        },
                        {
                            type: 'image',
                            id: 'Poster',
                            rect: ['123px', '0px', '185px', '271px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '864px', '271px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-179474352");
