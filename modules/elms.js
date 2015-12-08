define(["require", "exports"], function (require, exports) {
    "use strict";
    function createElms(emptyVnode, vnode) {
        if (vnode.data.elms) {
            vnode.data.elms.forEach(function (el) {
                vnode.elm.appendChild(el);
            });
        }
    }
    ;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        create: createElms
    };
});
//# sourceMappingURL=elms.js.map