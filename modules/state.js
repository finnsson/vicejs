define(["require", "exports"], function (require, exports) {
    function setVnodeState(oldVnode, vnode) {
        if (vnode.data.state) {
            vnode.elm.setState(vnode.data.state);
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