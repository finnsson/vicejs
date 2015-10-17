function createCustomElement(emptyVnode, vnode) {
// identify if vnode is custom element
  var tagName = vnode.sel.split(/[\.#]/)[0];
// if tagname contains "-" its a custom element
  if (tagName.indexOf("-") !== -1) {
    vnode.elm.runUpdate = true;
    if (vnode.elm.update) {
      vnode.elm.update();
    }
  }
};

export default {
  create: createCustomElement
};
