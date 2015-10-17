function createElms(emptyVnode, vnode) {
  if (vnode.data.elms) {
    vnode.data.elms.forEach(function(el) {
      vnode.elm.appendChild(el);
    });
  }
};

export default {
  create: createElms
};
