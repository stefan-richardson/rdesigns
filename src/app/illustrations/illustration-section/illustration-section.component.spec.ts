import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationSectionComponent } from './illustration-section.component';

describe('IllustrationSectionComponent', () => {
  let component: IllustrationSectionComponent;
  let fixture: ComponentFixture<IllustrationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
