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
