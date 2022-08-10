import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, ReplaySubject, Subscriber } from 'rxjs';
import { Book } from '../books-page/book.model';
import { BookService } from '../books-page/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [],
})
export class EditBookComponent implements OnInit {
  constructor(protected bookService: BookService) {}

  ngOnInit(): void {}
  onSubmit(
    title: string,
    cover: string,
    genre: string,
    author: string,
    content: string
  ) {
    const book = new Book(title, cover, genre, author, content, []);
    this.bookService.addBook(book).subscribe((book) => {
      book;
    });
  }
  onUpdate(
    title: string,
    cover: string,
    genre: string,
    author: string,
    content: string
  ) {
    this.bookService.updateBook(title, cover, genre, author, content);
  }
}
