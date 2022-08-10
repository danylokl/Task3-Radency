import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Book } from '../books-page/book.model';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  book!: Book;
  constructor(
    public dialogRef: MatDialogRef<ViewBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {
    this.book = data;
  }

  ngOnInit(): void {}
  close() {}
}
