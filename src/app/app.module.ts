import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListItemComponent } from './books-page/book-list/book-list-item/book-list-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BookListComponent } from './books-page/book-list/book-list.component';
import { BookService } from './books-page/book.service';
import { BooksPageComponent } from './books-page/books-page.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    AppComponent,
    EditBookComponent,
    ViewBookComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatDialogModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
