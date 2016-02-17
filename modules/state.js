define(["require", "exports"], function (require, exports) {
    "use strict";
    function setVnodeState(oldVnode, vnode) {
        if (vnode.data.state) {
            vnode.elm.streamState(vnode.data.state);
        }
    }
    ;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        create: setVnodeState,
        update: setVnodeState
    };
});
//# sourceMappingURL=state.js.map