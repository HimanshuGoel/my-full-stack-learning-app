export class Todo {
  public readonly id: string;

  constructor(
    public title: string,
    public completed: boolean
  ) {
    this.id = crypto.randomUUID();
  }

  public updateCompleted(status: boolean) {
    this.completed = status;
  }
}
