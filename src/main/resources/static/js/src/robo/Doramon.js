(function (ns) {
    "use strict";

    class Doramon {
        constructor(classNm) {
            this.el = document.
                getElementsByClassName(classNm)[0];
        }

        say(msg) {
            this.el.textContent = msg + "!!!!";
        }
    }

    ns.robo = ns.robo || {};
    ns.robo.Doramon = Doramon;
})
(robonyan);