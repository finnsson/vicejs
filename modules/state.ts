function setVnodeState(oldVnode, vnode) {
  if (vnode.data.state) {
    vnode.elm.streamState(vnode.data.state);
  }
};

export default {
  create: setVnodeState,
  update: setVnodeState
};
