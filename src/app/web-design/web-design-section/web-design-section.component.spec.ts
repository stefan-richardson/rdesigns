import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignSectionComponent } from './web-design-section.component';

describe('WebDesignSectionComponent', () => {
  let component: WebDesignSectionComponent;
  let fixture: ComponentFixture<WebDesignSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
