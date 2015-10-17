var tagCounter = 1;

export function vice(klass: typeof HTMLElement, patch, tagName?: string): string {

  if (!tagName) {
    tagName = "x-vice-" + tagCounter++;
  }

  // "Shadom DOM" for child elements.
  var shadowDOM = true;

  var appendChild = klass.prototype.appendChild;

  klass.prototype.appendChild = function(child) {
    console.error("append child for", this, shadowDOM);
    if (shadowDOM) {
      this.innerChildNodes.push(child);
    } else {
      console.error("appending", child, appendChild);
      appendChild.apply(this, arguments);
    }
    return child;
  };

  var replaceChild = klass.prototype.replaceChild;
  klass.prototype.replaceChild = function(oldChild, newChild) {
    if (shadowDOM) {
      this.innerChildNodes[this.innerChildNodes.indexOf(oldChild)] = newChild;
    } else {
      replaceChild.call(this, oldChild, newChild);
    }
    return oldChild;
  };

  var removeChild = klass.prototype.removeChild;

  klass.prototype.removeChild = function(child) {
    if (shadowDOM) {
      this.innerChildNodes.splice(this.innerChildNodes.indexOf(child));
    } else {
      removeChild.call(this, child);
    }
    return child;
  };

  var insertBefore = klass.prototype.insertBefore;

  klass.prototype.insertBefore = function(childPos, newChild) {
    if (shadowDOM) {
      this.innerChildNodes.splice(childPos, 0, newChild);
    } else {
      insertBefore.call(this, childPos, newChild);
    }
    return newChild;
  };
  // End "Shadom DOM" for child elements.

  klass.prototype.getTagName = function() {
    return tagName;
  };

  klass.prototype.update = function() {
    if (!this._isInitialized) {
      this.init();
      this._isInitialized = true;
    }

    if (this.runUpdate) {
      var newVnode = this.render();
      // enable normal DOM API (replaceChild) before patch. TODO: solve using a "proxy" on oldVnode and this.el.parentElement.replaceChild
      shadowDOM = false;
      if(Array.isArray(newVnode)) {
        // TODO: handle case when jumping from/to vnode array
        var oldVnodeWrapper = {
          sel: this.getTagName(),
          elm: this,
          data: {},
          children: this.oldVnode || [{sel: "div", elm: this.el, data: {}, children: []}]
        };
        var newVnodeWrapper = {
          sel: this.getTagName(),
          elm: undefined,
          data: {},
          children: newVnode
        };
        patch(oldVnodeWrapper, newVnodeWrapper);
      } else {
        patch(this.oldVnode || this.el, newVnode);
      }

      // disable normal DOM API after patch
      shadowDOM = true;
      this.oldVnode = newVnode;

      // throw event
      var afterUpdate = document.createEvent("Event");
      afterUpdate.initEvent("after-update", true, true);
      // wait for element being added to DOM
      // TODO: put on queue until this is added to DOM
      setTimeout(() => {
        this.dispatchEvent(afterUpdate);
      });
    }
  };

  klass.prototype.init = function() {
    // run update directly if instant attribute is set on element
    this.runUpdate = this.getAttribute("instant") != null;

    // remove all child nodes and place them in array
    this.innerChildNodes = [];
    while (this.firstChild) {
      this.innerChildNodes.push(this.firstChild);
      removeChild.call(this, this.firstChild);
    }
    // temporary placeholder div.
    this.el = document.createElement("div");
    appendChild.call(this, this.el);
  };

  if (!klass.prototype.setState) {
    klass.prototype.setState = function(newState) {
      // default to immutable state management
      if (newState !== this.state) {
        this.state = newState;
        this.update();
      }
    };
  }

  // default implementation
  if (!klass.prototype.createdCallback) {
    klass.prototype.createdCallback = function() {
      this.update();
    };
  }

  klass.prototype["hasShadow"] = function(has: boolean) {
    shadowDOM = has;
  };

  if (!klass.prototype.attributeChangedCallback) {
    klass.prototype.attributeChangedCallback = function(attributeName, oldValue, newValue) {
      this.update();
    };
  }

  document.registerElement(tagName, klass);

  return tagName;
};