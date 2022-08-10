import { Component, Input, OnInit } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { BookService } from 'src/app/books-page/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [],
})
export class BookListComponent implements OnInit {
  books!: Book[];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getBooks().subscribe((book) => (this.books = book));
  }
}
