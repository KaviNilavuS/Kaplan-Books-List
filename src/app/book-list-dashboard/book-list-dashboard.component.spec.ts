import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDashboardComponent } from './book-list-dashboard.component';

describe('BookListDashboardComponent', () => {
  let component: BookListDashboardComponent;
  let fixture: ComponentFixture<BookListDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
