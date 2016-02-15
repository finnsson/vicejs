define(["require", "exports", "snabbdom/h", "flyd-mirror"], function (require, exports, h, fm) {
    "use strict";
    var tagCounter = 1;
    if (typeof HTMLElement !== "function") {
        var _HTMLElement = function () { };
        _HTMLElement.prototype = HTMLElement.prototype;
        window["HTMLElement"] = _HTMLElement;
    }
    exports.viceView = {
        createElement: function (tag, attributes, children) {
            console.error(arguments);
            return h(tag, attributes, children);
        }
    };
    function vice(klass, patch, tagName) {
        if (!tagName) {
            tagName = "x-vice-" + tagCounter++;
        }
        var shadowDOM = true;
        var appendChild = klass.prototype.appendChild;
        klass.prototype.appendChild = function (child) {
            if (shadowDOM) {
                this.innerChildNodes.push(child);
            }
            else {
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
                var newVnode = this.render(this.state);
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
                var afterUpdate_1 = document.createEvent("Event");
                afterUpdate_1.initEvent("after-update", true, true);
                setTimeout(function () {
                    _this.dispatchEvent(afterUpdate_1);
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
        if (!klass.prototype["streamState"]) {
            klass.prototype["streamState"] = function (streamState) {
                var _this = this;
                if (klass.prototype["beforeStreamState"]) {
                    klass.prototype["beforeStreamState"].call(this, streamState);
                }
                this.state = streamState;
                this.localMirror = fm.mirror(function () {
                    _this.update();
                });
                if (klass.prototype["afterStreamState"]) {
                    klass.prototype["afterStreamState"].call(this, streamState);
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