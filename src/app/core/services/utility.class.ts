class Utility {
  private _producer: string = '';

  static medium: string = 'Audio/Visual';

  get producer(): string {
    return this._producer.toUpperCase();
  }

  set producer(newProducer: string) {
    this._producer = newProducer;
  }

  constructor(public title: string, private year: number) {
    console.log('Creating a new instance of utility class...');
  }

  printItem(): void {
    console.log(`${this.title} ${this.year}`);
    console.log(`Medium: ${Utility.medium}`);
  }
}

abstract class AbstractClass {
  abstract printCredits(): void;
}

class ReferenceItem implements AbstractClass {
  title!: string;
  protected author!: string;
  private publisher!: string;

  printItem(): void {
    console.log(this.publisher);
  }

  printCredits(): void {
    console.log(`Author: ${this.author}`);
    console.log(`Publisher: ${this.publisher}`);
  }
}

class Journal extends ReferenceItem {
  contributors!: string[];

  constructor() {
    super();
  }

  printDetails() {
    console.log(this.title);
    console.log(this.author);
    //console.log(this.publisher);
  }
}
