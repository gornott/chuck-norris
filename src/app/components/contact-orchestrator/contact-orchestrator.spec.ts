import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOrchestrator } from './contact-orchestrator';

describe('ContactOrchestrator', () => {
  let component: ContactOrchestrator;
  let fixture: ComponentFixture<ContactOrchestrator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOrchestrator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOrchestrator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
