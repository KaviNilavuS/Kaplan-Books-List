import { AppService } from './../shared/app.service';
import { DASHBOARD, apiUrl } from './../shared/properties';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-book-list-dashboard',
  templateUrl: './book-list-dashboard.component.html',
  styleUrls: ['./book-list-dashboard.component.css']
})
export class BookListDashboardComponent implements OnInit {
  @ViewChild('searchValue', { read: ElementRef }) searchVal: ElementRef;
  public dashboardEnum = DASHBOARD;
  public bookList = [];
  public display = [];
  private url = apiUrl.getBookListUrl;
  public filteredBookArr = [];
  public tempArr;
  public showHide = false;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.appService.getBooksList(this.url)
      .subscribe(
        (data: any) => {
          this.bookList = data;
          this.display = data.items;
        },
        errorCode => { }
      );
  }

  searchBook(searchText) {
   this.showHide = true;
    const formVal = this.searchVal.nativeElement.value;
    this.filteredBookArr = this.bookList['items'];
    if (searchText !== '' || searchText.length > 0) {
      const tempArr = [];
      this.filteredBookArr.forEach(book => {
        if (book['volumeInfo']['title'] !== '') {
          const regExp = new RegExp(searchText, 'g');
          const title = book['volumeInfo']['title'].toLowerCase();
          if (title.match((regExp))) {
            tempArr.push(book);
          }
        }
      });
      this.display = tempArr;
    }
  }

  resetSearch() {
    this.searchVal.nativeElement.value = '';
    this.showHide = false;
    this.ngOnInit();
  }

  createNewBook() {
    alert('Hey!!!!');
  }
}
