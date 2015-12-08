/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _documentRegisterElementBuildDocumentRegisterElementMax = __webpack_require__(2);

	var _documentRegisterElementBuildDocumentRegisterElementMax2 = _interopRequireDefault(_documentRegisterElementBuildDocumentRegisterElementMax);

	var _snabbdom = __webpack_require__(3);

	var _snabbdom2 = _interopRequireDefault(_snabbdom);

	var _snabbdomModulesClass = __webpack_require__(6);

	var _snabbdomModulesClass2 = _interopRequireDefault(_snabbdomModulesClass);

	var _snabbdomModulesAttributes = __webpack_require__(7);

	var _snabbdomModulesAttributes2 = _interopRequireDefault(_snabbdomModulesAttributes);

	var _snabbdomModulesProps = __webpack_require__(8);

	var _snabbdomModulesProps2 = _interopRequireDefault(_snabbdomModulesProps);

	var _snabbdomModulesStyle = __webpack_require__(9);

	var _snabbdomModulesStyle2 = _interopRequireDefault(_snabbdomModulesStyle);

	var _snabbdomModulesEventlisteners = __webpack_require__(10);

	var _snabbdomModulesEventlisteners2 = _interopRequireDefault(_snabbdomModulesEventlisteners);

	var _modulesState = __webpack_require__(12);

	var _modulesState2 = _interopRequireDefault(_modulesState);

	var _modulesCustomElement = __webpack_require__(13);

	var _modulesCustomElement2 = _interopRequireDefault(_modulesCustomElement);

	var _modulesElms = __webpack_require__(14);

	var _modulesElms2 = _interopRequireDefault(_modulesElms);

	var _snabbdomH = __webpack_require__(11);

	var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

	var patch = _snabbdom2['default'].init([_snabbdomModulesClass2['default'], _snabbdomModulesAttributes2['default'], _snabbdomModulesProps2['default'], _snabbdomModulesStyle2['default'], _snabbdomModulesEventlisteners2['default'], _modulesState2['default'], _modulesCustomElement2['default'], _modulesElms2['default']]);

	// shim for Safari where typeof HTMLElement is "object"
	if (typeof HTMLElement !== 'function') {
	  var _HTMLElement = function _HTMLElement() {};
	  _HTMLElement.prototype = HTMLElement.prototype;
	  HTMLElement = _HTMLElement;
	}

	var FooBar = (function (_HTMLElement2) {
	  _inherits(FooBar, _HTMLElement2);

	  function FooBar() {
	    _classCallCheck(this, FooBar);

	    _get(Object.getPrototypeOf(FooBar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(FooBar, [{
	    key: 'changeName',
	    value: function changeName() {
	      this.setState({
	        name: "Pelle"
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _snabbdomH2['default'])('div', {
	        attrs: { 'class': 'foo-bar' },
	        on: {
	          click: this.changeName.bind(this)
	        }
	      }, [(0, _snabbdomH2['default'])('span', {}, [this.state.name]), (0, _snabbdomH2['default'])('div', {
	        attrs: { 'class': 'children', 'style': 'font-size: 14px;' },
	        elms: this.innerChildNodes || []
	      })]);
	    }
	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this.state = this.state || {
	        name: "Arne"
	      };
	      this.update();
	    }
	  }]);

	  return FooBar;
	})(HTMLElement);

	var FooBarTag = (0, _index2['default'])(FooBar, patch, "foo-bar");

	var Dog = (function (_HTMLElement3) {
	  _inherits(Dog, _HTMLElement3);

	  function Dog() {
	    _classCallCheck(this, Dog);

	    _get(Object.getPrototypeOf(Dog.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Dog, [{
	    key: 'bark',
	    value: function bark() {
	      alert("bark!");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _snabbdomH2['default'])('div', {
	        on: {
	          click: this.bark
	        }
	      }, [this.getAttribute("name")]);
	    }
	  }]);

	  return Dog;
	})(HTMLElement);

	var Dogtag = (0, _index2['default'])(Dog, patch, "x-dog");

	document.addEventListener("DOMContentLoaded", function (event) {

	  var state = {
	    name: "Some name from inline JSON"
	  };

	  var testFooBar2 = (0, _snabbdomH2['default'])(FooBarTag, {
	    attrs: { 'class': 'test', 'style': 'font-size: 22px;' },
	    state: state
	  }, [(0, _snabbdomH2['default'])('ul', {}, [(0, _snabbdomH2['default'])('li', {}, ['item 1']), (0, _snabbdomH2['default'])('li', {}, ['item 2'])])]);

	  var testEl = document.getElementById("test");

	  var dog = (0, _snabbdomH2['default'])('x-dog', {
	    attrs: { 'name': 'Doggy' }
	  });

	  patch(testEl, dog);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var tagCounter = 1;

	module.exports = function (klass, patch, tagName) {

	  if (!tagName) {
	    tagName = "x-vice-" + tagCounter++;
	  }

	  // "Shadom DOM" for child elements.
	  var shadowDOM = true;

	  var appendChild = klass.prototype.appendChild;

	  klass.prototype.appendChild = function (child) {
	    if (shadowDOM) {
	      this.innerChildNodes.push(child);
	    } else {
	      appendChild.apply(this, arguments);
	    }
	  };

	  var replaceChild = klass.prototype.replaceChild;
	  klass.prototype.replaceChild = function (oldChild, newChild) {
	    if (shadowDOM) {
	      this.innerChildNodes[this.innerChildNodes.indexOf(oldChild)] = newChild;
	    } else {
	      replaceChild.call(this, oldChild, newChild);
	    }
	  };

	  var removeChild = klass.prototype.removeChild;

	  klass.prototype.removeChild = function (child) {
	    if (shadowDOM) {
	      this.innerChildNodes.splice(this.innerChildNodes.indexOf(child));
	    } else {
	      removeChild.call(this, child);
	    }
	  };

	  var insertBefore = klass.prototype.insertBefore;

	  klass.prototype.insertBefore = function (childPos, newChild) {
	    if (shadowDOM) {
	      this.innerChildNodes.splice(childPos, 0, newChild);
	    } else {
	      insertBefore.call(this, childPos, newChild);
	    }
	  };
	  // End "Shadom DOM" for child elements.

	  klass.prototype.getTagName = function () {
	    return tagName;
	  };

	  klass.prototype.update = function () {
	    if (!this._isInitialized) {
	      this.init();
	      this._isInitialized = true;
	    }

	    if (this.runUpdate) {
	      var newVnode = this.render();
	      // enable normal DOM API (replaceChild) before patch. TODO: solve using a "proxy" on oldVnode and this.el.parentElement.replaceChild
	      shadowDOM = false;
	      patch(this.oldVnode || this.el, newVnode);
	      // disable normal DOM API after patch
	      shadowDOM = true;
	      this.oldVnode = newVnode;
	    }
	  };

	  klass.prototype.init = function () {
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
	    klass.prototype.setState = function (newState) {
	      // default to immutable state management
	      if (newState !== this.state) {
	        this.state = newState;
	        this.update();
	      }
	    };
	  }

	  // default implementation
	  if (!klass.prototype.createdCallback) {
	    klass.prototype.createdCallback = function () {
	      this.update();
	    };
	  }

	  if (!klass.prototype.attributeChangedCallback) {
	    klass.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) {
	      this.update();
	    };
	  }

	  document.registerElement(tagName, klass);

	  return tagName;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*!
	Copyright (C) 2014-2015 by WebReflection

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	*/
	(function(window, document, Object, REGISTER_ELEMENT){'use strict';

	// in case it's there or already patched
	if (REGISTER_ELEMENT in document) return;

	// DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
	// THIS IS A PROJECT BASED ON A BUILD SYSTEM
	// THIS FILE IS JUST WRAPPED UP RESULTING IN
	// build/document-register-element.js
	// and its .max.js counter part

	var
	  // IE < 11 only + old WebKit for attributes + feature detection
	  EXPANDO_UID = '__' + REGISTER_ELEMENT + (Math.random() * 10e4 >> 0),

	  // shortcuts and costants
	  ATTACHED = 'attached',
	  DETACHED = 'detached',
	  EXTENDS = 'extends',
	  ADDITION = 'ADDITION',
	  MODIFICATION = 'MODIFICATION',
	  REMOVAL = 'REMOVAL',
	  DOM_ATTR_MODIFIED = 'DOMAttrModified',
	  DOM_CONTENT_LOADED = 'DOMContentLoaded',
	  DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
	  PREFIX_TAG = '<',
	  PREFIX_IS = '=',

	  // valid and invalid node names
	  validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	  invalidNames = [
	    'ANNOTATION-XML',
	    'COLOR-PROFILE',
	    'FONT-FACE',
	    'FONT-FACE-SRC',
	    'FONT-FACE-URI',
	    'FONT-FACE-FORMAT',
	    'FONT-FACE-NAME',
	    'MISSING-GLYPH'
	  ],

	  // registered types and their prototypes
	  types = [],
	  protos = [],

	  // to query subnodes
	  query = '',

	  // html shortcut used to feature detect
	  documentElement = document.documentElement,

	  // ES5 inline helpers || basic patches
	  indexOf = types.indexOf || function (v) {
	    for(var i = this.length; i-- && this[i] !== v;){}
	    return i;
	  },

	  // other helpers / shortcuts
	  OP = Object.prototype,
	  hOP = OP.hasOwnProperty,
	  iPO = OP.isPrototypeOf,

	  defineProperty = Object.defineProperty,
	  gOPD = Object.getOwnPropertyDescriptor,
	  gOPN = Object.getOwnPropertyNames,
	  gPO = Object.getPrototypeOf,
	  sPO = Object.setPrototypeOf,

	  // jshint proto: true
	  hasProto = !!Object.__proto__,

	  // used to create unique instances
	  create = Object.create || function Bridge(proto) {
	    // silly broken polyfill probably ever used but short enough to work
	    return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
	  },

	  // will set the prototype if possible
	  // or copy over all properties
	  setPrototype = sPO || (
	    hasProto ?
	      function (o, p) {
	        o.__proto__ = p;
	        return o;
	      } : (
	    (gOPN && gOPD) ?
	      (function(){
	        function setProperties(o, p) {
	          for (var
	            key,
	            names = gOPN(p),
	            i = 0, length = names.length;
	            i < length; i++
	          ) {
	            key = names[i];
	            if (!hOP.call(o, key)) {
	              defineProperty(o, key, gOPD(p, key));
	            }
	          }
	        }
	        return function (o, p) {
	          do {
	            setProperties(o, p);
	          } while ((p = gPO(p)) && !iPO.call(p, o));
	          return o;
	        };
	      }()) :
	      function (o, p) {
	        for (var key in p) {
	          o[key] = p[key];
	        }
	        return o;
	      }
	  )),

	  // DOM shortcuts and helpers, if any

	  MutationObserver = window.MutationObserver ||
	                     window.WebKitMutationObserver,

	  HTMLElementPrototype = (
	    window.HTMLElement ||
	    window.Element ||
	    window.Node
	  ).prototype,

	  IE8 = !iPO.call(HTMLElementPrototype, documentElement),

	  isValidNode = IE8 ?
	    function (node) {
	      return node.nodeType === 1;
	    } :
	    function (node) {
	      return iPO.call(HTMLElementPrototype, node);
	    },

	  targets = IE8 && [],

	  cloneNode = HTMLElementPrototype.cloneNode,
	  setAttribute = HTMLElementPrototype.setAttribute,
	  removeAttribute = HTMLElementPrototype.removeAttribute,

	  // replaced later on
	  createElement = document.createElement,

	  // shared observer for all attributes
	  attributesObserver = MutationObserver && {
	    attributes: true,
	    characterData: true,
	    attributeOldValue: true
	  },

	  // useful to detect only if there's no MutationObserver
	  DOMAttrModified = MutationObserver || function(e) {
	    doesNotSupportDOMAttrModified = false;
	    documentElement.removeEventListener(
	      DOM_ATTR_MODIFIED,
	      DOMAttrModified
	    );
	  },

	  // will both be used to make DOMNodeInserted asynchronous
	  asapQueue,
	  rAF = window.requestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame ||
	        window.msRequestAnimationFrame ||
	        function (fn) { setTimeout(fn, 10); },

	  // internal flags
	  setListener = false,
	  doesNotSupportDOMAttrModified = true,
	  dropDomContentLoaded = true,

	  // needed for the innerHTML helper
	  notFromInnerHTMLHelper = true,

	  // optionally defined later on
	  onSubtreeModified,
	  callDOMAttrModified,
	  getAttributesMirror,
	  observer,

	  // based on setting prototype capability
	  // will check proto or the expando attribute
	  // in order to setup the node once
	  patchIfNotAlready,
	  patch
	;

	if (sPO || hasProto) {
	    patchIfNotAlready = function (node, proto) {
	      if (!iPO.call(proto, node)) {
	        setupNode(node, proto);
	      }
	    };
	    patch = setupNode;
	} else {
	    patchIfNotAlready = function (node, proto) {
	      if (!node[EXPANDO_UID]) {
	        node[EXPANDO_UID] = Object(true);
	        setupNode(node, proto);
	      }
	    };
	    patch = patchIfNotAlready;
	}
	if (IE8) {
	  doesNotSupportDOMAttrModified = false;
	  (function (){
	    var
	      descriptor = gOPD(HTMLElementPrototype, 'addEventListener'),
	      addEventListener = descriptor.value,
	      patchedRemoveAttribute = function (name) {
	        var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	        e.attrName = name;
	        e.prevValue = this.getAttribute(name);
	        e.newValue = null;
	        e[REMOVAL] = e.attrChange = 2;
	        removeAttribute.call(this, name);
	        this.dispatchEvent(e);
	      },
	      patchedSetAttribute = function (name, value) {
	        var
	          had = this.hasAttribute(name),
	          old = had && this.getAttribute(name),
	          e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
	        ;
	        setAttribute.call(this, name, value);
	        e.attrName = name;
	        e.prevValue = had ? old : null;
	        e.newValue = value;
	        if (had) {
	          e[MODIFICATION] = e.attrChange = 1;
	        } else {
	          e[ADDITION] = e.attrChange = 0;
	        }
	        this.dispatchEvent(e);
	      },
	      onPropertyChange = function (e) {
	        // jshint eqnull:true
	        var
	          node = e.currentTarget,
	          superSecret = node[EXPANDO_UID],
	          propertyName = e.propertyName,
	          event
	        ;
	        if (superSecret.hasOwnProperty(propertyName)) {
	          superSecret = superSecret[propertyName];
	          event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	          event.attrName = superSecret.name;
	          event.prevValue = superSecret.value || null;
	          event.newValue = (superSecret.value = node[propertyName] || null);
	          if (event.prevValue == null) {
	            event[ADDITION] = event.attrChange = 0;
	          } else {
	            event[MODIFICATION] = event.attrChange = 1;
	          }
	          node.dispatchEvent(event);
	        }
	      }
	    ;
	    descriptor.value = function (type, handler, capture) {
	      if (
	        type === DOM_ATTR_MODIFIED &&
	        this.attributeChangedCallback &&
	        this.setAttribute !== patchedSetAttribute
	      ) {
	        this[EXPANDO_UID] = {
	          className: {
	            name: 'class',
	            value: this.className
	          }
	        };
	        this.setAttribute = patchedSetAttribute;
	        this.removeAttribute = patchedRemoveAttribute;
	        addEventListener.call(this, 'propertychange', onPropertyChange);
	      }
	      addEventListener.call(this, type, handler, capture);
	    };
	    defineProperty(HTMLElementPrototype, 'addEventListener', descriptor);
	  }());
	} else if (!MutationObserver) {
	  documentElement.addEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
	  documentElement.setAttribute(EXPANDO_UID, 1);
	  documentElement.removeAttribute(EXPANDO_UID);
	  if (doesNotSupportDOMAttrModified) {
	    onSubtreeModified = function (e) {
	      var
	        node = this,
	        oldAttributes,
	        newAttributes,
	        key
	      ;
	      if (node === e.target) {
	        oldAttributes = node[EXPANDO_UID];
	        node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
	        for (key in newAttributes) {
	          if (!(key in oldAttributes)) {
	            // attribute was added
	            return callDOMAttrModified(
	              0,
	              node,
	              key,
	              oldAttributes[key],
	              newAttributes[key],
	              ADDITION
	            );
	          } else if (newAttributes[key] !== oldAttributes[key]) {
	            // attribute was changed
	            return callDOMAttrModified(
	              1,
	              node,
	              key,
	              oldAttributes[key],
	              newAttributes[key],
	              MODIFICATION
	            );
	          }
	        }
	        // checking if it has been removed
	        for (key in oldAttributes) {
	          if (!(key in newAttributes)) {
	            // attribute removed
	            return callDOMAttrModified(
	              2,
	              node,
	              key,
	              oldAttributes[key],
	              newAttributes[key],
	              REMOVAL
	            );
	          }
	        }
	      }
	    };
	    callDOMAttrModified = function (
	      attrChange,
	      currentTarget,
	      attrName,
	      prevValue,
	      newValue,
	      action
	    ) {
	      var e = {
	        attrChange: attrChange,
	        currentTarget: currentTarget,
	        attrName: attrName,
	        prevValue: prevValue,
	        newValue: newValue
	      };
	      e[action] = attrChange;
	      onDOMAttrModified(e);
	    };
	    getAttributesMirror = function (node) {
	      for (var
	        attr, name,
	        result = {},
	        attributes = node.attributes,
	        i = 0, length = attributes.length;
	        i < length; i++
	      ) {
	        attr = attributes[i];
	        name = attr.name;
	        if (name !== 'setAttribute') {
	          result[name] = attr.value;
	        }
	      }
	      return result;
	    };
	  }
	}

	function loopAndVerify(list, action) {
	  for (var i = 0, length = list.length; i < length; i++) {
	    verifyAndSetupAndAction(list[i], action);
	  }
	}

	function loopAndSetup(list) {
	  for (var i = 0, length = list.length, node; i < length; i++) {
	    node = list[i];
	    patch(node, protos[getTypeIndex(node)]);
	  }
	}

	function executeAction(action) {
	  return function (node) {
	    if (isValidNode(node)) {
	      verifyAndSetupAndAction(node, action);
	      loopAndVerify(
	        node.querySelectorAll(query),
	        action
	      );
	    }
	  };
	}

	function getTypeIndex(target) {
	  var
	    is = target.getAttribute('is'),
	    nodeName = target.nodeName.toUpperCase(),
	    i = indexOf.call(
	      types,
	      is ?
	          PREFIX_IS + is.toUpperCase() :
	          PREFIX_TAG + nodeName
	    )
	  ;
	  return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
	}

	function isInQSA(name, type) {
	  return -1 < query.indexOf(name + '[is="' + type + '"]');
	}

	function onDOMAttrModified(e) {
	  var
	    node = e.currentTarget,
	    attrChange = e.attrChange,
	    prevValue = e.prevValue,
	    newValue = e.newValue
	  ;
	  if (notFromInnerHTMLHelper &&
	      node.attributeChangedCallback &&
	      e.attrName !== 'style') {
	    node.attributeChangedCallback(
	      e.attrName,
	      attrChange === e[ADDITION] ? null : prevValue,
	      attrChange === e[REMOVAL] ? null : newValue
	    );
	  }
	}

	function onDOMNode(action) {
	  var executor = executeAction(action);
	  return function (e) {
	    asapQueue.push(executor, e.target);
	  };
	}

	function onReadyStateChange(e) {
	  if (dropDomContentLoaded) {
	    dropDomContentLoaded = false;
	    e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	  }
	  loopAndVerify(
	    (e.target || document).querySelectorAll(query),
	    e.detail === DETACHED ? DETACHED : ATTACHED
	  );
	  if (IE8) purge();
	}

	function patchedSetAttribute(name, value) {
	  // jshint validthis:true
	  var self = this;
	  setAttribute.call(self, name, value);
	  onSubtreeModified.call(self, {target: self});
	}

	function setupNode(node, proto) {
	  setPrototype(node, proto);
	  if (observer) {
	    observer.observe(node, attributesObserver);
	  } else {
	    if (doesNotSupportDOMAttrModified) {
	      node.setAttribute = patchedSetAttribute;
	      node[EXPANDO_UID] = getAttributesMirror(node);
	      node.addEventListener(DOM_SUBTREE_MODIFIED, onSubtreeModified);
	    }
	    node.addEventListener(DOM_ATTR_MODIFIED, onDOMAttrModified);
	  }
	  if (node.createdCallback && notFromInnerHTMLHelper) {
	    node.created = true;
	    node.createdCallback();
	    node.created = false;
	  }
	}

	function purge() {
	  for (var
	    node,
	    i = 0,
	    length = targets.length;
	    i < length; i++
	  ) {
	    node = targets[i];
	    if (!documentElement.contains(node)) {
	      targets.splice(i, 1);
	      verifyAndSetupAndAction(node, DETACHED);
	    }
	  }
	}

	function verifyAndSetupAndAction(node, action) {
	  var
	    fn,
	    i = getTypeIndex(node)
	  ;
	  if (-1 < i) {
	    patchIfNotAlready(node, protos[i]);
	    i = 0;
	    if (action === ATTACHED && !node[ATTACHED]) {
	      node[DETACHED] = false;
	      node[ATTACHED] = true;
	      i = 1;
	      if (IE8 && indexOf.call(targets, node) < 0) {
	        targets.push(node);
	      }
	    } else if (action === DETACHED && !node[DETACHED]) {
	      node[ATTACHED] = false;
	      node[DETACHED] = true;
	      i = 1;
	    }
	    if (i && (fn = node[action + 'Callback'])) fn.call(node);
	  }
	}

	// set as enumerable, writable and configurable
	document[REGISTER_ELEMENT] = function registerElement(type, options) {
	  upperType = type.toUpperCase();
	  if (!setListener) {
	    // only first time document.registerElement is used
	    // we need to set this listener
	    // setting it by default might slow down for no reason
	    setListener = true;
	    if (MutationObserver) {
	      observer = (function(attached, detached){
	        function checkEmAll(list, callback) {
	          for (var i = 0, length = list.length; i < length; callback(list[i++])){}
	        }
	        return new MutationObserver(function (records) {
	          for (var
	            current, node,
	            i = 0, length = records.length; i < length; i++
	          ) {
	            current = records[i];
	            if (current.type === 'childList') {
	              checkEmAll(current.addedNodes, attached);
	              checkEmAll(current.removedNodes, detached);
	            } else {
	              node = current.target;
	              if (notFromInnerHTMLHelper &&
	                  node.attributeChangedCallback &&
	                  current.attributeName !== 'style') {
	                node.attributeChangedCallback(
	                  current.attributeName,
	                  current.oldValue,
	                  node.getAttribute(current.attributeName)
	                );
	              }
	            }
	          }
	        });
	      }(executeAction(ATTACHED), executeAction(DETACHED)));
	      observer.observe(
	        document,
	        {
	          childList: true,
	          subtree: true
	        }
	      );
	    } else {
	      asapQueue = [];
	      rAF(function ASAP() {
	        while (asapQueue.length) {
	          asapQueue.shift().call(
	            null, asapQueue.shift()
	          );
	        }
	        rAF(ASAP);
	      });
	      document.addEventListener('DOMNodeInserted', onDOMNode(ATTACHED));
	      document.addEventListener('DOMNodeRemoved', onDOMNode(DETACHED));
	    }

	    document.addEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	    document.addEventListener('readystatechange', onReadyStateChange);

	    document.createElement = function (localName, typeExtension) {
	      var
	        node = createElement.apply(document, arguments),
	        name = '' + localName,
	        i = indexOf.call(
	          types,
	          (typeExtension ? PREFIX_IS : PREFIX_TAG) +
	          (typeExtension || name).toUpperCase()
	        ),
	        setup = -1 < i
	      ;
	      if (typeExtension) {
	        node.setAttribute('is', typeExtension = typeExtension.toLowerCase());
	        if (setup) {
	          setup = isInQSA(name.toUpperCase(), typeExtension);
	        }
	      }
	      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
	      if (setup) patch(node, protos[i]);
	      return node;
	    };

	    HTMLElementPrototype.cloneNode = function (deep) {
	      var
	        node = cloneNode.call(this, !!deep),
	        i = getTypeIndex(node)
	      ;
	      if (-1 < i) patch(node, protos[i]);
	      if (deep) loopAndSetup(node.querySelectorAll(query));
	      return node;
	    };
	  }

	  if (-2 < (
	    indexOf.call(types, PREFIX_IS + upperType) +
	    indexOf.call(types, PREFIX_TAG + upperType)
	  )) {
	    throw new Error('A ' + type + ' type is already registered');
	  }

	  if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
	    throw new Error('The type ' + type + ' is invalid');
	  }

	  var
	    constructor = function () {
	      return extending ?
	        document.createElement(nodeName, upperType) :
	        document.createElement(nodeName);
	    },
	    opt = options || OP,
	    extending = hOP.call(opt, EXTENDS),
	    nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
	    i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1,
	    upperType
	  ;

	  query = query.concat(
	    query.length ? ',' : '',
	    extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
	  );

	  constructor.prototype = (
	    protos[i] = hOP.call(opt, 'prototype') ?
	      opt.prototype :
	      create(HTMLElementPrototype)
	  );

	  loopAndVerify(
	    document.querySelectorAll(query),
	    ATTACHED
	  );

	  return constructor;
	};

	}(window, document, Object, 'registerElement'));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// jshint newcap: false
	/* global require, module, document, Element */
	'use strict';

	var VNode = __webpack_require__(4);
	var is = __webpack_require__(5);

	function isUndef(s) { return s === undefined; }
	function isDef(s) { return s !== undefined; }

	function emptyNodeAt(elm) {
	  return VNode(elm.tagName, {}, [], undefined, elm);
	}

	var emptyNode = VNode('', {}, [], undefined, undefined);

	var insertedVnodeQueue;

	function sameVnode(vnode1, vnode2) {
	  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
	}

	function createKeyToOldIdx(children, beginIdx, endIdx) {
	  var i, map = {}, key;
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) map[key] = i;
	  }
	  return map;
	}

	function createRmCb(childElm, listeners) {
	  return function() {
	    if (--listeners === 0) childElm.parentElement.removeChild(childElm);
	  };
	}

	var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

	function init(modules) {
	  var i, j, cbs = {};
	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
	    }
	  }

	  function createElm(vnode) {
	    var i, data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
	      if (isDef(i = data.vnode)) vnode = i;
	    }
	    var elm, children = vnode.children, sel = vnode.sel;
	    if (isDef(sel)) {
	      // Parse selector
	      var hashIdx = sel.indexOf('#');
	      var dotIdx = sel.indexOf('.', hashIdx);
	      var hash = hashIdx > 0 ? hashIdx : sel.length;
	      var dot = dotIdx > 0 ? dotIdx : sel.length;
	      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
	      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? document.createElementNS(i, tag)
	                                                          : document.createElement(tag);
	      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
	      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
	      if (is.array(children)) {
	        for (i = 0; i < children.length; ++i) {
	          elm.appendChild(createElm(children[i]));
	        }
	      } else if (is.primitive(vnode.text)) {
	        elm.appendChild(document.createTextNode(vnode.text));
	      }
	      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
	      i = vnode.data.hook; // Reuse variable
	      if (isDef(i)) {
	        if (i.create) i.create(emptyNode, vnode);
	        if (i.insert) insertedVnodeQueue.push(vnode);
	      }
	    } else {
	      elm = vnode.elm = document.createTextNode(vnode.text);
	    }
	    return vnode.elm;
	  }

	  function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      parentElm.insertBefore(createElm(vnodes[startIdx]), before);
	    }
	  }

	  function invokeDestroyHook(vnode) {
	    var i = vnode.data, j;
	    if (isDef(i)) {
	      if (isDef(i = i.hook) && isDef(i = i.destroy)) i(vnode);
	      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
	      if (isDef(i = vnode.children)) {
	        for (j = 0; j < vnode.children.length; ++j) {
	          invokeDestroyHook(vnode.children[j]);
	        }
	      }
	    }
	  }

	  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var i, listeners, rm, ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.sel)) {
	          invokeDestroyHook(ch);
	          listeners = cbs.remove.length + 1;
	          rm = createRmCb(ch.elm, listeners);
	          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
	          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
	            i(ch, rm);
	          } else {
	            rm();
	          }
	        } else { // Text node
	          parentElm.removeChild(ch.elm);
	        }
	      }
	    }
	  }

	  function updateChildren(parentElm, oldCh, newCh) {
	    var oldStartIdx = 0, newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode);
	        parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode);
	        parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	        idxInOld = oldKeyToIdx[newStartVnode.key];
	        if (isUndef(idxInOld)) { // New element
	          parentElm.insertBefore(createElm(newStartVnode), oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          patchVnode(elmToMove, newStartVnode);
	          oldCh[idxInOld] = undefined;
	          parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode(oldVnode, vnode) {
	    var i, hook;
	    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    if (isDef(i = oldVnode.data) && isDef(i = i.vnode)) oldVnode = i;
	    if (isDef(i = vnode.data) && isDef(i = i.vnode)) vnode = i;
	    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
	    if (oldVnode === vnode) return;
	    if (isDef(vnode.data)) {
	      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
	      i = vnode.data.hook;
	      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) updateChildren(elm, oldCh, ch);
	      } else if (isDef(ch)) {
	        addVnodes(elm, null, ch, 0, ch.length - 1);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      elm.textContent = vnode.text;
	    }
	    if (isDef(hook) && isDef(i = hook.postpatch)) {
	      i(oldVnode, vnode);
	    }
	    return vnode;
	  }

	  return function(oldVnode, vnode) {
	    console.group("patch!");
	    var i;
	    insertedVnodeQueue = [];
	    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
	    if (oldVnode instanceof Element) {
	      if (oldVnode.parentElement !== null) {
	        createElm(vnode);
	        oldVnode.parentElement.replaceChild(vnode.elm, oldVnode);
	      } else {
	        oldVnode = emptyNodeAt(oldVnode);
	        patchVnode(oldVnode, vnode);
	      }
	    } else {
	      patchVnode(oldVnode, vnode);
	    }
	    for (i = 0; insertedVnodeQueue && i < insertedVnodeQueue.length; ++i) {
	      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
	    }
	    insertedVnodeQueue = [];
	    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
	    console.groupEnd();
	    return vnode;
	  };
	}

	module.exports = {init: init};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(sel, data, children, text, elm) {
	  var key = data === undefined ? undefined : data.key;
	  return {sel: sel, data: data, children: children,
	          text: text, elm: elm, key: key};
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  array: Array.isArray,
	  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	function updateClass(oldVnode, vnode) {
	  var cur, name, elm = vnode.elm,
	      oldClass = oldVnode.data.class || {},
	      klass = vnode.data.class || {};
	  for (name in klass) {
	    cur = klass[name];
	    if (cur !== oldClass[name]) {
	      elm.classList[cur ? 'add' : 'remove'](name);
	    }
	  }
	}

	module.exports = {create: updateClass, update: updateClass};


/***/ },
/* 7 */
/***/ function(module, exports) {

	var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", 
	                "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable", 
	                "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", 
	                "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", 
	                "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate", 
	                "truespeed", "typemustmatch", "visible"];
	    
	var booleanAttrsDict = {};
	for(var i=0, len = booleanAttrs.length; i < len; i++) {
	  booleanAttrsDict[booleanAttrs[i]] = true;
	}
	    
	function updateAttrs(oldVnode, vnode) {
	  var key, cur, old, elm = vnode.elm,
	      oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
	  
	  // update modified attributes, add new attributes
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      // TODO: add support to namespaced attributes (setAttributeNS)
	      if(!cur && booleanAttrsDict[key])
	        elm.removeAttribute(key);
	      else
	        elm.setAttribute(key, cur);
	    }
	  }
	  //remove removed attributes
	  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
	  // the other option is to remove all attributes with value == undefined
	  for (key in oldAttrs) {
	    if (!(key in attrs)) {
	      elm.removeAttribute(key);
	    }
	  }
	}

	module.exports = {create: updateAttrs, update: updateAttrs};


/***/ },
/* 8 */
/***/ function(module, exports) {

	function updateProps(oldVnode, vnode) {
	  var key, cur, old, elm = vnode.elm,
	      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
	  for (key in props) {
	    cur = props[key];
	    old = oldProps[key];
	    if (old !== cur) {
	      elm[key] = cur;
	    }
	  }
	}

	module.exports = {create: updateProps, update: updateProps};


/***/ },
/* 9 */
/***/ function(module, exports) {

	var raf = requestAnimationFrame || setTimeout;
	var nextFrame = function(fn) { raf(function() { raf(fn); }); };

	function setNextFrame(obj, prop, val) {
	  nextFrame(function() { obj[prop] = val; });
	}

	function updateStyle(oldVnode, vnode) {
	  var cur, name, elm = vnode.elm,
	      oldStyle = oldVnode.data.style || {},
	      style = vnode.data.style || {},
	      oldHasDel = 'delayed' in oldStyle;
	  for (name in style) {
	    cur = style[name];
	    if (name === 'delayed') {
	      for (name in style.delayed) {
	        cur = style.delayed[name];
	        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
	          setNextFrame(elm.style, name, cur);
	        }
	      }
	    } else if (name !== 'remove' && cur !== oldStyle[name]) {
	      elm.style[name] = cur;
	    }
	  }
	}

	function applyDestroyStyle(vnode) {
	  var style, name, elm = vnode.elm, s = vnode.data.style;
	  if (!s || !(style = s.destroy)) return;
	  for (name in style) {
	    elm.style[name] = style[name];
	  }
	}

	function applyRemoveStyle(vnode, rm) {
	  var s = vnode.data.style;
	  if (!s || !s.remove) {
	    rm();
	    return;
	  }
	  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
	      compStyle, style = s.remove, amount = 0, applied = [];
	  for (name in style) {
	    applied.push(name);
	    elm.style[name] = style[name];
	  }
	  compStyle = getComputedStyle(elm);
	  var props = compStyle['transition-property'].split(', ');
	  for (; i < props.length; ++i) {
	    if(applied.indexOf(props[i]) !== -1) amount++;
	  }
	  elm.addEventListener('transitionend', function(ev) {
	    if (ev.target === elm) --amount;
	    if (amount === 0) rm();
	  });
	}

	module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(5);

	function arrInvoker(arr) {
	  return function() {
	    // Special case when length is two, for performance
	    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
	  };
	}

	function fnInvoker(o) {
	  return function(ev) { o.fn(ev); };
	}

	function updateEventListeners(oldVnode, vnode) {
	  var name, cur, old, elm = vnode.elm,
	      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
	  if (!on) return;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (old === undefined) {
	      if (is.array(cur)) {
	        elm.addEventListener(name, arrInvoker(cur));
	      } else {
	        cur = {fn: cur};
	        on[name] = cur;
	        elm.addEventListener(name, fnInvoker(cur));
	      }
	    } else if (is.array(old)) {
	      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
	      old.length = cur.length;
	      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
	      on[name]  = old;
	    } else {
	      old.fn = cur;
	      on[name] = old;
	    }
	  }
	}

	module.exports = {create: updateEventListeners, update: updateEventListeners};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var VNode = __webpack_require__(4);
	var is = __webpack_require__(5);

	module.exports = function h(sel, b, c) {
	  var data = {}, children, text, i;
	  if (arguments.length === 3) {
	    data = b;
	    if (is.array(c)) { children = c; }
	    else if (is.primitive(c)) { text = c; }
	  } else if (arguments.length === 2) {
	    if (is.array(b)) { children = b; }
	    else if (is.primitive(b)) { text = b; }
	    else { data = b; }
	  }
	  if (is.array(children)) {
	    for (i = 0; i < children.length; ++i) {
	      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
	    }
	  }
	  return VNode(sel, data, children, text, undefined);
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	function setVnodeState(oldVnode, vnode) {
	  if (vnode.data.state) {
	    vnode.elm.setState(vnode.data.state);
	  }
	};

	module.exports = {
	  create: setVnodeState,
	  update: setVnodeState
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

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

	module.exports = {
	  create: createCustomElement
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	function createElms(emptyVnode, vnode) {
	  if (vnode.data.elms) {
	    vnode.data.elms.forEach(function (el) {
	      vnode.elm.appendChild(el);
	    });
	  }
	};

	module.exports = {
	  create: createElms
	};

/***/ }
/******/ ]);