import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsComponent } from './concepts.component';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule],
      declarations: [ConceptsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
