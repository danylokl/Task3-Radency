import { Review } from './review.model';
import { DomSanitizer } from '@angular/platform-browser';
export class Book {
  private _sanitazer!: DomSanitizer;
  public title: string;
  private _cover: string = '';
  get cover(): string {
    return this._cover;
  }
  set cover(cover: string) {
    this._cover = cover;
  }
  public genre: string;
  public author: string;
  public content: string;
  public reviews: Review[];

  constructor(
    title: string,
    cover: string,
    genre: string,
    author: string,
    content: string,
    reviews: Review[]
  ) {
    this.title = title;
    this.cover = cover;
    this.genre = genre;
    this.author = author;
    this.content = content;
    this.reviews = reviews;
  }
  getImageSrc() {
    var path = this._sanitazer.bypassSecurityTrustResourceUrl(
      'data:image/jpg;base64,' + this._cover
    );
    return path;
  }
  getAvgBookScore() {
    var sum = 0;
    var temp = this.reviews.forEach((item) => (sum += item.score));
    return sum / this.reviews.length;
  }
}
