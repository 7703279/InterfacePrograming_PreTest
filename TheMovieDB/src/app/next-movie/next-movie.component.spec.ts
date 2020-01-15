import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMovieComponent } from './next-movie.component';

describe('NextMovieComponent', () => {
  let component: NextMovieComponent;
  let fixture: ComponentFixture<NextMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
