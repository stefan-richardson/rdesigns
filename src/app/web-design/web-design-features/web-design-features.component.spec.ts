import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignFeaturesComponent } from './web-design-features.component';

describe('WebDesignFeaturesComponent', () => {
  let component: WebDesignFeaturesComponent;
  let fixture: ComponentFixture<WebDesignFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
