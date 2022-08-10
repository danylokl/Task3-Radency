export class Review {
  public reviewer: string;
  public score: number;
  public message: string;
  constructor(reviewer: string, score: number, message: string) {
    this.reviewer = reviewer;
    this.score = score;
    this.message = message;
  }
}
