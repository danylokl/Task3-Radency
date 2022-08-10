import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewBookComponent } from 'src/app/view-book/view-book.component';
import { Book } from '../../book.model';
import { BookService } from '../../book.service';
@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
  providers: [],
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private bookService: BookService, private dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(ViewBookComponent, { data: this.book });
  }
  bookSelected(book: Book) {
    this.bookService.bookSelected = true;
    this.bookService.bookSelectedItem = book;
  }
}
