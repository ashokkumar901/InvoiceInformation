import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidationDefinitionComponent } from './consolidation-definition.component';

describe('ConsolidationDefinitionComponent', () => {
  let component: ConsolidationDefinitionComponent;
  let fixture: ComponentFixture<ConsolidationDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidationDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidationDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
