interface Document {
  registerElement(tagName: string, obj: any): void;
}

interface HTMLElement {
  createdCallback();
  attributeChangedCallback(attributeName: string, oldValue, newValue);
}
