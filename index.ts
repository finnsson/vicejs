import * as h from "snabbdom/h";

import * as flyd from "flyd";

import * as fm from "flyd-mirror";

let tagCounter = 1;

if (typeof HTMLElement !== "function") {
  let _HTMLElement = function() {/* Intentionally empty */};
  _HTMLElement.prototype = HTMLElement.prototype;
  window["HTMLElement"] = _HTMLElement;
}

export var viceView = {
  createElement: function(tag: string, attributes: any, children: any[]) {
    console.error(arguments);
    return h(tag, attributes, children);
  }
};

export function vice<K extends typeof HTMLElement>(klass: K, patch, tagName?: string): K {

  if (!tagName) {
    tagName = "x-vice-" + tagCounter++;
  }

  // "Shadom DOM" for child elements.
  let shadowDOM = true;

  let appendChild = klass.prototype.appendChild;

  klass.prototype.appendChild = function(child) {
    if (shadowDOM) {
      this.innerChildNodes.push(child);
    } else {
      appendChild.apply(this, arguments);
    }
    return child;
  };

  let replaceChild = klass.prototype.replaceChild;
  klass.prototype.replaceChild = function(oldChild, newChild) {
    if (shadowDOM) {
      this.innerChildNodes[this.innerChildNodes.indexOf(oldChild)] = newChild;
    } else {
      replaceChild.call(this, oldChild, newChild);
    }
    return oldChild;
  };

  let removeChild = klass.prototype.removeChild;

  klass.prototype.removeChild = function(child) {
    if (shadowDOM) {
      this.innerChildNodes.splice(this.innerChildNodes.indexOf(child));
    } else {
      removeChild.call(this, child);
    }
    return child;
  };

  let insertBefore = klass.prototype.insertBefore;

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
      let newVnode = this.render(this.state);
      // enable normal DOM API before patch
      shadowDOM = false;
      let oldVnodeWrapper = {
        sel: this.getTagName(),
        elm: this,
        data: {},
        children: Array.isArray(this.oldVnode) ? this.oldVnode : [this.oldVnode]
      };
      let newVnodeWrapper = {
        sel: this.getTagName(),
        elm: undefined,
        data: {},
        children: Array.isArray(newVnode) ? newVnode : [newVnode]
      };
      patch(oldVnodeWrapper, newVnodeWrapper);

      // disable normal DOM API after patch
      shadowDOM = true;
      this.oldVnode = newVnode;

      // throw event
      let afterUpdate = document.createEvent("Event");
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
    /*
    this.el = document.createElement("div");
    appendChild.call(this, this.el);
    */
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

  if (!klass.prototype["streamState"]) {
    klass.prototype["streamState"] = function(streamState) {
      this.state = streamState;
      this.localMirror = fm.mirror(() => {
        this.update();
      });
    };
  }

  if (!klass.prototype["patchState"]) {
    klass.prototype["patchState"] = function(newState) {
      this.state = Object["assign"]({}, this.state, newState);
      this.update();
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

  return klass;
};
