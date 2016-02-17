define(["require", "exports"], function (require, exports) {
    "use strict";
    function createCustomElement(emptyVnode, vnode) {
        var tagName = vnode.sel.split(/[\.#]/)[0];
        if (tagName.indexOf("-") !== -1) {
            if (!vnode.elm._isInitialized && vnode.elm.update) {
                vnode.elm.runUpdate = true;
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