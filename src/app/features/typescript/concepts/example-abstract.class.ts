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

    // Can't access below line due to private modifier
    // console.log(this.publisher);
  }
}
