import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkletsComponent } from './bookmarklets.component';

describe('BookmarkletsComponent', () => {
  let component: BookmarkletsComponent;
  let fixture: ComponentFixture<BookmarkletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
