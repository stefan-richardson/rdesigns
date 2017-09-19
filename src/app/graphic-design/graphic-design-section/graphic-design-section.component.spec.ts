import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignSectionComponent } from './graphic-design-section.component';

describe('GraphicDesignSectionComponent', () => {
  let component: GraphicDesignSectionComponent;
  let fixture: ComponentFixture<GraphicDesignSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDesignSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
