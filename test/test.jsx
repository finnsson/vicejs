import vice from '../index';

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

import h from 'snabbdom/h';

var patch = snabbdom.init([snabbdomClass, snabbdomAttributes, snabbdomProps, snabbdomStyle, snabbdomEvent, snabbdomState, snabbdomCustomElement, snabbdomElms]);

// shim for Safari where typeof HTMLElement is "object"
if (typeof HTMLElement !== 'function') {
  var _HTMLElement = function() {};
  _HTMLElement.prototype = HTMLElement.prototype;
  HTMLElement = _HTMLElement;
}

class FooBar extends HTMLElement {
  changeName() {
    this.setState({
      name: "Pelle"
    });
  }

  render() {
    return <div class="foo-bar" on-click={this.changeName.bind(this)}>
        <span>{this.state.name}</span>
        <div class="children" elms_={this.innerChildNodes || []} style="font-size: 14px;"></div>
      </div>;
  }

  createdCallback() {
    this.state = this.state || {
      name: "Arne"
    };
    this.update();
  }
}

var FooBarTag = vice(FooBar, patch, "foo-bar");

class Dog extends HTMLElement {
  bark() {
    alert("bark!");
  }

  render() {
    return <div on-click={this.bark}>{this.getAttribute("name")}</div>;
  }
}

var Dogtag = vice(Dog, patch, "x-dog");

document.addEventListener("DOMContentLoaded", function(event) {

  var state = {
    name: "Some name from inline JSON"
  };

  var testFooBar2 = <FooBarTag class="test" state_={state} style="font-size: 22px;">
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </FooBarTag>;

  var testEl = document.getElementById("test");

  var dog = <x-dog name="Doggy"></x-dog>;

  patch(testEl, dog);

});
