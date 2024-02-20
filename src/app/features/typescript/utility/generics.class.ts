function LogAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
}

let someString: string = LogAndReturn<string>('log this');
let someNumber: number = LogAndReturn<number>(1);

console.log(someString);
console.log(someNumber);

export function Purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(3, inventory.length);
}

let purgedNumbers = Purge<number>([1, 2, 3, 4, 5]);
console.log(purgedNumbers);

export interface Inventory<T> {
  getNewestItem?: () => T;
  addItem: (newItem: T) => void;
  getAllItems?: () => Array<T>;
}

interface CatalogItem {
  catalogNumber: number;
}

export class Catalog<T extends CatalogItem> implements Inventory<T> {
  private catalogItems = new Array<T>();

  addItem(newItem: T) {
    this.catalogItems.push(newItem);
  }
}
