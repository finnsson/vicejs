function createCustomElement(emptyVnode, vnode) {
// identify if vnode is custom element
  let tagName = vnode.sel.split(/[\.#]/)[0];
// if tagname contains "-" its a custom element
  if (tagName.indexOf("-") !== -1) {
    if (!vnode.elm._isInitialized && vnode.elm.update) {
      // run update for custom elements that haven't executed yet.
      vnode.elm.runUpdate = true;
      vnode.elm.update();
    }
  }
};

export default {
  create: createCustomElement
};
