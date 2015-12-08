define(["require", "exports"], function (require, exports) {
    "use strict";
    function createCustomElement(emptyVnode, vnode) {
        var tagName = vnode.sel.split(/[\.#]/)[0];
        if (tagName.indexOf("-") !== -1) {
            vnode.elm.runUpdate = true;
            if (vnode.elm.update) {
                vnode.elm.update();
            }
        }
    }
    ;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        create: createCustomElement
    };
});
//# sourceMappingURL=customElement.js.map