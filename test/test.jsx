import {vice} from '../index';

import reg from 'document-register-element/build/document-register-element.max';

import snabbdom from 'snabbdom';

import snabbdomClass from 'snabbdom/modules/class';
import snabbdomAttributes from 'snabbdom/modules/attributes';
import snabbdomProps from 'snabbdom/modules/props';
import snabbdomStyle from 'snabbdom/modules/style';
import snabbdomEvent from 'snabbdom/modules/eventlisteners';
import snabbdomState from '../modules/state';
import snabbdomCustomElement from '../modules/customElement';
import snabbdomElms from '../modules/elms';

import fm from "flyd-mirror";

import chai from "chai";
// import mocha from "mocha";

var assert = chai.assert;

// babel-snabbdom-jsx demands a "h"
var h = require('snabbdom/h');

// shim for Safari where typeof HTMLElement is "object"
if (typeof HTMLElement !== 'function') {
  var _HTMLElement = function() {};
  _HTMLElement.prototype = HTMLElement.prototype;
  HTMLElement = _HTMLElement;
}

// create body element in html element
var bodyElm = document.createElement("body");
document.children[0].appendChild(bodyElm);

// create div placeholder in body element
var vicejsDom = document.createElement("div");
bodyElm.appendChild(vicejsDom);

describe('vicejs', () => {

  var patch;

  beforeEach(() => {
    patch = snabbdom.init([
      snabbdomClass,
      snabbdomAttributes,
      snabbdomProps,
      snabbdomStyle,
      snabbdomEvent,
      snabbdomState,
      snabbdomElms
    ]);
    vicejsDom.innerHTML = '';
  });

  afterEach(() => {
    vicejsDom.innerHTML = '';
  })

  it('creates a custom element', () => {
    assert.equal(5, 5);
    var isCreated = false;
    class FooBar {
      createdCallback() {
        isCreated = true;
      }
    }
    vice(FooBar, patch, "foo-bar");
    vicejsDom.innerHTML = "<foo-bar></foo-bar>";

    assert.equal(isCreated, true);
  });

  it('renders a template', () => {
    class FooBar2 extends HTMLElement {
      render() {
        return <ul>
          <li>1</li>
        </ul>;
      }

      createdCallback() {
        this.update();
      }
    }
    vice(FooBar2, patch, "foo-bar2");
    vicejsDom.innerHTML = "<foo-bar2 instant=''></foo-bar2>";

    assert.equal(vicejsDom.innerHTML, "<foo-bar2 instant=\"\"><ul><li>1</li></ul></foo-bar2>");
  });

  it('renders a template in a sub custom element', () => {
    // initial state
    var state = {
      items: ["Yay", "Nay"]
    };
    // TODO: create element
    class FooBar3 extends HTMLElement {
      render() {
        return <foo-bar4 state_={state}></foo-bar4>;
      }
    }
    vice(FooBar3, patch, "foo-bar3");
    // TODO: create element with render depending on state
    class FooBar4 extends HTMLElement {
      render(state) {
        return <ul>
          {this.state.items.map(i => <li>{i}</li>)}
        </ul>;
      }
    }
    vice(FooBar4, patch, "foo-bar4");
    vicejsDom.innerHTML = "<foo-bar3 instant=''></foo-bar3>";

    var foobar3Element = vicejsDom.children[0];
    assert.equal(foobar3Element.nodeName, "FOO-BAR3");

    var foobar4Element = foobar3Element.children[0];
    assert.equal(foobar4Element.nodeName, "FOO-BAR4");

    var ulElm = foobar4Element.children[0];
    assert.equal(ulElm.nodeName, "UL");

    var liElms = ulElm.children;
    assert.equal(liElms.length, 2);

    var yayElm = liElms[1];
    assert.equal(yayElm.textContent, "Nay");
  });

  it('updates the rendered template automatically when flyd-streams change', () => {
    // initial state
    var state = {
      items: flyd.stream(["Yay", "Nay"])
    };
    var fooBar5RenderCount = 0;
    var fooBar6RenderCount = 0;
    class FooBar5 extends HTMLElement {
      render(state) {
        fooBar5RenderCount++;
        return <foo-bar6 state_={state}></foo-bar6>;
      }

      createdCallback() {
        this.streamState(state);
      }
    }
    vice(FooBar5, patch, "foo-bar5");

    class FooBar6 extends HTMLElement {
      render(state) {
        fooBar6RenderCount++;
        return <ul>
          <li>{state.items()[0]}</li>
          <li>{state.items()[1]}</li>
        </ul>;
      }
    }
    vice(FooBar6, patch, "foo-bar6");

    vicejsDom.innerHTML = "<foo-bar5 instant=''></foo-bar5>";

    var foobar3Element = vicejsDom.children[0];
    assert.equal(foobar3Element.nodeName, "FOO-BAR5");

    var foobar4Element = foobar3Element.children[0];
    assert.equal(foobar4Element.nodeName, "FOO-BAR6");

    var ulElm = foobar4Element.children[0];
    assert.equal(ulElm.nodeName, "UL");

    var liElms = ulElm.children;
    assert.equal(liElms.length, 2);

    var yayElm = liElms[1];
    assert.equal(yayElm.textContent, "Nay");
    assert.equal(fooBar5RenderCount, 1, "foo-bar5 should be rendered one time initially");
    assert.equal(fooBar6RenderCount, 1, "foo-bar6 should be rendered one time initially");

    state.items(["Ja", "Nej"]);

    var newLiElms = ulElm.children;
    assert.equal(newLiElms.length, 2);

    assert.equal(newLiElms[0].textContent, "Ja");
    assert.equal(newLiElms[1].textContent, "Nej");

    assert.equal(fooBar5RenderCount, 1, "foo-bar5 should be rendered one time");
    assert.equal(fooBar6RenderCount, 2, "foo-bar6 should be rendered two times");
  });

});
