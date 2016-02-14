function setVnodeState(oldVnode, vnode) {
  if (vnode.data.state) {
    vnode.elm.runUpdate = true;
    vnode.elm.setState(vnode.data.state);
  }
};

export default {
  create: setVnodeState,
  update: setVnodeState
};
