import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '../books-page/book.model';
import { BookService } from '../books-page/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [],
})
export class EditBookComponent implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  onSubmit(
    title: string,
    cover: string,
    genre: string,
    author: string,
    content: string
  ) {
    const book = new Book(title, '', genre, author, content, []);
    this.bookService.addBook(book).subscribe((book) => {
      book;
    });
  }
}
