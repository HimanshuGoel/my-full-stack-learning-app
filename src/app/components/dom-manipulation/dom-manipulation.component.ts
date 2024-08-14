import { Component, OnInit } from '@angular/core';
import { ShopsComponent } from './shopsComponent';
import { CoffeesComponent } from './coffeesComponent';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrl: './dom-manipulation.component.scss',
})
export class DomManipulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const div = document.createElement('div');
    console.log(div);

    // dynamic DOM manipulation
    const p = document.createElement('p');
    p.textContent = 'Hello, World!';
    div.append(p);
    div.prepend(p);

    // custom walkNode vs. inbuilt treeWalker
    this.walkNode(document);
    this.createTreeWalker();

    // return type of dynamic query
    const element = document.querySelector<HTMLDivElement>('#app');
    console.log(element);

    // childNodes vs. children
    const div2 = document.querySelector('div');
    console.log(div2?.childNodes);
    console.log(div2?.children);

    // using modern method to select multiple elements
    this.selectingElements();

    // adding event listeners
    this.addOrRemoveItems();

    // manipulating elements using innerText, textContent, innerHTML, etc.
    this.manipulatingElements();

    // building a reusable component
    this.buildCustomComponents();

    // working with styles
    this.workingWithStyles();

    // dark theme switcher with classList.toggle method
    this.darkThemeSwitcher();
  }

  private addOrRemoveItems() {
    const itemInput = document.querySelector<HTMLInputElement>('#itemInput');
    const addButton = document.querySelector('#addButton');
    const list = document.querySelector('#list');

    itemInput?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.addItem(list as HTMLElement, itemInput);
      }
    });

    addButton?.addEventListener('click', this.addItem.bind(this, list as HTMLElement, itemInput));
  }

  private addItem(list: HTMLElement | null, itemInput: HTMLInputElement | null) {
    const listItem = document.createElement('li');
    const textNode = document.createTextNode(itemInput!.value);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.style.margin = '2px 5px';
    removeButton.addEventListener('click', this.removeItem);

    listItem.append(textNode);
    listItem.append(removeButton);

    list?.prepend(listItem);

    if (itemInput) {
      itemInput.value = '';
    }
    itemInput?.focus();
  }

  private removeItem(e: Event) {
    const removeButton = e.target as HTMLButtonElement;
    const listItem = removeButton.parentElement;
    listItem?.remove();
  }

  private walkNode(node: Node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      console.log(node.nodeName);
    }

    if (node.hasChildNodes()) {
      node.childNodes.forEach((childNode) => {
        this.walkNode(childNode);
      });
    }
  }

  private createTreeWalker() {
    const treeWalker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);

    let node = treeWalker.nextNode();
    if (node instanceof HTMLParagraphElement) {
      node.style.backgroundColor = '#CCC';
    }

    while (node) {
      console.log(node.nodeName);
      node = treeWalker.nextNode();
    }
  }

  private selectingElements() {
    const elements = document.querySelectorAll<HTMLElement>('#list-container .list-item');

    for (const element of elements) {
      element.style.backgroundColor = '#CCC';
    }
  }

  private manipulatingElements() {
    const div = document.querySelector('div');

    console.log(div?.textContent); // will still the element even if hidden
    console.log(div?.innerText);
    console.log(div?.innerHTML);
  }

  private buildCustomComponents() {
    const output = document.querySelector('#output');
    const coffeesButton = document.querySelector('#coffeesButton');
    const shopsButton = document.querySelector('#shopsButton');

    coffeesButton?.addEventListener('click', () => {
      output?.replaceChildren(new CoffeesComponent().render());
    });

    shopsButton?.addEventListener('click', () => {
      output?.replaceChildren(new ShopsComponent().render());
    });
  }

  private workingWithStyles() {
    const button = document.querySelector<HTMLButtonElement>('#button');
    if (button) {
      // not recommended approach
      button.style.fontWeight = 'bold';

      // recommended approach for general attributes
      button.setAttribute('class', 'activeButton');
      button.removeAttribute('class');

      // not recommended approach
      button.className = 'activeButton';
      button.className = '';

      // recommended approach for styles
      button.classList.add('activeButton');
      button.classList.remove('activeButton');
    }
  }

  private darkThemeSwitcher() {
    const themeInput = document.querySelector<HTMLButtonElement>('#themeInput');
    // Generally dark theme should be applied tot he body element
    const body = document.querySelector<HTMLBodyElement>('body');
    // const listContainer = document.querySelector<HTMLBodyElement>('#list-container');
    themeInput?.addEventListener('click', () => {
      body?.classList.toggle('dark-theme');
    });
  }
}
