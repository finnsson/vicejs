# vice.js

Virtual DOM for Custom Elements.

    import vice from "vicejs";

    class Dog extends HTMLElement {
      bark() {
        alert("bark!");
      }

      render() {
        return <div on-click={this.bark}>{this.getAttribute("name")}</div>;
      }
    }

    var DogTag = vice(Dog, "x-dog");

    var dom = <x-dog name="Doggy"></x-dog>;

    patch(document.getElementById("test"), dom);


## Table of contents

- [Introduction](#introduction)
- [API](#api)
- [Examples](#examples)
- [Modules](#modules)
- [Releases](#releases)

## Introduction

Vice.js is a small component API that glues together [snabbdom](https://github.com/paldepind/snabbdom)
and [custom elements](https://github.com/WebReflection/document-register-element).

It can be used together with [babel-snabbdom-jsx](https://github.com/finnsson/babel-snabbdom-jsx).

## API

### `render()`

Return a snabbdom vnode.

### `update()`

## Examples

## Modules

Some helpful modules that can be included are

- vice/modules/state
- vice/modules/customElement
- vice/modules/elms

## TODO

* write unit tests
* add mixin-ability. Mixins should be able to listen on events automatically,
  not just add methods.
* ref-snabbdom-module. Set as named reference.
  snabbdom-module or JSX? How is React solving it?
* aref-snabbdom-module. Set as reference in array in first "named" parent.
  snabbdom-module or JSX?
* render should be able to return an array.
* create helpers for childElms
* create helper to convert Node into h(,,).
* create self- event binder that automatically bind events to this
* Get vice working with TypeScript for better code completion in Atom.
  Rename test.jsx to test.tsx and produce test.jsx as artifact from TypeScript.
* Custom elements and default values on attributes / properties / etc?
* will snabbdom hooks work for components? Extra implementation needed in vice-components in order to propagate insert-hooks etc?

## Releases
