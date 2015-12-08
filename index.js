define(["require", "exports"], function (require, exports) {
    "use strict";
    var tagCounter = 1;
    if (typeof HTMLElement !== "function") {
        var _HTMLElement = function () { };
        _HTMLElement.prototype = HTMLElement.prototype;
        window["HTMLElement"] = _HTMLElement;
    }
    function vice(klass, patch, tagName) {
        if (!tagName) {
            tagName = "x-vice-" + tagCounter++;
        }
        var shadowDOM = true;
        var appendChild = klass.prototype.appendChild;
        klass.prototype.appendChild = function (child) {
            console.error("append child for", this, shadowDOM);
            if (shadowDOM) {
                this.innerChildNodes.push(child);
            }
            else {
                console.error("appending", child, appendChild);
                appendChild.apply(this, arguments);
            }
            return child;
        };
        var replaceChild = klass.prototype.replaceChild;
        klass.prototype.replaceChild = function (oldChild, newChild) {
            if (shadowDOM) {
                this.innerChildNodes[this.innerChildNodes.indexOf(oldChild)] = newChild;
            }
            else {
                replaceChild.call(this, oldChild, newChild);
            }
            return oldChild;
        };
        var removeChild = klass.prototype.removeChild;
        klass.prototype.removeChild = function (child) {
            if (shadowDOM) {
                this.innerChildNodes.splice(this.innerChildNodes.indexOf(child));
            }
            else {
                removeChild.call(this, child);
            }
            return child;
        };
        var insertBefore = klass.prototype.insertBefore;
        klass.prototype.insertBefore = function (childPos, newChild) {
            if (shadowDOM) {
                this.innerChildNodes.splice(childPos, 0, newChild);
            }
            else {
                insertBefore.call(this, childPos, newChild);
            }
            return newChild;
        };
        klass.prototype.getTagName = function () {
            return tagName;
        };
        klass.prototype.update = function () {
            var _this = this;
            if (!this._isInitialized) {
                this.init();
                this._isInitialized = true;
            }
            if (this.runUpdate) {
                var newVnode = this.render();
                shadowDOM = false;
                var oldVnodeWrapper = {
                    sel: this.getTagName(),
                    elm: this,
                    data: {},
                    children: Array.isArray(this.oldVnode) ? this.oldVnode : [this.oldVnode]
                };
                var newVnodeWrapper = {
                    sel: this.getTagName(),
                    elm: undefined,
                    data: {},
                    children: Array.isArray(newVnode) ? newVnode : [newVnode]
                };
                patch(oldVnodeWrapper, newVnodeWrapper);
                shadowDOM = true;
                this.oldVnode = newVnode;
                var afterUpdate = document.createEvent("Event");
                afterUpdate.initEvent("after-update", true, true);
                setTimeout(function () {
                    _this.dispatchEvent(afterUpdate);
                });
            }
        };
        klass.prototype.init = function () {
            this.runUpdate = this.getAttribute("instant") != null;
            this.innerChildNodes = [];
            while (this.firstChild) {
                this.innerChildNodes.push(this.firstChild);
                removeChild.call(this, this.firstChild);
            }
        };
        if (!klass.prototype.setState) {
            klass.prototype.setState = function (newState) {
                if (newState !== this.state) {
                    this.state = newState;
                    this.update();
                }
            };
        }
        if (!klass.prototype["patchState"]) {
            klass.prototype["patchState"] = function (newState) {
                this.state = Object["assign"]({}, this.state, newState);
                this.update();
            };
        }
        if (!klass.prototype.createdCallback) {
            klass.prototype.createdCallback = function () {
                this.update();
            };
        }
        klass.prototype["hasShadow"] = function (has) {
            shadowDOM = has;
        };
        if (!klass.prototype.attributeChangedCallback) {
            klass.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) {
                this.update();
            };
        }
        document.registerElement(tagName, klass);
        return klass;
    }
    exports.vice = vice;
    ;
});
//# sourceMappingURL=index.js.map